// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "./firebaseConfig.js";

// onAuthStateChanged(auth, async (user) => {
//   if (user) {
//     console.log("Get the ID:", user.uid);

//     try {
//       const userRef = doc(db, "users", user.uid);
//       const userSnap = await getDoc(userRef);

//       if (userSnap.exists()) {
//         const userData = userSnap.data();
//         console.log("user data:", userData);

//         if (userData.avatarUrl) {
//           console.log("Find the URL:", userData.avatarUrl);
//           const avatarElement = document.getElementById("userAvatar");

//           if (avatarElement) {
//             avatarElement.src = userData.avatarUrl;
//             console.log("The picture already set");
//           } else {
//             console.log("Can't find the picture");
//           }
//         } else {
//           console.log("The user didn't set the picture");
//           document.getElementById("userAvatar").src =
//             "https://via.placeholder.com/40";
//         }
//       } else {
//         console.log("The user document does not exist");
//       }
//     } catch (error) {
//       console.error("Error in obtaining user data:", error);
//     }
//   } else {
//     console.log("The user is not logged in");
//   }
// });
