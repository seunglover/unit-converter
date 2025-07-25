// 다국어 지원 데이터 - 지연 로딩으로 변경
function getLanguages() {
    if (typeof window.ko === 'undefined' || typeof window.en === 'undefined' || typeof window.ja === 'undefined') {
        console.log('언어 파일들이 아직 로드되지 않았습니다. 잠시 후 다시 시도합니다.');
        return null;
    }
    
    return {
        ko: window.ko,
        en: window.en,
        ja: window.ja
    };
}

// 전역 languages 객체
let languages = null;

// languages 객체 초기화
function initializeLanguages() {
    if (!languages) {
        languages = getLanguages();
    }
    return languages;
}

// 当前语言设置 (默认值: 韩语)
let currentLanguage = localStorage.getItem('selectedLanguage') || 'ko';

// 语言切换함수
function changeLanguage(lang) {
    currentLanguage = lang;
    // localStorage에 선택한 언어 저장
    localStorage.setItem('selectedLanguage', lang);
    
    // 언어 데이터 확인 및 폴백
    ensureLanguageData(lang);
    
    // 현재 페이지에 따라 적절한 업데이트 함수 호출
    if (window.location.pathname.includes('tips.html')) {
        updateTipsContent(lang);
        updateTipRows(lang);
    } else if (window.location.pathname.includes('faq.html')) {
        updateFaqContent(lang);
    } else if (window.location.pathname.includes('history.html')) {
        updateHistoryContent(lang);
    } else if (window.location.pathname.includes('privacy.html')) {
        updatePrivacyContent(lang);
    } else {
        updateUILanguage();
        // If on the converter page, also update category info
        if (window.unitConverterApp && !window.unitConverterApp.isMainPage) {
            window.unitConverterApp.updateCategoryInfo();
        }
    }
}

// 언어 데이터 확인 및 폴백 함수
function ensureLanguageData(lang) {
    if (lang === 'ko' && (!window.ko || !window.ko.footerTitle)) {
        // 한국어 데이터가 없거나 불완전한 경우 필수 데이터 추가
        if (!window.ko) window.ko = {};
        
        // 기본 단위명들
        if (!window.ko.length) window.ko.length = "길이";
        if (!window.ko.weight) window.ko.weight = "무게";
        if (!window.ko.volume) window.ko.volume = "부피";
        if (!window.ko.temperature) window.ko.temperature = "온도";
        if (!window.ko.area) window.ko.area = "면적";
        if (!window.ko.speed) window.ko.speed = "속도";
        
        // 푸터 관련 텍스트
        if (!window.ko.footerTitle) window.ko.footerTitle = "단위 변환 도우미";
        if (!window.ko.footerDescription) window.ko.footerDescription = "정확하고 빠른 단위 변환을 도와드립니다.";
        if (!window.ko.footerUsefulLinks) window.ko.footerUsefulLinks = "유용한 링크";
        if (!window.ko.footerTipsLink) window.ko.footerTipsLink = "변환 팁";
        if (!window.ko.footerPrivacyLink) window.ko.footerPrivacyLink = "개인정보 처리방침";
        if (!window.ko.footerSupportedUnits) window.ko.footerSupportedUnits = "지원하는 단위";
        if (!window.ko.footerCopyright) window.ko.footerCopyright = "© 2025 단위 변환 도우미. All rights reserved.";
        
        console.log('한국어 언어 데이터 폴백 적용 완료');
    }
    
    if (lang === 'en' && (!window.en || !window.en.footerTitle)) {
        // 영어 데이터가 없거나 불완전한 경우 필수 데이터 추가
        if (!window.en) window.en = {};
        
        // 기본 단위명들
        if (!window.en.length) window.en.length = "Length";
        if (!window.en.weight) window.en.weight = "Weight";
        if (!window.en.volume) window.en.volume = "Volume";
        if (!window.en.temperature) window.en.temperature = "Temperature";
        if (!window.en.area) window.en.area = "Area";
        if (!window.en.speed) window.en.speed = "Speed";
        
        // 푸터 관련 텍스트
        if (!window.en.footerTitle) window.en.footerTitle = "Unit Converter";
        if (!window.en.footerDescription) window.en.footerDescription = "We help you with accurate and fast unit conversions.";
        if (!window.en.footerUsefulLinks) window.en.footerUsefulLinks = "Useful Links";
        if (!window.en.footerTipsLink) window.en.footerTipsLink = "Conversion Tips";
        if (!window.en.footerPrivacyLink) window.en.footerPrivacyLink = "Privacy Policy";
        if (!window.en.footerSupportedUnits) window.en.footerSupportedUnits = "Supported Units";
        if (!window.en.footerCopyright) window.en.footerCopyright = "© 2025 Unit Converter. All rights reserved.";
        
        console.log('영어 언어 데이터 폴백 적용 완료');
    }
    
    if (lang === 'ja' && (!window.ja || !window.ja.footerTitle)) {
        // 일본어 데이터가 없거나 불완전한 경우 필수 데이터 추가
        if (!window.ja) window.ja = {};
        
        // 기본 단위명들
        if (!window.ja.length) window.ja.length = "長さ";
        if (!window.ja.weight) window.ja.weight = "重さ";
        if (!window.ja.volume) window.ja.volume = "体積";
        if (!window.ja.temperature) window.ja.temperature = "温度";
        if (!window.ja.area) window.ja.area = "面積";
        if (!window.ja.speed) window.ja.speed = "速도";
        
        // 푸터 관련 텍스트
        if (!window.ja.footerTitle) window.ja.footerTitle = "単位変換ツール";
        if (!window.ja.footerDescription) window.ja.footerDescription = "正確で高速な単位変換をサポートします。";
        if (!window.ja.footerUsefulLinks) window.ja.footerUsefulLinks = "便利なリンク";
        if (!window.ja.footerTipsLink) window.ja.footerTipsLink = "変換のコツ";
        if (!window.ja.footerPrivacyLink) window.ja.footerPrivacyLink = "プライバシーポリシー";
        if (!window.ja.footerSupportedUnits) window.ja.footerSupportedUnits = "対応単位";
        if (!window.ja.footerCopyright) window.ja.footerCopyright = "© 2025 単位変換ツール. All rights reserved.";
        
        console.log('일본어 언어 데이터 폴백 적용 완료');
    }
}

