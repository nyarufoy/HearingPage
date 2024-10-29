// components/header.js

document.addEventListener('DOMContentLoaded', () => {
  const headerHTML = `
    <header>
        <h1>
        <a href='../index.html'>タイトル</a>
        </h1>
        <nav id ='navbar'></nav>
    </header>
    `;
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
});
