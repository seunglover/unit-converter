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
let currentLanguage = 'ko';

// 语言切换函数
function changeLanguage(lang) {
    currentLanguage = lang;
    // localStorage 저장 비활성화
    
    // 현재 페이지에 따라 적절한 업데이트 함수 호출
    if (window.location.pathname.includes('tips.html')) {
        updateTipsContent(lang);
        updateTipRows(lang);
    } else if (window.location.pathname.includes('faq.html')) {
        updateFaqContent(lang);
    } else if (window.location.pathname.includes('history.html')) {
        updateHistoryContent(lang);
    } else {
        updateUILanguage();
        // If on the converter page, also update category info
        if (window.unitConverterApp && !window.unitConverterApp.isMainPage) {
            window.unitConverterApp.updateCategoryInfo();
        }
    }
}

function updateHistoryContent(lang) {
    // 언어 파일들이 로드되었는지 확인
    if (typeof window[lang] === 'undefined') {
        console.log('언어 파일이 아직 로드되지 않았습니다:', lang);
        return;
    }
    
    const langData = window[lang];
    
    if (!langData || !langData.history) {
        console.log('history 데이터를 찾을 수 없습니다:', lang);
        return;
    }

    const historyData = langData.history;

    document.querySelector('[data-translate="history.title"]').textContent = historyData.title;
    document.querySelector('[data-translate="history.description"]').textContent = historyData.description;

    const historySections = document.querySelectorAll('.history-section');
    historySections.forEach(section => {
        const sectionKey = section.dataset.historySection;
        const sectionData = historyData[sectionKey];
        if (!sectionData) {
            return;
        }

        section.querySelector('h2').textContent = sectionData.title;

        if (sectionKey === 'funFacts') {
            const funFactItems = section.querySelectorAll('.fun-fact-item');
            funFactItems.forEach(item => {
                const funFactKey = item.dataset.funFact;
                const funFactData = sectionData[funFactKey];
                if(funFactData) {
                    item.querySelector('h3').innerHTML = funFactData.title;
                    item.querySelector('p').textContent = funFactData.description;
                }
            });
        } else {
            const timelineItems = section.querySelectorAll('.timeline-item');
            let i = 0;
            for (const key in sectionData) {
                if (key !== 'title') {
                    const itemData = sectionData[key];
                    const timelineItem = timelineItems[i];
                    if(timelineItem) {
                        timelineItem.querySelector('.timeline-date').textContent = langData.dates[key];
                        timelineItem.querySelector('h3').textContent = itemData.title;
                        timelineItem.querySelector('p').textContent = itemData.description;

                        if(itemData.fact) {
                            timelineItem.querySelector('.history-fact').innerHTML = `<strong>${langData.labels.fact}</strong> ${itemData.fact}`;
                        }

                        if(itemData.formula) {
                            timelineItem.querySelector('.history-formula').innerHTML = `<strong>${langData.labels.formula}</strong> ${itemData.formula}`;
                        }

                        const ul = timelineItem.querySelector('ul');
                        if (ul) {
                            ul.innerHTML = '';
                            for (const liKey in itemData) {
                                if (liKey !== 'title' && liKey !== 'description' && liKey !== 'fact' && liKey !== 'formula') {
                                    const li = document.createElement('li');
                                    li.innerHTML = `<strong>${liKey.charAt(0).toUpperCase() + liKey.slice(1)}:</strong> ${itemData[liKey]}`;
                                    ul.appendChild(li);
                                }
                            }
                        }
                    }
                    i++;
                }
            }
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


// UI 语言更新函数
function updateUILanguage() {
    // languages 객체 초기화
    if (!initializeLanguages()) {
        console.log('언어 파일들이 아직 로드되지 않았습니다.');
        return;
    }
    
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
}