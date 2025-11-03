// src/addcard.js
// 依赖：PapaParse 用于解析 CSV（通过 CDN 全局 Papa）
// HTML 要有：按钮（id 或 data-action="upload-csv"）和隐藏的 <input id="csvInput">

import { db, auth } from "./firebaseConfig.js";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Utility: 读取 DOM 节点
const uploadCsvBtn = document.querySelector('[data-action="upload-csv"]');
const csvInput = document.getElementById("csvInput");
// 显示卡片列表的容器（你的 HTML 使用 .questions-list）
const questionsList = document.querySelector(".questions-list");

// 检查 PapaParse 是否可用（如果你通过 CDN 引入了 papaparse）
if (typeof Papa === "undefined") {
  console.warn("PapaParse 未找到，请在 HTML 中通过 CDN 加入 papaparse（推荐）");
}

// 点击 Upload CSV 按钮时触发 file input
if (uploadCsvBtn && csvInput) {
  uploadCsvBtn.addEventListener("click", () => {
    csvInput.click();
  });
}

// 处理文件选择
if (csvInput) {
  csvInput.addEventListener("change", async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    try {
      // 1) 确认当前用户（建议使用 Authentication 登录）
      const user = auth.currentUser;
      if (!user) {
        alert("请先登录账号再上传（需要 Authentication 支持）。");
        // 你也可以在这里弹出登录对话或跳转到登录页
        return;
      }
      const uid = user.uid;
      // 如果想把 user displayName 作为 CreatedBy：
      const createdBy = user.displayName || user.email || uid;

      // 2) 解析 CSV（使用 Papa.parse）
      const results = await parseCsvFile(file);
      // results 是数组，每项是对象（基于 header）
      if (!results.length) {
        alert("CSV 没有数据行。");
        return;
      }

      // 3) 对每一行做必要清理，并写入 Firestore
      // 我们把卡片写到 Users/{uid}/Cards
      const cardsCol = (uid) => collection(db, "Users", uid, "Cards");

      let count = 0;
      for (const row of results) {
        // 尝试从不同的表头名读取（更宽松）
        const question = (row.Question || row.question || "").trim();
        const answer = (row.Answer || row.answer || "").trim();
        if (!question && !answer) continue; // 忽略空行

        const topic = (row.Topic || row.topic || "").trim() || null;
        const chapter = (row.Chapter || row.chapter || "").trim() || null;
        const group = (row.Group || row.group || "").trim() || null;

        const data = {
          Question: question,
          Answer: answer,
          Topic: topic,
          Chapter: chapter,
          Group: group,
          CreatedBy: createdBy,
          createdAt: serverTimestamp(),
        };

        // 写入 Firestore（每行一个文档）
        await addDoc(cardsCol(uid), data);
        count++;
        // 为了简单代码写法，我们没有实现批量/并发控制
      }

      alert(`上传完成：成功写入 ${count} 条卡片（Users/${uid}/Cards）`);
      // 选项：清空输入
      csvInput.value = "";

      // 4) 可选：把新卡片也即时渲染到界面（如果页面有实时监听也不用）
      // 这里我们简单地再次渲染一次 CSV 中的内容（不依赖监听）
      renderCardsFromArray(results, createdBy);
    } catch (err) {
      console.error(err);
      alert("上传失败：" + err.message);
    }
  });
}

// Helper: 用 Papa.parse 解析文件，返回 Promise<array>
function parseCsvFile(file) {
  return new Promise((resolve, reject) => {
    if (typeof Papa === "undefined") {
      reject(
        new Error(
          "PapaParse 未加载。请在 HTML 中引入 https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.4.1/papaparse.min.js"
        )
      );
      return;
    }
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => resolve(results.data),
      error: (err) => reject(err),
    });
  });
}

// Helper: 把解析后的数组渲染到页面（追加形式）
// 注意：如果你的页面已经用 Firestore 的实时监听显示卡片，渲染会重复。
// 这是为了立即看到效果（临时），生产中建议依靠 collectionGroup 的实时监听。
function renderCardsFromArray(arr, createdBy) {
  if (!questionsList) return;
  for (const row of arr) {
    const question = (row.Question || row.question || "").trim();
    const answer = (row.Answer || row.answer || "").trim();
    if (!question && !answer) continue;
    const topic = (row.Topic || row.topic || "").trim() || "";
    const chapter = (row.Chapter || row.chapter || "").trim() || "";
    const group = (row.Group || row.group || "").trim() || "";

    const cardEl = document.createElement("div");
    cardEl.className = "question-card";

    const chapterLabel = document.createElement("div");
    chapterLabel.className = "chapter-label";
    chapterLabel.textContent = chapter ? `Chapter ${chapter}` : "";

    const qP = document.createElement("p");
    qP.textContent = `Q: ${question}`;

    const flipBtn = document.createElement("button");
    flipBtn.className = "flip-btn";
    flipBtn.textContent = "Flip";
    // 简单 flip 行为：显示 answer 弹窗（你可以改成正反面切换）
    flipBtn.addEventListener("click", () => {
      alert(`A: ${answer}`);
    });

    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = `Topic: ${topic} | Group: ${group} | CreatedBy: ${createdBy}`;

    cardEl.appendChild(chapterLabel);
    cardEl.appendChild(qP);
    cardEl.appendChild(flipBtn);
    cardEl.appendChild(meta);

    questionsList.prepend(cardEl); // 新卡片放在最前面
  }
}
