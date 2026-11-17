# AIMaster (GMA+)

비전공 대학생을 위한 AI 사용법 안내 웹사이트입니다.
AI 기본 개념부터 심화 기능까지 5단계로 배우는 **AI 단계학습**과, 대학 생활 상황별로 AI 쓰는 법을 알려주는 **학업에 활용하기**로 구성됩니다.

- 기술 스택: HTML / CSS / JavaScript, 빌드 도구 Vite (멀티 페이지)
- 디자인: Figma `AIMASTER` › UI Design | 화면 설계

## 실행 방법

```bash
npm install -D vite   # 처음 한 번 (package.json에 vite가 추가됨)
npm run dev           # 개발 서버
npm run build         # 배포용 빌드 (dist/)
npm run preview       # 빌드 결과 미리보기
```

## 파일 구조

```
GMA-project-homepage/
├── README.md
├── package.json
├── vite.config.js             # 멀티 페이지 등록 (새 페이지 만들면 여기에도 추가)
├── index.html                 # PAGE 1. Home
├── pages/
│   ├── onboarding.html        # PAGE 0. 온보딩 (사용방법 + AI 윤리 지침)
│   ├── error.html             # PAGE 8. 에러
│   ├── learn/
│   │   ├── index.html         # PAGE 3. 단계학습 목록
│   │   ├── step1.html         # Step 1. AI 기본 개념 이해
│   │   ├── step2.html         # Step 2. AI 사용 방법
│   │   ├── step3.html         # Step 3. 프롬프트 기초
│   │   ├── step4.html         # Step 4. AI 결과 검증 및 평가
│   │   └── step5.html         # Step 5. AI 심화 기능 활용
│   └── study/
│       ├── index.html         # PAGE 6. 학업에 활용하기 목록
│       ├── writing.html       # 글쓰기 (대학 글쓰기·논문)
│       ├── math.html          # 수학 문제 풀이
│       └── lecture.html       # 강의 이해 (+ 퀴즈 만들기)
├── src/
│   ├── components/            # 공통 컴포넌트 (5개만)
│   │   ├── header.js
│   │   ├── footer.js
│   │   ├── button.js
│   │   ├── box.js
│   │   └── tag.js
│   ├── pages/                 # 페이지별 스크립트
│   │   ├── home.js
│   │   ├── onboarding.js
│   │   ├── error.js
│   │   ├── learn.js
│   │   ├── step.js            # step1~5 공통
│   │   ├── study.js
│   │   └── study-detail.js    # writing / math / lecture 공통
│   ├── styles/
│   │   ├── reset.css
│   │   ├── variables.css      # 색상·글꼴·간격
│   │   ├── components.css     # 공통 컴포넌트 스타일
│   │   └── pages/             # home, onboarding, error, learn, step, study
│   └── utils/
│       └── progress.js        # 학습 진행률 저장 (localStorage)
└── public/
    └── images/
        └── logo.png
```

## 공통 컴포넌트

공통 컴포넌트는 최대한 줄이기로 했습니다. 아래 5개만 공통으로 만들고, 나머지는 각 페이지에서 만듭니다.

| 컴포넌트 | 파일 | 변형(variant) | 쓰이는 곳 |
| --- | --- | --- | --- |
| Header | `header.js` | 현재 메뉴 표시(`data-active`: home / learn / study) | 전체 화면 |
| Footer | `footer.js` | 없음 | 전체 화면 |
| Button | `button.js` | `primary`(채움) / `outline`(테두리) / `small`(바로가기 ↗) | 거의 전체 화면 |
| Box | `box.js` | `default`(흰 배경 + 테두리) / `light`(연한 배경) | 섹션 카드, 예시 프롬프트, 윤리 지침 안내 등 |
| Tag | `tag.js` | `done`(학습 완료) / `doing`(진행 중) / `before`(학습 전) | 단계학습 목록 |

**공통으로 만들지 않는 것 (페이지 전용):** 단계 항목, 기능·분야 카드, 진행률 카드, 예시 프롬프트 블록, 추천 AI 카드, 온보딩 카드, 페이지 표시(점), 경로 표시, 오류 안내

## 페이지 구성

| 페이지 | 파일 | 내용 |
| --- | --- | --- |
| 온보딩 | `pages/onboarding.html` | 사용방법 슬라이드 + AI 윤리 지침 |
| Home | `index.html` | 서비스 소개 + 기능 카드 2개 |
| 단계학습 목록 | `pages/learn/index.html` | Step 1~5 목록, 상태 Tag, 내 진행률 |
| Step 상세 | `pages/learn/step1~5.html` | 소주제별 개념 설명 |
| 학업에 활용하기 목록 | `pages/study/index.html` | 분야 카드 3개 + 윤리 지침 안내 |
| 학업에 활용하기 상세 | `pages/study/writing·math·lecture.html` | ① 활용 상황 설명 → ② 활용 방법(Step + 예시 프롬프트, 주의사항·검증 방법) → ③ 추천 AI 도구 |
| 에러 | `pages/error.html` | 오류 안내 + 버튼 |

## 아직 정해야 할 것

- [ ] 학업에 활용하기 분야 확정 (지금은 노션 "후보 2" 기준: 글쓰기 / 수학 문제 풀이 / 강의 이해 — 피그마 카드 이름도 맞춰 바꿔야 함)
- [ ] 버튼 크기 몇 종류로 통일할지
- [ ] 색상·글꼴 값 (`variables.css`에 피그마 값 채우기)
- [ ] Footer 링크 이동 위치
- [ ] 온보딩 장 수 (피그마 4장 / 노션 3페이지 + 윤리 지침)
