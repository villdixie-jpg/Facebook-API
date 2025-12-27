# Linkora 🔗  
**Modern Facebook Social Login Demo**

Linkora is a clean and modern web application that demonstrates secure authentication using **Facebook Login (Meta Graph API)**.  
It focuses on simplicity, privacy awareness, and a polished UI/UX suitable for academic demos, capstone defenses, and portfolio projects.

---

## ✨ Features

- 🔐 Facebook Login via JavaScript SDK  
- 👤 Fetches user profile information:
  - Name
  - Profile picture
  - Email (if available)
  - Birthday (optional)
  - Age range (optional)
- 🎨 Modern card-based UI with soft gradients
- 🚪 Secure logout handling
- 📱 Fully responsive layout
- 🛡 Privacy-aware fallbacks (e.g., missing email)

---

## 🧰 Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- **Facebook JavaScript SDK**
- **Meta Graph API v19.0**
- **ngrok (HTTPS tunneling for local development)**

---

## 🔑 Facebook Permissions Used

| Permission | Purpose |
|---------|--------|
| `public_profile` | Required to retrieve name and profile picture |
| `email` | Retrieves email address if the user allows it |
| `user_birthday` | Optional – displays birthday |
| `user_age_range` | Optional – displays age range |

> ⚠️ Some permissions may not return data due to user privacy settings.

---

## ❓ Why does it show “Email not available”?

This is **expected behavior** and **not a bug**.

Facebook may not return an email if:
- The account has **no email** (phone-number login)
- The user **denies email sharing**
- The app is in **Development Mode**
- The email is **not verified**

The application safely handles this using fallback UI messaging.

---

## 🚀 Getting Started (Local Development)

### 1️⃣ Create a Facebook App
- Go to **Meta for Developers**
- Create a new app
- Enable **Facebook Login → Web**

### 2️⃣ Configure OAuth
Add your HTTPS URL to:
- **Valid OAuth Redirect URIs**
- **Allowed Domains for the JavaScript SDK**

Example:
https://your-ngrok-url.ngrok-free.dev

perl 
Copy code

### 3️⃣ Set Your App ID
In `script.js`, replace:
```js
const APP_ID = "YOUR_APP_ID_HERE";
4️⃣ Run the Project
Open index.html using:

VS Code Live Server

Or any local development server

🔐 HTTPS Requirement (IMPORTANT)
Facebook Login requires HTTPS.

For local development, this project uses ngrok to create a secure tunnel.

Using ngrok
bash
Copy code
ngrok http 5500
Copy the HTTPS URL and update it in your Facebook App settings.

⚠️ ngrok.exe is not included in this repository.
It is a local development tool and should not be committed or bundled with the project.

📦 Running on Another Device (ZIP / Transfer)
If this project is zipped and extracted on another device:

The UI will load normally

Facebook Login will not work immediately

Why?
Facebook OAuth requires HTTPS, and the previous ngrok URL will no longer be valid.

What to do on the new device:
Install ngrok

Run the local server

Generate a new HTTPS URL

Update Facebook App OAuth settings with the new URL

Alternatively, deploy the project online for permanent HTTPS.

🌍 Deployment Recommendation (Best Practice)
For demos, submissions, or multi-device use:

Deploy to Netlify or Vercel

Use the permanent HTTPS URL

No ngrok needed

📄 Disclaimer
This project is for educational and demonstration purposes only.

It follows Facebook Platform Policies and respects user privacy.


