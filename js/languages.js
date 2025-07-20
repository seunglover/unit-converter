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
        
        // 검색
        searchPlaceholder: "단위명 또는 카테고리 검색 (예: oz, 길이, 온도)",
        searchLabel: "검색",
        
        // 변환기
        backToMain: "메인으로",
        swapLabel: "단위 교체",
        converterDescription: "일상생활에서 자주 사용하는 길이 단위를 변환해보세요",
        
        // 카테고리별 변환기 설명
        lengthConverterDesc: "일상생활에서 자주 사용하는 길이 단위를 변환해보세요",
        weightConverterDesc: "일상생활에서 자주 사용하는 무게 단위를 변환해보세요",
        volumeConverterDesc: "일상생활에서 자주 사용하는 부피 단위를 변환해보세요",
        temperatureConverterDesc: "일상생활에서 자주 사용하는 온도 단위를 변환해보세요",
        areaConverterDesc: "일상생활에서 자주 사용하는 면적 단위를 변환해보세요",
        speedConverterDesc: "일상생활에서 자주 사용하는 속도 단위를 변환해보세요",
        
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
        tipsMemory: "🧠 기억하기 쉬운 변환 팁"
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
        
        // Search
        searchPlaceholder: "Search unit name or category (e.g., oz, length, temperature)",
        searchLabel: "Search",
        
        // Converter
        backToMain: "Back to Main",
        swapLabel: "Swap Units",
        converterDescription: "Convert length units commonly used in daily life",
        
        // Category-specific converter descriptions
        lengthConverterDesc: "Convert length units commonly used in daily life",
        weightConverterDesc: "Convert weight units commonly used in daily life",
        volumeConverterDesc: "Convert volume units commonly used in daily life",
        temperatureConverterDesc: "Convert temperature units commonly used in daily life",
        areaConverterDesc: "Convert area units commonly used in daily life",
        speedConverterDesc: "Convert speed units commonly used in daily life",
        
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
        tipsMemory: "🧠 Easy-to-Remember Conversion Tips"
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
        
        // 検索
        searchPlaceholder: "単位名またはカテゴリを検索 (例: oz, 長さ, 温度)",
        searchLabel: "検索",
        
        // コンバーター
        backToMain: "メインに戻る",
        swapLabel: "単位交換",
        converterDescription: "日常生活でよく使う長さの単位を変換してみましょう",
        
        // カテゴリ別コンバーター説明
        lengthConverterDesc: "日常生活でよく使う長さの単位を変換してみましょう",
        weightConverterDesc: "日常生活でよく使う重さの単位を変換してみましょう",
        volumeConverterDesc: "日常生活でよく使う体積の単位を変換してみましょう",
        temperatureConverterDesc: "日常生活でよく使う温度の単位を変換してみましょう",
        areaConverterDesc: "日常生活でよく使う面積の単位を変換してみましょう",
        speedConverterDesc: "日常生活でよく使う速度の単位を変換してみましょう",
        
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
        tipsCooking: "🍳 料理に役立つ変換コツ",
        tipsShopping: "🛒 海外通販に役立つ変換コツ",
        tipsExercise: "💪 運動に役立つ変換コツ",
        tipsTravel: "✈️ 旅行に役立つ変換コツ",
        tipsRealEstate: "🏠 不動産に役立つ変換コツ",
        tipsMemory: "🧠 覚えやすい変換コツ"
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
        
        // 搜索
        searchPlaceholder: "搜索单位名称或类别 (例如: oz, 长度, 温度)",
        searchLabel: "搜索",
        
        // 转换器
        backToMain: "返回主页",
        swapLabel: "交换单位",
        converterDescription: "转换日常生活中常用的长度单位",
        
        // 分类别转换器描述
        lengthConverterDesc: "转换日常生活中常用的长度单位",
        weightConverterDesc: "转换日常生活中常用的重量单位",
        volumeConverterDesc: "转换日常生活中常用的体积单位",
        temperatureConverterDesc: "转换日常生活中常用的温度单位",
        areaConverterDesc: "转换日常生活中常用的面积单位",
        speedConverterDesc: "转换日常生活中常用的速度单位",
        
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
        tipsDescription: "收集了日常生活中可以立即使用的单位转换技巧",
        
        // Tips分类
        tipsCooking: "🍳 烹饪时有用的转换技巧",
        tipsShopping: "🛒 海外购物时有用的转换技巧",
        tipsExercise: "💪 运动时有用的转换技巧",
        tipsTravel: "✈️ 旅行时有用的转换技巧",
        tipsRealEstate: "🏠 房地产时有用的转换技巧",
        tipsMemory: "🧠 容易记住的转换技巧"
    }
};

