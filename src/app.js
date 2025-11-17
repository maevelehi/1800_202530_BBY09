import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { db } from "./firebaseConfig.js";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { onAuthReady } from "./authentication.js";
import { query, where, onSnapshot } from "firebase/firestore";
import { displayCardsFromFirestore } from "./csvUpload.js";
import { initSearchFilter } from "./searchFilter.js";

//--------------------------------------------------------------
// If you have custom global styles, import them as well:
//--------------------------------------------------------------
import "/src/styles/style.css";

let userGroup = "default";

document.addEventListener("DOMContentLoaded", () => {
  onAuthReady(async (user) => {
    if (!user) return;

    // get user's group
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
      userGroup = userDoc.data().group || "default";
    }

    // Example: after you know the user's group (e.g., from auth or profile)
    initSearchFilter(userGroup);

    // display only cards for this group
    displayCardsFromFirestore(userGroup);

    // manual card creation
    const submitBtn = document.getElementById("submitCard");
    submitBtn?.addEventListener("click", async () => {
      const question = document.getElementById("questionInput").value.trim();
      const answer = document.getElementById("answerInput").value.trim();
      const label = document.getElementById("labelInput").value.trim();
      const topic = document.getElementById("topicInput").value.trim();

      if (!question || !answer || !label || !topic)
        return alert("All fields required!");

      await addDoc(collection(db, "cards"), {
        question,
        answer,
        label,
        topic,
        group: userGroup, // store user's group
        createdBy: user.uid,
      });

      // optionally reset form
      document.getElementById("cardForm").reset();
    });
  });
});

// Attach event listener to the parent container
// document.querySelector(".questions-list").addEventListener("click", (event) => {
//   // Check if the clicked element is a flip button
//   if (event.target.classList.contains("flip-btn")) {
//     console.log("Flip button clicked");

//     // Get the parent question card
//     const questionCard = event.target.closest(".question-card");

//     // Check if the question card is already flipped
//     if (questionCard.classList.contains("flipped")) {
//       // Remove the flip class to unflip it
//       questionCard.classList.remove("flipped");
//       return;
//     }

//     // Add the flip class for the animation
//     questionCard.classList.toggle("flipped");
//     questionCard.style.backgroundColor = "lightyellow";
//   }
// });

const container = document.querySelector(".questions-list");
if (container) {
  container.addEventListener("click", (event) => {
    if (event.target.classList.contains("flip-btn")) {
      const questionCard = event.target.closest(".question-card");
      questionCard.classList.toggle("flipped");
      questionCard.style.backgroundColor = "lightyellow";
    }
  });
}

// //--------------------------------------------------------------
// // Custom global JS code (shared with all pages)can go here.
// //--------------------------------------------------------------
// const container = document.querySelector(".questions-list");

// async function loadSavedCards(userGr) {
//   if (!container) return; // stop if not found
//   container.innerHTML = ""; //TEST

//   const q = query(collection(db, "cards"), where("group", "==", userGr));
//   const querySnapshot = await getDocs(q);
//   // const querySnapshot = await getDocs(collection(db, "cards"));

//   querySnapshot.forEach((doc) => {
//     const cardData = doc.data();

//         console.log("Card group =", `"${cardData.group}"`); //TEST

//     const questionCard = document.createElement("div");
//     questionCard.classList.add("question-card");

//     //determined chapter base on label dynamically
//     let chapterClass = "";
//     if (cardData.label.trim() === "Chapter 1") {
//       chapterClass = "chapter-label1";
//     } else if (cardData.label.trim() === "Chapter 2") {
//       chapterClass = "chapter-label2";
//     } else if (cardData.label.trim() === "Chapter 3") {
//       chapterClass = "chapter-label3";
//     } else if (cardData.label.trim() === "Chapter 4") {
//       chapterClass = "chapter-label4";
//     } else {
//       chapterClass = "chapter-label5";
//     }

//     const chapterLabel = document.createElement("div");
//     chapterLabel.classList.add(chapterClass);
//     chapterLabel.textContent = cardData.label;
//     questionCard.appendChild(chapterLabel);

//     // assign questionText to cards
//     const questionText = document.createElement("p");
//     questionText.textContent = `Q${cardData.question}`;
//     questionCard.appendChild(questionText);

//     const answerText = document.createElement("p");
//     answerText.textContent = `A: ${cardData.answer}`;
//     answerText.style.display = "none";
//     questionCard.appendChild(answerText);

//     const flipBtn = document.createElement("button");
//     flipBtn.classList.add("flip-btn");
//     flipBtn.textContent = "Flip";
//     flipBtn.addEventListener("click", () => {
//       answerText.style.display =
//         answerText.style.display === "none" ? "block" : "none";
//     });
//     questionCard.appendChild(flipBtn);

//     console.log(cardData.createdBy); //TEST

//     container.appendChild(questionCard);

//   });
// }

// // document.addEventListener("DOMContentLoaded", async () => {
// //   let userGr = "default";
// //   await onAuthReady(async (user) => {
// //     const userDoc = await getDoc(doc(db, "users", user.uid));
// //     if (userDoc.exists()) {
// //       userGr = userDoc.data().group || "default";
// //     }
// //   });

// //   loadSavedCards(userGr);
// // });

// document.addEventListener("DOMContentLoaded", () => {
//   onAuthReady(async (user) => {
//     const userDoc = await getDoc(doc(db, "users", user.uid));
//     let userGr = "default";

//     if (userDoc.exists()) {
//       userGr = userDoc.data().group || "default";
//     }

//     console.log("User group =", `"${userGr}"`); // now correct
//     loadSavedCards(userGr); // <-- moved inside here
//   });
// });
