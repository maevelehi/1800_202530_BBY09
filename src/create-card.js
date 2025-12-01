import { db } from "./firebaseConfig.js";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import { onAuthReady } from "./authentication.js"; 

// Back button: navigate to previous page
document.addEventListener("DOMContentLoaded", () => {
  const backButton = document.getElementById("backBtn");
  if (backButton) {
    backButton.addEventListener("click", (e) => {
      e.preventDefault(); 
      window.history.back();
    });
  }
});

// Update dropdown toggle button text when an item is selected
document.querySelectorAll(".drop-down").forEach((drop) => {
  const btn = drop.querySelector(".dropdown-toggle");
  const items = drop.querySelectorAll(".dropdown-item");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      btn.textContent = item.textContent;
    });
  });
});

// Save button: add new card to Firestore
const savebtn = document.getElementById("submit");

savebtn.addEventListener("click", async () => {
  await onAuthReady(async (user) => {
    if (!user) {
      alert("Please log in first!");
      return;
    }

    // Fetch current user's group from Firestore
    const userDocRef = doc(db, "users", user.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
      alert("User data not found!");
      return;
    }
    const userGroup = userSnapshot.data().group; 

    // Collect card info from input fields
    const chapter = document.getElementById("dropdownMenu").textContent.trim();
    const course = document.getElementById("dropdownTopic").textContent.trim();

    const data = {
      question: document.getElementById("front").value.trim(),
      answer: document.getElementById("back").value.trim(),
      label: chapter,
      topic: course,
      group: userGroup, 
      createdBy: user.uid, 
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
});
