import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "./firebaseConfig.js";

// -------------------------------------------------------------
// Function to populate user info in the profile form
// Fetches user data from Firestore and fills in the form fields
// Assumes user is already authenticated
// and their UID corresponds to a document in the "users" collection
// of Firestore.
// Fields populated: name, school, group
// Form field IDs: nameInput, schoolInput, groupInput
// -------------------------------------------------------------
function populateUserInfo() {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        // reference to the user document
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userData = userSnap.data();

          const { name = "", school = "", group = "" } = userData;

          document.getElementById("nameInput").value = name;// error console here
          document.getElementById("schoolInput").value = school;

          if (group.startsWith("Set ")) {
            const groupLetter = group.replace("Set ", "");
            document.getElementById("groupInput").value = groupLetter;
          } else {
            document.getElementById("groupInput").value = group;
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
document.querySelector("#editButton").addEventListener("click", editUserInfo);
function editUserInfo() {
  //Enable the form fields
  document.getElementById("personalInfoFields").disabled = false;// error console here
}

//-------------------------------------------------------------
// Function to save updated user info from the profile form
//-------------------------------------------------------------
document.querySelector("#saveButton").addEventListener("click", saveUserInfo);
async function saveUserInfo() {
  const user = auth.currentUser;
  if (!user) {
    alert("No user is signed in. Please log in first.");
    return;
  }

  // a) get user entered values
  const userName = document.getElementById("nameInput").value;
  const userSchool = document.getElementById("schoolInput").value;
  const selectedGroup = document.getElementById("groupInput").value;
  const userGroup = selectedGroup;
  // b) update user's document in Firestore
  await updateUserDocument(user.uid, userName, userSchool, userGroup);

  // c) disable edit
  document.getElementById("personalInfoFields").disabled = true;

  alert("Profile updated successfully!");
}

//-------------------------------------------------------------
// Updates the user document in Firestore with new values
// Parameters:
//   uid (string)  – user's UID
//   name, school, group (strings)
//-------------------------------------------------------------
async function updateUserDocument(uid, name, school, group) {
  try {
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, { name, school, group });
    console.log("User document successfully updated!");
  } catch (error) {
    console.error("Error updating user document:", error);
    alert("Error updating profile. Please try again.");
  }
}

//call the function to run it
populateUserInfo();

// document.addEventListener("DOMContentLoaded", () => {
//   const saveButton = document.getElementById("saveButton");

//   saveButton?.addEventListener("click", async (e) => {
//     e.preventDefault();

//     // Collect profile data (if applicable)
//     const nameInput = document.querySelector("#profileName");
//     const schoolInput = document.querySelector("#profileSchool");

//     const name = nameInput?.value.trim();
//     const school = schoolInput?.value.trim();

//     if (!name || !school) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     try {
//       // Example: Save profile data (e.g., to Firebase or another backend)
//       console.log("Saving profile data:", { name, school });

//       // Simulate saving process (replace with actual save logic)
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       // Redirect to home.html after saving
//       window.location.href = "/home.html";
//     } catch (err) {
//       console.error("Error saving profile:", err);
//       alert("Failed to save profile. Please try again.");
//     }
//   });
// });
