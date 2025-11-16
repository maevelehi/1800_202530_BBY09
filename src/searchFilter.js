// src/searchFilter.js
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "./firebaseConfig.js";

let allCards = [];
let topicsData = {}; // { topic: [chapters] }
let selectedTopic = "";
let selectedChapter = "";

// Entry point – call this from your app with the current userGroup
export function initSearchFilter(userGroup) {
  console.log("Initialize the filtering function, user group:", userGroup);
  initFilterControls();
  loadCardsData(userGroup);
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
    console.log("📖 选择 Chapter:", selectedChapter);
    applyFilter();
  });

  // Clear the filter
  clearBtn.addEventListener("click", () => {
    console.log("🧹 清除筛选");

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
      可用卡片数: allCards.length,
      发现的Topic数量: Object.keys(topicsData).length,
      Topic结构: topicsData,
    });

    // 渲染 Topic 下拉选项
    populateTopicSelect();

    // 初始显示所有卡片
    applyFilter();
  });
}

/* ==================== 下拉选项渲染 ==================== */

function populateTopicSelect() {
  const topicSelect = document.getElementById("topicFilter");
  if (!topicSelect) return;

  // 保留第一个“Select Topic”选项，移除其他
  topicSelect.innerHTML = `<option value="">Select Topic</option>`;

  Object.keys(topicsData)
    .sort()
    .forEach((topic) => {
      const option = document.createElement("option");
      option.value = topic;
      option.textContent = topic;
      topicSelect.appendChild(option);
    });

  console.log("🎨 Topic 下拉渲染完成");
}

function populateChapterSelect(topic) {
  const chapterSelect = document.getElementById("chapterFilter");
  if (!chapterSelect) return;

  const chapters = topicsData[topic] || [];
  console.log(`📖 渲染 ${topic} 的章节列表:`, chapters);

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

/* ==================== 筛选与渲染卡片 ==================== */

function applyFilter() {
  const container = document.getElementById("cards-go-here");
  if (!container) return;

  let filteredCards = allCards;

  console.log("🔍 应用筛选:", {
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
  // 如果什么都没选，保持 allCards

  console.log("📋 筛选结果:", {
    总卡片数: allCards.length,
    筛选后: filteredCards.length,
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
        <p>没有找到匹配的卡片</p>
      </div>
    `;
    return;
  }

  cards.forEach((card) => {
    const fragment = template.content.cloneNode(true);
    const cardElement = fragment.querySelector(".question-card");
    cardElement.dataset.cardId = card.id;

    // 设置章节标签
    let chapterText = card.label || "Chapter 1";
    const label = cardElement.querySelector(".chapter-label");

    const match = chapterText.match(/\d+/);
    const chapterNum = match ? parseInt(match[0]) : 1;
    label.className = `chapter-label chapter-label${chapterNum}`;
    label.textContent = chapterText;

    // 问题 & 答案
    cardElement.querySelector(".question-text").textContent =
      card.question || "";
    const answerEl = cardElement.querySelector(".answer-text");
    answerEl.textContent = card.answer || "";
    answerEl.style.display = "none";

    // 翻转按钮
    const flipBtn = cardElement.querySelector(".flip-btn");
    flipBtn.onclick = () => {
      const isHidden = answerEl.style.display === "none";
      answerEl.style.display = isHidden ? "block" : "none";
    };

    // 删除按钮（这里你可以接上实际删除逻辑）
    const removeBtn = cardElement.querySelector(".remove-btn");
    removeBtn.onclick = async () => {
      if (confirm("确定要删除这张卡片吗？")) {
        console.log("删除卡片:", card.id);
        // TODO: 调用 Firestore 删除文档
      }
    };

    container.appendChild(fragment);
  });
}
