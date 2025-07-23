// 메인 애플리케이션 클래스
class UnitConverterApp {
    constructor() {
        this.converter = new UnitConverter();
        this.currentCategory = 'length';
        this.isMainPage = true;
        this.searchResults = [];
        this.selectedSearchIndex = -1;
        
        this.initializeElements();
        this.bindEvents();
        this.initializeApp();
    }

    initializeElements() {
        // 기존 요소들
        this.fromValueInput = document.getElementById('from-value');
        this.toValueInput = document.getElementById('to-value');
        this.fromUnitSelect = document.getElementById('from-unit');
        this.toUnitSelect = document.getElementById('to-unit');
        this.convertBtn = document.getElementById('convert-btn');
        this.clearBtn = document.getElementById('clear-btn');
        this.swapBtn = document.getElementById('swap-btn');
        this.currentCategoryElement = document.getElementById('current-category');
        this.unitInfoTitle = document.getElementById('unit-info-title');
        this.unitInfoContent = document.getElementById('unit-info-content');
        this.examplesContent = document.getElementById('examples-content');
        this.historyList = document.getElementById('conversion-history');
        
        // 새로운 요소들
        this.searchInput = document.getElementById('search-input');
        this.searchBtn = document.getElementById('search-btn');
        this.searchResults = document.getElementById('search-results');
        this.mainPage = document.getElementById('main-page');
        this.converterPage = document.getElementById('converter-page');
        this.infoSection = document.getElementById('info-section');
        this.examplesSection = document.getElementById('examples-section');
        this.relatedSection = document.getElementById('related-section');
        this.historySection = document.getElementById('history-section');
        this.backToMainBtn = document.getElementById('back-to-main');
        this.relatedContent = document.getElementById('related-content');
        
        // 카테고리 카드들
        this.categoryCards = document.querySelectorAll('.category-card');
        
        // 네비게이션 링크들
        this.navLinks = document.querySelectorAll('.nav-link');
    }