function updateHistoryContent(lang) {
    // window[lang]에서 직접 history 데이터 사용
    if (typeof window[lang] === 'undefined' || !window[lang].history) {
        console.log('해당 언어의 history 데이터가 없습니다:', lang);
        return;
    }
    const historyData = window[lang].history;

    // 로고 텍스트 업데이트
    const logoText = document.querySelector('.logo-text');
    if (logoText && window[lang].logoText) {
        logoText.textContent = window[lang].logoText;
    }

    // 타이틀/설명
    const titleEl = document.querySelector('[data-translate="history.title"]');
    const descEl = document.querySelector('[data-translate="history.description"]');
    if (titleEl && historyData.title) titleEl.textContent = historyData.title;
    if (descEl && historyData.description) descEl.textContent = historyData.description;

    // 각 섹션별 텍스트
    const historySections = document.querySelectorAll('.history-section');
    historySections.forEach(section => {
        const sectionKey = section.dataset.historySection;
        const sectionData = historyData[sectionKey];
        if (!sectionData) return;
        const h2 = section.querySelector('h2');
        if (h2 && sectionData.title) h2.textContent = sectionData.title;

        // funFacts 섹션 처리
        if (sectionKey === 'funFacts') {
            const funFactItems = section.querySelectorAll('.fun-fact-item');
            funFactItems.forEach(item => {
                const funFactKey = item.dataset.funFact;
                const funFactData = sectionData[funFactKey];
                if (!funFactData) return;
                const h3 = item.querySelector('h3');
                const p = item.querySelector('p');
                if (h3 && funFactData.title) h3.textContent = funFactData.title;
                if (p && funFactData.description) p.textContent = funFactData.description;
            });
            return;
        }

        // 타임라인 아이템 갱신
        const timelineItems = section.querySelectorAll('.timeline-item');
        let i = 0;
        for (const key in sectionData) {
            if (key === 'title') continue;
            const itemData = sectionData[key];
            const timelineItem = timelineItems[i];
            if (!timelineItem || !itemData) continue;
            // 날짜
            const dateEl = timelineItem.querySelector('.timeline-date');
            if (dateEl && historyData.dates && historyData.dates[key]) dateEl.textContent = historyData.dates[key];
            // 제목
            const h3 = timelineItem.querySelector('h3');
            if (h3 && itemData.title) h3.textContent = itemData.title;
            // 본문
            const p = timelineItem.querySelector('p');
            if (p && itemData.description) p.textContent = itemData.description;
            // fact
            const factEl = timelineItem.querySelector('.history-fact');
            if (factEl && itemData.fact && historyData.labels && historyData.labels.fact) {
                factEl.innerHTML = `<strong>${historyData.labels.fact}</strong> ${itemData.fact}`;
            }
            // formula
            const formulaEl = timelineItem.querySelector('.history-formula');
            if (formulaEl && itemData.formula && historyData.labels && historyData.labels.formula) {
                formulaEl.innerHTML = `<strong>${historyData.labels.formula}</strong> ${itemData.formula}`;
            }
            // ul (세부 항목)
            const ul = timelineItem.querySelector('ul');
            if (ul) {
                ul.innerHTML = '';
                for (const liKey in itemData) {
                    if (['title','description','fact','formula'].includes(liKey)) continue;
                    const li = document.createElement('li');
                    li.innerHTML = `<strong>${liKey.charAt(0).toUpperCase() + liKey.slice(1)}</strong>: ${itemData[liKey]}`;
                    ul.appendChild(li);
                }
            }
            i++;
        }
    });
}

