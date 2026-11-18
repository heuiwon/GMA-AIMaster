// 모든 페이지가 공통으로 실행하는 스크립트
// - 헤더 · 푸터 그리기
// - 예시 프롬프트 "복사하기" 버튼 연결 (data-copy 가 붙은 버튼)
// 페이지 스크립트(src/pages/*.js) 맨 위에서 import "../common.js"; 한 줄만 쓰면 됨

import { renderHeader } from "./components/header.js";
import { renderFooter } from "./components/footer.js";

renderHeader();
renderFooter();
initCopyButtons();

// 복사하기: 버튼과 같은 .prompt-box 안의 .prompt-box__text 글자를 복사
function initCopyButtons() {
  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const box = button.closest(".prompt-box");
      const text = box?.querySelector(".prompt-box__text")?.innerText ?? "";
      const original = button.textContent;
      try {
        await navigator.clipboard.writeText(text);
        button.textContent = "복사됨!";
      } catch {
        button.textContent = "복사 실패";
      }
      setTimeout(() => {
        button.textContent = original;
      }, 1500);
    });
  });
}
