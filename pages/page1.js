import { createArticlePanel } from '../components/createArticlePanel.js';
import { articles } from '../articles.js'; // articles.js ファイルをインポート

document.addEventListener('DOMContentLoaded', () => {
  const articleGrid = document.getElementById('articleGrid');

  displayArticles(articles);

  function displayArticles(articles) {
    articleGrid.innerHTML = ''; // 既存の内容をクリア

    articles.forEach((article) => {
      const articlePanel = createArticlePanel(article);
      articleGrid.appendChild(articlePanel);
    });
  }
});
