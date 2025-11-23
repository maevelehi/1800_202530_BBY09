// home.js
document.addEventListener("DOMContentLoaded", function () {
  const addTopicBtn = document.querySelector(".add-topic-btn");

  addTopicBtn.addEventListener("click", function () {
    window.location.href = "./create-card.html"; 
  });

  const topicCards = document.querySelectorAll(".topic-card");
  topicCards.forEach((card) => {
    card.addEventListener("click", function () {
      const topicTitle = this.querySelector(".topic-title").textContent;
      window.location.href = `./topic-detail.html?topic=${encodeURIComponent(
        topicTitle
      )}`;
    });
  });
});
