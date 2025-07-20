# 이미지 최적화 가이드

## 현재 상태
- 기본 아이콘만 사용 중 (이모지 기반)
- 실제 이미지 파일 없음

## 권장 최적화 방안

### 1. 아이콘 최적화
```bash
# SVG 아이콘 생성 (권장)
- 각 카테고리별 SVG 아이콘 제작
- 크기: 24x24px, 48x48px, 144x144px
- 색상: 단색 또는 2-3색 조합
- 포맷: SVG (벡터) 또는 WebP (비트맵)
```

### 2. WebP 변환
```bash
# 기존 PNG/JPG를 WebP로 변환
cwebp input.png -o output.webp -q 80
```

### 3. 반응형 이미지
```html
<!-- HTML에서 사용 예시 -->
<picture>
  <source srcset="icon-144.webp" media="(min-width: 768px)">
  <source srcset="icon-48.webp" media="(min-width: 480px)">
  <img src="icon-24.webp" alt="아이콘">
</picture>
```

### 4. 지연 로딩
```html
<!-- 이미지 지연 로딩 -->
<img src="icon.webp" loading="lazy" alt="아이콘">
```

## 아이콘 제작 가이드

### 카테고리별 아이콘
1. **길이**: 📏 (현재 이모지 사용)
2. **무게**: ⚖️ (현재 이모지 사용)
3. **부피**: 🧪 (현재 이모지 사용)
4. **온도**: 🌡️ (현재 이모지 사용)
5. **면적**: 📐 (현재 이모지 사용)
6. **속도**: 🚗 (현재 이모지 사용)

### SVG 아이콘 예시
```svg
<!-- 길이 아이콘 예시 -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" fill="currentColor"/>
</svg>
```

## 성능 최적화 체크리스트

- [ ] SVG 아이콘 제작
- [ ] WebP 포맷 변환
- [ ] 반응형 이미지 설정
- [ ] 지연 로딩 적용
- [ ] 이미지 압축 최적화
- [ ] CDN 사용 고려
- [ ] 캐싱 전략 수립

## 도구 추천

1. **SVG 편집**: Figma, Adobe Illustrator
2. **이미지 압축**: TinyPNG, ImageOptim
3. **WebP 변환**: cwebp, Squoosh
4. **최적화**: Lighthouse, PageSpeed Insights 