import { onAuthReady } from "./authentication.js";
import { initCSVUpload, displayCardsFromFirestore } from "./csvUpload.js";
import { db } from "./firebaseConfig.js";
import { doc, getDoc } from "firebase/firestore";

function initializeApp() {
  initCSVUpload();
}

document.addEventListener("DOMContentLoaded", initializeApp);
