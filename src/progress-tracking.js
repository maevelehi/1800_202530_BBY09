import { db } from "./firebaseConfig.js";
import { collection, getDocs, query, where, orderBy, serverTimestamp  } from "firebase/firestore";
import { onAuthReady } from "./authentication.js";

document.addEventListener("DOMContentLoaded", () => {
  const backButton = document.getElementById("backBtnProgress");
  if (backButton) {
    backButton.addEventListener("click", (e) => {
      e.preventDefault(); // prevent form submit
      window.history.back();
    });
  }
});

// entry
onAuthReady(async (user) => {
  if (!user) return;
  await loadProgressForUser(user.uid);
});

// helper to fetch flip cards in 14 days
// async function fetchFlippedCards(uid) {
//   const cardsRef = collection(db, "cards");
//   // get all user's cards; we'll filter by lastFlipped in JS
//   // const q = query(cardsRef, where("createdBy", "==", uid));
//   const q = query(cardsRef); // fetch ALL cards
//   const snap = await getDocs(q);
//   return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
// }

async function fetchUserFlips(uid) {
  const logsRef = collection(db, "flipLogs");
  const q = query(logsRef, where("uid", "==", uid), orderBy("timestamp", "asc"));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// function build7DayCounts(cards) {
//   const today = new Date();
//   const start = new Date(today);
//   start.setDate(today.getDate() - 6);
//   const days = Array.from({ length: 7 }, (_, i) => {
//     const d = new Date(start);
//     d.setDate(start.getDate() + i);
//     return d.toDateString();
//   });
//   const counts = Array(7).fill(0);

//   cards.forEach((card) => {
//     const flipCount = card.flipCount || 0;
//     const lastFlipped = card.lastFlipped
//       ? card.lastFlipped.toDate
//         ? card.lastFlipped.toDate()
//         : new Date(card.lastFlipped)
//       : null;
//     if (!lastFlipped) return;
//     // if multi flips across days (flipCount is total), we treat lastFlipped as indicator of day;
//     // better accuracy requires per-flip logs — but this uses lastFlipped as most recent day.
//     const idx = days.findIndex(
//       (d) => new Date(d).toDateString() === lastFlipped.toDateString()
//     );
//     if (idx !== -1) counts[idx] += flipCount; // sum flipCount to that lastFlipped day
//   });

//   return counts;
// }

function build7DayCountsFromLogs(logs) {
  const today = new Date();
  const start = new Date(today);
  start.setDate(today.getDate() - 6);

  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    return d.toDateString();
  });

  const counts = Array(7).fill(0);

  logs.forEach(log => {
    const ts = log.timestamp?.toDate ? log.timestamp.toDate() : new Date(log.timestamp);
    if (!ts) return;
    const idx = days.findIndex(d => new Date(d).toDateString() === ts.toDateString());
    if (idx !== -1) counts[idx] += 1; // each log = 1 flip
  });

  return counts;
}


function renderChartAndStats(counts) {
  const cols = Array.from(document.querySelectorAll(".chart-column"));
  const max = Math.max(...counts, 1);
  cols.forEach((col, i) => {
    const pct = (counts[i] / max) * 100;
    col.style.height = pct + "%";
    const span = col.querySelector("span");
    if (span) span.textContent = counts[i];
    col.classList.toggle("today", i === 6);
  });

  const today = counts[6];
  const avg = Math.round(counts.reduce((a, b) => a + b, 0) / 7);
  document.getElementById("today-count").textContent = today;
  document.getElementById("average-count").textContent = avg;
  const percent = avg ? Math.round(((today - avg) / avg) * 100) : 0;
  document.getElementById("weekly-stats").textContent = `⭐ You’re ${Math.abs(
    percent
  )}% ${percent >= 0 ? "above" : "below"} your weekly average!`;
}

function computeStreak(counts) {
  let streak = 0;
  for (let i = 6; i >= 0; i--) {
    if (counts[i] > 0) streak++;
    else break;
  }
  return streak;
}

function renderStreakAndMotivation(counts) {
  const streak = computeStreak(counts);
  document.getElementById(
    "streak-count"
  ).textContent = `🔥 ${streak}-Day Streak!`;
  document.getElementById("streak-msg").textContent =
    streak > 0
      ? "Keep going, consistency is key!"
      : "Start today and build your streak!";

  // Dynamically change image based on streak
  const streakImg = document.querySelector(".streak-card img");
  if (streakImg) {
    if (streak >= 50) {
      streakImg.src = "images/study.png";
      streakImg.alt = "You've been unstoppable!";
    } else if (streak >= 40) {
      streakImg.src = "images/aladin.png";
      streakImg.alt = "Good streak!";
    } else if (streak >= 30) {
      streakImg.src = "images/research.png";
      streakImg.alt = "Good streak!";
    } else if (streak >= 20) {
      streakImg.src = "images/mountain.png";
      streakImg.alt = "Good streak!";
    } else {
      streakImg.src = "images/graph.png";
      streakImg.alt = "Start your streak!";
    }
  }
}

// async function loadProgressForUser(uid) {
//   const cards = await fetchFlippedCards(uid);
//   const counts = build7DayCounts(cards);
//   renderChartAndStats(counts);
//   renderStreakAndMotivation(counts);
// }

async function loadProgressForUser(uid) {
  const logs = await fetchUserFlips(uid);
  const counts = build7DayCountsFromLogs(logs);
  renderChartAndStats(counts);
  renderStreakAndMotivation(counts);
}
