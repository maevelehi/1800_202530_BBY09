import { initCSVUpload, displayCardsFromFirestore } from "./csvUpload.js";


function initializeApp() {
  initCSVUpload();
}

document.addEventListener("DOMContentLoaded", initializeApp);
