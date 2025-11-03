// src/csvUpload.js
import { db } from "./firebaseConfig.js";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";
import { onAuthReady } from "./authentication.js";
// Modification: Import getDoc for reading user groups

let currentUser = null;

// Initialize the upload button
export function initCSVUpload() {
  const uploadBtn = document.getElementById("fill-in-the-blank");
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
      if (h.includes("question")) card.question = val;
      if (h.includes("answer")) card.answer = val;
      if (h.includes("topic")) card.topic = val;
      if (h.includes("chapter")) card.chapter = val;
    });

    if (!card.question || !card.answer) continue;

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
    // container.innerHTML = "";
    snapshot.forEach((doc) => {
      const card = doc.data();
      const newCard = template.content.cloneNode(true);

      newCard.querySelector(".chapter-num").textContent = card.chapter || "?";
      newCard.querySelector(".question-text").textContent = card.question;

      const answerEl = newCard.querySelector(".answer-text");
      answerEl.textContent = card.answer;

      const flipBtn = newCard.querySelector(".flip-btn");
      flipBtn.onclick = () => {
        answerEl.style.display =
          answerEl.style.display === "none" ? "block" : "none";
      };

      container.appendChild(newCard);
    });
  });
}
