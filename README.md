# 📝 **콘스탄트 과제**

- Next.js & Typescript를 이용하여 진행했습니다.
- SCSS를 이용하여 UI 디자인 작업을 했습니다.
- ContextAPI를 활용하여 Clent State를 글로벌로 관리 했습니다.
- React-query를 활용하여 Server State를 관리 했습니다.

<br />

## 🔑 **프로젝트 실행방법**

```
1. package 설치
npm i

2. 실행
npm run dev
```

<br />

## 🌈 기술 스택

- **Next.js**
- **Typescript**
- **ContextAPI**
- **React-query**
- **SCSS**

  <br />

## ✳️ 중요사항 (6 / 6 완료)

- [x] Next.js 사용
- [x] SCSS 사용
- [x] Noto Sans KR 폰트 사용
- [x] redux / redux-toolkit / react-query 중 최소 1개 사용
- [x] Github public 설정
- [x] main, feature/test 2개의 브랜치 사용 및 PR

<br />

## ✅ TODO
- 

<br />

## 🗂️ 폴더 구조

```
├── components
│   ├── CartFooter
│   │   ├── index.tsx
│   │   └── styles.module.scss
│   ├── CartItem
│   │   ├── index.tsx
│   │   └── styles.module.scss
│   ├── CartItemsSection
│   │   ├── index.tsx
│   │   └── styles.module.scss
│   ├── Content
│   │   ├── index.tsx
│   │   └── styles.module.scss
│   ├── Header
│   │   ├── index.tsx
│   │   └── styles.module.scss
│   ├── Layout
│   │   ├── IndexPage.tsx
│   │   ├── index.tsx
│   │   └── styles.module.scss
│   ├── LeftSide
│   │   ├── index.tsx
│   │   └── styles.module.scss
│   ├── ModalLayout
│   │   ├── index.tsx
│   │   └── styles.module.scss
│   ├── OptionSelector
│   │   ├── index.tsx
│   │   └── styles.module.scss
│   ├── RightSide
│   │   ├── index.tsx
│   │   └── styles.module.scss
│   ├── ShopItem
│   │   ├── index.tsx
│   │   └── styles.module.scss
│   └── ShopItemsSection
│       ├── index.tsx
│       └── styles.module.scss
├── context
│   ├── CartItemsContext.tsx
│   └── ModalContext.tsx
├── lib
│   ├── api
│   │   ├── index.ts
│   │   └── queryClient.ts
│   └── hooks
│       ├── useCart.ts
│       └── useModal.ts
├── pages
│   ├── 404.tsx
│   ├── _app.tsx
│   ├── cart
│   │   └── index.tsx
│   ├── index.tsx
│   ├── page.module.css
│   └── shop
```