// 단위 변환 데이터
const UNIT_DATA = {
    // 길이 단위
    length: {
        name: "길이",
        description: "일상생활에서 자주 사용하는 길이 단위를 변환해보세요",
        units: [
            {
                name: "밀리미터",
                symbol: "mm",
                description: "1미터의 1/1000. 매우 작은 길이를 측정할 때 사용합니다.",
                formula: "1mm = 0.001m"
            },
            {
                name: "센티미터",
                symbol: "cm",
                description: "1미터의 1/100. 일상생활에서 가장 많이 사용하는 길이 단위입니다.",
                formula: "1cm = 0.01m"
            },
            {
                name: "미터",
                symbol: "m",
                description: "국제단위계(SI)의 기본 길이 단위입니다.",
                formula: "1m = 100cm = 1000mm"
            },
            {
                name: "킬로미터",
                symbol: "km",
                description: "1미터의 1000배. 거리 측정에 사용됩니다.",
                formula: "1km = 1000m"
            },
            {
                name: "인치",
                symbol: "inch",
                description: "영미권에서 사용하는 길이 단위입니다.",
                formula: "1inch = 2.54cm"
            },
            {
                name: "피트",
                symbol: "ft",
                description: "영미권에서 사용하는 길이 단위입니다.",
                formula: "1ft = 12inch = 30.48cm"
            },
            {
                name: "야드",
                symbol: "yard",
                description: "영미권에서 사용하는 길이 단위입니다.",
                formula: "1yard = 3ft = 91.44cm"
            },
            {
                name: "마일",
                symbol: "mile",
                description: "영미권에서 사용하는 거리 단위입니다.",
                formula: "1mile = 1.609km"
            }
        ],
        examples: [
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
        ]
    },

    // 무게 단위
    weight: {
        name: "무게",
        description: "일상생활에서 자주 사용하는 무게 단위를 변환해보세요",
        units: [
            {
                name: "밀리그램",
                symbol: "mg",
                description: "1그램의 1/1000. 매우 작은 무게를 측정할 때 사용합니다.",
                formula: "1mg = 0.001g"
            },
            {
                name: "그램",
                symbol: "g",
                description: "일상생활에서 가장 많이 사용하는 무게 단위입니다.",
                formula: "1g = 1000mg"
            },
            {
                name: "킬로그램",
                symbol: "kg",
                description: "국제단위계(SI)의 기본 무게 단위입니다.",
                formula: "1kg = 1000g"
            },
            {
                name: "톤",
                symbol: "ton",
                description: "1킬로그램의 1000배. 대량의 무게를 측정할 때 사용합니다.",
                formula: "1ton = 1000kg"
            },
            {
                name: "파운드",
                symbol: "lb",
                description: "영미권에서 사용하는 무게 단위입니다.",
                formula: "1lb = 0.453592kg"
            },
            {
                name: "온스",
                symbol: "oz",
                description: "영미권에서 사용하는 무게 단위입니다.",
                formula: "1oz = 28.3495g"
            }
        ],
        examples: [
            {
                title: "일상생활 예시",
                description: "우리가 일상에서 자주 마주치는 무게들",
                value: "사과 한 개: 150g, 우유 한 팩: 1L, 성인 체중: 70kg"
            },
            {
                title: "요리 관련",
                description: "요리와 관련된 무게 측정",
                value: "밀가루 한 컵: 120g, 설탕 한 스푼: 12g, 소금 한 톨: 5mg"
            },
            {
                title: "운송 관련",
                description: "운송과 관련된 무게 측정",
                value: "자동차: 1.5ton, 컨테이너: 20ton, 비행기: 100ton"
            }
        ]
    },

    // 부피 단위
    volume: {
        name: "부피",
        description: "일상생활에서 자주 사용하는 부피 단위를 변환해보세요",
        units: [
            {
                name: "밀리리터",
                symbol: "ml",
                description: "1리터의 1/1000. 작은 부피를 측정할 때 사용합니다.",
                formula: "1ml = 0.001L"
            },
            {
                name: "리터",
                symbol: "L",
                description: "일상생활에서 가장 많이 사용하는 부피 단위입니다.",
                formula: "1L = 1000ml"
            },
            {
                name: "세제곱미터",
                symbol: "m³",
                description: "큰 부피를 측정할 때 사용합니다.",
                formula: "1m³ = 1000L"
            },
            {
                name: "컵",
                symbol: "cup",
                description: "요리에서 자주 사용하는 부피 단위입니다.",
                formula: "1cup = 236.588ml"
            },
            {
                name: "큰 스푼",
                symbol: "tbsp",
                description: "요리에서 사용하는 부피 단위입니다.",
                formula: "1tbsp = 14.7868ml"
            },
            {
                name: "작은 스푼",
                symbol: "tsp",
                description: "요리에서 사용하는 부피 단위입니다.",
                formula: "1tsp = 4.92892ml"
            },
            {
                name: "갤런",
                symbol: "gal",
                description: "영미권에서 사용하는 부피 단위입니다.",
                formula: "1gal = 3.78541L"
            },
            {
                name: "파인트",
                symbol: "pt",
                description: "영미권에서 사용하는 부피 단위입니다.",
                formula: "1pt = 0.473176L"
            }
        ],
        examples: [
            {
                title: "일상생활 예시",
                description: "우리가 일상에서 자주 마주치는 부피들",
                value: "우유 한 팩: 1L, 물 한 병: 500ml, 기름 한 통: 18L"
            },
            {
                title: "요리 관련",
                description: "요리와 관련된 부피 측정",
                value: "밀가루 한 컵: 1cup, 우유 한 컵: 1cup, 올리브오일: 1tbsp"
            },
            {
                title: "음료 관련",
                description: "음료와 관련된 부피 측정",
                value: "커피 한 잔: 240ml, 맥주 한 캔: 355ml, 와인 한 병: 750ml"
            }
        ]
    },

    // 온도 단위
    temperature: {
        name: "온도",
        description: "일상생활에서 자주 사용하는 온도 단위를 변환해보세요",
        units: [
            {
                name: "섭씨",
                symbol: "°C",
                description: "일반적으로 사용하는 온도 단위입니다.",
                formula: "섭씨 = (화씨 - 32) × 5/9"
            },
            {
                name: "화씨",
                symbol: "°F",
                description: "영미권에서 주로 사용하는 온도 단위입니다.",
                formula: "화씨 = 섭씨 × 9/5 + 32"
            },
            {
                name: "켈빈",
                symbol: "K",
                description: "과학에서 사용하는 절대 온도 단위입니다.",
                formula: "켈빈 = 섭씨 + 273.15"
            }
        ],
        examples: [
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
        ]
    },

    // 면적 단위
    area: {
        name: "면적",
        description: "일상생활에서 자주 사용하는 면적 단위를 변환해보세요",
        units: [
            {
                name: "제곱밀리미터",
                symbol: "mm²",
                description: "매우 작은 면적을 측정할 때 사용합니다.",
                formula: "1mm² = 0.000001m²"
            },
            {
                name: "제곱센티미터",
                symbol: "cm²",
                description: "작은 면적을 측정할 때 사용합니다.",
                formula: "1cm² = 0.0001m²"
            },
            {
                name: "제곱미터",
                symbol: "m²",
                description: "일상생활에서 가장 많이 사용하는 면적 단위입니다.",
                formula: "1m² = 10000cm²"
            },
            {
                name: "제곱킬로미터",
                symbol: "km²",
                description: "큰 면적을 측정할 때 사용합니다.",
                formula: "1km² = 1000000m²"
            },
            {
                name: "헥타르",
                symbol: "ha",
                description: "농지나 토지 면적을 측정할 때 사용합니다.",
                formula: "1ha = 10000m²"
            },
            {
                name: "에이커",
                symbol: "acre",
                description: "영미권에서 사용하는 면적 단위입니다.",
                formula: "1acre = 4046.86m²"
            },
            {
                name: "평",
                symbol: "평",
                description: "한국에서 주택 면적을 측정할 때 사용합니다.",
                formula: "1평 = 3.3058m²"
            }
        ],
        examples: [
            {
                title: "일상생활 예시",
                description: "우리가 일상에서 자주 마주치는 면적들",
                value: "아파트 1평: 3.3m², 축구장: 7140m², 서울시: 605km²"
            },
            {
                title: "부동산 관련",
                description: "부동산과 관련된 면적 측정",
                value: "아파트 85평: 280m², 토지 1,000평: 3,306m²"
            },
            {
                title: "농업 관련",
                description: "농업과 관련된 면적 측정",
                value: "논 1마지기: 300평, 밭 1마지기: 300평, 과수원: 5ha"
            }
        ]
    },

    // 속도 단위
    speed: {
        name: "속도",
        description: "일상생활에서 자주 사용하는 속도 단위를 변환해보세요",
        units: [
            {
                name: "미터/초",
                symbol: "m/s",
                description: "과학에서 사용하는 속도 단위입니다.",
                formula: "1m/s = 3.6km/h"
            },
            {
                name: "킬로미터/시간",
                symbol: "km/h",
                description: "일상생활에서 가장 많이 사용하는 속도 단위입니다.",
                formula: "1km/h = 0.277778m/s"
            },
            {
                name: "마일/시간",
                symbol: "mph",
                description: "영미권에서 사용하는 속도 단위입니다.",
                formula: "1mph = 1.60934km/h"
            },
            {
                name: "노트",
                symbol: "knot",
                description: "해상에서 사용하는 속도 단위입니다.",
                formula: "1knot = 1.852km/h"
            },
            {
                name: "피트/초",
                symbol: "ft/s",
                description: "영미권에서 사용하는 속도 단위입니다.",
                formula: "1ft/s = 0.3048m/s"
            }
        ],
        examples: [
            {
                title: "일상생활 예시",
                description: "우리가 일상에서 자주 마주치는 속도들",
                value: "도시 제한속도: 50km/h, 고속도로: 110km/h, 보행: 5km/h"
            },
            {
                title: "운송 관련",
                description: "운송과 관련된 속도 측정",
                value: "비행기: 800km/h, 고속철도: 300km/h, 배: 30knot"
            },
            {
                title: "스포츠 관련",
                description: "스포츠와 관련된 속도 측정",
                value: "축구공: 120km/h, 테니스공: 200km/h, 수영: 2km/h"
            }
        ]
    }
};

// 카테고리별 기본 단위 설정
const DEFAULT_UNITS = {
    length: { from: 'm', to: 'cm' },
    weight: { from: 'kg', to: 'g' },
    volume: { from: 'L', to: 'ml' },
    temperature: { from: '°C', to: '°F' },
    area: { from: 'm²', to: 'cm²' },
    speed: { from: 'km/h', to: 'm/s' }
};

// 카테고리별 설명
const CATEGORY_DESCRIPTIONS = {
    length: "일상생활에서 자주 사용하는 길이 단위를 변환해보세요",
    weight: "요리나 건강관리에서 사용하는 무게 단위를 변환해보세요",
    volume: "요리나 음료에서 사용하는 부피 단위를 변환해보세요",
    temperature: "날씨나 체온에서 사용하는 온도 단위를 변환해보세요",
    area: "부동산이나 토지에서 사용하는 면적 단위를 변환해보세요",
    speed: "교통이나 스포츠에서 사용하는 속도 단위를 변환해보세요"
}; 