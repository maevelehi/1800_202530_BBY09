// src/searchFilter.js
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebaseConfig.js";
import { onAuthReady } from "./authentication.js";

let allCards = [];
let topicsData = {}; // { topic: [chapters] }
let selectedTopic = "";
let selectedChapter = "";
let currentUser = null;

// Entry point – call this from your app with the current userGroup
export function initSearchFilter(userGroup) {
  console.log("Initialize the filtering function, user group:", userGroup);
  onAuthReady((user) => {
    if (user) {
      currentUser = user;
      console.log("User authenticated:", user.uid);
    }
    initFilterControls();
    loadCardsData(userGroup);
  });
}

/* ==================== Initialize the drop-down control ==================== */

function initFilterControls() {
  const topicSelect = document.getElementById("topicFilter");
  const chapterSelect = document.getElementById("chapterFilter");
  const clearBtn = document.getElementById("clearFilter");

  if (!topicSelect || !chapterSelect || !clearBtn) {
    console.error("The filter control element cannot be found");
    return;
  }

  // choosing a Topic
  topicSelect.addEventListener("change", (e) => {
    selectedTopic = e.target.value || "";
    selectedChapter = "";

    console.log("Select Topic:", selectedTopic);

    // Render the Chapter drop-down options based on the selected Topic
    if (selectedTopic) {
      populateChapterSelect(selectedTopic);
      chapterSelect.disabled = false;
    } else {
      // Disable chapter selection when no topic is selected
      resetChapterSelect();
      chapterSelect.disabled = true;
    }

    // Filter only by Topic (even if no Chapter is selected)
    applyFilter();
  });

  // When choosing a Chapter
  chapterSelect.addEventListener("change", (e) => {
    selectedChapter = e.target.value || "";
    console.log("📖 choose Chapter:", selectedChapter);
    applyFilter();
  });

  // Clear the filter
  clearBtn.addEventListener("click", () => {
    console.log("delete");

    selectedTopic = "";
    selectedChapter = "";

    // reset drop-down
    topicSelect.value = "";
    resetChapterSelect();
    chapterSelect.disabled = true;

    // display total cards
    applyFilter();
  });
}

/* ==================== Data loading and processing ==================== */

function loadCardsData(userGroup) {
  const cardsRef = collection(db, "cards");
  const q = query(cardsRef, orderBy("createdAt", "desc"));

  console.log("upload cards data from Firebase");

  onSnapshot(q, (snapshot) => {
    allCards = [];
    topicsData = {};

    console.log(
      "Received data snapshot, total number of cards:",
      snapshot.size
    );

    snapshot.forEach((docSnapshot) => {
      const card = docSnapshot.data();
      const docId = docSnapshot.id;

      // Filter user groups
      if (card.group !== userGroup) return;

      const cardWithId = { ...card, id: docId };
      allCards.push(cardWithId);

      // topic & chapter organizational data structure
      const topic = card.topic || "not classified";
      const chapter = card.label || "not classified"; // Your "chapter" is in the label field

      if (!topicsData[topic]) {
        topicsData[topic] = new Set();
      }
      topicsData[topic].add(chapter);
    });

    // Convert a "Set" to an Array for easier sorting and traversal
    Object.keys(topicsData).forEach((topic) => {
      topicsData[topic] = Array.from(topicsData[topic]);
    });

    console.log("Data processing completed: ", {
      TheNumberOfAvailableCards: allCards.length,
      TheNumberOfTopic: Object.keys(topicsData).length,
      Topic: topicsData,
    });

    // Render Topic drop-down options
    populateTopicSelect();

    // Initially display all cards
    applyFilter();
  });
}

/* ==================== Drop-down option rendering ==================== */

function populateTopicSelect() {
  const topicSelect = document.getElementById("topicFilter");
  if (!topicSelect) return;

  // Retain the first "Select Topic" option and remove the others
  topicSelect.innerHTML = `<option value="">Select Topic</option>`;

  Object.keys(topicsData)
    .sort()
    .forEach((topic) => {
      const option = document.createElement("option");
      option.value = topic;
      option.textContent = topic;
      topicSelect.appendChild(option);
    });

  console.log("The drop-down rendering of Topic is completed");
}

