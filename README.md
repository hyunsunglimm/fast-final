# FINAL_PROJECT

## 목차

- [Convention](##Convention)

## 개요

- FASTCAMPUS 기업연계 파이널 프로젝트

## Convention

### Commit prefix

```
feat: 새운운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는경우
refactor: 코드 리팩토링
test: 테스트 코드, 리팩토링 테스트 코드 추가
chore: 빌드 업무, 패키지 매니저 수정, 잡다...
```

### Naming

```
폴더: 케반 케이스 ex) my-page
컴포넌트: 파스칼 케이스 ex) Component.tsx
이외: 카멜 케이스 ex) generateUtil.ts
```

### 디렉토리

```
- public
- app
- components
- service => 비즈니스 로직
- types => 타입 정의
- styles => 스타일링 정의 (tailwind className이 길어질 경우)
- hooks
- utils => 비즈니스 로직을 제외한 로직 (ex - formatter, 수학적 계산)
```
