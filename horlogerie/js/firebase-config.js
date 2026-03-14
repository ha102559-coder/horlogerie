// ============================================================
//  FILL IN YOUR FIREBASE CREDENTIALS HERE
// ============================================================
const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

// ============================================================
//  PAYPAL — your PayPal business email or merchant ID
// ============================================================
const PAYPAL_EMAIL = "YOUR_PAYPAL_BUSINESS_EMAIL@example.com";

// ============================================================
//  ADMIN — only this Google account can access /admin
// ============================================================
const ADMIN_EMAIL  = "YOUR_GOOGLE_ACCOUNT@gmail.com";

// ============================================================
//  SITE CONFIG
// ============================================================
const SITE = {
  name:     "HORLOGERIE",
  tagline:  "Fine Mechanical Timepieces",
  currency: "USD",
  baseUrl:  "https://horlogerie.netlify.app"   // change after deploy
};
