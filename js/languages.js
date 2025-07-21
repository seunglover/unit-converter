// 다국어 지원 데이터
const languages = {
    ko: {
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
        
        // Tipsカテゴリ
        tipsCooking: "🍳 料理に役立つ変換のコツ",
        tipsShopping: "🛒 海外通販に役立つ変換のコツ",
        tipsExercise: "💪 運動に役立つ変換のコツ",
        tipsTravel: "✈️ 旅行に役立つ変換のコツ",
        tipsRealEstate: "🏠 不動産に役立つ変換のコツ",
        tipsMemory: "🧠 覚えやすい変換のコツ",
        
        // Tips内容
        cookingUnitTitle: "料理単位変換",
        flourTitle: "小麦粉変換",
        clothingTitle: "服のサイズ変換",
        shoesTitle: "靴のサイズ変換",
        weightTitle: "重さ変換（運動）",
        distanceTitle: "距離変換（ランニング）",
        temperatureTitle: "温度変換（旅行）",
        speedTitle: "速度変換（運転）",
        areaTitle: "面積変換（不動産）",
        areaComparisonTitle: "実用的な面積比較",
        quickCalculationTitle: "早い計算方法",
        
        // Tipsコツ内容
        cookingTip: "💡 コツ: 料理では正確な重さよりも体積単位の方が便利です。",
        flourTip: "💡 コツ: 材料によって同じ体積でも重さが違うことがあります！",
        clothingTip: "💡 コツ: ブランドによってサイズが違うので正確なサイズを確認してください。",
        shoesTip: "💡 コツ: 靴はブランドによってサイズが違うので必ず実測してから購入してください。",
        weightTip: "💡 コツ: ジムで使用する重さの単位は通常lb（ポンド）です。",
        distanceTip: "💡 コツ: ランニングアプリで距離単位をマイルに設定すると海外ランニングイベント参加に役立ちます。",
        temperatureTip: "💡 コツ: 摂氏から華氏に変換する時は（摂氏 × 9/5）+ 32の公式を使用してください。",
        speedTip: "💡 コツ: 海外運転時は速度制限表示がmphになっていることがあります。",
        areaTip: "💡 コツ: 不動産広告では坪と平方メートルを混用して使用することが多いです。",
        areaComparisonTip: "💡 コツ: 面積を日常生活と比較するとより直感的に理解できます。",
        quickCalculationTip: "💡 コツ: 正確な計算が必要な時は上の変換機を使用してください！",
        
        // 早い計算方法内容
        tempConversion: "温度変換: 摂氏から華氏: 摂氏 × 2 + 30（近似値）",
        weightConversion: "重さ変換: kgからlb: kg × 2 + kg × 0.2",
        distanceConversion: "距離変換: kmからmile: km × 0.6",
        areaConversion: "面積変換: m²から坪: m² ÷ 3.3",
        
        // テーブルラベル
        koreaSize: "韓国サイズ",
        usSize: "米国サイズ",
        
        // カテゴリカード例タグ
        lengthExamples: ["m ↔ cm", "km ↔ mile", "inch ↔ cm"],
        weightExamples: ["kg ↔ lb", "g ↔ oz", "mg ↔ g"],
        volumeExamples: ["L ↔ gal", "ml ↔ cup", "tbsp ↔ ml"],
        temperatureExamples: ["°C ↔ °F", "°C ↔ K", "°F ↔ K"],
        areaExamples: ["m² ↔ cm²", "acre ↔ ha", "km² ↔ m²"],
        speedExamples: ["km/h ↔ mph", "m/s ↔ km/h", "knot ↔ km/h"]
    },
    
    en: {
        // Main page
        heroTitle: "All Unit Conversions for Daily Life",
        heroDescription: "Convert length, weight, volume, temperature and other various units easily and quickly",
        
        // Categories
        length: "Length",
        weight: "Weight",
        volume: "Volume", 
        temperature: "Temperature",
        area: "Area",
        speed: "Speed",
        
        // Category descriptions
        lengthDesc: "Meters, centimeters, inches, feet, etc.",
        weightDesc: "Kilograms, grams, pounds, ounces, etc.",
        volumeDesc: "Liters, milliliters, gallons, cups, etc.",
        temperatureDesc: "Celsius, Fahrenheit, Kelvin, etc.",
        areaDesc: "Square meters, acres, hectares, etc.",
        speedDesc: "Kilometers/hour, miles/hour, knots, etc.",
        
        // Unit names
        units: {
            // Length units
            mm: "Millimeter",
            cm: "Centimeter",
            m: "Meter",
            km: "Kilometer",
            inch: "Inch",
            ft: "Foot",
            yard: "Yard",
            mile: "Mile",
            
            // Weight units
            mg: "Milligram",
            g: "Gram",
            kg: "Kilogram",
            ton: "Ton",
            lb: "Pound",
            oz: "Ounce",
            
            // Volume units
            ml: "Milliliter",
            l: "Liter",
            gal: "Gallon",
            cup: "Cup",
            tbsp: "Tablespoon",
            tsp: "Teaspoon",
            
            // Temperature units
            celsius: "Celsius",
            fahrenheit: "Fahrenheit",
            kelvin: "Kelvin",
            
            // Temperature units (symbol matching)
            "°C": "Celsius",
            "°F": "Fahrenheit",
            "K": "Kelvin",
            
            // Area units
            m2: "Square Meter",
            cm2: "Square Centimeter",
            km2: "Square Kilometer",
            acre: "Acre",
            ha: "Hectare",
            
            // Area units (symbol matching)
            "mm²": "Square Millimeter",
            "cm²": "Square Centimeter",
            "m²": "Square Meter",
            "km²": "Square Kilometer",
            
            // Speed units
            kmh: "Kilometer/Hour",
            mph: "Mile/Hour",
            ms: "Meter/Second",
            knot: "Knot"
        },
        
        // Unit descriptions
        unitDescriptions: {
            // Length unit descriptions
            mm: "1 meter is 1000 times smaller. It's used to measure very small lengths.",
            cm: "1 meter is 100 times smaller. It's the most commonly used length unit in daily life.",
            m: "It's the basic length unit of the International System of Units (SI).",
            km: "1 meter is 1000 times larger. It's used for distance measurement.",
            inch: "It's a length unit used in English-speaking countries.",
            ft: "It's a length unit used in English-speaking countries.",
            yard: "It's a length unit used in English-speaking countries.",
            mile: "It's a distance unit used in English-speaking countries.",
            
            // Weight unit descriptions
            mg: "1 gram is 1000 times smaller. It's used to measure very small weights.",
            g: "It's the most commonly used weight unit in daily life.",
            kg: "It's the basic weight unit of the International System of Units (SI).",
            ton: "1 kilogram is 1000 times larger. It's used to measure large weights.",
            lb: "It's a weight unit used in English-speaking countries.",
            oz: "It's a weight unit used in English-speaking countries.",
            
            // Volume unit descriptions
            ml: "1 liter is 1000 times smaller. It's used to measure small volumes.",
            l: "It's the most commonly used volume unit in daily life.",
            gal: "It's a volume unit used in English-speaking countries.",
            cup: "It's a volume unit commonly used in cooking.",
            tbsp: "It's a volume unit commonly used in cooking.",
            tsp: "It's a volume unit commonly used in cooking.",
            
            // Temperature unit descriptions
            "°C": "It's a commonly used temperature unit.",
            "°F": "It's a temperature unit commonly used in English-speaking countries.",
            "K": "It's an absolute temperature unit used in science.",
            
            // Area unit descriptions
            "mm²": "It's used to measure very small areas.",
            "cm²": "It's used to measure small areas.",
            "m²": "It's the most commonly used area unit in daily life.",
            "km²": "It's used to measure large areas.",
            ha: "It's used to measure land or land area.",
            acre: "It's a land area unit used in English-speaking countries.",
            "pyeong": "It's used to measure residential area in Korea."
        },
        
        // Search
        searchPlaceholder: "Search unit name or category (e.g., oz, length, temperature)",
        searchLabel: "Search",
        
        // Converter
        backToMain: "Back to Main",
        backToMainAria: "Back to Main",
        swapLabel: "Swap Units",
        swapLabelAria: "Swap Units",
        convertButton: "Convert",
        clearButton: "Clear",
        converterDescription: "Convert length units commonly used in daily life",
        
        // Category-specific converter descriptions
        lengthConverterDesc: "Convert length units commonly used in daily life",
        weightConverterDesc: "Convert weight units commonly used in daily life",
        volumeConverterDesc: "Convert volume units commonly used in daily life",
        temperatureConverterDesc: "Convert temperature units commonly used in daily life",
        areaConverterDesc: "Convert area units commonly used in daily life",
        speedConverterDesc: "Convert speed units commonly used in daily life",
        
        // Category information
        categories: {
            length: {
                name: "Length",
                description: "Convert length units commonly used in daily life"
            },
            weight: {
                name: "Weight",
                description: "Convert weight units commonly used in daily life"
            },
            volume: {
                name: "Volume",
                description: "Convert volume units commonly used in daily life"
            },
            temperature: {
                name: "Temperature",
                description: "Convert temperature units commonly used in daily life"
            },
            area: {
                name: "Area",
                description: "Convert area units commonly used in daily life"
            },
            speed: {
                name: "Speed",
                description: "Convert speed units commonly used in daily life"
            }
        },
        
        // Example data
        examples: {
            length: [
                {
                    title: "Daily Life Examples",
                    description: "Lengths we encounter in daily life",
                    value: "Adult height: 1.7m, Smartphone: 6.1inch, A4 paper: 21cm"
                },
                {
                    title: "Sports Related",
                    description: "Length measurements related to sports",
                    value: "Marathon: 42.195km, Basketball court: 28m, Swimming pool: 25m"
                },
                {
                    title: "Construction Related",
                    description: "Length measurements related to construction",
                    value: "Door height: 2.1m, Room size: 3m×4m, Building height: 100m"
                }
            ],
            weight: [
                {
                    title: "Daily Life Examples",
                    description: "Weights we encounter in daily life",
                    value: "Apple: 200g, Milk: 1kg, Car: 1.5ton"
                },
                {
                    title: "Cooking Related",
                    description: "Weight measurements related to cooking",
                    value: "Flour: 500g, Sugar: 1kg, Salt: 10g"
                },
                {
                    title: "Exercise Related",
                    description: "Weight measurements related to exercise",
                    value: "Dumbbell: 5kg, Barbell: 20kg, Body weight: 70kg"
                }
            ],
            volume: [
                {
                    title: "Daily Life Examples",
                    description: "Volumes we encounter in daily life",
                    value: "Water bottle: 500ml, Milk carton: 1L, Gas refill: 50L"
                },
                {
                    title: "Cooking Related",
                    description: "Volume measurements related to cooking",
                    value: "Water: 2L, Cooking oil: 100ml, Sauce: 30ml"
                },
                {
                    title: "Beverage Related",
                    description: "Volume measurements related to beverages",
                    value: "Coffee: 350ml, Beer: 500ml, Wine: 750ml"
                }
            ],
            temperature: [
                {
                    title: "Daily Life Examples",
                    description: "Temperatures we encounter in daily life",
                    value: "Room temperature: 22°C, Body temperature: 36.5°C, Refrigerator: 4°C"
                },
                {
                    title: "Weather Related",
                    description: "Temperature measurements related to weather",
                    value: "Summer day: 30°C, Winter night: -5°C, Spring/Fall: 15°C"
                },
                {
                    title: "Cooking Related",
                    description: "Temperature measurements related to cooking",
                    value: "Water boiling point: 100°C, Oven: 180°C, Freezer: -18°C"
                }
            ],
            area: [
                {
                    title: "Daily Life Examples",
                    description: "Areas we encounter in daily life",
                    value: "Apartment 1 pyeong: 3.3m², Soccer field: 7140m², Seoul: 605km²"
                },
                {
                    title: "Real Estate Related",
                    description: "Area measurements related to real estate",
                    value: "Apartment: 84m², House: 150m², Land: 1000m²"
                },
                {
                    title: "Agriculture Related",
                    description: "Area measurements related to agriculture",
                    value: "Rice field: 1ha, Field: 0.5ha, Orchard: 2ha"
                }
            ],
            speed: [
                {
                    title: "Daily Life Examples",
                    description: "Speeds we encounter in daily life",
                    value: "Walking: 5km/h, Bicycle: 20km/h, Car: 60km/h"
                },
                {
                    title: "Transportation Related",
                    description: "Speed measurements related to transportation",
                    value: "Highway: 100km/h, City road: 50km/h, Subway: 80km/h"
                },
                {
                    title: "Exercise Related",
                    description: "Speed measurements related to exercise",
                    value: "Running: 12km/h, Swimming: 2km/h, Hiking: 3km/h"
                }
            ]
        },
        
        // Convert text
        convertText: "Conversion",
        clearMessage: "Cleared.",
        
        // Tips button
        tipsButtonText: "View Conversion Tips",
        
        // Toast messages
        toastMessages: {
            invalidNumber: "Please enter a valid number.",
            selectUnit: "Please select units.",
            zeroMessage: "0 is 0 in all units.",
            conversionComplete: "Conversion completed!",
            invalidCombination: "Invalid unit combination for conversion.",
            cleared: "Cleared."
        },
        
        // Others
        logoText: "Unit Converter",
        
        // FAQ page
        faqTitle: "Frequently Asked Questions (FAQ)",
        faqDescription: "Check out how to use the unit converter and common questions",
        
        // FAQ categories
        faqUsage: "📖 Usage Guide",
        faqAccuracy: "🎯 Accuracy & Tips",
        faqLifestyle: "💡 Lifestyle Tips",
        faqTechnical: "🔧 Technical Questions",
        faqTroubleshooting: "⚠️ Troubleshooting",
        
        // Tips page
        tipsTitle: "Practical Conversion Tips",
        tipsDescription: "Unit conversion tips you can use right away in daily life",
        
        // Tips categories
        tipsCooking: "🍳 Useful Conversion Tips for Cooking",
        tipsShopping: "🛒 Useful Conversion Tips for Overseas Shopping",
        tipsExercise: "💪 Useful Conversion Tips for Exercise",
        tipsTravel: "✈️ Useful Conversion Tips for Travel",
        tipsRealEstate: "🏠 Useful Conversion Tips for Real Estate",
        tipsMemory: "🧠 Easy-to-Remember Conversion Tips",
        
        // Tips content
        cookingUnitTitle: "Cooking Unit Conversion",
        flourTitle: "Flour Conversion",
        clothingTitle: "Clothing Size Conversion",
        shoesTitle: "Shoe Size Conversion",
        weightTitle: "Weight Conversion (Exercise)",
        distanceTitle: "Distance Conversion (Running)",
        temperatureTitle: "Temperature Conversion (Travel)",
        speedTitle: "Speed Conversion (Driving)",
        areaTitle: "Area Conversion (Real Estate)",
        areaComparisonTitle: "Practical Area Comparison",
        quickCalculationTitle: "Quick Calculation Methods",
        
        // Tips content
        cookingTip: "💡 Tip: Volume units are more convenient than exact weight when cooking.",
        flourTip: "💡 Tip: The same volume can have different weights depending on the ingredient!",
        clothingTip: "💡 Tip: Sizes vary by brand, so check the exact size before purchasing.",
        shoesTip: "💡 Tip: Shoe sizes vary by brand, so always measure your feet before buying.",
        weightTip: "💡 Tip: Weight units used in gyms are usually lb (pounds).",
        distanceTip: "💡 Tip: Setting distance units to miles in running apps helps with overseas running events.",
        temperatureTip: "💡 Tip: Use the formula (Celsius × 9/5) + 32 when converting from Celsius to Fahrenheit.",
        speedTip: "💡 Tip: Speed limits are often displayed in mph when driving overseas.",
        areaTip: "💡 Tip: Real estate ads often mix pyeong and square meters.",
        areaComparisonTip: "💡 Tip: Comparing areas to daily life makes them more intuitive to understand.",
        quickCalculationTip: "💡 Tip: Use the converter above when you need accurate calculations!",
        
        // Quick calculation methods content
        tempConversion: "Temperature conversion: Celsius to Fahrenheit: Celsius × 2 + 30 (approximate)",
        weightConversion: "Weight conversion: kg to lb: kg × 2 + kg × 0.2",
        distanceConversion: "Distance conversion: km to mile: km × 0.6",
        areaConversion: "Area conversion: m² to pyeong: m² ÷ 3.3",
        
        // Table labels
        koreaSize: "Korea Size",
        usSize: "US Size",
        
        // Category card example tags
        lengthExamples: ["m ↔ cm", "km ↔ mile", "inch ↔ cm"],
        weightExamples: ["kg ↔ lb", "g ↔ oz", "mg ↔ g"],
        volumeExamples: ["L ↔ gal", "ml ↔ cup", "tbsp ↔ ml"],
        temperatureExamples: ["°C ↔ °F", "°C ↔ K", "°F ↔ K"],
        areaExamples: ["m² ↔ cm²", "acre ↔ ha", "km² ↔ m²"],
        speedExamples: ["km/h ↔ mph", "m/s ↔ km/h", "knot ↔ km/h"]
    },
    
    ja: {
        // メインページ
        heroTitle: "日常生活のすべての単位変換",
        heroDescription: "長さ、重さ、体積、温度など様々な単位を簡単に素早く変換できます",
        
        // カテゴリ
        length: "長さ",
        weight: "重さ",
        volume: "体積",
        temperature: "温度",
        area: "面積",
        speed: "速度",
        
        // カテゴリ説明
        lengthDesc: "メートル、センチメートル、インチ、フィートなど",
        weightDesc: "キログラム、グラム、ポンド、オンスなど",
        volumeDesc: "リットル、ミリリットル、ガロン、カップなど",
        temperatureDesc: "摂氏、華氏、ケルビンなど",
        areaDesc: "平方メートル、エーカー、ヘクタールなど",
        speedDesc: "キロメートル/時、マイル/時、ノットなど",
        
        // 単位名
        units: {
            // 長さ単位
            mm: "ミリメートル",
            cm: "センチメートル",
            m: "メートル",
            km: "キロメートル",
            inch: "インチ",
            ft: "フィート",
            yard: "ヤード",
            mile: "マイル",
            
            // 重さ単位
            mg: "ミリグラム",
            g: "グラム",
            kg: "キログラム",
            ton: "トン",
            lb: "ポンド",
            oz: "オンス",
            
            // 体積単位
            ml: "ミリリットル",
            l: "リットル",
            gal: "ガロン",
            cup: "カップ",
            tbsp: "大さじ",
            tsp: "小さじ",
            
            // 温度単位
            celsius: "摂氏",
            fahrenheit: "華氏",
            kelvin: "ケルビン",
            
            // 温度単位 (記号マッチング)
            "°C": "摂氏",
            "°F": "華氏",
            "K": "ケルビン",
            
            // 面積単位
            m2: "平方メートル",
            cm2: "平方センチメートル",
            km2: "平方キロメートル",
            acre: "エーカー",
            ha: "ヘクタール",
            
            // 面積単位 (記号マッチング)
            "mm²": "平方ミリメートル",
            "cm²": "平方センチメートル",
            "m²": "平方メートル",
            "km²": "平方キロメートル",
            
            // 速度単位
            kmh: "キロメートル/時",
            mph: "マイル/時",
            ms: "メートル/秒",
            knot: "ノット"
        },
        
        // 単位説明
        unitDescriptions: {
            // 長さ単位説明
            mm: "1メートルは1000分の1です。非常に小さい長さを測定するときに使用します。",
            cm: "1メートルは100分の1です。日常生活で最もよく使用される長さ単位です。",
            m: "国際単位系（SI）の基本長さ単位です。",
            km: "1メートルは1000倍です。距離を測定するときに使用します。",
            inch: "英語圏で使用される長さ単位です。",
            ft: "英語圏で使用される長さ単位です。",
            yard: "英語圏で使用される長さ単位です。",
            mile: "英語圏で使用される距離単位です。",
            
            // 重さ単位説明
            mg: "1グラムは1000分の1です。非常に小さい重さを測定するときに使用します。",
            g: "日常生活で最もよく使用される重さ単位です。",
            kg: "国際単位系（SI）の基本重さ単位です。",
            ton: "1キログラムは1000倍です。大きな重さを測定するときに使用します。",
            lb: "英語圏で使用される重さ単位です。",
            oz: "英語圏で使用される重さ単位です。",
            
            // 体積単位説明
            ml: "1リットルは1000分の1です。小さな体積を測定するときに使用します。",
            l: "日常生活で最もよく使用される体積単位です。",
            gal: "英語圏で使用される体積単位です。",
            cup: "料理でよく使用される体積単位です。",
            tbsp: "料理で使用される体積単位です。",
            tsp: "料理で使用される体積単位です。",
            
            // 温度単位説明
            "°C": "一般的に使用される温度単位です。",
            "°F": "英語圏で主に使用される温度単位です。",
            "K": "科学で使用される絶対温度単位です。",
            
            // 面積単位説明
            "mm²": "非常に小さな面積を測定するときに使用します。",
            "cm²": "小さな面積を測定するときに使用します。",
            "m²": "日常生活で最もよく使用される面積単位です。",
            "km²": "大きな面積を測定するときに使用します。",
            ha: "土地や土地面積を測定するときに使用します。",
            acre: "英語圏で使用される面積単位です。",
            "pyeong": "韓国で住宅面積を測定するときに使用します。"
        },
        
        // 単位公式
        unitFormulas: {
            // 長さ単位公式
            mm: "1mm = 0.001m",
            cm: "1cm = 0.01m",
            m: "1m = 100cm = 1000mm",
            km: "1km = 1000m",
            inch: "1inch = 2.54cm",
            ft: "1ft = 12inch = 30.48cm",
            yard: "1yard = 3ft = 91.44cm",
            mile: "1mile = 1.609km",
            
            // 重さ単位公式
            mg: "1mg = 0.001g",
            g: "1g = 1000mg",
            kg: "1kg = 1000g",
            ton: "1ton = 1000kg",
            lb: "1lb = 0.4536kg",
            oz: "1oz = 28.35g",
            
            // 体積単位公式
            ml: "1ml = 0.001L",
            l: "1L = 1000ml",
            gal: "1gal = 3.785L",
            cup: "1cup = 236.6ml",
            tbsp: "1tbsp = 14.79ml",
            tsp: "1tsp = 4.93ml",
            
            // 温度単位公式
            "°C": "摂氏 = (華氏 - 32) × 5/9",
            "°F": "華氏 = 摂氏 × 9/5 + 32",
            "K": "ケルビン = 摂氏 + 273.15",
            
            // 面積単位公式
            "mm²": "1mm² = 0.000001m²",
            "cm²": "1cm² = 0.0001m²",
            "m²": "1m² = 10000cm²",
            "km²": "1km² = 1000000m²",
            ha: "1ha = 10000m²",
            acre: "1acre = 4046.86m²",
            "pyeong": "1pyeong = 3.3058m²"
        },
        
        // 検索
        searchPlaceholder: "単位名またはカテゴリを検索 (例: oz, 長さ, 温度)",
        searchLabel: "検索",
        
        // コンバーター
        backToMain: "メインに戻る",
        backToMainAria: "メインに戻る",
        swapLabel: "単位交換",
        swapLabelAria: "単位交換",
        convertButton: "変換",
        clearButton: "クリア",
        converterDescription: "日常生活でよく使う長さの単位を変換してみましょう",
        
        // カテゴリ別コンバーター説明
        lengthConverterDesc: "日常生活でよく使う長さの単位を変換してみましょう",
        weightConverterDesc: "日常生活でよく使う重さの単位を変換してみましょう",
        volumeConverterDesc: "日常生活でよく使う体積の単位を変換してみましょう",
        temperatureConverterDesc: "日常生活でよく使う温度の単位を変換してみましょう",
        areaConverterDesc: "日常生活でよく使う面積の単位を変換してみましょう",
        speedConverterDesc: "日常生活でよく使う速度の単位を変換してみましょう",
        
        // カテゴリ情報
        categories: {
            length: {
                name: "長さ",
                description: "日常生活でよく使う長さの単位を変換してみましょう"
            },
            weight: {
                name: "重さ",
                description: "日常生活でよく使う重さの単位を変換してみましょう"
            },
            volume: {
                name: "体積",
                description: "日常生活でよく使う体積の単位を変換してみましょう"
            },
            temperature: {
                name: "温度",
                description: "日常生活でよく使う温度の単位を変換してみましょう"
            },
            area: {
                name: "面積",
                description: "日常生活でよく使う面積の単位を変換してみましょう"
            },
            speed: {
                name: "速度",
                description: "日常生活でよく使う速度の単位を変換してみましょう"
            }
        },
        
        // 例データ
        examples: {
            length: [
                {
                    title: "日常生活の例",
                    description: "日常生活でよく出会う長さ",
                    value: "成人の身長: 1.7m, スマートフォン: 6.1inch, A4用紙: 21cm"
                },
                {
                    title: "スポーツ関連",
                    description: "スポーツに関連する長さの測定",
                    value: "マラソン: 42.195km, バスケットコート: 28m, プール: 25m"
                },
                {
                    title: "建築関連",
                    description: "建築に関連する長さの測定",
                    value: "ドアの高さ: 2.1m, 部屋のサイズ: 3m×4m, 建物の高さ: 100m"
                }
            ],
            weight: [
                {
                    title: "日常生活の例",
                    description: "日常生活でよく出会う重さ",
                    value: "りんご: 200g, 牛乳: 1kg, 車: 1.5ton"
                },
                {
                    title: "料理関連",
                    description: "料理に関連する重さの測定",
                    value: "小麦粉: 500g, 砂糖: 1kg, 塩: 10g"
                },
                {
                    title: "運動関連",
                    description: "運動に関連する重さの測定",
                    value: "ダンベル: 5kg, バーベル: 20kg, 体重: 70kg"
                }
            ],
            volume: [
                {
                    title: "日常生活の例",
                    description: "日常生活でよく出会う体積",
                    value: "水筒: 500ml, 牛乳パック: 1L, 給油: 50L"
                },
                {
                    title: "料理関連",
                    description: "料理に関連する体積の測定",
                    value: "水: 2L, 食用油: 100ml, ソース: 30ml"
                },
                {
                    title: "飲料関連",
                    description: "飲料に関連する体積の測定",
                    value: "コーヒー: 350ml, ビール: 500ml, ワイン: 750ml"
                }
            ],
            temperature: [
                {
                    title: "日常生活の例",
                    description: "日常生活でよく出会う温度",
                    value: "室内温度: 22°C, 体温: 36.5°C, 冷蔵庫: 4°C"
                },
                {
                    title: "天気関連",
                    description: "天気に関連する温度の測定",
                    value: "夏の昼: 30°C, 冬の夜: -5°C, 春/秋: 15°C"
                },
                {
                    title: "料理関連",
                    description: "料理に関連する温度の測定",
                    value: "水の沸点: 100°C, オーブン: 180°C, 冷凍庫: -18°C"
                }
            ],
            area: [
                {
                    title: "日常生活の例",
                    description: "日常生活でよく出会う面積",
                    value: "アパート1坪: 3.3m², サッカー場: 7140m², ソウル市: 605km²"
                },
                {
                    title: "不動産関連",
                    description: "不動産に関連する面積の測定",
                    value: "アパート: 84m², 住宅: 150m², 土地: 1000m²"
                },
                {
                    title: "農業関連",
                    description: "農業に関連する面積の測定",
                    value: "田んぼ: 1ha, 畑: 0.5ha, 果樹園: 2ha"
                }
            ],
            speed: [
                {
                    title: "日常生活の例",
                    description: "日常生活でよく出会う速度",
                    value: "徒歩: 5km/h, 自転車: 20km/h, 車: 60km/h"
                },
                {
                    title: "交通関連",
                    description: "交通に関連する速度の測定",
                    value: "高速道路: 100km/h, 市内道路: 50km/h, 地下鉄: 80km/h"
                },
                {
                    title: "運動関連",
                    description: "運動に関連する速度の測定",
                    value: "ランニング: 12km/h, 水泳: 2km/h, ハイキング: 3km/h"
                }
            ]
        },
        
        // 変換テキスト
        convertText: "変換",
        clearMessage: "クリアされました。",
        
        // 変換コツボタン
        tipsButtonText: "変換コツを見る",
        
        // トーストメッセージ
        toastMessages: {
            invalidNumber: "正しい数字を入力してください。",
            selectUnit: "単位を選択してください。",
            zeroMessage: "0はすべての単位で0です。",
            conversionComplete: "変換が完了しました！",
            invalidCombination: "変換できない単位の組み合わせです。",
            cleared: "クリアされました。"
        },
        
        // その他
        logoText: "単位変換機",
        
        // FAQページ
        faqTitle: "よくある質問 (FAQ)",
        faqDescription: "単位変換機の使い方とよくある質問を確認してください",
        
        // FAQカテゴリ
        faqUsage: "📖 使い方ガイド",
        faqAccuracy: "🎯 精度とコツ",
        faqLifestyle: "💡 日常生活での活用",
        faqTechnical: "🔧 技術的な質問",
        faqTroubleshooting: "⚠️ トラブルシューティング",
        
        // Tipsページ
        tipsTitle: "実用的な変換コツ",
        tipsDescription: "日常生活ですぐに活用できる単位変換のコツを集めました",
        
        // Tipsカテゴリ
        tipsCooking: "🍳 料理に役立つ変換のコツ",
        tipsShopping: "🛒 海外通販に役立つ変換のコツ",
        tipsExercise: "💪 運動に役立つ変換のコツ",
        tipsTravel: "✈️ 旅行に役立つ変換のコツ",
        tipsRealEstate: "🏠 不動産に役立つ変換のコツ",
        tipsMemory: "🧠 覚えやすい変換のコツ",
        
        // Tips内容
        cookingUnitTitle: "料理単位変換",
        flourTitle: "小麦粉変換",
        clothingTitle: "服のサイズ変換",
        shoesTitle: "靴のサイズ変換",
        weightTitle: "重さ変換（運動）",
        distanceTitle: "距離変換（ランニング）",
        temperatureTitle: "温度変換（旅行）",
        speedTitle: "速度変換（運転）",
        areaTitle: "面積変換（不動産）",
        areaComparisonTitle: "実用的な面積比較",
        quickCalculationTitle: "早い計算方法",
        
        // Tipsコツ内容
        cookingTip: "💡 コツ: 料理では正確な重さよりも体積単位の方が便利です。",
        flourTip: "💡 コツ: 材料によって同じ体積でも重さが違うことがあります！",
        clothingTip: "💡 コツ: ブランドによってサイズが違うので正確なサイズを確認してください。",
        shoesTip: "💡 コツ: 靴はブランドによってサイズが違うので必ず実測してから購入してください。",
        weightTip: "💡 コツ: ジムで使用する重さの単位は通常lb（ポンド）です。",
        distanceTip: "💡 コツ: ランニングアプリで距離単位をマイルに設定すると海外ランニングイベント参加に役立ちます。",
        temperatureTip: "💡 コツ: 摂氏から華氏に変換する時は（摂氏 × 9/5）+ 32の公式を使用してください。",
        speedTip: "💡 コツ: 海外運転時は速度制限表示がmphになっていることがあります。",
        areaTip: "💡 コツ: 不動産広告では坪と平方メートルを混用して使用することが多いです。",
        areaComparisonTip: "💡 コツ: 面積を日常生活と比較するとより直感的に理解できます。",
        quickCalculationTip: "💡 コツ: 正確な計算が必要な時は上の変換機を使用してください！",
        
        // 早い計算方法内容
        tempConversion: "温度変換: 摂氏から華氏: 摂氏 × 2 + 30（近似値）",
        weightConversion: "重さ変換: kgからlb: kg × 2 + kg × 0.2",
        distanceConversion: "距離変換: kmからmile: km × 0.6",
        areaConversion: "面積変換: m²から坪: m² ÷ 3.3",
        
        // テーブルラベル
        koreaSize: "韓国サイズ",
        usSize: "米国サイズ",
        
        // カテゴリカード例タグ
        lengthExamples: ["m ↔ cm", "km ↔ mile", "inch ↔ cm"],
        weightExamples: ["kg ↔ lb", "g ↔ oz", "mg ↔ g"],
        volumeExamples: ["L ↔ gal", "ml ↔ cup", "tbsp ↔ ml"],
        temperatureExamples: ["°C ↔ °F", "°C ↔ K", "°F ↔ K"],
        areaExamples: ["m² ↔ cm²", "acre ↔ ha", "km² ↔ m²"],
        speedExamples: ["km/h ↔ mph", "m/s ↔ km/h", "knot ↔ km/h"]
    },
    
    zh: {
        // 主页面
        heroTitle: "日常生活所有单位转换",
        heroDescription: "轻松快速转换长度、重量、体积、温度等各种单位",
        
        // 类别
        length: "长度",
        weight: "重量",
        volume: "体积",
        temperature: "温度",
        area: "面积",
        speed: "速度",
        
        // 类别描述
        lengthDesc: "米、厘米、英寸、英尺等",
        weightDesc: "千克、克、磅、盎司等",
        volumeDesc: "升、毫升、加仑、杯等",
        temperatureDesc: "摄氏度、华氏度、开尔文等",
        areaDesc: "平方米、英亩、公顷等",
        speedDesc: "公里/小时、英里/小时、节等",
        
        // 单位名称
        units: {
            // 长度单位
            mm: "毫米",
            cm: "厘米",
            m: "米",
            km: "公里",
            inch: "英寸",
            ft: "英尺",
            yard: "码",
            mile: "英里",
            
            // 重量单位
            mg: "毫克",
            g: "克",
            kg: "千克",
            ton: "吨",
            lb: "磅",
            oz: "盎司",
            
            // 体积单位
            ml: "毫升",
            l: "升",
            gal: "加仑",
            cup: "杯",
            tbsp: "大匙",
            tsp: "小匙",
            
            // 温度单位
            celsius: "摄氏度",
            fahrenheit: "华氏度",
            kelvin: "开尔文",
            
            // 温度单位 (符号匹配)
            "°C": "摄氏度",
            "°F": "华氏度",
            "K": "开尔文",
            
            // 面积单位
            m2: "平方米",
            cm2: "平方厘米",
            km2: "平方公里",
            acre: "英亩",
            ha: "公顷",
            
            // 面积单位 (符号匹配)
            "mm²": "平方毫米",
            "cm²": "平方厘米",
            "m²": "平方米",
            "km²": "平方公里",
            
            // 速度单位
            kmh: "公里/小时",
            mph: "英里/小时",
            ms: "米/秒",
            knot: "节"
        },
        
        // 单位说明
        unitDescriptions: {
            // 长度单位说明
            mm: "1米是1000分之1。用于测量非常小的长度。",
            cm: "1米是100分之1。是日常生活中最常用的长度单位。",
            m: "它是国际单位制（SI）的基本长度单位。",
            km: "1米是1000倍。用于测量距离。",
            inch: "它是英语国家使用的长度单位。",
            ft: "它是英语国家使用的长度单位。",
            yard: "它是英语国家使用的长度单位。",
            mile: "它是英语国家使用的距离单位。",
            
            // 重量单位说明
            mg: "1克是1000分之1。用于测量非常小的重量。",
            g: "它是日常生活中最常用的重量单位。",
            kg: "它是国际单位制（SI）的基本重量单位。",
            ton: "1千克是1000倍。用于测量较大的重量。",
            lb: "它是英语国家使用的重量单位。",
            oz: "它是英语国家使用的重量单位。",
            
            // 体积单位说明
            ml: "1升是1000分之1。用于测量较小的体积。",
            l: "它是日常生活中最常用的体积单位。",
            gal: "它是英语国家使用的体积单位。",
            cup: "它是烹饪中常用的体积单位。",
            tbsp: "它是烹饪中使用的体积单位。",
            tsp: "它是烹饪中使用的体积单位。",
            
            // 温度单位说明
            "°C": "它是常用的温度单位。",
            "°F": "它是英语国家常用的温度单位。",
            "K": "它是科学中使用的绝对温度单位。",
            
            // 面积单位说明
            "mm²": "用于测量非常小的面积。",
            "cm²": "用于测量较小的面积。",
            "m²": "它是日常生活中最常用的面积单位。",
            "km²": "用于测量较大的面积。",
            ha: "用于测量土地或土地面积。",
            acre: "它是英语国家使用的面积单位。",
            "pyeong": "它是韩国用于测量住宅面积的单位。"
        },
        
        // 单位公式
        unitFormulas: {
            // 长度单位公式
            mm: "1mm = 0.001m",
            cm: "1cm = 0.01m",
            m: "1m = 100cm = 1000mm",
            km: "1km = 1000m",
            inch: "1inch = 2.54cm",
            ft: "1ft = 12inch = 30.48cm",
            yard: "1yard = 3ft = 91.44cm",
            mile: "1mile = 1.609km",
            
            // 重量单位公式
            mg: "1mg = 0.001g",
            g: "1g = 1000mg",
            kg: "1kg = 1000g",
            ton: "1ton = 1000kg",
            lb: "1lb = 0.4536kg",
            oz: "1oz = 28.35g",
            
            // 体积单位公式
            ml: "1ml = 0.001L",
            l: "1L = 1000ml",
            gal: "1gal = 3.785L",
            cup: "1cup = 236.6ml",
            tbsp: "1tbsp = 14.79ml",
            tsp: "1tsp = 4.93ml",
            
            // 温度单位公式
            "°C": "摄氏度 = (华氏度 - 32) × 5/9",
            "°F": "华氏度 = 摄氏度 × 9/5 + 32",
            "K": "开尔文 = 摄氏度 + 273.15",
            
            // 面积单位公式
            "mm²": "1mm² = 0.000001m²",
            "cm²": "1cm² = 0.0001m²",
            "m²": "1m² = 10000cm²",
            "km²": "1km² = 1000000m²",
            ha: "1ha = 10000m²",
            acre: "1acre = 4046.86m²",
            "pyeong": "1pyeong = 3.3058m²"
        },
        
        // 搜索
        searchPlaceholder: "搜索单位名称或类别 (例如: oz, 长度, 温度)",
        searchLabel: "搜索",
        
        // 转换器
        backToMain: "返回主页",
        backToMainAria: "返回主页",
        swapLabel: "交换单位",
        swapLabelAria: "交换单位",
        convertButton: "转换",
        clearButton: "清除",
        converterDescription: "转换日常生活中常用的长度单位",
        
        // 分类别转换器描述
        lengthConverterDesc: "转换日常生活中常用的长度单位",
        weightConverterDesc: "转换日常生活中常用的重量单位",
        volumeConverterDesc: "转换日常生活中常用的体积单位",
        temperatureConverterDesc: "转换日常生活中常用的温度单位",
        areaConverterDesc: "转换日常生活中常用的面积单位",
        speedConverterDesc: "转换日常生活中常用的速度单位",
        
        // 分类信息
        categories: {
            length: {
                name: "长度",
                description: "转换日常生活中常用的长度单位"
            },
            weight: {
                name: "重量",
                description: "转换日常生活中常用的重量单位"
            },
            volume: {
                name: "体积",
                description: "转换日常生活中常用的体积单位"
            },
            temperature: {
                name: "温度",
                description: "转换日常生活中常用的温度单位"
            },
            area: {
                name: "面积",
                description: "转换日常生活中常用的面积单位"
            },
            speed: {
                name: "速度",
                description: "转换日常生活中常用的速度单位"
            }
        },
        
        // 示例数据
        examples: {
            length: [
                {
                    title: "日常生活示例",
                    description: "我们日常生活中经常遇到的长度",
                    value: "成人身高: 1.7m, 智能手机: 6.1inch, A4纸张: 21cm"
                },
                {
                    title: "运动相关",
                    description: "与运动相关的长度测量",
                    value: "马拉松: 42.195km, 篮球场: 28m, 游泳池: 25m"
                },
                {
                    title: "建筑相关",
                    description: "与建筑相关的长度测量",
                    value: "门高: 2.1m, 房间尺寸: 3m×4m, 建筑高度: 100m"
                }
            ],
            weight: [
                {
                    title: "日常生活示例",
                    description: "我们日常生活中经常遇到的重量",
                    value: "苹果: 200g, 牛奶: 1kg, 汽车: 1.5ton"
                },
                {
                    title: "烹饪相关",
                    description: "与烹饪相关的重量测量",
                    value: "面粉: 500g, 糖: 1kg, 盐: 10g"
                },
                {
                    title: "运动相关",
                    description: "与运动相关的重量测量",
                    value: "哑铃: 5kg, 杠铃: 20kg, 体重: 70kg"
                }
            ],
            volume: [
                {
                    title: "日常生活示例",
                    description: "我们日常生活中经常遇到的体积",
                    value: "水瓶: 500ml, 牛奶盒: 1L, 加油: 50L"
                },
                {
                    title: "烹饪相关",
                    description: "与烹饪相关的体积测量",
                    value: "水: 2L, 食用油: 100ml, 酱料: 30ml"
                },
                {
                    title: "饮料相关",
                    description: "与饮料相关的体积测量",
                    value: "咖啡: 350ml, 啤酒: 500ml, 葡萄酒: 750ml"
                }
            ],
            temperature: [
                {
                    title: "日常生活示例",
                    description: "我们日常生活中经常遇到的温度",
                    value: "室内温度: 22°C, 体温: 36.5°C, 冰箱: 4°C"
                },
                {
                    title: "天气相关",
                    description: "与天气相关的温度测量",
                    value: "夏日: 30°C, 冬夜: -5°C, 春秋: 15°C"
                },
                {
                    title: "烹饪相关",
                    description: "与烹饪相关的温度测量",
                    value: "水沸点: 100°C, 烤箱: 180°C, 冷冻室: -18°C"
                }
            ],
            area: [
                {
                    title: "日常生活示例",
                    description: "我们日常生活中经常遇到的面积",
                    value: "公寓1坪: 3.3m², 足球场: 7140m², 首尔市: 605km²"
                },
                {
                    title: "房地产相关",
                    description: "与房地产相关的面积测量",
                    value: "公寓: 84m², 住宅: 150m², 土地: 1000m²"
                },
                {
                    title: "农业相关",
                    description: "与农业相关的面积测量",
                    value: "稻田: 1ha, 农田: 0.5ha, 果园: 2ha"
                }
            ],
            speed: [
                {
                    title: "日常生活示例",
                    description: "我们日常生活中经常遇到的速度",
                    value: "步行: 5km/h, 自行车: 20km/h, 汽车: 60km/h"
                },
                {
                    title: "交通相关",
                    description: "与交通相关的速度测量",
                    value: "高速公路: 100km/h, 市内道路: 50km/h, 地铁: 80km/h"
                },
                {
                    title: "运动相关",
                    description: "与运动相关的速度测量",
                    value: "跑步: 12km/h, 游泳: 2km/h, 徒步: 3km/h"
                }
            ]
        },
        
        // 转换文本
        convertText: "转换",
        clearMessage: "已清除。",
        
        // 转换技巧按钮
        tipsButtonText: "查看转换技巧",
        
        // 提示消息
        toastMessages: {
            invalidNumber: "请输入有效数字。",
            selectUnit: "请选择单位。",
            zeroMessage: "0在所有单位中都是0。",
            conversionComplete: "转换完成！",
            invalidCombination: "无法转换的单位组合。",
            cleared: "已清除。"
        },
        
        // 其他
        logoText: "单位转换器",
        
        // FAQ页面
        faqTitle: "常见问题 (FAQ)",
        faqDescription: "查看单位转换器的使用方法和常见问题",
        
        // FAQ分类
        faqUsage: "📖 使用指南",
        faqAccuracy: "🎯 精度和技巧",
        faqLifestyle: "💡 生活应用",
        faqTechnical: "🔧 技术问题",
        faqTroubleshooting: "⚠️ 故障排除",
        
        // Tips页面
        tipsTitle: "实用转换技巧",
        tipsDescription: "收集了日常生活中可以使用的单位转换技巧",
        
        // Tips分类
        tipsCooking: "🍳 烹饪时有用的转换技巧",
        tipsShopping: "🛒 海外购物时有用的转换技巧",
        tipsExercise: "💪 运动时有用的转换技巧",
        tipsTravel: "✈️ 旅行时有用的转换技巧",
        tipsRealEstate: "🏠 房地产时有用的转换技巧",
        tipsMemory: "🧠 容易记住的转换技巧",
        
        // Tips内容
        cookingUnitTitle: "烹饪单位转换",
        flourTitle: "面粉转换",
        clothingTitle: "服装尺寸转换",
        shoesTitle: "鞋子尺寸转换",
        weightTitle: "重量转换（运动）",
        distanceTitle: "距离转换（跑步）",
        temperatureTitle: "温度转换（旅行）",
        speedTitle: "速度转换（驾驶）",
        areaTitle: "面积转换（房地产）",
        areaComparisonTitle: "实用面积比较",
        quickCalculationTitle: "快速计算方法",
        
        // Tips技巧内容
        cookingTip: "💡 技巧: 烹饪时体积单位比精确重量更方便。",
        flourTip: "💡 技巧: 相同体积的食材重量可能不同！",
        clothingTip: "💡 技巧: 不同品牌的尺寸不同，购买前请确认准确尺寸。",
        shoesTip: "💡 技巧: 鞋子尺寸因品牌而异，购买前请务必测量脚部。",
        weightTip: "💡 技巧: 健身房使用的重量单位通常是lb（磅）。",
        distanceTip: "💡 技巧: 在跑步应用中设置距离单位为英里有助于参加海外跑步活动。",
        temperatureTip: "💡 技巧: 从摄氏度转换为华氏度时使用公式（摄氏度 × 9/5）+ 32。",
        speedTip: "💡 技巧: 海外驾驶时速度限制通常以mph显示。",
        areaTip: "💡 技巧: 房地产广告经常混合使用坪和平方米。",
        areaComparisonTip: "💡 技巧: 将面积与日常生活比较可以更直观地理解。",
        quickCalculationTip: "💡 技巧: 需要精确计算时请使用上面的转换器！",
        
        // 快速计算方法内容
        tempConversion: "温度转换: 摄氏度到华氏度: 摄氏度 × 2 + 30（近似值）",
        weightConversion: "重量转换: kg到lb: kg × 2 + kg × 0.2",
        distanceConversion: "距离转换: km到mile: km × 0.6",
        areaConversion: "面积转换: m²到坪: m² ÷ 3.3",
        
        // 表格标签
        koreaSize: "韩国尺寸",
        usSize: "美国尺寸",
        
        // 分类卡片示例标签
        lengthExamples: ["m ↔ cm", "km ↔ mile", "inch ↔ cm"],
        weightExamples: ["kg ↔ lb", "g ↔ oz", "mg ↔ g"],
        volumeExamples: ["L ↔ gal", "ml ↔ cup", "tbsp ↔ ml"],
        temperatureExamples: ["°C ↔ °F", "°C ↔ K", "°F ↔ K"],
        areaExamples: ["m² ↔ cm²", "acre ↔ ha", "km² ↔ m²"],
        speedExamples: ["km/h ↔ mph", "m/s ↔ km/h", "knot ↔ km/h"]
    }
};

