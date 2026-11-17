// 학습 진행률 저장 (브라우저 localStorage)
// 상태 값: "before" | "doing" | "done"  (Tag 컴포넌트와 같음)

const KEY = "gma-progress";
const TOTAL_STEPS = 5;

export function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) ?? {};
  } catch {
    return {};
  }
}

export function setStepStatus(step, status) {
  const data = getProgress();
  data[step] = status;
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    /* 저장 실패 시 무시 */
  }
}

export function countDone() {
  const data = getProgress();
  return { done: Object.values(data).filter((s) => s === "done").length, total: TOTAL_STEPS };
}
