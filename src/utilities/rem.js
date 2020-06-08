// 基准大小
const baseSize = 16;
// 設置rem函數
function setRem() {
  // 當前頁面寬度相對於375寬的縮放比例，可根據自己需要修改。
  const scale = document.documentElement.clientWidth / 768;
  // 設置頁面根基線字體大小
  document.documentElement.style.fontSize =
    baseSize * Math.min(Math.max(scale, 1), 1.5) + "px";
}
// 初始化
setRem();
// 改變窗口大小時重新設置 rem
window.onresize = function() {
  setRem();
};
