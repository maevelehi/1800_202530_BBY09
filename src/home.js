document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ home.js loaded successfully");

  // Search function for filtering topics
  const searchForm = document.querySelector("form.d-flex");
  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const searchInput = this.querySelector('input[type="search"]');
      const searchTerm = searchInput.value.trim().toLowerCase();
      console.log("Searching for:", searchTerm);

      if (searchTerm) {
        const topicCards = document.querySelectorAll(".topic-card");
        let found = false;

        topicCards.forEach((card) => {
          const topicTitleElement = card.querySelector(".topic-title p");
          const topicTitle = topicTitleElement
            ? topicTitleElement.textContent.toLowerCase()
            : card.querySelector(".topic-title").textContent.toLowerCase();

          if (topicTitle.includes(searchTerm)) {
            card.style.display = "flex";
            found = true;
          } else {
            card.style.display = "none";
          }
        });

        if (!found) {
          alert("No matching topics found for: " + searchTerm);
        }
      } else {
        // If search box is empty, show all cards
        const topicCards = document.querySelectorAll(".topic-card");
        topicCards.forEach((card) => {
          card.style.display = "flex";
        });
      }
    });
  }

  // Click on topic cards to navigate to topic page
  const topicCards = document.querySelectorAll(".topic-card");
  topicCards.forEach((card, index) => {
    card.style.cursor = "pointer";

    card.addEventListener("click", function (e) {
      e.stopPropagation();
      console.log(`Topic ${index + 1} clicked`);

      // Navigate to topic page
      window.location.href = "topic.html";
    });
  });

  // Debug information
  console.log("Search form found:", !!searchForm);
  console.log("Topic cards found:", topicCards.length);
});