function updateTipsContent(lang) {
    // languages 객체 초기화
    if (!initializeLanguages()) {
        console.log('언어 파일들이 아직 로드되지 않았습니다.');
        return;
    }
    
    const langData = languages[lang];
    if (!langData) return;

    // 로고 텍스트 업데이트
    const logoText = document.querySelector('.logo-text');
    if (logoText && langData.logoText) {
        logoText.textContent = langData.logoText;
    }

    const translatableElements = document.querySelectorAll('[data-translate]');
    translatableElements.forEach(element => {
        const key = element.dataset.translate;
        if (langData[key]) {
            // Check if the element is a direct text element or has children
            if (element.children.length > 0) {
                // It has children, so we should probably just set the text content of the parent
                let textContent = langData[key];
                Array.from(element.children).forEach(child => {
                    textContent = textContent.replace(child.outerHTML, "");
                });
                element.innerHTML = langData[key];
            } else {
                element.textContent = langData[key];
            }
        }
    });
}

function updateTipRows(lang) {
    // languages 객체 초기화
    if (!initializeLanguages()) {
        console.log('언어 파일들이 아직 로드되지 않았습니다.');
        return;
    }
    
    const langData = languages[lang];
    if (!langData) return;

    const tipRows = document.querySelectorAll('.tip-row');
    tipRows.forEach(row => {
        const label = row.querySelector('.tip-label');
        const value = row.querySelector('.tip-value');
        
        if (label && label.dataset.translate && langData[label.dataset.translate]) {
            label.textContent = langData[label.dataset.translate];
        }
        
        if (value && value.dataset.translate && langData[value.dataset.translate]) {
            value.textContent = langData[value.dataset.translate];
        }
    });
}

function updateFaqContent(lang) {
    // languages 객체 초기화
    if (!initializeLanguages()) {
        console.log('언어 파일들이 아직 로드되지 않았습니다.');
        return;
    }
    
    const langData = languages[lang];
    if (!langData) return;

    // 로고 텍스트 업데이트
    const logoText = document.querySelector('.logo-text');
    if (logoText && langData.logoText) {
        logoText.textContent = langData.logoText;
    }

    const translatableElements = document.querySelectorAll('[data-translate]');
    translatableElements.forEach(element => {
        const key = element.dataset.translate;
        if (langData[key]) {
            // Check if the element is a direct text element or has children
            if (element.children.length > 0) {
                // It has children, so we should probably just set the text content of the parent
                let textContent = langData[key];
                Array.from(element.children).forEach(child => {
                    textContent = textContent.replace(child.outerHTML, "");
                });
                element.innerHTML = langData[key];
            } else {
                element.textContent = langData[key];
            }
        }
    });
}

function updatePrivacyContent(lang) {
    // languages 객체 초기화
    if (!initializeLanguages()) {
        console.log('언어 파일들이 아직 로드되지 않았습니다.');
        return;
    }
    
    const langData = languages[lang];
    if (!langData) return;

    // 로고 텍스트 업데이트
    const logoText = document.querySelector('.logo-text');
    if (logoText && langData.logoText) {
        logoText.textContent = langData.logoText;
    }

    const translatableElements = document.querySelectorAll('[data-translate]');
    translatableElements.forEach(element => {
        const key = element.dataset.translate;
        if (langData[key]) {
            // Check if the element is a direct text element or has children
            if (element.children.length > 0) {
                // It has children, so we should probably just set the text content of the parent
                let textContent = langData[key];
                Array.from(element.children).forEach(child => {
                    textContent = textContent.replace(child.outerHTML, "");
                });
                element.innerHTML = langData[key];
            } else {
                element.textContent = langData[key];
            }
        }
    });
}


