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
      if (h.includes("question")) card.question = val;
      if (h.includes("answer")) card.answer = val;
      if (h.includes("topic")) card.topic = val;
      if (h.includes("chapter")) {
        const chapterNum = parseInt(val) || 1;
        card.label = `Chapter ${chapterNum}`;
        console.log(`chapter ${i}:`, val, "->", card.label);
      }
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
    container.innerHTML = "";
    snapshot.forEach((doc) => {
      const card = doc.data();
      const newCard = template.content.cloneNode(true);

      let chapterText = "Chapter 1";
      if (card.label) {
        chapterText = card.label.toString();

        const match = chapterText.match(/\d+/);
        const chapterNum = match ? parseInt(match[0]) : 1;

        const label = newCard.querySelector(".chapter-label");
        label.className = `chapter-label chapter-label${chapterNum}`;
        label.textContent = chapterText;
      }

      // newCard.querySelector(".question-text").textContent = card.question;

      // const answerEl = newCard.querySelector(".answer-text");
      // answerEl.textContent = card.answer;

      //maeve's edit
      let chapterClass = "";
      const labelText = card.label || "Chapter 1"; // default
      if (labelText === "Chapter 1") chapterClass = "chapter-label1";
      else if (labelText === "Chapter 2") chapterClass = "chapter-label2";
      else if (labelText === "Chapter 3") chapterClass = "chapter-label3";
      else if (labelText === "Chapter 4") chapterClass = "chapter-label4";
      else chapterClass = "chapter-label5";

      const labelEl = newCard.querySelector(".chapter-label");
      labelEl.textContent = labelText;
      labelEl.classList.add(chapterClass);

      newCard.querySelector(".question-text").textContent = card.question || "";
      const answerEl = newCard.querySelector(".answer-text");
      answerEl.textContent = card.answer || "";

      const flipBtn = newCard.querySelector(".flip-btn");
      flipBtn.onclick = () => {
        answerEl.style.display =
          answerEl.style.display === "none" ? "block" : "none";
      };

      container.appendChild(newCard);
    });
  });
}
