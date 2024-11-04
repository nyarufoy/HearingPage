// displayArticle.js
window.displayArticles = function (articles) {
  const articleGrid = document.getElementById('articleGrid');
  articleGrid.innerHTML = '';
  articles.forEach((article) => {
    const articlePanel = window.createArticlePanel(article);
    articleGrid.appendChild(articlePanel);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  window.displayArticles(window.articles);
});
