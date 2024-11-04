document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  const articleGrid = document.getElementById('articleGrid');

  // フィルタリングされた記事を表示
  function displayFilteredArticles(searchText) {
    const filteredArticles = articles.filter((article) =>
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchText.toLowerCase())
      )
    );
    displayArticles(filteredArticles);
  }

  // 記事を表示する関数
  function displayArticles(articlesToDisplay) {
    articleGrid.innerHTML = ''; // 既存のコンテンツをクリア

    articlesToDisplay.forEach((article) => {
      const articlePanel = createArticlePanel(article);
      articleGrid.appendChild(articlePanel);
    });
  }

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchText = searchInput.value.trim().toLowerCase();
    displayFilteredArticles(searchText);
  });

  searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.trim().toLowerCase();
    displayFilteredArticles(searchText);
  });
});