// 현재 언어 설정 (기본값: 한국어)
let currentLanguage = 'ko';

// 언어 변경 함수
function changeLanguage(lang) {
    currentLanguage = lang;
    updateUILanguage();
    localStorage.setItem('preferredLanguage', lang);
}

// UI 언어 업데이트 함수
function updateUILanguage() {
    const lang = languages[currentLanguage];
    
    // 로고 텍스트
    const logoText = document.querySelector('.logo-text');
    if (logoText) logoText.textContent = lang.logoText;
    
    // 히어로 섹션
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.textContent = lang.heroTitle;
    
    const heroDescription = document.querySelector('.hero-description');
    if (heroDescription) heroDescription.textContent = lang.heroDescription;
    
    // 검색 플레이스홀더
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.placeholder = lang.searchPlaceholder;
    
    // 네비게이션 메뉴
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        const categories = ['length', 'weight', 'volume', 'temperature', 'area', 'speed'];
        if (categories[index]) {
            link.textContent = lang[categories[index]];
        }
    });
    
    // 카테고리 카드
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach((card, index) => {
        const categories = ['length', 'weight', 'volume', 'temperature', 'area', 'speed'];
        const category = categories[index];
        if (category) {
            const title = card.querySelector('.category-title');
            const desc = card.querySelector('.category-description');
            if (title) title.textContent = lang[category];
            if (desc) desc.textContent = lang[category + 'Desc'];
        }
    });
    
    // 뒤로가기 버튼
    const backBtn = document.getElementById('back-to-main');
    if (backBtn) {
        const backText = backBtn.querySelector('span:not(.back-icon)');
        if (backText) backText.textContent = lang.backToMain;
    }
    
    // 변환기 설명 (현재 카테고리에 맞게 업데이트)
    const converterDesc = document.querySelector('.converter-description');
    if (converterDesc) {
        // 현재 활성화된 카테고리 확인
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
    
    // FAQ 페이지
    const faqTitle = document.querySelector('.faq-header h1');
    if (faqTitle) faqTitle.textContent = lang.faqTitle;
    
    const faqDescription = document.querySelector('.faq-header p');
    if (faqDescription) faqDescription.textContent = lang.faqDescription;
    
    // FAQ 카테고리
    const faqCategories = document.querySelectorAll('.faq-category h2');
    faqCategories.forEach((category, index) => {
        const categories = ['faqUsage', 'faqAccuracy', 'faqLifestyle', 'faqTechnical', 'faqTroubleshooting'];
        if (categories[index]) {
            category.textContent = lang[categories[index]];
        }
    });
    
    // Tips 페이지
    const tipsTitle = document.querySelector('.tips-header h1');
    if (tipsTitle) tipsTitle.textContent = lang.tipsTitle;
    
    const tipsDescription = document.querySelector('.tips-header p');
    if (tipsDescription) tipsDescription.textContent = lang.tipsDescription;
    
    // Tips 카테고리
    const tipsCategories = document.querySelectorAll('.tips-category h2');
    tipsCategories.forEach((category, index) => {
        const categories = ['tipsCooking', 'tipsShopping', 'tipsExercise', 'tipsTravel', 'tipsRealEstate', 'tipsMemory'];
        if (categories[index]) {
            category.textContent = lang[categories[index]];
        }
    });
}

// 페이지 로드 시 저장된 언어 설정 불러오기
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && languages[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    updateUILanguage();
}); 