// 페이지 로드 시 저장된 언어 설정 복원
function restoreLanguageSetting() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && savedLanguage !== currentLanguage) {
        currentLanguage = savedLanguage;
        // 언어 선택기 UI 업데이트
        const languageSelectors = document.querySelectorAll('.language-selector select, .language-selector button[data-lang]');
        languageSelectors.forEach(selector => {
            if (selector.tagName === 'SELECT') {
                selector.value = currentLanguage;
            } else if (selector.dataset.lang === currentLanguage) {
                selector.classList.add('active');
            } else {
                selector.classList.remove('active');
            }
        });
    }
}

// UI 语言更新函数
function updateUILanguage() {
    // languages 객체 초기화
    if (!initializeLanguages()) {
        console.log('언어 파일들이 아직 로드되지 않았습니다.');
        return;
    }
    
    const lang = languages[currentLanguage];
    
    // data-translate 속성이 있는 모든 요소 업데이트
    const translatableElements = document.querySelectorAll('[data-translate]');
    translatableElements.forEach(element => {
        const key = element.dataset.translate;
        if (lang[key]) {
            element.textContent = lang[key];
        }
    });
    
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
    
    // 팁 버튼과 히스토리 버튼 텍스트 업데이트
    const tipsText = document.querySelector('.tips-text');
    if (tipsText) tipsText.textContent = lang.tipsButtonText || '변환 팁 보기';
    
    const historyText = document.querySelector('.history-text');
    if (historyText) historyText.textContent = lang.historyButtonText || '단위의 역사 알아보기';
    
    // 단위 선택下拉菜单更新
    const fromUnitSelect = document.getElementById('from-unit');
    const toUnitSelect = document.getElementById('to-unit');

    // unitInfoTitle 업데이트 (index.html의 변환기 페이지)
    const unitInfoTitle = document.getElementById('unit-info-title');
    if (unitInfoTitle && window.unitConverterApp && !window.unitConverterApp.isMainPage) {
        const currentCategory = window.unitConverterApp.currentCategory;
        const categoryLang = lang.categories && lang.categories[currentCategory];
        const categoryName = categoryLang ? categoryLang.name : '';
        unitInfoTitle.textContent = `${categoryName} ${lang.information || '정보'}`;
    }
    
    // 푸터 업데이트
    updateFooterLanguage(lang);
}

// 푸터 언어 업데이트 함수
function updateFooterLanguage(lang) {
    // 푸터 제목
    const footerTitle = document.querySelector('[data-translate="footerTitle"]');
    if (footerTitle && lang.footerTitle) {
        footerTitle.textContent = lang.footerTitle;
    }
    
    // 푸터 설명
    const footerDescription = document.querySelector('[data-translate="footerDescription"]');
    if (footerDescription && lang.footerDescription) {
        footerDescription.textContent = lang.footerDescription;
    }
    
    // 유용한 링크
    const footerUsefulLinks = document.querySelector('[data-translate="footerUsefulLinks"]');
    if (footerUsefulLinks && lang.footerUsefulLinks) {
        footerUsefulLinks.textContent = lang.footerUsefulLinks;
    }
    
    // 변환 팁 링크
    const footerTipsLink = document.querySelector('[data-translate="footerTipsLink"]');
    if (footerTipsLink && lang.footerTipsLink) {
        footerTipsLink.textContent = lang.footerTipsLink;
    }
    
    // 개인정보 처리방침 링크
    const footerPrivacyLink = document.querySelector('[data-translate="footerPrivacyLink"]');
    if (footerPrivacyLink && lang.footerPrivacyLink) {
        footerPrivacyLink.textContent = lang.footerPrivacyLink;
    }
    
    // 지원하는 단위
    const footerSupportedUnits = document.querySelector('[data-translate="footerSupportedUnits"]');
    if (footerSupportedUnits && lang.footerSupportedUnits) {
        footerSupportedUnits.textContent = lang.footerSupportedUnits;
    }
    
    // 저작권
    const footerCopyright = document.querySelector('[data-translate="footerCopyright"]');
    if (footerCopyright && lang.footerCopyright) {
        footerCopyright.textContent = lang.footerCopyright;
    }
    
    // 푸터의 단위 링크들 업데이트
    const categories = ['length', 'weight', 'volume', 'temperature', 'area', 'speed'];
    categories.forEach(category => {
        const categoryLink = document.querySelector(`[data-translate="${category}"]`);
        if (categoryLink && lang[category]) {
            categoryLink.textContent = lang[category];
        }
    });
}