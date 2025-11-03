import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

//--------------------------------------------------------------
// If you have custom global styles, import them as well:
//--------------------------------------------------------------
import "/src/styles/style.css";

//--------------------------------------------------------------
// Custom global JS code (shared with all pages)can go here.
//--------------------------------------------------------------

// This is an example function. Replace it with your own logic.
function loadSavedCards() {
  const savedCards = JSON.parse(localStorage.getItem("cardData"));
  if (!Array.isArray(savedCards) || savedCards.length === 0) return;

  savedCards.forEach((cardData) => {
    const questionCard = document.createElement("div");
    questionCard.classList.add("question-card");

    //determined chapter base on label dynamically
    let chapterClass = "";
    if(cardData.label === "Chapter 1") {
      chapterClass = "chapter-label1";
    } else if (cardData.label === "Chapter 2") {
      chapterClass = "chapter-label2";
    } else if (cardData.label === "Chapter 3") {
      chapterClass = "chapter-label3";
    } else if (cardData.label === "Chapter 4") {
      chapterClass = "chapter-label4";
    } else {
      chapterClass = "chapter-label5";
    } 

    const chapterLabel = document.createElement("div");
    chapterLabel.classList.add(chapterClass);
    chapterLabel.textContent = cardData.label;
    questionCard.appendChild(chapterLabel);

    // assign number to cards
    const existingCards = document.querySelectorAll(".question-card").length;
    const quesNumber = existingCards + 1;
    const questionText = document.createElement("p");
    questionText.textContent = `Q${quesNumber}: ${cardData.front}`;
    questionCard.appendChild(questionText);

    const answerText = document.createElement("p");
    answerText.textContent = `A: ${cardData.back}`;
    answerText.style.display = "none";
    questionCard.appendChild(answerText);

    const flipBtn = document.createElement("button");
    flipBtn.classList.add("flip-btn");
    flipBtn.textContent = "Flip";
    flipBtn.addEventListener("click", () => {
      answerText.style.display = answerText.style.display === "none" ? "block" : "none";
    })
    questionCard.appendChild(flipBtn);

    // questionCard.appendChild(chapterLabel, questionText, answerText, flipBtn)
    document.querySelector(".questions-list").appendChild(questionCard);
  });

  // cleanup
  // localStorage.removeItem("cardData");
}
document.addEventListener("DOMContentLoaded", loadSavedCards);