// 当前语言设置 (默认值: 韩语)
let currentLanguage = 'ko';

// 语言切换函数
function changeLanguage(lang) {
    currentLanguage = lang;
    updateUILanguage();
    localStorage.setItem('preferredLanguage', lang);
}

// UI 语言更新函数
function updateUILanguage() {
    const lang = languages[currentLanguage];
    
    // 标志文本
    const logoText = document.querySelector('.logo-text');
    if (logoText) logoText.textContent = lang.logoText;
    
    // 英雄部分
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.textContent = lang.heroTitle;
    
    const heroDescription = document.querySelector('.hero-description');
    if (heroDescription) heroDescription.textContent = lang.heroDescription;
    
    // 搜索输入框
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.placeholder = lang.searchPlaceholder;
    
    // 导航菜单
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        const categories = ['length', 'weight', 'volume', 'temperature', 'area', 'speed'];
        if (categories[index]) {
            link.textContent = lang[categories[index]];
        }
    });
    
    // 类别卡片
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach((card, index) => {
        const categories = ['length', 'weight', 'volume', 'temperature', 'area', 'speed'];
        const category = categories[index];
        if (category) {
            const title = card.querySelector('.category-title');
            const desc = card.querySelector('.category-description');
            const examples = card.querySelector('.category-examples');
            
            if (title) title.textContent = lang[category];
            if (desc) desc.textContent = lang[category + 'Desc'];
            
            // 示例标签更新
            if (examples) {
                const examplesKey = category + 'Examples';
                if (lang[examplesKey]) {
                    examples.innerHTML = lang[examplesKey].map(example => 
                        `<span class="example-tag">${example}</span>`
                    ).join('');
                }
            }
        }
    });
    
    // 返回按钮
    const backBtn = document.getElementById('back-to-main');
    if (backBtn) {
        const backText = backBtn.querySelector('.back-text');
        if (backText) backText.textContent = lang.backToMain;
        backBtn.setAttribute('aria-label', lang.backToMainAria);
    }
    
    // 单位交换按钮
    const swapBtn = document.getElementById('swap-btn');
    if (swapBtn) {
        swapBtn.setAttribute('aria-label', lang.swapLabelAria);
    }
    
    // 转换按钮
    const convertBtn = document.getElementById('convert-btn');
    if (convertBtn) convertBtn.textContent = lang.convertButton;
    
    // 重置按钮
    const clearBtn = document.getElementById('clear-btn');
    if (clearBtn) clearBtn.textContent = lang.clearButton;
    
    // 转换器描述 (根据当前类别进行更新)
    const converterDesc = document.querySelector('.converter-description');
    if (converterDesc) {
        // 检查当前激活的类别
        const activeNavLink = document.querySelector('.nav-link.active');
        if (activeNavLink) {
            const currentCategory = activeNavLink.dataset.category;
            const categoryDescKey = currentCategory + 'ConverterDesc';
            if (lang[categoryDescKey]) {
                converterDesc.textContent = lang[categoryDescKey];
            } else {
                converterDesc.textContent = lang.converterDescription;
            }
        } else {
            converterDesc.textContent = lang.converterDescription;
        }
    }
    
    // 转换器类别标题更新
    const currentCategoryElement = document.getElementById('current-category');
    if (currentCategoryElement) {
        const activeNavLink = document.querySelector('.nav-link.active');
        if (activeNavLink) {
            const currentCategory = activeNavLink.dataset.category;
            if (lang[currentCategory]) {
                currentCategoryElement.textContent = lang[currentCategory] + ' ' + lang.convertText;
            }
        }
    }
    
    // FAQ页面
    const faqTitle = document.querySelector('.faq-header h1');
    if (faqTitle) faqTitle.textContent = lang.faqTitle;
    
    const faqDescription = document.querySelector('.faq-header p');
    if (faqDescription) faqDescription.textContent = lang.faqDescription;
    
    // FAQ类别
    const faqCategories = document.querySelectorAll('.faq-category h2');
    faqCategories.forEach((category, index) => {
        const categories = ['faqUsage', 'faqAccuracy', 'faqLifestyle', 'faqTechnical', 'faqTroubleshooting'];
        if (categories[index]) {
            category.textContent = lang[categories[index]];
        }
    });
    
    // Tips页面
    const tipsTitle = document.querySelector('.tips-header h1');
    if (tipsTitle) tipsTitle.textContent = lang.tipsTitle;
    
    const tipsDescription = document.querySelector('.tips-header p');
    if (tipsDescription) tipsDescription.textContent = lang.tipsDescription;
    
    // Tips类别
    const tipsCategories = document.querySelectorAll('.tips-category h2');
    tipsCategories.forEach((category, index) => {
        const categories = ['tipsCooking', 'tipsShopping', 'tipsExercise', 'tipsTravel', 'tipsRealEstate', 'tipsMemory'];
        if (categories[index]) {
            category.textContent = lang[categories[index]];
        }
    });
    
    // Tips内容更新
    updateTipsContent(lang);
    
    // 单位选择下拉菜单更新
    const fromUnitSelect = document.getElementById('from-unit');
    const toUnitSelect = document.getElementById('to-unit');
    
    if (fromUnitSelect && toUnitSelect && window.unitConverterApp) {
        window.unitConverterApp.populateUnitSelects();
        window.unitConverterApp.updateCategoryInfo();
        window.unitConverterApp.updateExamples();
        window.unitConverterApp.updateRelatedUnits();
    }
    
    // 转换技巧按钮文本更新
    const tipsButtons = document.querySelectorAll('.tips-text');
    tipsButtons.forEach(tipsButton => {
        if (tipsButton) {
            tipsButton.textContent = lang.tipsButtonText || '변환 팁 보기';
        }
    });
}

