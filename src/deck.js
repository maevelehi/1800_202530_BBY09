// home.js
document.addEventListener("DOMContentLoaded", function () {
  // 获取Add Topic按钮
  const addTopicBtn = document.querySelector(".add-topic-btn");

  // 为Add Topic按钮添加点击事件
  addTopicBtn.addEventListener("click", function () {
    // 导航到创建卡片的页面
    window.location.href = "./create-card.html"; // 或者您实际的页面路径
  });

  // 可选：为现有的topic卡片添加点击事件
  const topicCards = document.querySelectorAll(".topic-card");
  topicCards.forEach((card) => {
    card.addEventListener("click", function () {
      const topicTitle = this.querySelector(".topic-title").textContent;
      // 导航到该topic的详情页面
      window.location.href = `./topic-detail.html?topic=${encodeURIComponent(
        topicTitle
      )}`;
    });
  });
});
