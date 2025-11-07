import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { db } from "./firebaseConfig.js";
import { collection, getDocs } from "firebase/firestore";

//--------------------------------------------------------------
// If you have custom global styles, import them as well:
//--------------------------------------------------------------
import "/src/styles/style.css";

//--------------------------------------------------------------
// Custom global JS code (shared with all pages)can go here.
//--------------------------------------------------------------

async function loadSavedCards() {
  const querySnapshot = await getDocs(collection(db, "cards"));
  querySnapshot.forEach((doc) => {
    const cardData = doc.data();
    const questionCard = document.createElement("div");
    questionCard.classList.add("question-card");

    //determined chapter base on label dynamically
    let chapterClass = "";
    if(cardData.label.trim() === "Chapter 1") {
      chapterClass = "chapter-label1";
    } else if (cardData.label.trim() === "Chapter 2") {
      chapterClass = "chapter-label2";
    } else if (cardData.label.trim() === "Chapter 3") {
      chapterClass = "chapter-label3";
    } else if (cardData.label.trim() === "Chapter 4") {
      chapterClass = "chapter-label4";
    } else {
      chapterClass = "chapter-label5";
    }

    const chapterLabel = document.createElement("div");
    chapterLabel.classList.add(chapterClass);
    chapterLabel.textContent = cardData.label;
    questionCard.appendChild(chapterLabel);

    // assign questionText to cards
    const questionText = document.createElement("p");
    questionText.textContent = `Q${cardData.question}`;
    questionCard.appendChild(questionText);

    const answerText = document.createElement("p");
    answerText.textContent = `A: ${cardData.answer}`;
    answerText.style.display = "none";
    questionCard.appendChild(answerText);

    const flipBtn = document.createElement("button");
    flipBtn.classList.add("flip-btn");
    flipBtn.textContent = "Flip";
    flipBtn.addEventListener("click", () => {
      answerText.style.display =
        answerText.style.display === "none" ? "block" : "none";
    });
    questionCard.appendChild(flipBtn);

    // questionCard.appendChild(chapterLabel, questionText, answerText, flipBtn)
    document.querySelector(".questions-list").appendChild(questionCard);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".questions-list")) loadSavedCards();
});

