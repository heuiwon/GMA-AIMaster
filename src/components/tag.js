// 공통 컴포넌트: Tag (학습 상태 표시)
// status
// - "done"   : 학습 완료
// - "doing"  : 진행 중
// - "before" : 학습 전

const LABELS = { done: "학습 완료", doing: "진행 중", before: "학습 전" };

export function createTag(status = "before") {
  const el = document.createElement("span");
  el.className = `tag tag--${status}`;
  el.textContent = LABELS[status] ?? LABELS.before;
  return el;
}
