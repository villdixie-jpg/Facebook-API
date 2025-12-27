/***************************************
 * Facebook App Configuration
 ***************************************/
let fbReady = false;

const APP_ID = "853585660712276"; // your App ID
const PERMISSIONS =
  "public_profile,email,user_birthday,user_age_range";

/***************************************
 * DOM Elements
 ***************************************/
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");

const loginCard = document.getElementById("login-card");
const profileCard = document.getElementById("profile-card");

const nameEl = document.getElementById("user-name");
const emailEl = document.getElementById("user-email");
const birthdayEl = document.getElementById("user-birthday");
const ageEl = document.getElementById("user-age");
const pictureEl = document.getElementById("profile-picture");

/***************************************
 * Facebook SDK Initialization
 ***************************************/
window.fbAsyncInit = function () {
  FB.init({
    appId: APP_ID,
    cookie: true,
    xfbml: false,
    version: "v19.0",
  });

  fbReady = true;

  // Check login state on page load
  FB.getLoginStatus((response) => {
    if (response.status === "connected") {
      fetchUserInfo();
    } else {
      showLoggedOutState();
    }
  });
};

/***************************************
 * Login Handler
 ***************************************/
loginBtn.addEventListener("click", () => {
  if (!fbReady) return;

  FB.login(
    (response) => {
      if (response.authResponse) {
        fetchUserInfo();
      }
    },
    {
      scope: PERMISSIONS,
      auth_type: "reauthenticate", // allows switching accounts
    }
  );
});

/***************************************
 * Logout Handler
 ***************************************/
logoutBtn.addEventListener("click", () => {
  if (!fbReady) return;

  FB.logout(() => {
    showLoggedOutState();
  });
});

/***************************************
 * Fetch User Information
 ***************************************/
function fetchUserInfo() {
  FB.api(
    "/me",
    {
      fields: "name,email,birthday,age_range,picture.type(large)",
    },
    (response) => {
      if (!response || response.error) {
        console.error("Facebook API error:", response?.error);
        return;
      }

      // Required fields
      nameEl.textContent = response.name || "N/A";
      emailEl.textContent = response.email
  ? response.email
  : "No email shared by Facebook";


      // Optional fields (safe fallback)
      birthdayEl.textContent = response.birthday
        ? `🎂 Birthday: ${response.birthday}`
        : "🎂 Birthday: Not shared";

      ageEl.textContent = response.age_range
        ? `🎯 Age Range: ${response.age_range.min}+`
        : "🎯 Age Range: Not shared";

      if (response.picture?.data?.url) {
        pictureEl.src = response.picture.data.url;
      }

      showLoggedInState();
    }
  );
}

/***************************************
 * UI State Helpers
 ***************************************/
function showLoggedInState() {
  loginCard.style.display = "none";
  profileCard.style.display = "block";
  logoutBtn.style.display = "inline-block";
}

function showLoggedOutState() {
  loginCard.style.display = "block";
  profileCard.style.display = "none";
  logoutBtn.style.display = "none";

  nameEl.textContent = "";
  emailEl.textContent = "";
  birthdayEl.textContent = "";
  ageEl.textContent = "";
  pictureEl.src = "";
}
