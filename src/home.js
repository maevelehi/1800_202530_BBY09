document.addEventListener("DOMContentLoaded", function () {
  // Function 1: Press the Home button to return to the home page
  const homeButtons = document.querySelectorAll(".navbar-brand");

  homeButtons.forEach((button) => {
    if (
      button.querySelector("small") &&
      button.querySelector("small").textContent === "Home"
    ) {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        // Jump to the homepage - Use the correct file name
        window.location.href = "bootstrapHome.html";
      });
    }
  });

  // Function 2: Search Function
  const searchForm = document.querySelector("form.d-flex");
  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const searchInput = this.querySelector('input[type="search"]');
      const searchTerm = searchInput.value.trim().toLowerCase();

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
          alert("没有找到匹配的topic: " + searchTerm);
        }
      } else {
        const topicCards = document.querySelectorAll(".topic-card");
        topicCards.forEach((card) => {
          card.style.display = "flex";
        });
      }
    });
  }

  // Function 3: Click on topic to enter the topic page - Use the correct file name
  const topicCards = document.querySelectorAll(".topic-card");
  topicCards.forEach((card, index) => {
    card.style.cursor = "pointer";

    card.addEventListener("click", function () {
      // Jump to the topic page - Use the correct file name
      window.location.href = "bootstrapTopic.html";
    });
  });
});
