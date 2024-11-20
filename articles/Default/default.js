// ヒアリング項目の設定
const hearingItems = [
  { id: 'issue', label: '1. 不具合事象' },
  { id: 'location', label: '2. 拠点' },
  { id: 'date', label: '3. 事象発生日' },
  { id: 'status', label: '4. 現在の状態' },
  { id: 'device', label: '5. 対象端末(有線/無線)' },
  { id: 'trigger', label: '6. きっかけ(お客さま作業有無)' },
  { id: 'contact', label: '7. 折り返し先' },
];

// フォームを動的に生成
const formContainer = document.getElementById('dynamicForm');
hearingItems.forEach((item) => {
  const label = document.createElement('label');
  label.textContent = item.label;

  const textarea = document.createElement('textarea');
  textarea.id = item.id;
  textarea.rows = 2;

  formContainer.appendChild(label);
  formContainer.appendChild(textarea);
});

// 内容を反映
document.getElementById('reflectButton').addEventListener('click', () => {
  const outputLines = hearingItems.map((item) => {
    const value = document.getElementById(item.id).value.trim();
    return `${item.label}: ${value}`;
  });

  document.getElementById('output').value = outputLines.join('\n');
});

// コピー機能
document.getElementById('copyButton').addEventListener('click', () => {
  const output = document.getElementById('output');
  output.select();
  document.execCommand('copy');
  alert('コピーしました！');
});

// 内容クリア
document.getElementById('clearButton').addEventListener('click', () => {
  document.getElementById('output').value = '';
});
