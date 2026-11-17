// 공통 컴포넌트: Footer
// - 링크 4개 + © 2026 GMA+
// TODO: 각 링크의 이동 위치는 아직 미정 (노션 자료 조사에서 footer 내용 "?" 상태)

const LINKS = ["서비스 소개", "이용 안내", "개인정보 처리방침", "문의하기"];

export function renderFooter(target = document.getElementById("footer")) {
  if (!target) return;
  target.className = "footer";
  target.innerHTML = `
    <nav class="footer__links">${LINKS.map((l) => `<a href="#">${l}</a>`).join("")}</nav>
    <p class="footer__copy">© 2026 GMA+</p>`;
}
