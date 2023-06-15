# 📝 **콘스탄트 과제**

- Next.js & Typescript를 이용하여 진행했습니다.
- SCSS를 이용하여 UI 디자인 작업을 했습니다.
- ContextAPI를 활용하여 Clent State를 글로벌로 관리 했습니다. -> **redux, redux-toolkit로 마이그레이션 진행**
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
- ContextAPI -> **Redux, RTK, redux-persist 마이그레이션**
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

### **기본 설정**
- prettier / eslint / stylelint 설정
- redux / redux-persist / react-query provider 설정
- next.config.js 설정
  - rewrite을 이용한 cors 우회
  - 이미지 최적화(next/image 사용)를 위한 remotePatterns 설정
- 디스플레이 width 375px을 기준으로 반응형 css 작업
### **제품 리스트(`/shop`) 페이지**
- 제품 클릭 시 모달 구현
- 모달 내 상품 옵션 여부에 따른 select 문구 변경
- 모달 내 장바구니 담기 클릭 시 장바구니(`/cart`) 페이지에 해당 제품 추가
- grid css 작업
### **장바구니(`/cart`) 페이지**
- 장바구니 페이지(`/cart`)에서 X 버튼 클릭 시 해당 제품 삭제
- 총 아이템 개수 및 가격 하단에 표시(각 price의 합)
- Header, Footer 고정으로 장바구니 리스트 스크롤 적용

<br />

## ⚠️ Note
- Typescript를 사용하여 컴파일 시 정적 타입을 검사함으로써 런타임시 발생할 수 있는 에러를 사전에 방지할 수 있습니다.
- 처음에 contextAPI를 이용하여 전역 상태 관리를 진행했다가 불필요한 re-rendering 이슈로 redux / RTK / redux-persist로 마이그레이션을 진행했습니다.
- 커스텀 훅(useModal, useCart)을 사용하여 redux 상태를 효율적으로 관리했습니다.

<br />

## 📹 Video

https://github.com/bellmin9321/refilled/assets/49411767/c2a3a9b3-8337-4ee8-8142-2c7b9c264663

## 📸 Screenshot
### - Main 페이지('/')
<img width="500" alt="image" src="https://github.com/bellmin9321/refilled/assets/49411767/013038b6-2ca5-4133-a080-d26d40daa248">

### - 장바구니 페이지('/cart') - 빈 장바구니 화면
<img width="250" alt="image" src="https://github.com/bellmin9321/refilled/assets/49411767/83e0f6d5-d9f6-4f45-8a23-b66aa1b45853">

### - 장바구니 페이지('/cart') - 제품이 들어있는 장바구니 화면
<img width="250" alt="image" src="https://github.com/bellmin9321/refilled/assets/49411767/206b97e2-2bda-4de2-b958-6ca5b8d96517">

### - Item 클릭 시 모달 화면
<img width="400" alt="image" src="https://github.com/bellmin9321/refilled/assets/49411767/770f3629-c4b0-4108-ad5a-d52a5bd8c06a">

### - 옵션 있을 경우 모달 화면
<img width="250" alt="image" src="https://github.com/bellmin9321/refilled/assets/49411767/d0bc4519-964f-43f9-ae63-59f8afcc9e06">

### - 옵션 없을 경우 모달 화면
<img width="250" alt="image" src="https://github.com/bellmin9321/refilled/assets/49411767/d724b492-a381-4219-87ef-6589d6787ec6">

### - 장바구니에 담기 버튼 클릭 시 모달 화면
<img width="250" alt="image" src="https://github.com/bellmin9321/refilled/assets/49411767/b8122406-4de1-461f-a032-688e259fe299">

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
└── pages
    ├── 404.tsx
    ├── _app.tsx
    ├── cart
    │   └── index.tsx
    ├── index.tsx
    ├── page.module.css
    └── shop
```