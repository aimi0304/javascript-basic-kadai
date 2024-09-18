// HTML要素を取得し、変数に代入
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// HTML要素がクリックされた2秒後にイベント処理を実行
btn.addEventListener('click', setTimeout(() => {
    text.textContent = 'ボタンをクリックしました'
}, 2000));