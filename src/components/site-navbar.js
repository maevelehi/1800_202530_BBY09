// Import specific functions from the Firebase Auth SDK
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "/src/firebaseConfig.js";
import { logoutUser } from "/src/authentication.js";

class SiteNavbar extends HTMLElement {
  constructor() {
    super();
    this.renderNavbar();
    this.setupAuthListener();
  }

  renderNavbar() {
    this.innerHTML = `
  <nav class="navbar bg-body-tertiary bg-info">
    <div class="container-fluid">
      <div class="d-flex align-items-center">
        <button class="navbar-toggler me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="/home.html">
          <img src="/images/transparent-logo.png" height="36">
        </a>
      </div>

      <img
        id="userAvatar"
        src="/images/profilePicture.png"
        alt="User Avatar"
        style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;"
      />

      <div class="offcanvas offcanvas-end w-75" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">FlipIt</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/home.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/profile.html">Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/progress-tracking.html">Progress Tracking</a>
            </li>
          </ul>
        
          <div id="authControls" class="auth-controls d-flex align-items-center gap-2 my-2 my-lg-0">              
            <!-- populated by JS -->
          </div>
        </div>
      </div>
    </div>
  </nav>
  `;
  }

  setupAuthListener() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Get the ID:", user.uid);

        try {
          const userRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            const userData = userSnap.data();
            console.log("user data:", userData);

            if (userData.avatarUrl) {
              console.log("Find the URL:", userData.avatarUrl);
              const avatarElement = this.querySelector("#userAvatar");

              if (avatarElement) {
                avatarElement.src = userData.avatarUrl;
                console.log("The picture already set");
              } else {
                console.log("Can't find the picture element in navbar");
              }
            } else {
              console.log("The user didn't set the picture");
              const avatarElement = this.querySelector("#userAvatar");
              if (avatarElement) {
                avatarElement.src = "/images/profilePicture.png";
              }
            }
          } else {
            console.log("The user document does not exist");
          }
        } catch (error) {
          console.error("Error in obtaining user data:", error);
        }

        this.updateAuthControls(true);
      } else {
        console.log("The user is not logged in");
        this.setDefaultAvatar();
        this.updateAuthControls(false);
      }
    });
  }

  setDefaultAvatar() {
    const avatarElement = this.querySelector("#userAvatar");
    if (avatarElement) {
      avatarElement.src = "/images/profilePicture.png";
    }
  }

  updateAuthControls(isLoggedIn) {
    const authControls = this.querySelector("#authControls");
    if (!authControls) return;

    let updatedAuthControl;
    if (isLoggedIn) {
      updatedAuthControl = `<button class="btn btn-outline-dark" id="signOutBtn" type="button" style="min-width: 80px;">Log out</button>`;
      authControls.innerHTML = updatedAuthControl;
      const signOutBtn = authControls.querySelector("#signOutBtn");
      signOutBtn?.addEventListener("click", logoutUser);
    } else {
      updatedAuthControl = `<a class="btn btn-outline-dark" id="loginBtn" href="/login.html" style="min-width: 80px;">Log in</a>`;
      authControls.innerHTML = updatedAuthControl;
    }
  }
}

customElements.define("site-navbar", SiteNavbar);
