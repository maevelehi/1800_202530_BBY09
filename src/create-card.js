import { db } from "./firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";

// update btn with selected option
document.querySelectorAll(".drop-down").forEach((drop) => {
  const btn = drop.querySelector(".dropdown-toggle");
  const items = drop.querySelectorAll(".dropdown-item");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      btn.textContent = item.textContent;
    });
  });
});

// save button
const savebtn = document.getElementById("submit");

savebtn.addEventListener("click", async () => {
  const chapter = document.getElementById("dropdownMenu").textContent.trim();
  const course = document.getElementById("dropdownTopic").textContent.trim();

  const data = {
    question: document.getElementById("front").value.trim(),
    answer: document.getElementById("back").value.trim(),
    label: chapter,
    topic: course,
    group: "set C",
    createdAt: new Date(),
  };

  try {
    await addDoc(collection(db, "cards"), data);
    console.log("Card saved to Firestore:", data);
    window.location.href = "/home.html";
  } catch (error) {
    console.error("Error saving card:", error);
  }
});