function populateChapterSelect(topic) {
  const chapterSelect = document.getElementById("chapterFilter");
  if (!chapterSelect) return;

  const chapters = topicsData[topic] || [];
  console.log(`${topic} :`, chapters);

  chapterSelect.innerHTML = `<option value="">Select Chapter</option>`;

  chapters.sort().forEach((chapter) => {
    const option = document.createElement("option");
    option.value = chapter;
    option.textContent = chapter;
    chapterSelect.appendChild(option);
  });
}

function resetChapterSelect() {
  const chapterSelect = document.getElementById("chapterFilter");
  if (!chapterSelect) return;

  chapterSelect.innerHTML = `<option value="">Select Chapter</option>`;
}

/* ==================== Filter and render cards==================== */

function applyFilter() {
  const container = document.getElementById("cards-go-here");
  if (!container) return;

  let filteredCards = allCards;

  console.log("search:", {
    selectedTopic,
    selectedChapter,
  });

  if (selectedTopic && selectedChapter) {
    filteredCards = filteredCards.filter(
      (card) => card.topic === selectedTopic && card.label === selectedChapter
    );
  } else if (selectedTopic && !selectedChapter) {
    filteredCards = filteredCards.filter(
      (card) => card.topic === selectedTopic
    );
  }
  // If nothing is chosen, keep allCards

  console.log("filtered results:", {
    TotalCards: allCards.length,
    AfterFilter: filteredCards.length,
  });

  renderFilteredCards(container, filteredCards);
}

function renderFilteredCards(container, cards) {
  const template = document.getElementById("cardTemplate");
  if (!template) return;

  container.innerHTML = "";

  if (cards.length === 0) {
    container.innerHTML = `
      <div class="no-cards-message">
        <p>didn't find the card</p>
      </div>
    `;
    return;
  }

  cards.forEach((card) => {
    const fragment = template.content.cloneNode(true);
    const cardElement = fragment.querySelector(".question-card");
    cardElement.dataset.cardId = card.id;

    // Set chapter labels
    let chapterText = card.label || "Chapter 1";
    const label = cardElement.querySelector(".chapter-label");

    const match = chapterText.match(/\d+/);
    const chapterNum = match ? parseInt(match[0]) : 1;
    label.className = `chapter-label chapter-label${chapterNum}`;
    label.textContent = chapterText;

    // Questions & Answers
    cardElement.querySelector(".question-text").textContent =
      card.question || "";
    const answerEl = cardElement.querySelector(".answer-text");
    answerEl.textContent = card.answer || "";
    answerEl.style.display = "none";

    // flip-btn
    const flipBtn = cardElement.querySelector(".flip-btn");
    // flipBtn.onclick = async () => {
    //   const isHidden = answerEl.style.display === "none";
    //   answerEl.style.display = isHidden ? "block" : "none";

    //   try {
    //     const logsRef = collection(db, "flipLogs");
    //     await addDoc(logsRef, {
    //       uid: currentUser.uid,
    //       cardId: card.id,
    //       timestamp: serverTimestamp(),
    //     });
    //     console.log("Flip logged for card:", card.id);
    //   } catch (error) {
    //     console.error("Error logging flip:", error);
    //   }
    // };

    // // Delete Button (Here you can connect to the actual deletion logic)
    const removeBtn = cardElement.querySelector(".remove-btn");
    removeBtn.onclick = async (event) => {
      event.stopPropagation();

      if (confirm("Are you sure you want to delete this card?")) {
        const cardElementToRemove = event.target.closest(".question-card");

        cardElementToRemove.classList.add("fade-out");

        try {
          const cardRef = doc(db, "cards", card.id);
          await deleteDoc(cardRef);
          console.log("Card deleted successfully");
        } catch (error) {
          console.error("Error deleting card:", error);
          alert("Failed to delete card. Please try again.");
          cardElementToRemove.classList.remove("fade-out");
        }
      }
    };
    container.appendChild(fragment);
  });
}
