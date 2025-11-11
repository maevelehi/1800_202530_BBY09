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
          const { name = "", school = "", group = "" } = userData;

          document.getElementById("nameInput").value = name;
          document.getElementById("schoolInput").value = school;
          document.getElementById("groupInput").value = group;
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
}

//-------------------------------------------------------------
// Updates the user document in Firestore with new values
//-------------------------------------------------------------
async function updateUserDocument(uid, name, school, group) {
  try {
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, { name, school, group });
    console.log("User document successfully updated!");
  } catch (error) {
    console.error("Error updating user document:", error);
    throw error;
  }
}

// ------------------------------------------------------------
// DOM Content Loaded
// ------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, initializing event listeners...");

  // Set the edit button event listener
  const editButton = document.getElementById("editButton");
  if (editButton) {
    editButton.addEventListener("click", editUserInfo);
  }

  const saveButton = document.getElementById("saveButton");
  saveButton?.addEventListener("click", async (e) => {
    e.preventDefault();

    const user = auth.currentUser;
    if (!user) {
      alert("No user is signed in. Please log in first.");
      return;
    }

    const nameInput = document.getElementById("nameInput");
    const schoolInput = document.getElementById("schoolInput");
    const groupInput = document.getElementById("groupInput");

    const name = nameInput?.value.trim();
    const school = schoolInput?.value.trim();
    const group = groupInput?.value;

    if (!name || !school) {
      alert("Please fill in all required fields (Name and School).");
      return;
    }

    try {
      await updateUserDocument(user.uid, name, school, group);

      const personalInfoFields = document.getElementById("personalInfoFields");
      if (personalInfoFields) {
        personalInfoFields.disabled = true;
      }

      alert("Profile updated successfully!");

      window.location.href = "/home.html";
    } catch (err) {
      console.error("Error saving profile:", err);
      alert("Failed to save profile. Please try again.");
    }
  });

  populateUserInfo();
});
