document.addEventListener('click', function (event) {
  const content = document.querySelector('#finish-box');
  if (!content.contains(event.target)) {
    // 確保點擊的不是 finish-box 區域內
    window.location.href = './main.jsx'; // 導向首頁
  }
});