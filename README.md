# FINAL_PROJECT

## 팀 소개

FASTCAMPUS 기업연계 파이널 프로젝트 프론트엔드

## 목차

- [개요](#개요)
- [팀 규칙](#팀-규칙)
- [기술 스택](#기술-스택)

## 개요

- 20대 사회초년생 특화 모바일 핀테크 서비스 기획 및 구축 20대가 쉽고 편리하게 금융 서비스를 이용할 수 있도록 돕고,  
  나아가 그들의 건전한 금융 생활을 지원하는 것이 본 프로젝트의 목표입니다.

## 팀 규칙

### 커밋 헤더 규칙

```
feat: 새운운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는경우
refactor: 코드 리팩토링
test: 테스트 코드, 리팩토링 테스트 코드 추가
chore: 빌드 업무, 패키지 매니저 수정, 잡다...
```

### 이슈 생성 및 브랜치 생성

```
1. 이슈 생성 ex) feat: 로그인 화면 구현 및 스타일링
2. 이슈 브랜치 생성
		-> 브랜치 네이밍 ex) feat/login
```

### 네이밍

```
폴더: 케반 케이스 ex) my-page
컴포넌트: 파스칼 케이스 ex) Component.tsx
이외: 카멜 케이스 ex) generateUtil.ts
```

### 디렉토리

```
- actions -> 서버 액션
- app
   └─ page
        └─ _components -> 해당 페이지에서만 사용하는 컴포넌트
        └─ context
        └─ hooks
        └─ utils
- auth -> next-auth
- components -> 재사용 가능한 컴포넌트
- context
- service -> 비즈니스 로직 (서버요청)
- shared -> 전역으로 사용되는 디렉토리
    └─ actions
    └─ context
    └─ hooks
    └─ types
    └─ utils

```

## 기술 스택

<div style="display:flex; gap:2px">
  <img src="https://img.shields.io/badge/Next-000?style=flat&logo=nextdotjs" alt="nextjs" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="typescript" />
<img src="https://img.shields.io/badge/TailwindCss-06B6D4?style=flat&logo=tailwindcss&logoColor=white" alt="tailwindcss" />
<img src="https://img.shields.io/badge/ReactQuery-FF4154?style=flat&logo=ReactQuery&logoColor=white" alt="vercel" />
<img src="https://img.shields.io/badge/Vercel-000?style=flat&logo=Vercel&logoColor=white" alt="vercel" />
</div>
