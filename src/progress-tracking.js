import { db } from "./firebaseConfig.js";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { onAuthReady } from "./authentication.js";

document.addEventListener("DOMContentLoaded", () => {
  const backButton = document.getElementById("backBtnProgress");
  if (backButton) {
    backButton.addEventListener("click", (e) => {
      e.preventDefault(); 
      window.history.back();
    });
  }
});

onAuthReady(async (user) => {
  if (!user) return;
  await loadProgressForUser(user.uid);
});

// Fetch all flips by this user, ordered by time
async function fetchUserFlips(uid) {
  const logsRef = collection(db, "flipLogs");
  const q = query(
    logsRef,
    where("uid", "==", uid),
    orderBy("timestamp", "asc")
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

// Build array of counts for the past 7 days (today last)
function build7DayCountsFromLogs(logs) {
  const today = new Date();
  const start = new Date(today);
  start.setDate(today.getDate() - 6);

  // Initialize array of 7 days as strings
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    return d.toDateString();
  });

  const counts = Array(7).fill(0);

  logs.forEach((log) => {
    const ts = log.timestamp?.toDate
      ? log.timestamp.toDate()
      : new Date(log.timestamp); // fallback to Date
    if (!ts) return;

    // Find index in 7-day array
    const idx = days.findIndex(
      (d) => new Date(d).toDateString() === ts.toDateString()
    );
    if (idx !== -1) counts[idx] += 1; // increment flips for that day
  });

  return counts;
}

function renderChartAndStats(counts) {
  const cols = Array.from(document.querySelectorAll(".chart-column"));
  const max = Math.max(...counts, 1); // prevent division by zero

  // Scale each column based on max flips
  cols.forEach((col, i) => {
    const pct = (counts[i] / max) * 100;
    col.style.height = pct + "%";
    const span = col.querySelector("span");
    if (span) span.textContent = counts[i];
    col.classList.toggle("today", i === 6);
  });

  const today = counts[6];

  // Compute daily average ignoring zero-flip days
  const validCounts = counts.filter((count) => count > 0);
  const daysWithData = validCounts.length || 1;

  const avg = Math.round(validCounts.reduce((a, b) => a + b, 0) / daysWithData);

  document.getElementById("today-count").textContent = today;
  document.getElementById("average-count").textContent = avg;

  const percent = avg ? Math.round(((today - avg) / avg) * 100) : 0;
  const isAbove = percent >= 0;

  const icon = isAbove ? "⭐" : "⚠️";

  document.getElementById(
    "weekly-stats"
  ).textContent = `${icon} You’re ${Math.abs(percent)}% ${
    isAbove ? "above" : "below"
  } your daily average!`;
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

// Compute consecutive-day streak ending today
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
  const logs = await fetchUserFlips(uid);
  const counts = build7DayCountsFromLogs(logs);
  renderChartAndStats(counts);
  renderStreakAndMotivation(counts);
  renderDayLabels();
}
