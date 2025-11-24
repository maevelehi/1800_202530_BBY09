import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "./firebaseConfig.js";

// -------------------------------------------------------------
// Function to populate user info in the profile form
// -------------------------------------------------------------
function populateUserInfo() {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          const {
            name = "",
            school = "",
            group = "",
            avatarUrl = "",
          } = userData;

          document.getElementById("nameInput").value = name;
          document.getElementById("schoolInput").value = school;
          document.getElementById("groupInput").value = group;

          if (avatarUrl) {
            document.getElementById("avatar").src = avatarUrl;
          }
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error getting user document:", error);
      }
    } else {
      console.log("No user is signed in");
    }
  });
}

//-------------------------------------------------------------
// Function to enable editing of user info form fields
//-------------------------------------------------------------
function editUserInfo() {
  document.getElementById("personalInfoFields").disabled = false;
  document.getElementById("editProfileBtn").textContent = "Save Profile";
}

//-------------------------------------------------------------
// Updates the user document in Firestore with new values
//-------------------------------------------------------------
async function updateUserDocument(uid, name, school, group, avatarUrl) {
  try {
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, {
      name,
      school,
      group,
      avatarUrl,
      lastUpdated: new Date(),
    });
    console.log("User document successfully updated!");
  } catch (error) {
    console.error("Error updating user document:", error);
    throw error;
  }
}

async function saveUserProfile() {
  const user = auth.currentUser;
  if (!user) {
    alert("No user is signed in. Please log in first.");
    return;
  }

  const nameInput = document.getElementById("nameInput");
  const schoolInput = document.getElementById("schoolInput");
  const groupInput = document.getElementById("groupInput");
  const avatar = document.getElementById("avatar");

  const name = nameInput?.value.trim();
  const school = schoolInput?.value.trim();
  const group = groupInput?.value;
  const avatarUrl = avatar.src;

  if (!name || !school) {
    alert("Please fill in all required fields (Name and School).");
    return;
  }

  try {
    await updateUserDocument(user.uid, name, school, group, avatarUrl);

    document.getElementById("personalInfoFields").disabled = true;

    document.getElementById("editProfileBtn").textContent = "Edit Profile";

    alert("Profile updated successfully!");
  } catch (err) {
    console.error("Error saving profile:", err);
    alert("Failed to save profile. Please try again.");
  }
}

function handleAvatarUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("avatar").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

// ------------------------------------------------------------
// DOM Content Loaded
// ------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, initializing event listeners...");

  const editProfileBtn = document.getElementById("editProfileBtn");
  if (editProfileBtn) {
    editProfileBtn.addEventListener("click", function () {
      const personalInfoDisabled =
        document.getElementById("personalInfoFields").disabled;

      if (personalInfoDisabled) {
        editUserInfo();
      } else {
        saveUserProfile();
      }
    });
  }

  const backButton = document.getElementById("backButton");
  if (backButton) {
    backButton.addEventListener("click", function () {
      window.history.back();
    });
  }

  const avatarUpload = document.getElementById("avatarUpload");
  const uploadAvatarBtn = document.getElementById("uploadAvatarBtn");

  if (uploadAvatarBtn && avatarUpload) {
    uploadAvatarBtn.addEventListener("click", function () {
      avatarUpload.click();
    });

    avatarUpload.addEventListener("change", handleAvatarUpload);
  }

  populateUserInfo();
});