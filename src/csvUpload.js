import { db } from "./firebaseConfig.js";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  getDoc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { onAuthReady } from "./authentication.js";
import { updateDoc, increment, serverTimestamp  } from "firebase/firestore";
// Modification: Import getDoc for reading user groups

let currentUser = null;

// Initialize the upload button
export function initCSVUpload() {
  const uploadBtn = document.getElementById("uploadCsv");
  const fileInput = document.getElementById("csvFileInput");

  if (!uploadBtn || !fileInput) return;

  uploadBtn.addEventListener("click", (e) => {
    e.preventDefault();
    fileInput.click();
  });

  fileInput.addEventListener("change", handleCSVUpload);
}

// Handle file upload
async function handleCSVUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  onAuthReady(async (user) => {
    if (!user) {
      alert("Please log in first!");
      return;
    }
    currentUser = user;
    try {
      const text = await file.text();
      await parseAndUploadCSV(text, user);
      alert("Upload successful!");
      e.target.value = "";
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed.");
    }
  });
}

// Firestore
async function parseAndUploadCSV(text, user) {
  const rows = text
    .split("\n")
    .map((r) => r.trim())
    .filter(Boolean);
  if (rows.length < 2) return;

  const headers = rows[0].split(",").map((h) => h.trim().toLowerCase());
  const cardsRef = collection(db, "cards");

  let group = "default";
  try {
    const userDoc = await getDoc(doc(db, "users", user.uid));
    group = userDoc.exists() ? userDoc.data().group || "default" : "default";
  } catch (err) {
    console.warn("Failed to get group:", err);
  }

  for (let i = 1; i < rows.length; i++) {
    const values = rows[i].split(",").map((v) => v.trim());
    const card = {};

    headers.forEach((h, idx) => {
      const val = values[idx] || "";
      if (h === "question") card.question = val;
      else if (h === "answer") card.answer = val;
      else if (h === "topic") {
        let processedTopic = val
          .replace(/^[a-z]/, (match) => match.toUpperCase())
          .replace(/([^0-9]*)([0-9])/, "$1 $2");
        card.topic = processedTopic;
      } else if (h === "label") {
        const num = parseInt(val);
        if (!isNaN(num)) {
          card.label = `Chapter ${num}`;
        } else {
          card.label = val;
        }
      } else if (h === "group") {
        card.group = val || group; // if CSV has group, use it; otherwise use user's group
      }
    });

    if (!card.question || !card.answer || !card.topic || !card.label) {
      console.warn(`Skipping row ${i + 1}: missing required field.`);
      continue;
    }

    await addDoc(cardsRef, {
      ...card,
      group: card.group || group, // new from maeve
      createdBy: user.uid,
      createdAt: new Date(),
    });
  }
}

export function displayCardsFromFirestore(userGroup) {
  const container = document.getElementById("cards-go-here");
  const template = document.getElementById("cardTemplate");
  if (!container || !template) return;

  const cardsRef = collection(db, "cards");
  const q = query(cardsRef, orderBy("createdAt", "desc"));

  // Track which cards are flipped
  const flippedCards = {};

  onSnapshot(q, (snapshot) => {
    container.innerHTML = "";
    snapshot.forEach((docSnapshot) => {
      const card = docSnapshot.data();
      const docId = docSnapshot.id;
      // --- Filter by user's group ---
      if (card.group !== userGroup) return;

      // const cardElement = template.content.cloneNode(true);
      // const cardElement = cardElement.querySelector(".question-card"); //new

      // Clone template
      const fragment = template.content.cloneNode(true);
      const cardElement = fragment.querySelector(".question-card");
      // Store Firestore ID
      cardElement.dataset.cardId = docSnapshot.id; 

      let chapterText = "Chapter 1";
      if (card.label) {
        chapterText = card.label.toString();

        const match = chapterText.match(/\d+/);
        const chapterNum = match ? parseInt(match[0]) : 1;

        const label = cardElement.querySelector(".chapter-label");
        label.className = `chapter-label chapter-label${chapterNum}`;
        label.textContent = chapterText;
      }

      cardElement.querySelector(".question-text").textContent = card.question || "";
      const answerEl = cardElement.querySelector(".answer-text");

      //TESTING
      // console.log("Answer element before flip:", answerEl, "display:", window.getComputedStyle(answerEl).display);
      answerEl.textContent = card.answer || "";

      // Restore flipped state if previously flipped
      if (flippedCards[docId]) {
        answerEl.style.display = "block";
      } else {
        answerEl.style.display = "none";
      }

      container.appendChild(fragment);

      //TESTING
      // console.log("DOM after append:", container.innerHTML);

      const flipBtn = cardElement.querySelector(".flip-btn");
      // flipBtn.onclick = async () => {
      //   // Toggle answer display
      //   const isHidden = window.getComputedStyle(answerEl).display === "none";
      //   //TESTING
      //   console.log("isHidden:", isHidden, "current display:", window.getComputedStyle(answerEl).display);
      //   answerEl.style.display = isHidden ? "block" : "none";
      //   console.log("New display:", answerEl.style.display);

      //   // Track flip in Firestore
      //   const cardId = docSnapshot.id;
      //   console.log("Card ID:", cardId, "Current user:", currentUser);

      //   if (!currentUser || !cardId) return;

      //   try {
      //     const cardRef = doc(db, "cards", cardId);
      //     console.log("FLIPPED: Updating Firestore for card:", cardId);

      //     await updateDoc(cardRef, {
      //       flipCount: increment(1),
      //       lastFlipped: new Date(),
      //     });
      //     console.log("UPDATED!");
      //   } catch (err) {
      //     console.error("Error updating flip count:", err);
      //   }
      // };

      flipBtn.onclick = async () => {
        const isHidden = window.getComputedStyle(answerEl).display === "block";
        answerEl.style.display = isHidden ? "none" : "block";

        // Update local flipped state
        flippedCards[docId] = !isHidden;

        // Track flip in Firestore
        if (!currentUser || !docId) return;
        try {
          const cardRef = doc(db, "cards", docId);
          await updateDoc(cardRef, {
            flipCount: increment(1),
            lastFlipped: new Date(),
          });
          await logFlip(docId, currentUser.uid);
        } catch (err) {
          console.error("Error updating flip count:", err);
        }
      };

      // --- Remove btn ---
      const removeBtn = cardElement.querySelector(".remove-btn");
      removeBtn.onclick = async () => {
        if (confirm("Are you sure you want to delete this card?")) {
          const cardRef = doc(db, "cards", docId);
          const cardElement = removeBtn.closest(".question-card");

          cardElement.classList.add("fade-out");

          try {
            await deleteDoc(cardRef);
            console.log("Card deleted successfully");
          } catch (error) {
            console.error("Error deleting card:", error);
            alert("Failed to delete card. Please try again.");
            cardElement.classList.remove("fade-out");
          }
        }
      };

      // container.appendChild(cardElement);
    });
  });
}

async function logFlip(cardId, userId) {
  try {
    await addDoc(collection(db, "flipLogs"), {
      cardId,
      uid: userId,
      timestamp: serverTimestamp(),
    });
  } catch (err) {
    console.error("Error logging flip:", err);
  }
}

onAuthReady((user) => {
  currentUser = user;
});
onAuthReady((user) => {
  currentUser = user;
});
