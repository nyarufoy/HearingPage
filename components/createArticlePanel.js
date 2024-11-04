// createArticlePanel.js
window.createArticlePanel = function (article) {
  const articlePanel = document.createElement('div');
  articlePanel.classList.add('article-panel');

  const link = document.createElement('a');
  link.href = article.articleUrl;
  link.target = '_blank';

  const image = document.createElement('img');
  image.src = article.imgSrc;
  image.alt = article.title;

  const PanelContent = document.createElement('div');
  PanelContent.classList.add('panel-content');

  const title = document.createElement('h3');
  title.textContent = article.title;

  const summary = document.createElement('p');
  summary.textContent = article.summary;

  link.appendChild(image);
  PanelContent.appendChild(title);
  PanelContent.appendChild(summary);
  link.appendChild(PanelContent);
  articlePanel.appendChild(link);

  return articlePanel;
};
