import { db } from "./firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";

// label btn
const dropdownbtn = document.getElementById("dropdownMenu");
const dropdownitem = document.querySelectorAll(".dropdown-item");

dropdownitem.forEach(item => {
  item.addEventListener("click", () => {
    dropdownbtn.textContent = item.textContent;
  });
});


// save button
const savebtn = document.getElementById("submit");

// savebtn.addEventListener("click", () => {
//     const data = {
//         front: document.getElementById("front").value,
//         back: document.getElementById("back").value,
//         label: dropdownbtn.textContent.trim(),
//     }

//     let cards = JSON.parse(localStorage.getItem("cardData"));

//     //if nothing exist, start with empty array
//     if (!Array.isArray(cards)) cards = [];

//     //append new card
//     cards.push(data);

//     localStorage.setItem("cardData", JSON.stringify(cards));
//     // console.log(data);
//     window.location.href = '/home.html';

// });

savebtn.addEventListener("click", async () => {
  const data = {
    question: document.getElementById("front").value.trim(),
    answer: document.getElementById("back").value.trim(),
    label: dropdownbtn.textContent.trim(),
    group: "set C",
  };

  try {
    await addDoc(collection(db, "cards"), data);
    console.log("Card saved to Firestore:", data);
    window.location.href = "/home.html";
  } catch (error) {
    console.error("Error saving card:", error);
  }
});