// Tips页面内容更新函数
function updateTipsContent(lang) {
    console.log('updateTipsContent called with language:', currentLanguage);
    console.log('Language data keys:', Object.keys(lang));
    
    // 找到所有tip-card的h3标题并更新
    const tipTitles = document.querySelectorAll('.tip-card h3');
    console.log('Found tip titles:', tipTitles.length);
    
    tipTitles.forEach((title, index) => {
        console.log(`Title ${index}:`, title.textContent);
        
        // 根据索引进行翻译键映射
        const titleKeys = [
            'cookingUnitTitle',    // 0: 烹饪单位转换
            'flourTitle',          // 1: 面粉转换
            'clothingTitle',       // 2: 服装尺寸转换
            'shoesTitle',          // 3: 鞋子尺寸转换
            'weightTitle',         // 4: 重量转换 (运动)
            'distanceTitle',       // 5: 距离转换 (跑步)
            'temperatureTitle',    // 6: 温度转换 (旅行)
            'speedTitle',          // 7: 速度转换 (驾驶)
            'areaTitle',           // 8: 面积转换 (房地产)
            'areaComparisonTitle', // 9: 实用面积比较
            'quickCalculationTitle' // 10: 快速计算方法
        ];
        
        const currentKey = titleKeys[index];
        console.log(`Current key for index ${index}:`, currentKey);
        console.log(`Translation available:`, lang[currentKey]);
        
        if (currentKey && lang[currentKey]) {
            console.log(`Updating title ${index} from "${title.textContent}" to:`, lang[currentKey]);
            title.textContent = lang[currentKey];
        } else {
            console.log(`No translation found for title ${index}:`, currentKey);
        }
    });
    
    // 提示内容更新
    const tipNotes = document.querySelectorAll('.tip-note');
    console.log('Found tip notes:', tipNotes.length);
    
    tipNotes.forEach((note, index) => {
        const tips = [
            'cookingTip', 'flourTip', 'clothingTip', 'shoesTip', 
            'weightTip', 'distanceTip', 'temperatureTip', 'speedTip', 
            'areaTip', 'areaComparisonTip', 'quickCalculationTip'
        ];
        const currentTipKey = tips[index];
        console.log(`Tip note ${index} key:`, currentTipKey, 'Available:', lang[currentTipKey]);
        
        if (currentTipKey && lang[currentTipKey]) {
            console.log(`Updating tip note ${index} from "${note.textContent}" to:`, lang[currentTipKey]);
            note.textContent = lang[currentTipKey];
        }
    });
    
    // 快速计算方法内容更新
    const tipItems = document.querySelectorAll('.tip-item');
    console.log('Found tip items:', tipItems.length);
    
    tipItems.forEach((item, index) => {
        const calculations = ['tempConversion', 'weightConversion', 'distanceConversion', 'areaConversion'];
        if (calculations[index] && lang[calculations[index]]) {
            const strong = item.querySelector('strong');
            if (strong) {
                const label = strong.textContent.replace(':', '');
                item.innerHTML = `<strong>${label}:</strong> ${lang[calculations[index]]}`;
            }
        }
    });
    
    // 表格标签更新
    const tipLabels = document.querySelectorAll('.tip-label');
    tipLabels.forEach(label => {
        if (label.textContent.includes('韩国尺寸') || label.textContent.includes('Korea Size') || label.textContent.includes('韓国サイズ') || label.textContent.includes('韩国尺寸')) {
            label.textContent = lang.koreaSize;
        } else if (label.textContent.includes('美国尺寸') || label.textContent.includes('US Size') || label.textContent.includes('米国サイズ') || label.textContent.includes('美国尺寸')) {
            label.textContent = lang.usSize;
        }
    });
}

// 页面加载时保存的语言设置加载
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && languages[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    if (typeof updateUILanguage === 'function') {
        updateUILanguage();
    }
}); 