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
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.addEventListener('click', () => this.showMainPage());
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
        
        console.log('검색 결과:', results);
        
        if (results.length === 0) {
            this.searchResults.innerHTML = '<div class="search-result-item"><p>검색 결과가 없습니다.</p></div>';
        } else {
            this.searchResults.innerHTML = results.map((result, index) => `
                <div class="search-result-item ${index === this.selectedSearchIndex ? 'selected' : ''}" data-category="${result.category}" data-index="${index}">
                    <div class="search-result-category">${result.icon} ${result.type === 'category' ? '카테고리' : '단위'}</div>
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
    }

    // 단위 선택 옵션 채우기
    populateUnitSelects() {
        const units = UNIT_DATA[this.currentCategory].units;
        
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
    }

    // 카테고리 정보 업데이트
    updateCategoryInfo() {
        const categoryInfo = UNIT_DATA[this.currentCategory];
        this.currentCategoryElement.textContent = categoryInfo.name;
        this.unitInfoTitle.textContent = `${categoryInfo.name} 정보`;
        
        this.unitInfoContent.innerHTML = categoryInfo.units.map(unit => `
            <div class="unit-item">
                <h4>${unit.name} (${unit.symbol})</h4>
                <p>${unit.description}</p>
                ${unit.formula ? `<div class="unit-formula">${unit.formula}</div>` : ''}
            </div>
        `).join('');
    }

    // 예시 업데이트
    updateExamples() {
        const categoryInfo = UNIT_DATA[this.currentCategory];
        this.examplesContent.innerHTML = categoryInfo.examples.map(example => `
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
        this.relatedContent.innerHTML = relatedCategories.map(category => {
            const categoryInfo = UNIT_DATA[category];
            return `
                <div class="related-item" data-category="${category}">
                    <h4>${categoryInfo.name}</h4>
                    <p>${categoryInfo.description}</p>
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
        
        if (isNaN(fromValue)) {
            this.showToast('올바른 숫자를 입력해주세요.', 'error');
            return;
        }
        
        if (!fromUnit || !toUnit) {
            this.showToast('단위를 선택해주세요.', 'error');
            return;
        }
        
        if (fromValue === 0) {
            this.toValueInput.value = '0';
            this.showToast('0은 모든 단위에서 0입니다.', 'info');
            return;
        }
        
        const result = this.converter.convert(fromValue, fromUnit, toUnit, this.currentCategory);
        const formattedResult = this.converter.formatResult(result);
        
        if (formattedResult !== null) {
            this.toValueInput.value = formattedResult;
            
            // 변환 기록에 추가
            this.converter.addToHistory(fromValue, fromUnit, toUnit, result, this.currentCategory);
            this.updateHistory();
            
            this.showToast('변환이 완료되었습니다!', 'success');
        } else {
            this.showToast('변환할 수 없는 단위 조합입니다.', 'error');
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
        this.showToast('초기화되었습니다.', 'info');
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
        
        if (diff < 60000) { // 1분 미만
            return '방금 전';
        } else if (diff < 3600000) { // 1시간 미만
            return `${Math.floor(diff / 60000)}분 전`;
        } else if (diff < 86400000) { // 1일 미만
            return `${Math.floor(diff / 3600000)}시간 전`;
        } else {
            return date.toLocaleDateString('ko-KR');
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
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('Service Worker registered:', registration);
                })
                .catch(error => {
                    console.log('Service Worker registration failed:', error);
                });
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