// src/csvUpload.js
import { db } from "./firebaseConfig.js";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { onAuthReady } from "./authentication.js";
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
      }
    });

    if (!card.question || !card.answer || !card.topic || !card.label) {
      console.warn(`Skipping row ${i + 1}: missing required field.`);
      continue;
    }

    await addDoc(cardsRef, {
      ...card,
      group: group,
      createdBy: user.uid,
    });
  }
}

export function displayCardsFromFirestore() {
  const container = document.getElementById("cards-go-here");
  const template = document.getElementById("cardTemplate");
  if (!container || !template) return;

  const cardsRef = collection(db, "cards");

  onSnapshot(cardsRef, (snapshot) => {
    container.innerHTML = "";
    snapshot.forEach((docSnapshot) => {
      const card = docSnapshot.data();
      const docId = docSnapshot.id;
      const newCard = template.content.cloneNode(true);

      let chapterClass = "";
      const labelText = card.label || "Chapter 1";

      if (labelText === "Chapter 1") chapterClass = "chapter-label1";
      else if (labelText === "Chapter 2") chapterClass = "chapter-label2";
      else if (labelText === "Chapter 3") chapterClass = "chapter-label3";
      else if (labelText === "Chapter 4") chapterClass = "chapter-label4";
      else chapterClass = "chapter-label5";

      const labelEl = newCard.querySelector(".chapter-label");
      labelEl.textContent = labelText;
      labelEl.className = `chapter-label ${chapterClass}`;

      newCard.querySelector(".question-text").textContent = card.question || "";
      const answerEl = newCard.querySelector(".answer-text");
      answerEl.textContent = card.answer || "";

      const flipBtn = newCard.querySelector(".flip-btn");
      flipBtn.onclick = () => {
        answerEl.style.display =
          answerEl.style.display === "none" ? "block" : "none";
      };
      // --- Remove btn ---
      const removeBtn = newCard.querySelector(".remove-btn");
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

      container.appendChild(newCard);
    });
  });
}
