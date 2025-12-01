import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { db } from "./firebaseConfig.js";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { onAuthReady } from "./authentication.js";
import { query, where } from "firebase/firestore";
import { displayCardsFromFirestore } from "./csvUpload.js";
import { initSearchFilter } from "./searchFilter.js";
import "/src/styles/style.css";
let userGroup = "default";

document.addEventListener("DOMContentLoaded", () => {
  const addCardBtn = document.getElementById("addCardsManually");

  if (addCardBtn) {
    addCardBtn.addEventListener("click", function () {
      window.location.href = "create-card.html";
    });
  }

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
      const totalEl = document.getElementById("totalCards");
      if (totalEl) totalEl.textContent = snap.size;
    }

    // 2. Load STUDIED TODAY using flipLogs
    async function loadStudiedToday(uid) {
      const logsRef = collection(db, "flipLogs");
      const snap = await getDocs(query(logsRef, where("uid", "==", uid)));

      const startOfDay = new Date();
      startOfDay.setHours(0, 0, 0, 0);

      let count = 0;
      snap.forEach((doc) => {
        const ts = doc.data().timestamp?.toDate?.();
        if (ts && ts >= startOfDay) count++;
      });

      const todayEl = document.getElementById("studiedToday");
      if (todayEl) todayEl.textContent = count;
    }

    loadTotalCards(userGroup);
    loadStudiedToday(user.uid);

    // Manual card creation
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
        group: userGroup,
        createdBy: user.uid,
      });

      document.getElementById("cardForm").reset();
    });
  });
});

