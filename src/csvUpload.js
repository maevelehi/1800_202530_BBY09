// uploadCards.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { firebaseConfig } from "./firebaseAPIConfig.js";

// 初始化 Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const fileInput = document.getElementById("csvFile");
const uploadBtn = document.getElementById("uploadBtn");
const statusDiv = document.getElementById("status");

uploadBtn.addEventListener("click", async () => {
  const file = fileInput.files[0];
  if (!file) {
    alert("Please select a CSV file first！");
    return;
  }

  try {
    const text = await file.text();

    // Split and filter blank lines by line
    const rows = text
      .split("\n")
      .map((r) => r.trim())
      .filter(Boolean);

    const headers = rows[0].split(",").map((h) => h.trim());
    const cards = rows.slice(1).map((row) => {
      const values = row.split(",");
      const obj = {};
      headers.forEach((h, i) => (obj[h] = values[i]?.trim() || ""));
      return obj;
    });

    let uploaded = 0;
    for (const card of cards) {
      await addDoc(collection(db, "Cards"), card);
      uploaded++;
    }

    statusDiv.innerText = `Uploaded ${uploaded} cards successfully!`;
  } catch (error) {
    console.error("Upload failed:", error);
    statusDiv.innerText = "Upload failed. Check console for details.";
  }
});
