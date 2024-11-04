// components/navbar.js

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const links = [
    {
      href: 'file:///C:/workspace/HearingPage/pages/page1.html',
      text: 'Page1',
    },
    {
      href: '',
      text: 'Page2',
    },
    {
      href: '',
      text: 'Page3',
    },
    {
      href: '',
      text: 'Page4',
    },
  ];
  for (const link of links) {
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    navbar.appendChild(a);
  }
});
