import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { db } from "./firebaseConfig.js";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { onAuthReady } from "./authentication.js";
import { query, where, onSnapshot } from "firebase/firestore";
import { displayCardsFromFirestore } from "./csvUpload.js";
import { initSearchFilter } from "./searchFilter.js";
import { dateIdFromDate } from "./utils.js";

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

    initSearchFilter(userGroup);

    // display only cards for this group
    displayCardsFromFirestore(userGroup);

    // ---------------------------------------------
    // DASHBOARD CARDS
    // ---------------------------------------------

    // 1. Load TOTAL CARDS for the user's group
    async function loadTotalCards(group) {
      const q = query(collection(db, "cards"), where("group", "==", group));
      const snap = await getDocs(q);
      const el = document.getElementById("totalCards");
      if (el) el.textContent = snap.size; // only update if exists
    }

    // 2. Load STUDIED TODAY using flipLogs
    async function loadStudiedToday(uid) {
      const todayId = dateIdFromDate(new Date());
      const histRef = doc(db, "users", uid, "history", todayId);
      try {
        const histDoc = await getDoc(histRef);
        const count = histDoc.exists() ? histDoc.data().count || 0 : 0;
        const el = document.getElementById("studiedToday");
        if (el) el.textContent = count;
      } catch (err) {
        console.error("Error reading today's history:", err);
      }
    }

    // Call both
    loadTotalCards(userGroup);
    loadStudiedToday(user.uid);

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

      document.getElementById("cardForm").reset();
    });
  });
});

// Attach event listener to the parent container
// document.querySelector(".questions-list").addEventListener("click", (event) => {
//   if (event.target.classList.contains("flip-btn")) {
//     const questionCard = event.target.closest(".question-card");
//     if (questionCard.classList.contains("flipped")) {
//       questionCard.classList.remove("flipped");
//       return;
//     }
//     questionCard.classList.toggle("flipped");
//     questionCard.style.backgroundColor = "lightyellow";
//   }
// });

// const container = document.querySelector(".questions-list");
// if (container) {
//   container.addEventListener("click", (event) => {
//     if (event.target.classList.contains("flip-btn")) {
//       const questionCard = event.target.closest(".question-card");
//       questionCard.classList.toggle("flipped");
//       questionCard.style.backgroundColor = "white";
//     }
//   });
// }