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
        
        // 기타
        logoText: "단위 변환기"
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
        
        // Others
        logoText: "Unit Converter"
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
        
        // その他
        logoText: "単位変換機"
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
        
        // 其他
        logoText: "单位转换器"
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
    
    // 변환기 설명
    const converterDesc = document.querySelector('.converter-description');
    if (converterDesc) converterDesc.textContent = lang.converterDescription;
}

// 페이지 로드 시 저장된 언어 설정 불러오기
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && languages[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    updateUILanguage();
}); 