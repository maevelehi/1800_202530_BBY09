// navigation.js
document.addEventListener("DOMContentLoaded", function () {
  // Get the button by ID
  const addCardBtn = document.getElementById("addCardsManually");

  if (addCardBtn) {
    addCardBtn.addEventListener("click", function () {
      window.location.href = "create-card.html";
    });
  }
});
