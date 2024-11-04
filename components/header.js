// components/header.js

document.addEventListener('DOMContentLoaded', () => {
  const headerHTML = `
    <header>
        <h1>
        <a href='file:///C:/workspace/HearingPage/index.html'>タイトル</a>
        </h1>
        <nav id ='navbar'></nav>
    </header>
    `;
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
});
