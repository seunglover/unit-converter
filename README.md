# 📏 단위 변환 도우미 (Unit Converter Helper)

일상생활에서 필요한 모든 단위를 정확하고 빠르게 변환해주는 웹 애플리케이션입니다.

## ✨ 주요 기능

### 🔍 **통합 검색**
- 단위명, 카테고리명으로 빠른 검색
- 실시간 검색 결과 표시
- 키보드 네비게이션 지원

### 📊 **지원하는 단위**
- **길이**: mm, cm, m, km, inch, ft, yard, mile
- **무게**: mg, g, kg, ton, lb, oz
- **부피**: ml, L, m³, cup, tbsp, tsp, gal, pt
- **온도**: °C, °F, K
- **면적**: m², cm², km², acre, ha
- **속도**: km/h, mph, m/s, knot

### 🎯 **실용적인 기능**
- 실시간 변환 계산
- 단위 교체 기능
- 변환 기록 저장
- 실생활 예시 제공
- 관련 단위 추천

### 📱 **반응형 디자인**
- 모바일, 태블릿, 데스크톱 최적화
- 터치 친화적 인터페이스
- PWA(Progressive Web App) 지원

## 🚀 빠른 시작

### 로컬 실행
```bash
# 저장소 클론
git clone https://github.com/seunglover/unit-converter.git
cd unit-converter

# Python HTTP 서버 실행
python -m http.server 8000

# 브라우저에서 접속
open http://localhost:8000
```

### 온라인 데모
🌐 [단위 변환 도우미 바로가기](https://seunglover.github.io/unit-converter)

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **아이콘**: Emoji, CSS Icons
- **폰트**: Noto Sans KR (Google Fonts)
- **배포**: GitHub Pages, Netlify, Vercel

## 📁 프로젝트 구조

```
unit-converter/
├── index.html          # 메인 페이지
├── faq.html           # FAQ 페이지
├── tips.html          # 변환 팁 페이지
├── css/
│   ├── style.css      # 메인 스타일
│   └── responsive.css # 반응형 스타일
├── js/
│   ├── app.js         # 메인 애플리케이션
│   ├── converter.js   # 변환 로직
│   └── data.js        # 단위 데이터
├── assets/
│   └── icons/         # PWA 아이콘
├── manifest.json      # PWA 매니페스트
├── sw.js             # 서비스 워커
├── sitemap.xml       # SEO 사이트맵
├── robots.txt        # 검색엔진 설정
└── README.md         # 프로젝트 설명
```

## 🎨 주요 특징

### 🔍 **스마트 검색**
- "길이", "온도", "kg", "oz" 등으로 검색
- 카테고리와 개별 단위 모두 검색 가능
- 검색 결과 클릭으로 즉시 변환

### 📊 **정확한 계산**
- 국제 표준 단위 변환 공식 사용
- 소수점 자동 조정
- 실시간 계산 결과 표시

### 📱 **모바일 최적화**
- 터치 친화적 UI
- 스와이프 제스처 지원
- 오프라인 사용 가능

### 🎯 **사용자 경험**
- 직관적인 인터페이스
- 빠른 로딩 속도
- 접근성 고려

## 🔧 개발 환경 설정

### 필수 요구사항
- Python 3.6+ (로컬 서버용)
- 모던 웹 브라우저 (Chrome, Firefox, Safari, Edge)

### 개발 서버 실행
```bash
# HTTP 서버 실행
python -m http.server 8000

# 또는 Node.js 사용
npx serve .
```

## 📈 성능 최적화

- **이미지 최적화**: WebP 포맷 사용
- **코드 분할**: 모듈화된 JavaScript
- **캐싱**: 서비스 워커를 통한 오프라인 지원
- **압축**: CSS/JS 파일 최적화

## 🌐 배포

### GitHub Pages
```bash
# gh-pages 브랜치 생성
git checkout -b gh-pages

# 배포
git push origin gh-pages
```

### Netlify
1. Netlify에 저장소 연결
2. 빌드 설정: `python -m http.server 8000`
3. 배포 폴더: `.`

### Vercel
1. Vercel CLI 설치
2. `vercel` 명령어로 배포

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 문의

- **이슈 리포트**: [GitHub Issues](https://github.com/seunglover/unit-converter/issues)
- **기능 제안**: [GitHub Discussions](https://github.com/seunglover/unit-converter/discussions)
- **이메일**: seunglover@github.com

## 🙏 감사의 말

- [Google Fonts](https://fonts.google.com/) - 웹 폰트 제공
- [Emoji](https://emojipedia.org/) - 아이콘 제공
- [MDN Web Docs](https://developer.mozilla.org/) - 웹 개발 가이드

---

⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요! 