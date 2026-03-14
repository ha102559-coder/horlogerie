# HORLOGERIE — Setup Guide

## Files
```
index.html              ← Homepage (product listing)
watches/
  watch-template.html   ← Product detail page (loaded dynamically)
admin/
  index.html            ← Admin dashboard (Google login protected)
  edit.html             ← Add / Edit watch form
css/
  style.css             ← Shared styles
netlify.toml            ← Netlify routing rules
```

---

## Step 1 — Firebase Setup

1. Go to https://console.firebase.google.com
2. Create a new project
3. Enable these services:
   - **Authentication** → Sign-in method → Google ✓
   - **Firestore Database** → Start in production mode
   - **Storage** → Start in production mode

4. Firestore Rules (Firestore → Rules):
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /watches/{id} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.email == "YOUR_ADMIN@gmail.com";
    }
  }
}
```

5. Storage Rules (Storage → Rules):
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.email == "YOUR_ADMIN@gmail.com";
    }
  }
}
```

6. Get your config: Project Settings → Your apps → Web app → firebaseConfig

---

## Step 2 — Fill in your credentials

Search for `YOUR_` in ALL these files and replace:

| File | What to fill |
|------|-------------|
| `index.html` | Firebase config |
| `watches/watch-template.html` | Firebase config + PayPal email |
| `admin/index.html` | Firebase config + admin email |
| `admin/edit.html` | Firebase config + admin email |

---

## Step 3 — Deploy to Netlify

1. Push this folder to a GitHub repo
2. Go to https://app.netlify.com → New site from Git
3. Select your repo → Deploy site
4. Your site will be live at `https://yoursite.netlify.app`
5. Update `SITE.baseUrl` in the config

---

## Step 4 — Add your first watch

1. Go to `https://yoursite.netlify.app/admin`
2. Sign in with your Google account
3. Click **+ Add Watch**
4. Fill in: name, brand, price, shipping, description
5. Upload images (up to 10)
6. Add a YouTube URL or upload a video
7. Click **Save Watch**

The watch will immediately appear on your homepage!

---

## SEO Features included

- `<title>` tag per watch page
- `<meta description>` 
- `og:title`, `og:description`, `og:image` (Open Graph for social sharing)
- `application/ld+json` Schema.org Product markup
- Canonical URLs
- robots `noindex` on admin pages
- Netlify redirect rules for clean URLs

---

## PayPal

The "Pay with PayPal" button sends the buyer to:
`https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=YOUR_EMAIL&item_name=WATCH_NAME&amount=TOTAL`

Price + shipping are added automatically.
After payment, buyer returns to the watch page with a thank-you message.

For more advanced PayPal (order tracking, webhooks), upgrade to PayPal Checkout SDK.
