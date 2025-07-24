# 프로젝트 계획서

## 프로젝트 개요
- 단위변환기 웹 애플리케이션 (danwi)

## 현재 상태
- 기본 웹 애플리케이션 구성 완료
- CSS, JavaScript 파일들 존재
- 다국어 지원 구현

## 진행 중인 작업
- 없음

## 6. 완료된 작업
- 프로젝트 초기 설정 완료
- 기본 `index.html` 구조 및 `style.css` 기본 스타일 정의
- `education.html`, `tips.html`, `faq.html`, `history.html`, `privacy.html`, `terms.html` 등 기본 페이지 생성
- `js/languages.js` 및 언어별 데이터 파일 (`ko.js`, `en.js`, `ja.js`) 생성
- `js/data.js` 및 `data/units.json`을 통한 단위 데이터 관리 구조 마련
- `js/converter.js`를 통한 변환 로직 분리
- `js/app.js`를 통한 메인 애플리케이션 로직 구현
- `index.html`에 헤더, 푸터, 메인 콘텐츠 영역 구조화 및 CSS 클래스 적용
- `index.html`에 통합 검색 기능 및 검색 결과 표시 영역 추가
- `index.html`에 카테고리 카드 섹션 구현 및 동적 변환기 섹션 전환 기능 구현
- `index.html`에 단위 정보, 실생활 예시, 관련 단위 추천, 최근 변환 기록 섹션 구현
- `style.css`에 전반적인 디자인 시스템 (변수, 리셋, 기본 스타일, 헤더, 푸터, 메인, 카테고리 카드, 변환기, 검색 결과, 토스트 메시지 등) 정의
- `responsive.css`를 통한 반응형 웹 디자인 기본 적용
- `history.html`에 단위 역사 콘텐츠 및 스타일 적용
- `tips.html`에 변환 팁 콘텐츠 및 스타일 적용
- `faq.html`에 FAQ 콘텐츠 및 스타일 적용
- `privacy.html`에 개인정보 처리방침 콘텐츠 및 스타일 적용
- `terms.html`에 이용약관 콘텐츠 및 스타일 적용
- `education.html` 디자인 수정 완료
    - `index.html`의 헤더, 푸터, 메인 콘텐츠 영역 구조 및 CSS 클래스 적용
    - 교육 콘텐츠 섹션별 스타일 적용
    - 헤더 및 푸터에 언어 선택기 추가 및 `index.html`과 동일하게 적용
- **다국어 지원 시스템 완전 구현 완료**
    - `index.html`에서 언어 변환 기능 문제 해결
    - `js/languages/ko.js` 파일 구문 오류 수정 및 구조 정리
    - `data-translate` 속성을 활용한 자동 번역 시스템 구현
    - 한국어, 영어, 일본어 언어 변환 테스트 완료
    - 푸터 및 모든 UI 요소 번역 정상 작동 확인
    - `education.html` 언어 초기화 문제 해결
- **UI 구조 정리**
    - `education.html`과 `faq.html`에서 네비게이션 메뉴 제거
    - `education.html`의 헤더 언어 선택기 제거 (고정 언어 표시)
    - `faq.html`에 언어 초기화 스크립트 추가 (localStorage 기반 고정 언어 표시)
    - 페이지별 독립적인 구조로 변경
- **교육 가이드 버튼 추가**
    - `index.html` hero 섹션에 교육 가이드 버튼 추가
    - `education.html`로 연결되는 링크 설정
    - CSS 스타일링으로 그라데이션 버튼 디자인 적용
    - 다국어 지원 (한국어, 영어, 일본어)

## 7. 해야 할 일
- `js/app.js` 및 `js/converter.js`의 기능 개선 및 버그 수정
- 단위 변환 로직 정확성 검증 및 테스트 코드 작성 (필요시)
- 성능 최적화 (로딩 속도, 렌더링 최적화)
- 접근성 개선 (ARIA 속성, 키보드 내비게이션 등)
- 광고 배치 최적화 (AdSense)
- PWA (Progressive Web App) 기능 강화 (Service Worker, Manifest)
- 지속적인 콘텐츠 업데이트 및 추가 (새로운 단위, 교육 자료 등)

## 8. 로그 및 에러 관리
- `logs` 폴더에 에러 로그 저장
- `project_plan.md`에 문제점과 해결 방안 기록

## 9. 커밋 가이드라인
- 명확하고 간결한 커밋 메시지 작성
- 각 커밋은 하나의 논리적인 변경 사항만 포함
- 커밋 메시지 접두사 사용 (feat, fix, docs, style, refactor, test, chore 등)

---
**최근 업데이트**: 2025년 7월 24일 목요일
**업데이트 내용**: `index.html`에 교육 가이드 버튼 추가 완료. hero 섹션에 `education.html`로 연결되는 스타일링된 버튼이 추가되었으며, 다국어 지원이 포함되었습니다.
---

---