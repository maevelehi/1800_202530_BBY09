import { db } from "./firebaseConfig.js";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { onAuthReady } from "./authentication.js";
import { dateIdFromDate } from "./utils.js";

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

async function fetchUserHistoryFor7Days(uid) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const start = new Date(today);
  start.setDate(today.getDate() - 6); 

  const historyRef = collection(db, "users", uid, "history");
  // Firestore timestamps are stored in `date` field (serverTimestamp), so query on that
  const q = query(historyRef, where("date", ">=", start), orderBy("date", "asc"));
  const snap = await getDocs(q);
  // Map to { id: docId (YYYY-MM-DD), date: Date, count: number }
  return snap.docs.map((d) => {
    const data = d.data();
    const dateField = data.date?.toDate ? data.date.toDate() : data.date ? new Date(data.date) : new Date(d.id);
    return { id: d.id, date: dateField, count: data.count || 0 };
  });
}


function build7DayCountsFromHistory(historyDocs) {
  // Build array of 7 date strings (YYYY-MM-DD) from start -> today
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const start = new Date(today);
  start.setDate(today.getDate() - 6);

  const dayIds = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`; // same format as stored doc IDs
  });

  const counts = Array(7).fill(0);
  historyDocs.forEach((doc) => {
    const idx = dayIds.indexOf(doc.id); // doc.id should be YYYY-MM-DD
    if (idx !== -1) counts[idx] = doc.count || 0;
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
  const isAbove = percent >= 0;

  const icon = isAbove ? "⭐" : "⚠️"; 

  document.getElementById(
    "weekly-stats"
  ).textContent = `${icon} You’re ${Math.abs(percent)}% ${
    isAbove ? "above" : "below"
  } your weekly average!`;
}

function renderDayLabels() {
  const today = new Date();
  const start = new Date(today);
  start.setDate(today.getDate() - 6);

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const labels = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    return dayNames[d.getDay()];
  });

  const dayDivs = document.querySelectorAll(".chart-days div");
  dayDivs.forEach((div, i) => {
    div.textContent = labels[i];
  });
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
    if (streak >= 5) {
      streakImg.src = "images/study.png";
      streakImg.alt = "You've been unstoppable!";
    } else if (streak >= 4) {
      streakImg.src = "images/aladin.png";
      streakImg.alt = "Good streak!";
    } else if (streak >= 3) {
      streakImg.src = "images/research.png";
      streakImg.alt = "Good streak!";
    } else if (streak >= 2) {
      streakImg.src = "images/mountain.png";
      streakImg.alt = "Good streak!";
    } else {
      streakImg.src = "images/graph.png";
      streakImg.alt = "Start your streak!";
    }
  }
}

async function loadProgressForUser(uid) {
  const historyDocs = await fetchUserHistoryFor7Days(uid);
  const counts = build7DayCountsFromHistory(historyDocs);
  renderChartAndStats(counts);
  renderStreakAndMotivation(counts);
  renderDayLabels();
}
