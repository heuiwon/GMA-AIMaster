// 공통 컴포넌트: Button
// variant
// - "primary" : 파란색 채움 (이어서 학습하기, 복사하기)
// - "outline" : 테두리만 (학습하기, 다시 보기, 바로가기)
// - "small"   : 작은 테두리 버튼 (추천 AI 바로가기 ↗)
// TODO: 버튼 크기 몇 종류로 통일할지 팀 결정 필요

export function createButton({ label, variant = "primary", href, onClick } = {}) {
  const el = document.createElement(href ? "a" : "button");
  el.className = `btn btn--${variant}`;
  el.textContent = label;
  if (href) el.href = href;
  else el.type = "button";
  if (onClick) el.addEventListener("click", onClick);
  return el;
}
