
const ko = {
    // 로고 텍스트
    logoText: "단위 변환기",
    
    // 메인 페이지
    heroTitle: "일상생활의 모든 단위 변환",
    heroDescription: "길이, 무게, 부피, 온도 등 다양한 단위를 쉽고 빠르게 변환해보세요",
    
    // 카테고리
    length: "길이",
    weight: "무게", 
    volume: "부피",
    temperature: "온도",
    area: "면적",
    speed: "속도",
    
    // 카테고리 설명
    lengthDesc: "미터, 센티미터, 인치, 피트 등",
    weightDesc: "킬로그램, 그램, 파운드, 온스 등",
    volumeDesc: "리터, 밀리리터, 갤런, 컵 등",
    temperatureDesc: "섭씨, 화씨, 켈빈 등",
    areaDesc: "제곱미터, 에이커, 헥타르 등",
    speedDesc: "킬로미터/시간, 마일/시간, 노트 등",
    
    // 단위 이름들
    units: {
        // 길이 단위
        mm: "밀리미터",
        cm: "센티미터",
        m: "미터",
        km: "킬로미터",
        inch: "인치",
        ft: "피트",
        yard: "야드",
        mile: "마일",
        
        // 무게 단위
        mg: "밀리그램",
        g: "그램",
        kg: "킬로그램",
        ton: "톤",
        lb: "파운드",
        oz: "온스",
        
        // 부피 단위
        ml: "밀리리터",
        l: "리터",
        gal: "갤런",
        cup: "컵",
        tbsp: "큰술",
        tsp: "작은술",
        
        // 온도 단위
        celsius: "섭씨",
        fahrenheit: "화씨",
        kelvin: "켈빈",
        
        // 온도 단위 (기호 매칭)
        "°C": "섭씨",
        "°F": "화씨",
        "K": "켈빈",
        
        // 면적 단위
        m2: "제곱미터",
        cm2: "제곱센티미터",
        km2: "제곱킬로미터",
        acre: "에이커",
        ha: "헥타르",
        
        // 면적 단위 (기호 매칭)
        "mm²": "제곱밀리미터",
        "cm²": "제곱센티미터",
        "m²": "제곱미터",
        "km²": "제곱킬로미터",
        
        // 속도 단위
        kmh: "킬로미터/시간",
        mph: "마일/시간",
        ms: "미터/초",
        knot: "노트"
    },
    
    // 단위 설명들
    unitDescriptions: {
        // 길이 단위 설명
        mm: "1미터의 1/1000. 매우 작은 길이를 측정할 때 사용합니다.",
        cm: "1미터의 1/100. 일상생활에서 가장 많이 사용하는 길이 단위입니다.",
        m: "국제단위계(SI)의 기본 길이 단위입니다.",
        km: "1미터의 1000배. 거리 측정에 사용됩니다.",
        inch: "영미권에서 사용하는 길이 단위입니다.",
        ft: "영미권에서 사용하는 길이 단위입니다.",
        yard: "영미권에서 사용하는 길이 단위입니다.",
        mile: "영미권에서 사용하는 거리 단위입니다.",
        
        // 무게 단위 설명
        mg: "1그램의 1/1000. 매우 작은 무게를 측정할 때 사용합니다.",
        g: "일상생활에서 가장 많이 사용하는 무게 단위입니다.",
        kg: "국제단위계(SI)의 기본 무게 단위입니다.",
        ton: "1킬로그램의 1000배. 큰 무게를 측정할 때 사용합니다.",
        lb: "영미권에서 사용하는 무게 단위입니다.",
        oz: "영미권에서 사용하는 무게 단위입니다.",
        
        // 부피 단위 설명
        ml: "1리터의 1/1000. 작은 부피를 측정할 때 사용합니다.",
        l: "일상생활에서 가장 많이 사용하는 부피 단위입니다.",
        gal: "영미권에서 사용하는 부피 단위입니다.",
        cup: "요리에서 자주 사용하는 부피 단위입니다.",
        tbsp: "요리에서 사용하는 부피 단위입니다.",
        tsp: "요리에서 사용하는 부피 단위입니다.",
        
        // 온도 단위 설명
        "°C": "일반적으로 사용하는 온도 단위입니다.",
        "°F": "영미권에서 주로 사용하는 온도 단위입니다.",
        "K": "과학에서 사용하는 절대 온도 단위입니다.",
        
        // 면적 단위 설명
        "mm²": "매우 작은 면적을 측정할 때 사용합니다.",
        "cm²": "작은 면적을 측정할 때 사용합니다.",
        "m²": "일상생활에서 가장 많이 사용하는 면적 단위입니다.",
        "km²": "큰 면적을 측정할 때 사용합니다.",
        ha: "농지나 토지 면적을 측정할 때 사용합니다.",
        acre: "영미권에서 사용하는 면적 단위입니다.",
        "평": "한국에서 주택 면적을 측정할 때 사용합니다."
    },
    
    // 단위 공식들
    unitFormulas: {
        // 길이 단위 공식
        mm: "1mm = 0.001m",
        cm: "1cm = 0.01m",
        m: "1m = 100cm = 1000mm",
        km: "1km = 1000m",
        inch: "1inch = 2.54cm",
        ft: "1ft = 12inch = 30.48cm",
        yard: "1yard = 3ft = 91.44cm",
        mile: "1mile = 1.609km",
        
        // 무게 단위 공식
        mg: "1mg = 0.001g",
        g: "1g = 1000mg",
        kg: "1kg = 1000g",
        ton: "1ton = 1000kg",
        lb: "1lb = 0.4536kg",
        oz: "1oz = 28.35g",
        
        // 부피 단위 공식
        ml: "1ml = 0.001L",
        l: "1L = 1000ml",
        gal: "1gal = 3.785L",
        cup: "1cup = 236.6ml",
        tbsp: "1tbsp = 14.79ml",
        tsp: "1tsp = 4.93ml",
        
        // 온도 단위 공식
        "°C": "Celsius = (Fahrenheit - 32) × 5/9",
        "°F": "Fahrenheit = Celsius × 9/5 + 32",
        "K": "Kelvin = Celsius + 273.15",
        
        // 면적 단위 공식
        "mm²": "1mm² = 0.000001m²",
        "cm²": "1cm² = 0.0001m²",
        "m²": "1m² = 10000cm²",
        "km²": "1km² = 1000000m²",
        ha: "1ha = 10000m²",
        acre: "1acre = 4046.86m²",
        "pyeong": "1pyeong = 3.3058m²"
    },
    
    // 검색
    searchPlaceholder: "단위명 또는 카테고리 검색 (예: oz, 길이, 온도)",
    searchLabel: "검색",
    
    // 변환기
    backToMain: "메인으로",
    backToMainAria: "메인으로 돌아가기",
    swapLabel: "단위 교체",
    swapLabelAria: "단위 교체",
    convertButton: "변환하기",
    clearButton: "초기화",
    converterDescription: "일상생활에서 자주 사용하는 길이 단위를 변환해보세요",
    
    // 카테고리별 변환기 설명
    lengthConverterDesc: "일상생활에서 자주 사용하는 길이 단위를 변환해보세요",
    weightConverterDesc: "일상생활에서 자주 사용하는 무게 단위를 변환해보세요",
    volumeConverterDesc: "일상생활에서 자주 사용하는 부피 단위를 변환해보세요",
    temperatureConverterDesc: "일상생활에서 자주 사용하는 온도 단위를 변환해보세요",
    areaConverterDesc: "일상생활에서 자주 사용하는 면적 단위를 변환해보세요",
    speedConverterDesc: "일상생활에서 자주 사용하는 속도 단위를 변환해보세요",
    
    // 카테고리 정보
    categories: {
        length: {
            name: "길이",
            description: "일상생활에서 자주 사용하는 길이 단위를 변환해보세요"
        },
        weight: {
            name: "무게",
            description: "일상생활에서 자주 사용하는 무게 단위를 변환해보세요"
        },
        volume: {
            name: "부피",
            description: "일상생활에서 자주 사용하는 부피 단위를 변환해보세요"
        },
        temperature: {
            name: "온도",
            description: "일상생활에서 자주 사용하는 온도 단위를 변환해보세요"
        },
        area: {
            name: "면적",
            description: "일상생활에서 자주 사용하는 면적 단위를 변환해보세요"
        },
        speed: {
            name: "속도",
            description: "일상생활에서 자주 사용하는 속도 단위를 변환해보세요"
        }
    },
    
    // 예시 데이터
    examples: {
        length: [
            {
                title: "일상생활 예시",
                description: "우리가 일상에서 자주 마주치는 길이들",
                value: "성인 키: 1.7m, 스마트폰: 6.1inch, A4용지: 21cm"
            },
            {
                title: "운동 관련",
                description: "운동과 관련된 길이 측정",
                value: "마라톤: 42.195km, 농구 코트: 28m, 수영장: 25m"
            },
            {
                title: "건축 관련",
                description: "건축과 관련된 길이 측정",
                value: "문 높이: 2.1m, 방 크기: 3m×4m, 건물 높이: 100m"
            }
        ],
        weight: [
            {
                title: "일상생활 예시",
                description: "우리가 일상에서 자주 마주치는 무게들",
                value: "사과: 200g, 우유: 1kg, 자동차: 1.5ton"
            },
            {
                title: "요리 관련",
                description: "요리와 관련된 무게 측정",
                value: "밀가루: 500g, 설탕: 1kg, 소금: 10g"
            },
            {
                title: "운동 관련",
                description: "운동과 관련된 무게 측정",
                value: "덤벨: 5kg, 바벨: 20kg, 체중: 70kg"
            }
        ],
        volume: [
            {
                title: "일상생활 예시",
                description: "우리가 일상에서 자주 마주치는 부피들",
                value: "물병: 500ml, 우유팩: 1L, 주유: 50L"
            },
            {
                title: "요리 관련",
                description: "요리와 관련된 부피 측정",
                value: "물: 2L, 식용유: 100ml, 소스: 30ml"
            },
            {
                title: "음료 관련",
                description: "음료와 관련된 부피 측정",
                value: "커피: 350ml, 맥주: 500ml, 와인: 750ml"
            }
        ],
        temperature: [
            {
                title: "일상생활 예시",
                description: "우리가 일상에서 자주 마주치는 온도들",
                value: "실내 온도: 22°C, 체온: 36.5°C, 냉장고: 4°C"
            },
            {
                title: "날씨 관련",
                description: "날씨와 관련된 온도 측정",
                value: "여름 낮: 30°C, 겨울 밤: -5°C, 봄/가을: 15°C"
            },
            {
                title: "요리 관련",
                description: "요리와 관련된 온도 측정",
                value: "물 끓는점: 100°C, 오븐: 180°C, 냉동실: -18°C"
            }
        ],
        area: [
            {
                title: "일상생활 예시",
                description: "우리가 일상에서 자주 마주치는 면적들",
                value: "아파트 1평: 3.3m², 축구장: 7140m², 서울시: 605km²"
            },
            {
                title: "부동산 관련",
                description: "부동산과 관련된 면적 측정",
                value: "아파트: 84m², 주택: 150m², 토지: 1000m²"
            },
            {
                title: "농업 관련",
                description: "농업과 관련된 면적 측정",
                value: "논: 1ha, 밭: 0.5ha, 과수원: 2ha"
            }
        ],
        speed: [
            {
                title: "일상생활 예시",
                description: "우리가 일상에서 자주 마주치는 속도들",
                value: "도보: 5km/h, 자전거: 20km/h, 자동차: 60km/h"
            },
            {
                title: "교통 관련",
                description: "교통과 관련된 속도 측정",
                value: "고속도로: 100km/h, 시내도로: 50km/h, 지하철: 80km/h"
            },
            {
                title: "운동 관련",
                description: "운동과 관련된 속도 측정",
                value: "달리기: 12km/h, 수영: 2km/h, 등산: 3km/h"
            }
        ]
    },
    
    // 변환 텍스트
    convertText: "변환",
    clearMessage: "초기화되었습니다.",
    
    // 변환팁 버튼
    tipsButtonText: "변환 팁 보기",
    // 단위 역사 버튼
    historyButtonText: "단위의 역사 알아보기",
    
    // 토스트 메시지
    toastMessages: {
        invalidNumber: "올바른 숫자를 입력해주세요.",
        selectUnit: "단위를 선택해주세요.",
        zeroMessage: "0은 모든 단위에서 0입니다.",
        conversionComplete: "변환이 완료되었습니다!",
        invalidCombination: "변환할 수 없는 단위 조합입니다.",
        cleared: "초기화되었습니다."
    },
    
    // 기타
    logoText: "단위 변환기",
    
    // FAQ 페이지
    faqTitle: "자주 묻는 질문 (FAQ)",
    faqDescription: "단위 변환기 사용법과 궁금한 점들을 확인해보세요",
    
    // FAQ 카테고리
    faqUsage: "📖 사용법 가이드",
    faqAccuracy: "🎯 정확도 및 팁",
    faqLifestyle: "💡 실생활 활용 팁",
    faqTechnical: "🔧 기술적 질문",
    faqTroubleshooting: "⚠️ 문제 해결",
    
    // FAQ 내용
    faqHowToUse: "단위 변환기는 어떻게 사용하나요?",
    faqHowToUseAnswer1: "1. 원하는 카테고리(길이, 무게, 부피 등)를 선택합니다.",
    faqHowToUseAnswer2: "2. 변환하고 싶은 값을 입력합니다.",
    faqHowToUseAnswer3: "3. 변환할 단위를 선택합니다.",
    faqHowToUseAnswer4: "4. 실시간으로 변환 결과가 표시됩니다.",
    
    faqSearch: "검색 기능은 어떻게 사용하나요?",
    faqSearchAnswer1: "• 상단 검색창에 단위명(예: \"그램\", \"온스\") 또는 카테고리명(예: \"길이\", \"무게\")을 입력하세요.",
    faqSearchAnswer2: "• 방향키(↑↓)로 검색 결과를 선택할 수 있습니다.",
    faqSearchAnswer3: "• Enter 키로 선택한 항목으로 이동합니다.",
    
    faqShortcuts: "키보드 단축키는 무엇이 있나요?",
    faqShortcutsAnswer1: "Ctrl + K: 검색창 포커스",
    faqShortcutsAnswer2: "Ctrl + Enter: 변환 실행",
    faqShortcutsAnswer3: "Ctrl + S: 단위 교체",
    faqShortcutsAnswer4: "Escape: 검색 결과 숨기기",
    
    faqAccuracy: "변환 결과의 정확도는 어느 정도인가요?",
    faqAccuracyAnswer1: "• 모든 변환 계수는 국제 표준에 기반합니다.",
    faqAccuracyAnswer2: "• 소수점 6자리까지 정확한 계산을 제공합니다.",
    faqAccuracyAnswer3: "• 온도 변환은 물리적 한계(절대 영도)를 고려합니다.",
    faqAccuracyAnswer4: "• 큰 숫자는 천 단위 구분자와 과학적 표기법을 사용합니다.",
    
    faqTemperature: "온도 변환 시 주의사항은 무엇인가요?",
    faqTemperatureAnswer1: "• 절대 영도(-273.15°C, -459.67°F, 0K) 이하의 온도는 입력할 수 없습니다.",
    faqTemperatureAnswer2: "• 온도는 음수 값도 허용됩니다.",
    faqTemperatureAnswer3: "• 켈빈(K)은 항상 양수 값만 가능합니다.",
    
    faqLargeNumbers: "큰 숫자가 \"1.057856e+8\"로 표시되는 이유는?",
    faqLargeNumbersAnswer1: "• 10억(1,000,000,000) 이상의 숫자는 가독성을 위해 과학적 표기법을 사용합니다.",
    faqLargeNumbersAnswer2: "• 10만 이상의 숫자는 천 단위 구분자(,)를 추가합니다.",
    faqLargeNumbersAnswer3: "• 이는 숫자의 크기에 따라 자동으로 적용됩니다.",
    
    faqCooking: "요리할 때 어떤 단위를 사용하나요?",
    faqCookingAnswer1: "무게: 그램(g) ↔ 온스(oz), 킬로그램(kg) ↔ 파운드(lb)",
    faqCookingAnswer2: "부피: 밀리리터(ml) ↔ 플루이드 온스(fl oz), 리터(L) ↔ 갤런(gal)",
    faqCookingAnswer3: "용량: 컵(cup) ↔ 밀리리터(ml), 테이블스푼(tbsp) ↔ 밀리리터(ml)",
    
    faqShopping: "해외 직구할 때 유용한 단위는?",
    faqShoppingAnswer1: "길이: 센티미터(cm) ↔ 인치(inch), 미터(m) ↔ 피트(ft)",
    faqShoppingAnswer2: "무게: 그램(g) ↔ 온스(oz), 킬로그램(kg) ↔ 파운드(lb)",
    faqShoppingAnswer3: "면적: 제곱미터(m²) ↔ 평, 제곱피트(ft²)",
    
    faqExercise: "운동할 때 사용하는 단위는?",
    faqExerciseAnswer1: "무게: 킬로그램(kg) ↔ 파운드(lb) - 운동 기구 무게",
    faqExerciseAnswer2: "거리: 킬로미터(km) ↔ 마일(mile) - 러닝 거리",
    faqExerciseAnswer3: "속도: 킬로미터/시간(km/h) ↔ 마일/시간(mph) - 운동 속도",
    
    faqOffline: "오프라인에서도 사용할 수 있나요?",
    faqOfflineAnswer1: "• 네, PWA(Progressive Web App) 기능을 지원합니다.",
    faqOfflineAnswer2: "• 브라우저에서 \"홈 화면에 추가\"를 통해 앱처럼 설치할 수 있습니다.",
    faqOfflineAnswer3: "• 한 번 방문한 후에는 오프라인에서도 기본 기능을 사용할 수 있습니다.",
    
    faqPrivacy: "개인정보는 어떻게 보호되나요?",
    faqPrivacyAnswer1: "• 모든 계산은 브라우저에서만 처리됩니다.",
    faqPrivacyAnswer2: "• 서버에 개인정보를 전송하지 않습니다.",
    faqPrivacyAnswer3: "• 변환 기록은 로컬 스토리지에만 저장됩니다.",
    faqPrivacyAnswer4: "• 외부 서비스와의 연동 없이 독립적으로 작동합니다.",
    
    faqMobile: "모바일에서도 잘 작동하나요?",
    faqMobileAnswer1: "• 네, 모든 모바일 기기에서 최적화되어 있습니다.",
    faqMobileAnswer2: "• 터치 인터페이스에 최적화된 UI를 제공합니다.",
    faqMobileAnswer3: "• 반응형 디자인으로 화면 크기에 자동으로 조정됩니다.",
    faqMobileAnswer4: "• 모바일 브라우저에서도 모든 기능을 사용할 수 있습니다.",
    
    faqNotWorking: "변환이 되지 않을 때는 어떻게 하나요?",
    faqNotWorkingAnswer1: "• 올바른 숫자를 입력했는지 확인하세요.",
    faqNotWorkingAnswer2: "• 음수 입력이 허용되지 않는 단위인지 확인하세요.",
    faqNotWorkingAnswer3: "• 온도 변환 시 절대 영도 이하 값은 입력할 수 없습니다.",
    faqNotWorkingAnswer4: "• 브라우저를 새로고침해보세요.",
    
    faqNoSearch: "검색 결과가 나타나지 않을 때는?",
    faqNoSearchAnswer1: "• 검색어를 2글자 이상 입력하세요.",
    faqNoSearchAnswer2: "• 단위명이나 카테고리명을 정확히 입력하세요.",
    faqNoSearchAnswer3: "• 예: \"그램\", \"온스\", \"길이\", \"무게\" 등",
    faqNoSearchAnswer4: "• 브라우저 캐시를 지워보세요.",
    
    faqSlowLoading: "페이지가 느리게 로딩될 때는?",
    faqSlowLoadingAnswer1: "• 인터넷 연결 상태를 확인하세요.",
    faqSlowLoadingAnswer2: "• 브라우저 캐시를 지워보세요.",
    faqSlowLoadingAnswer3: "• 다른 브라우저로 시도해보세요.",
    faqSlowLoadingAnswer4: "• 모바일에서는 Wi-Fi 연결을 권장합니다.",
    
    // 개인정보 취급방침
    privacyTitle: "개인정보 취급방침",
    privacyIntro: "<strong>단위 변환기</strong>(이하 \"사이트\")는 이용자의 개인정보를 소중하게 생각하며, 아래와 같이 최소한의 개인정보만을 안전하게 처리합니다.",
    privacySection1: "1. 수집하는 개인정보 항목",
    privacySection1Item1: "본 사이트는 별도의 회원가입 없이 자유롭게 이용하실 수 있습니다.",
    privacySection1Item2: "서비스 개선을 위한 <strong>쿠키, 방문 기록, 브라우저 정보</strong> 등 비식별 정보만을 수집할 수 있습니다.",
    privacySection2: "2. 개인정보의 이용 목적",
    privacySection2Item1: "서비스 품질 향상 및 통계 분석",
    privacySection2Item2: "이용자 문의 응대",
    privacySection3: "3. 개인정보의 보관 및 파기",
    privacySection3Item1: "수집된 정보는 목적 달성 후 즉시 파기하거나, 법령에 따라 안전하게 보관합니다.",
    privacySection4: "4. 제3자 제공",
    privacySection4Item1: "본 사이트는 이용자의 개인정보를 외부에 제공하지 않습니다.",
    privacySection5: "5. 이용자의 권리",
    privacySection5Item1: "언제든지 개인정보 열람, 정정, 삭제를 요청하실 수 있습니다.",
    privacySection6: "6. 정책 변경 안내",
    privacySection6Item1: "본 방침은 법령 및 서비스 변경에 따라 사전 고지 후 수정될 수 있습니다.",
    privacyLastUpdate: "최종 업데이트: 2025-07-01",
    
    // Tips 페이지
    tipsTitle: "실용적인 변환 팁",
    tipsDescription: "일상생활에서 바로 활용할 수 있는 단위 변환 팁들을 모았습니다",
    
    // Tips 카테고리
    tipsCooking: "🍳 요리할 때 유용한 변환 팁",
    tipsShopping: "🛒 해외직구할 때 유용한 변환 팁",
    tipsExercise: "💪 운동할 때 유용한 변환 팁",
    tipsTravel: "✈️ 여행할 때 유용한 변환 팁",
    tipsRealEstate: "🏠 부동산할 때 유용한 변환 팁",
    tipsMemory: "🧠 기억하기 쉬운 변환 팁",
    
    // 카테고리 카드 예시 태그
    lengthExamples: ["m ↔ cm", "km ↔ mile", "inch ↔ cm"],
    weightExamples: ["kg ↔ lb", "g ↔ oz", "mg ↔ g"],
    volumeExamples: ["L ↔ gal", "ml ↔ cup", "tbsp ↔ ml"],
    temperatureExamples: ["°C ↔ °F", "°C ↔ K", "°F ↔ K"],
    areaExamples: ["m² ↔ cm²", "acre ↔ ha", "km² ↔ m²"],
    speedExamples: ["km/h ↔ mph", "m/s ↔ km/h", "knot ↔ km/h"],
    
    // Tip-row 데이터
    cupLabel: "1 컵 (cup)",
    cupValue: "= 240ml",
    tbspLabel: "1 테이블스푼 (tbsp)",
    tbspValue: "= 15ml",
    tspLabel: "1 티스푼 (tsp)",
    tspValue: "= 5ml",
    ozLabel: "1 온스 (oz)",
    ozValue: "= 28.35g",
    lbLabel: "1 파운드 (lb)",
    lbValue: "= 453.59g",
    
    // 밀가루 변환 데이터
    allPurposeLabel: "중력분 (all-purpose)",
    allPurposeValue: "= 125g",
    breadLabel: "강력분 (bread)",
    breadValue: "= 130g",
    cakeLabel: "박력분 (cake)",
    cakeValue: "= 115g",
    
    // 의류 사이즈 데이터
    koreaS: "S (88-90)",
    koreaM: "M (91-93)",
    koreaL: "L (94-96)",
    koreaXL: "XL (97-99)",
    usS: "S (34-36)",
    usM: "M (38-40)",
    usL: "L (42-44)",
    usXL: "XL (46-48)",
    
    // 신발 사이즈 데이터
    koreaShoe240: "240mm",
    koreaShoe250: "250mm",
    koreaShoe260: "260mm",
    koreaShoe270: "270mm",
    usShoe7: "US 7",
    usShoe8: "US 8",
    usShoe9: "US 9",
    usShoe10: "US 10",
    
    // 무게 변환 데이터
    kgLabel: "1kg",
    kgValue: "= 2.2lb",
    lbLabel2: "1lb",
    lbValue2: "= 0.45kg",
    
    // 거리 변환 데이터
    kmLabel: "1km",
    kmValue: "= 0.62mile",
    mileLabel: "1mile",
    mileValue: "= 1.61km",
    
    // 온도 변환 데이터
    celsiusLabel: "20°C",
    celsiusValue: "= 68°F",
    fahrenheitLabel: "68°F",
    fahrenheitValue: "= 20°C",
    
    // 속도 변환 데이터
    kmhLabel: "60km/h",
    kmhValue: "= 37mph",
    mphLabel: "60mph",
    mphValue: "= 97km/h",
    
    // 면적 변환 데이터
    pyeongLabel: "1평",
    pyeongValue: "= 3.3m²",
    m2Label: "1m²",
    m2Value: "= 0.3평",
    
    // 카테고리 카드 예시 태그
    lengthExamples: ["m ↔ cm", "km ↔ mile", "inch ↔ cm"],
    weightExamples: ["kg ↔ lb", "g ↔ oz", "mg ↔ g"],
    volumeExamples: ["L ↔ gal", "ml ↔ cup", "tbsp ↔ ml"],
    temperatureExamples: ["°C ↔ °F", "°C ↔ K", "°F ↔ K"],
    areaExamples: ["m² ↔ cm²", "acre ↔ ha", "km² ↔ m²"],
    speedExamples: ["km/h ↔ mph", "m/s ↔ km/h", "knot ↔ km/h"],
    
    // 단위 역사 페이지
    history: {
        title: "📚 단위의 역사",
        description: "인류가 사용해온 다양한 측정 단위들의 흥미로운 역사를 알아보세요",
        
        // 날짜 텍스트
        dates: {
            ancient: "고대",
            year1793: "1793년",
            year1795: "1795년",
            year1701: "1701년",
            year1742: "1742년",
            year1848: "1848년",
            year1875: "1875년",
            year1960: "1960년",
            year1964: "1964년",
            year2019: "2019년",
            current: "현재"
        },
        
        // 길이 단위 역사
        lengthHistory: {
            title: "길이 단위의 역사",
            ancient: {
                title: "인체를 기준으로 한 측정",
                description: "고대인들은 자신의 몸을 기준으로 길이를 측정했습니다. 발(foot), 팔꿈치(cubit), 손가락(finger) 등이 대표적인 예입니다.",
                foot: "피트(Foot): 성인 남성의 발 길이를 기준",
                cubit: "큐빗(Cubit): 팔꿈치에서 손가락 끝까지의 길이",
                span: "스팬(Span): 엄지와 새끼손가락을 벌린 길이"
            },
            meter1793: {
                title: "미터의 탄생",
                description: "프랑스 혁명 당시, 지구의 자오선 길이를 기준으로 미터가 정의되었습니다. 지구 자오선의 1/40,000,000을 1미터로 정했습니다.",
                fact: "재미있는 사실: 최초의 미터 표준은 백금-이리듐 합금으로 만들어졌습니다."
            },
            modern1960: {
                title: "현대적 정의",
                description: "크립톤-86 원자의 방출 스펙트럼을 기준으로 미터가 재정의되었습니다. 이후 1983년에는 빛의 속도를 기준으로 정의가 변경되었습니다.",
                formula: "현재 정의: 1미터 = 빛이 진공에서 1/299,792,458초 동안 진행한 거리"
            }
        },
        
        // 무게 단위 역사
        weightHistory: {
            title: "무게 단위의 역사",
            ancient: {
                title: "곡물을 기준으로 한 측정",
                description: "고대인들은 곡물의 무게를 기준으로 무게를 측정했습니다. 밀알, 보리알 등이 기본 단위로 사용되었습니다.",
                grain: "그레인(Grain): 보리알 하나의 무게",
                dram: "드램(Dram): 16그레인",
                ounce: "온스(Ounce): 437.5그레인"
            },
            kg1795: {
                title: "킬로그램의 탄생",
                description: "프랑스에서 1리터의 물의 무게를 기준으로 킬로그램이 정의되었습니다. 최초의 킬로그램 표준은 백금으로 만들어졌습니다.",
                fact: "재미있는 사실: 최초의 킬로그램 표준은 'Le Grand K'라고 불렸습니다."
            },
            modern2019: {
                title: "현대적 정의",
                description: "플랑크 상수를 기준으로 킬로그램이 재정의되었습니다. 이제 물리적 상수를 기준으로 정확한 무게를 측정할 수 있습니다.",
                formula: "현재 정의: 1킬로그램 = 플랑크 상수 h를 6.62607015×10⁻³⁴ J⋅s로 정의할 때의 질량"
            }
        },
        
        // 온도 단위 역사
        temperatureHistory: {
            title: "온도 단위의 역사",
            fahrenheit1701: {
                title: "화씨의 탄생",
                description: "독일의 다니엘 가브리엘 화씨(Daniel Gabriel Fahrenheit)가 화씨 온도계를 발명했습니다.",
                zero: "0°F: 얼음, 소금, 암모니아의 혼합물 온도",
                freeze: "32°F: 물의 어는점",
                boil: "212°F: 물의 끓는점"
            },
            celsius1742: {
                title: "섭씨의 탄생",
                description: "스웨덴의 안데르스 셀시우스(Anders Celsius)가 섭씨 온도계를 발명했습니다.",
                fact: "재미있는 사실: 초기에는 물의 끓는점을 0°C, 어는점을 100°C로 정의했습니다."
            },
            kelvin1848: {
                title: "켈빈의 탄생",
                description: "영국의 윌리엄 톰슨(켈빈 경)이 절대 온도 단위인 켈빈을 제안했습니다.",
                formula: "현재 정의: 1K = 물의 삼중점 온도의 1/273.16"
            }
        },
        
        // 부피 단위 역사
        volumeHistory: {
            title: "부피 단위의 역사",
            ancient: {
                title: "일상용품을 기준으로 한 측정",
                description: "고대인들은 일상에서 사용하는 용기를 기준으로 부피를 측정했습니다.",
                cup: "컵(Cup): 일반적인 마시는 컵의 부피",
                gallon: "갤런(Gallon): 8파인트",
                barrel: "배럴(Barrel): 와인이나 맥주를 담는 통"
            },
            liter1793: {
                title: "리터의 탄생",
                description: "프랑스에서 1세제곱데시미터(1dm³)를 1리터로 정의했습니다.",
                fact: "재미있는 사실: 리터는 그리스어 'λίτρα'(litra)에서 유래했습니다."
            },
            modern1964: {
                title: "현대적 정의",
                description: "1리터는 정확히 1세제곱데시미터(1dm³)로 정의되었습니다.",
                formula: "현재 정의: 1L = 1dm³ = 1000cm³"
            }
        },
        
        // SI 단위계 역사
        siHistory: {
            title: "국제단위계(SI)의 역사",
            convention1875: {
                title: "미터협약 체결",
                description: "17개국이 미터협약에 서명하여 국제적인 측정 표준을 확립했습니다.",
                fact: "재미있는 사실: 한국은 1959년에 미터협약에 가입했습니다."
            },
            si1960: {
                title: "SI 단위계 확립",
                description: "국제도량형총회(CGPM)에서 국제단위계(SI)를 공식적으로 채택했습니다.",
                basic: "기본 단위 7개: 미터, 킬로그램, 초, 암페어, 켈빈, 몰, 칸델라",
                supplementary: "보조 단위 2개: 라디안, 스테라디안"
            },
            current: {
                title: "지속적인 발전",
                description: "모든 SI 단위가 물리적 상수를 기준으로 재정의되어 정확도가 크게 향상되었습니다.",
                formula: "현재 7개 기본 단위: 미터(m), 킬로그램(kg), 초(s), 암페어(A), 켈빈(K), 몰(mol), 칸델라(cd)"
            }
        },
        
        // 재미있는 단위 이야기
        funFacts: {
            title: "재미있는 단위 이야기",
            elephant: {
                title: "🐘 코끼리 단위",
                description: "미국에서는 큰 물건의 무게를 '코끼리' 단위로 표현하기도 합니다. 1코끼리 = 약 6톤"
            },
            football: {
                title: "🏈 미식축구장 단위",
                description: "미국에서는 거리를 '미식축구장' 단위로 표현합니다. 1미식축구장 = 100야드(약 91.44m)"
            },
            pizza: {
                title: "🍕 피자 단위",
                description: "이탈리아에서는 면적을 '피자' 단위로 표현하기도 합니다. 1피자 = 약 0.5m²"
            },
            car: {
                title: "🚗 자동차 단위",
                description: "주차장 면적을 '자동차' 단위로 표현합니다. 1자동차 = 약 15m²"
            }
        },
        labels: {
            fact: '재미있는 사실:',
            formula: '현재 정의:'
        },
        noResults: "검색 결과가 없습니다.",
        category: "카테고리",
        unit: "단위",
        information: "정보",
        justNow: "방금 전",
        minutesAgo: "분 전",
        hoursAgo: "시간 전",
        locale: "ko-KR",
        
        // 푸터 관련 텍스트
        footerTitle: "단위 변환 도우미",
        footerDescription: "정확하고 빠른 단위 변환을 도와드립니다.",
        footerUsefulLinks: "유용한 링크",
        footerTipsLink: "변환 팁",
        footerPrivacyLink: "개인정보 처리방침",
        footerSupportedUnits: "지원하는 단위",
        footerCopyright: "© 2025 단위 변환 도우미. All rights reserved."
    }
};

// 전역 변수로 할당
window.ko = ko;
