// import { onAuthReady } from "./authentication.js";
// import { initCSVUpload, displayCardsFromFirestore } from "./csvUpload.js";
// import { db } from "./firebaseConfig.js";
// import { doc, getDoc } from "firebase/firestore";

// function showDashboard() {
//   const nameElement = document.getElementById("name-goes-here"); // the <h1> element to display "Hello, {name}"

//   // Wait for Firebase to determine the current authentication state.
//   // onAuthReady() runs the callback once Firebase finishes checking the signed-in user.
//   // The user's name is extracted from the Firebase Authentication object
//   // You can "go to console" to check out current users.
//   onAuthReady(async (user) => {
//     if (!user) {
//       // If no user is signed in → redirect back to login page.
//       location.href = "index.html";
//       return;
//     }

//     // If a user is logged in:
//     // Use their display name if available, otherwise show their email.
//     // const name = user.displayName || user.email;

//     // Update the welcome message with their name/email.

//     // if (nameElement) {
//     //   nameElement.textContent = `${name}!`;
//     // }
//     try {
//       const userDoc = await getDoc(doc(db, "users", user.uid));
//       const name = userDoc.exists()
//         ? userDoc.data().name
//         : user.displayName || user.email;
//       if (nameElement) {
//         nameElement.textContent = `Hello, ${name}!`;
//       }
//     } catch (error) {
//       console.error("Error fetching user:", error);
//       if (nameElement) nameElement.textContent = `Hello, ${user.email}!`;
//     }
//     displayCardsFromFirestore();
//   });
// }

// function initializeApp() {
//   showDashboard();
//   initCSVUpload();
// }

// document.addEventListener("DOMContentLoaded", initializeApp);
// showDashboard();
