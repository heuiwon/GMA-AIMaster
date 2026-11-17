// 공통 컴포넌트: Header
// - 로고 + 메뉴 3개(홈 / 단계별 학습 / 학업에 활용하기)
// - <header id="header" data-active="home|learn|study"> 의 data-active 값으로 현재 메뉴에 밑줄 표시

const MENUS = [
  { key: "home", label: "홈", href: "/index.html" },
  { key: "learn", label: "단계별 학습", href: "/pages/learn/index.html" },
  { key: "study", label: "학업에 활용하기", href: "/pages/study/index.html" },
];

export function renderHeader(target = document.getElementById("header")) {
  if (!target) return;
  const active = target.dataset.active;
  target.className = "header";
  target.innerHTML = `
    <a class="header__logo" href="/index.html"><img src="/images/logo.png" alt="AIMaster" /></a>
    <nav class="header__nav">
      ${MENUS.map((m) => `<a class="header__link${m.key === active ? " is-active" : ""}" href="${m.href}">${m.label}</a>`).join("")}
    </nav>`;
}