    bindEvents() {
        // 기존 이벤트들
        this.fromValueInput.addEventListener('input', () => this.handleRealTimeConversion());
        this.fromUnitSelect.addEventListener('change', () => this.handleRealTimeConversion());
        this.toUnitSelect.addEventListener('change', () => this.handleRealTimeConversion());
        this.convertBtn.addEventListener('click', () => this.performConversion());
        this.clearBtn.addEventListener('click', () => this.clearConverter());
        this.swapBtn.addEventListener('click', () => this.swapUnits());
        
        // 새로운 이벤트들
        this.searchInput.addEventListener('input', () => {
            this.handleSearch();
        });
        this.searchInput.addEventListener('focus', () => {
            const query = this.searchInput.value.trim();
            if (query.length >= 2) {
                this.handleSearch();
            }
        });
        this.searchInput.addEventListener('blur', () => {
            // 검색 결과 클릭을 위한 지연
            setTimeout(() => {
                // 간단하게 검색 결과 숨기기
                this.hideSearchResults();
            }, 200);
        });
        this.searchBtn.addEventListener('click', () => {
            this.handleSearch();
        });
        
        // 로고 클릭 이벤트 - 메인 페이지로 이동
        const logo = document.querySelector('.logo a');
        if (logo) {
            logo.addEventListener('click', (e) => {
                e.preventDefault(); // 기본 링크 동작 방지
                this.showMainPage();
            });
            logo.style.cursor = 'pointer';
        }
        
        // 카테고리 카드 클릭 이벤트
        this.categoryCards.forEach(card => {
            card.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                this.switchToConverter(category);
            });
        });
        
        // 검색 결과 클릭 이벤트
        this.searchResults.addEventListener('click', (e) => {
            const resultItem = e.target.closest('.search-result-item');
            console.log('검색 결과 클릭:', resultItem);
            if (resultItem && resultItem.dataset.category) {
                const category = resultItem.dataset.category;
                console.log('선택된 카테고리:', category);
                this.switchToConverter(category);
                this.hideSearchResults();
                this.searchInput.value = '';
                this.searchInput.blur();
            }
        });
        
        // 뒤로가기 버튼
        this.backToMainBtn.addEventListener('click', () => this.showMainPage());
        
        // 네비게이션 링크들
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const category = link.dataset.category;
                this.switchToConverter(category);
            });
        });
        
        // 언어 선택 이벤트
        const languageSelect = document.getElementById('language-select');
        const headerLanguageSelect = document.getElementById('header-language-select');
        
        // 푸터 언어 선택기 이벤트
        if (languageSelect) {
            languageSelect.addEventListener('change', (e) => {
                const selectedLanguage = e.target.value;
                if (typeof changeLanguage === 'function') {
                    changeLanguage(selectedLanguage);
                }
                this.updateLanguageSelector(selectedLanguage);
                
                // 헤더 언어 선택기도 동기화
                if (headerLanguageSelect) {
                    headerLanguageSelect.value = selectedLanguage;
                }
                
                // 언어 변경 후 UI 업데이트 (깜빡임 방지)
                requestAnimationFrame(() => {
                    if (typeof updateUILanguage === 'function') {
                        updateUILanguage();
                    }
                });
            });
        }
        
        // 헤더 언어 선택기 이벤트
        if (headerLanguageSelect) {
            headerLanguageSelect.addEventListener('change', (e) => {
                const selectedLanguage = e.target.value;
                if (typeof changeLanguage === 'function') {
                    changeLanguage(selectedLanguage);
                }
                this.updateLanguageSelector(selectedLanguage);
                
                // 푸터 언어 선택기도 동기화
                if (languageSelect) {
                    languageSelect.value = selectedLanguage;
                }
                
                // 언어 변경 후 UI 업데이트 (깜빡임 방지)
                requestAnimationFrame(() => {
                    if (typeof updateUILanguage === 'function') {
                        updateUILanguage();
                    }
                });
            });
        }
        
        // 키보드 단축키
        document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));
        
        // 검색 입력 필드 키보드 이벤트
        this.searchInput.addEventListener('keydown', (e) => this.handleSearchKeyboard(e));
        
        // 검색 결과 외부 클릭 시 숨기기
        document.addEventListener('click', (e) => {
            const searchContainer = e.target.closest('.search-container');
            const searchResults = e.target.closest('.search-results');
            if (!searchContainer && !searchResults) {
                this.hideSearchResults();
            }
        });
    }

    initializeApp() {
        this.showMainPage();
        this.updateHistory();
        this.registerServiceWorker();
        this.initializeLanguageSelector();
    }

    // 메인 페이지 표시
    showMainPage() {
        this.isMainPage = true;
        this.mainPage.classList.remove('hidden');
        this.converterPage.classList.add('hidden');
        this.infoSection.classList.add('hidden');
        this.examplesSection.classList.add('hidden');
        this.relatedSection.classList.add('hidden');
        this.historySection.classList.add('hidden');
        
        // 네비게이션 활성화 해제
        this.navLinks.forEach(link => link.classList.remove('active'));
    }

    // 변환기 페이지로 전환
    switchToConverter(category) {
        this.isMainPage = false;
        this.currentCategory = category;
        
        this.mainPage.classList.add('hidden');
        this.converterPage.classList.remove('hidden');
        this.infoSection.classList.remove('hidden');
        this.examplesSection.classList.remove('hidden');
        this.relatedSection.classList.remove('hidden');
        this.historySection.classList.remove('hidden');
        
        // 네비게이션 활성화
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.category === category) {
                link.classList.add('active');
            }
        });
        
        this.updateConverter();
    }

    // 실시간 변환 처리
    handleRealTimeConversion() {
        const fromValue = parseFloat(this.fromValueInput.value);
        const fromUnit = this.fromUnitSelect.value;
        const toUnit = this.toUnitSelect.value;
        
        if (!isNaN(fromValue) && fromUnit && toUnit && fromValue !== 0) {
            const result = this.converter.convert(fromValue, fromUnit, toUnit, this.currentCategory);
            const formattedResult = this.converter.formatResult(result);
            this.toValueInput.value = formattedResult !== null ? formattedResult : '';
        } else if (fromValue === 0) {
            this.toValueInput.value = '0';
        } else {
            this.toValueInput.value = '';
        }
    }

    // 검색 처리
    handleSearch() {
        const query = this.searchInput.value.trim().toLowerCase();
        
        if (query.length < 2) {
            this.hideSearchResults();
            return;
        }
        
        const results = this.searchUnits(query);
        this.displaySearchResults(results);
    }

    // 단위 검색
    searchUnits(query) {
        const results = [];
        
        // 카테고리 검색
        Object.keys(UNIT_DATA).forEach(category => {
            const categoryInfo = UNIT_DATA[category];
            const categoryName = categoryInfo.name.toLowerCase();
            const categoryDesc = categoryInfo.description.toLowerCase();
            
            if (categoryName.includes(query) || categoryDesc.includes(query)) {
                results.push({
                    type: 'category',
                    category: category,
                    title: categoryInfo.name,
                    description: categoryInfo.description,
                    icon: this.getCategoryIcon(category)
                });
            }
        });
        
        // 개별 단위 검색
        Object.keys(UNIT_DATA).forEach(category => {
            const categoryInfo = UNIT_DATA[category];
            categoryInfo.units.forEach(unit => {
                const unitName = unit.name.toLowerCase();
                const unitSymbol = unit.symbol.toLowerCase();
                const unitDesc = unit.description.toLowerCase();
                
                if (unitName.includes(query) || unitSymbol.includes(query) || unitDesc.includes(query)) {
                    results.push({
                        type: 'unit',
                        category: category,
                        title: `${unit.name} (${unit.symbol})`,
                        description: unit.description,
                        icon: this.getCategoryIcon(category)
                    });
                }
            });
        });
        
        return results.slice(0, 8); // 최대 8개 결과
    }

    // 검색 결과 표시
    displaySearchResults(results) {
        this.searchResultsArray = results;
        this.selectedSearchIndex = -1;
        const lang = languages[currentLanguage];
        
        console.log('검색 결과:', results);
        
        if (results.length === 0) {
            this.searchResults.innerHTML = `<div class="search-result-item"><p>${lang.noResults || '검색 결과가 없습니다.'}</p></div>`;
        } else {
            this.searchResults.innerHTML = results.map((result, index) => `
                <div class="search-result-item ${index === this.selectedSearchIndex ? 'selected' : ''}" data-category="${result.category}" data-index="${index}">
                    <div class="search-result-category">${result.icon} ${result.type === 'category' ? (lang.category || '카테고리') : (lang.unit || '단위')}</div>
                    <div class="search-result-title">${result.title}</div>
                    <div class="search-result-description">${result.description}</div>
                </div>
            `).join('');
        }
        
        this.showSearchResults();
    }

    // 검색 결과 표시
    showSearchResults() {
        this.searchResults.classList.add('active');
    }

    // 검색 결과 숨기기
    hideSearchResults() {
        this.searchResults.classList.remove('active');
    }

    // 카테고리 아이콘 가져오기
    getCategoryIcon(category) {
        const icons = {
            length: '📏',
            weight: '⚖️',
            volume: '🧪',
            temperature: '🌡️',
            area: '📐',
            speed: '🚗'
        };
        return icons[category] || '📊';
    }

    // 변환기 업데이트
    updateConverter() {
        this.converter.setCategory(this.currentCategory);
        this.populateUnitSelects();
        this.updateCategoryInfo();
        this.updateExamples();
        this.updateRelatedUnits();
        this.updateHistory();
        
        // 입력 필드 초기화
        this.fromValueInput.value = '';
        this.toValueInput.value = '';
        
        // 언어 업데이트 (변환기 설명 업데이트)
        if (typeof updateUILanguage === 'function') {
            updateUILanguage();
        }
    }

    // 단위 선택 옵션 채우기
    populateUnitSelects() {
        const units = UNIT_DATA[this.currentCategory].units;
        
        // languages 객체 초기화 확인
        if (!initializeLanguages()) {
            console.log('언어 파일들이 아직 로드되지 않았습니다. 기본값으로 처리합니다.');
            // 기본값으로 처리
            this.fromUnitSelect.innerHTML = units.map(unit => 
                `<option value="${unit.symbol}">${unit.name} (${unit.symbol})</option>`
            ).join('');
            
            this.toUnitSelect.innerHTML = units.map(unit => 
                `<option value="${unit.symbol}">${unit.name} (${unit.symbol})</option>`
            ).join('');
            
            // 기본값 설정
            if (units.length >= 2) {
                this.fromUnitSelect.value = units[0].symbol;
                this.toUnitSelect.value = units[1].symbol;
            }
            return;
        }
        
        const lang = languages[currentLanguage];
        
        this.fromUnitSelect.innerHTML = units.map(unit => {
            const unitName = lang.units && lang.units[unit.symbol] ? lang.units[unit.symbol] : unit.name;
            return `<option value="${unit.symbol}">${unitName} (${unit.symbol})</option>`;
        }).join('');
        
        this.toUnitSelect.innerHTML = units.map(unit => {
            const unitName = lang.units && lang.units[unit.symbol] ? lang.units[unit.symbol] : unit.name;
            return `<option value="${unit.symbol}">${unitName} (${unit.symbol})</option>`;
        }).join('');
        
        // 기본값 설정
        if (units.length >= 2) {
            this.fromUnitSelect.value = units[0].symbol;
            this.toUnitSelect.value = units[1].symbol;
        }
    }

    // 카테고리 정보 업데이트
    updateCategoryInfo() {
        const categoryInfo = UNIT_DATA[this.currentCategory];
        
        // languages 객체 초기화 확인
        if (!initializeLanguages()) {
            console.log('언어 파일들이 아직 로드되지 않았습니다. 기본값으로 처리합니다.');
            // 기본값으로 처리
            this.currentCategoryElement.textContent = categoryInfo.name;
            this.unitInfoTitle.textContent = `${categoryInfo.name} 정보`;
            
            this.unitInfoContent.innerHTML = categoryInfo.units.map(unit => `
                <div class="unit-item">
                    <h4>${unit.name} (${unit.symbol})</h4>
                    <p>${unit.description}</p>
                    ${unit.formula ? `<div class="unit-formula">${unit.formula}</div>` : ''}
                </div>
            `).join('');
            return;
        }
        
        const lang = languages[currentLanguage];
        
        // 다국어 카테고리 정보 사용
        const categoryLang = lang.categories && lang.categories[this.currentCategory];
        const categoryName = categoryLang ? categoryLang.name : categoryInfo.name;
        const categoryDesc = categoryLang ? categoryLang.description : categoryInfo.description;
        
        this.currentCategoryElement.textContent = categoryName;
        this.unitInfoTitle.textContent = `${categoryName} ${lang.information || '정보'}`;
        
        this.unitInfoContent.innerHTML = categoryInfo.units.map(unit => {
            const unitName = lang.units && lang.units[unit.symbol] ? lang.units[unit.symbol] : unit.name;
            const unitDescription = lang.unitDescriptions && lang.unitDescriptions[unit.symbol] ? 
                lang.unitDescriptions[unit.symbol] : unit.description;
            const unitFormula = lang.unitFormulas && lang.unitFormulas[unit.symbol] ? 
                lang.unitFormulas[unit.symbol] : unit.formula;
            
            return `
                <div class="unit-item">
                    <h4>${unitName} (${unit.symbol})</h4>
                    <p>${unitDescription}</p>
                    ${unitFormula ? `<div class="unit-formula">${unitFormula}</div>` : ''}
                </div>
            `;
        }).join('');
    }

    // 예시 업데이트
    updateExamples() {
        const categoryInfo = UNIT_DATA[this.currentCategory];
        const lang = languages[currentLanguage];
        
        // 다국어 예시 데이터 사용
        const examples = lang.examples && lang.examples[this.currentCategory] ? 
            lang.examples[this.currentCategory] : categoryInfo.examples;
        
        this.examplesContent.innerHTML = examples.map(example => `
            <div class="example-item">
                <h4>${example.title}</h4>
                <p>${example.description}</p>
                <div class="example-value">${example.value}</div>
            </div>
        `).join('');
    }

    // 관련 단위 업데이트
    updateRelatedUnits() {
        const relatedCategories = this.getRelatedCategories(this.currentCategory);
        const lang = languages[currentLanguage];
        
        this.relatedContent.innerHTML = relatedCategories.map(category => {
            const categoryInfo = UNIT_DATA[category];
            
            // 다국어 카테고리 정보 사용
            const categoryLang = lang.categories && lang.categories[category];
            const categoryName = categoryLang ? categoryLang.name : categoryInfo.name;
            const categoryDesc = categoryLang ? categoryLang.description : categoryInfo.description;
            
            return `
                <div class="related-item" data-category="${category}">
                    <h4>${categoryName}</h4>
                    <p>${categoryDesc}</p>
                </div>
            `;
        }).join('');
        
        // 관련 단위 클릭 이벤트
        this.relatedContent.querySelectorAll('.related-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                this.switchToConverter(category);
            });
        });
    }

    // 관련 카테고리 가져오기
    getRelatedCategories(currentCategory) {
        const allCategories = Object.keys(UNIT_DATA);
        return allCategories.filter(category => category !== currentCategory).slice(0, 3);
    }

    // 변환 수행
    performConversion() {
        const fromValue = parseFloat(this.fromValueInput.value);
        const fromUnit = this.fromUnitSelect.value;
        const toUnit = this.toUnitSelect.value;
        const lang = languages[currentLanguage];
        
        if (isNaN(fromValue)) {
            const message = lang.toastMessages ? lang.toastMessages.invalidNumber : '올바른 숫자를 입력해주세요.';
            this.showToast(message, 'error');
            return;
        }
        
        if (!fromUnit || !toUnit) {
            const message = lang.toastMessages ? lang.toastMessages.selectUnit : '단위를 선택해주세요.';
            this.showToast(message, 'error');
            return;
        }
        
        if (fromValue === 0) {
            this.toValueInput.value = '0';
            const message = lang.toastMessages ? lang.toastMessages.zeroMessage : '0은 모든 단위에서 0입니다.';
            this.showToast(message, 'info');
            return;
        }
        
        const result = this.converter.convert(fromValue, fromUnit, toUnit, this.currentCategory);
        const formattedResult = this.converter.formatResult(result);
        
        if (formattedResult !== null) {
            this.toValueInput.value = formattedResult;
            
            // 변환 기록에 추가
            this.converter.addToHistory(fromValue, fromUnit, toUnit, result, this.currentCategory);
            this.updateHistory();
            
            const message = lang.toastMessages ? lang.toastMessages.conversionComplete : '변환이 완료되었습니다!';
            this.showToast(message, 'success');
        } else {
            const message = lang.toastMessages ? lang.toastMessages.invalidCombination : '변환할 수 없는 단위 조합입니다.';
            this.showToast(message, 'error');
        }
    }

    // 단위 교체
    swapUnits() {
        const tempValue = this.fromValueInput.value;
        const tempUnit = this.fromUnitSelect.value;
        
        this.fromValueInput.value = this.toValueInput.value;
        this.fromUnitSelect.value = this.toUnitSelect.value;
        this.toValueInput.value = tempValue;
        this.toUnitSelect.value = tempUnit;
        
        this.handleRealTimeConversion();
    }

    // 변환기 초기화
    clearConverter() {
        this.fromValueInput.value = '';
        this.toValueInput.value = '';
        
        const lang = languages[currentLanguage];
        const message = lang.toastMessages ? lang.toastMessages.cleared : '초기화되었습니다.';
        this.showToast(message, 'info');
    }

    // 변환 기록 업데이트
    updateHistory() {
        const history = this.converter.getHistory();
        this.historyList.innerHTML = history.map(item => `
            <div class="history-item">
                <div class="history-conversion">
                    ${item.fromValue} ${item.fromUnit} = ${item.result} ${item.toUnit}
                </div>
                <div class="history-time">${this.formatTime(item.timestamp)}</div>
            </div>
        `).join('');
    }

    // 시간 포맷팅
    formatTime(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diff = now - date;
        
        // languages 객체 초기화 확인
        if (!initializeLanguages()) {
            // 기본값으로 처리
            if (diff < 60000) {
                return '방금 전';
            } else if (diff < 3600000) {
                return `${Math.floor(diff / 60000)}분 전`;
            } else if (diff < 86400000) {
                return `${Math.floor(diff / 3600000)}시간 전`;
            } else {
                return date.toLocaleDateString('ko-KR');
            }
        }
        
        const lang = languages[currentLanguage];
        
        if (diff < 60000) { // 1분 미만
            return lang.justNow || '방금 전';
        } else if (diff < 3600000) { // 1시간 미만
            return `${Math.floor(diff / 60000)}${lang.minutesAgo || '분 전'}`;
        } else if (diff < 86400000) { // 1일 미만
            return `${Math.floor(diff / 3600000)}${lang.hoursAgo || '시간 전'}`;
        } else {
            return date.toLocaleDateString(lang.locale || 'ko-KR');
        }
    }

    // 검색 키보드 이벤트 처리
    handleSearchKeyboard(e) {
        if (!this.searchResultsArray || this.searchResultsArray.length === 0) return;
        
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                this.selectNextSearchResult();
                break;
            case 'ArrowUp':
                e.preventDefault();
                this.selectPrevSearchResult();
                break;
            case 'Enter':
                e.preventDefault();
                this.selectCurrentSearchResult();
                break;
            case 'Escape':
                e.preventDefault();
                this.hideSearchResults();
                this.searchInput.blur();
                break;
        }
    }
    
    // 다음 검색 결과 선택
    selectNextSearchResult() {
        if (this.selectedSearchIndex < this.searchResultsArray.length - 1) {
            this.selectedSearchIndex++;
        } else {
            this.selectedSearchIndex = 0; // 맨 위로 순환
        }
        this.updateSearchSelection();
    }
    
    // 이전 검색 결과 선택
    selectPrevSearchResult() {
        if (this.selectedSearchIndex > 0) {
            this.selectedSearchIndex--;
        } else {
            this.selectedSearchIndex = this.searchResultsArray.length - 1; // 맨 아래로 순환
        }
        this.updateSearchSelection();
    }
    
    // 현재 검색 결과 선택
    selectCurrentSearchResult() {
        if (this.selectedSearchIndex >= 0 && this.selectedSearchIndex < this.searchResultsArray.length) {
            const selectedResult = this.searchResultsArray[this.selectedSearchIndex];
            this.switchToConverter(selectedResult.category);
            this.hideSearchResults();
            this.searchInput.value = '';
        }
    }
    
    // 검색 결과 선택 상태 업데이트
    updateSearchSelection() {
        const searchItems = this.searchResults.querySelectorAll('.search-result-item');
        searchItems.forEach((item, index) => {
            if (index === this.selectedSearchIndex) {
                item.classList.add('selected');
                item.scrollIntoView({ block: 'nearest' });
            } else {
                item.classList.remove('selected');
            }
        });
    }
    
    // 키보드 단축키 처리
    handleKeyboardShortcuts(e) {
        // Ctrl/Cmd + Enter: 변환
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            this.performConversion();
        }
        
        // Ctrl/Cmd + S: 단위 교체
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            this.swapUnits();
        }
        
        // Ctrl/Cmd + K: 검색창 포커스
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            this.searchInput.focus();
        }
        
        // Escape: 검색 결과 숨기기 또는 메인으로 돌아가기
        if (e.key === 'Escape') {
            if (this.searchResults.classList.contains('active')) {
                this.hideSearchResults();
            } else if (!this.isMainPage) {
                this.showMainPage();
            }
        }
    }

    // 토스트 메시지 표시
    showToast(message, type = 'info') {
        // 기존 토스트 제거
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }
        
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <div class="toast-content">
                <span class="toast-message">${message}</span>
                <button class="toast-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;
        
        document.body.appendChild(toast);
        
        // 3초 후 자동 제거
        setTimeout(() => {
            if (toast.parentElement) {
                toast.remove();
            }
        }, 3000);
    }

    // 서비스 워커 등록
    registerServiceWorker() {
        // Service Worker는 HTTPS 또는 localhost에서만 작동하며, file:// 프로토콜에서는 작동하지 않음
        if ('serviceWorker' in navigator && 
            (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('Service Worker registered:', registration);
                })
                .catch(error => {
                    console.log('Service Worker registration failed:', error);
                });
        } else {
            console.log('Service Worker not supported in this environment');
        }
    }
    
    // 언어 선택기 초기화
    initializeLanguageSelector() {
        const languageSelect = document.getElementById('language-select');
        const headerLanguageSelect = document.getElementById('header-language-select');
        // localStorage 로드 비활성화 - 기본값 사용
        const savedLanguage = 'ko';
        
        if (languageSelect) {
            languageSelect.value = savedLanguage;
            languageSelect.addEventListener('change', (e) => {
                changeLanguage(e.target.value);
            });
        }
        if (headerLanguageSelect) {
            headerLanguageSelect.value = savedLanguage;
            headerLanguageSelect.addEventListener('change', (e) => {
                changeLanguage(e.target.value);
            });
        }
        
        // 저장된 언어로 UI 업데이트
        if (savedLanguage) {
            currentLanguage = savedLanguage;
            updateUILanguage();
        }
    }
    
    // 언어 선택기 업데이트
    updateLanguageSelector(language) {
        const languageSelect = document.getElementById('language-select');
        const headerLanguageSelect = document.getElementById('header-language-select');
        
        if (languageSelect) {
            languageSelect.value = language;
        }
        if (headerLanguageSelect) {
            headerLanguageSelect.value = language;
        }
    }
}

// 앱 초기화
if (document.readyState === 'loading') {
    // DOM이 아직 로딩 중인 경우
    document.addEventListener('DOMContentLoaded', () => {
        window.unitConverterApp = new UnitConverterApp();
    });
} else {
    // DOM이 이미 로드된 경우
    window.unitConverterApp = new UnitConverterApp();
} 