// 단위 변환기 클래스
class UnitConverter {
    constructor() {
        this.currentCategory = 'length';
        this.conversionHistory = [];
        this.maxHistoryItems = 10;
        this.loadHistoryFromStorage();
    }

    // 카테고리 변경
    setCategory(category) {
        if (UNIT_DATA[category]) {
            this.currentCategory = category;
            return true;
        }
        return false;
    }

    // 현재 카테고리 가져오기
    getCurrentCategory() {
        return this.currentCategory;
    }

    // 현재 카테고리의 단위 목록 가져오기
    getUnits() {
        return UNIT_DATA[this.currentCategory] ? UNIT_DATA[this.currentCategory].units : [];
    }

    // 단위 변환 실행
    convert(fromValue, fromUnit, toUnit, category = null) {
        // 입력값 검증
        if (fromValue === null || fromValue === undefined || fromValue === '') {
            return null;
        }

        const numValue = parseFloat(fromValue);
        if (isNaN(numValue)) {
            return null;
        }

        // 0은 모든 단위에서 0
        if (numValue === 0) {
            return 0;
        }

        // 온도 특별 검증
        const targetCategory = category || this.currentCategory;
        if (targetCategory === 'temperature') {
            const validation = this.validateTemperature(numValue, fromUnit);
            if (!validation.isValid) {
                return null;
            }
        }
        const units = UNIT_DATA[targetCategory] ? UNIT_DATA[targetCategory].units : [];
        
        // 단위 찾기
        const fromUnitData = units.find(unit => unit.symbol === fromUnit);
        const toUnitData = units.find(unit => unit.symbol === toUnit);
        
        if (!fromUnitData || !toUnitData) {
            return null;
        }

        // 같은 단위인 경우 그대로 반환
        if (fromUnit === toUnit) {
            return numValue;
        }

        let result = null;

        // 온도 변환인 경우
        if (targetCategory === 'temperature') {
            result = this.convertTemperature(fromUnit, toUnit, numValue);
        } else {
            // 일반 단위 변환 (기본 변환 계수 사용)
            result = this.convertStandard(fromUnit, toUnit, numValue, targetCategory);
        }

        if (result !== null && !isNaN(result)) {
            // 변환 기록에 추가
            this.addToHistory(numValue, fromUnit, toUnit, result, targetCategory);
            return result;
        }

        return null;
    }

    // 온도 변환 (특수한 공식 사용)
    convertTemperature(fromUnit, toUnit, value) {
        const temp = parseFloat(value);
        
        // 섭씨를 기준으로 변환
        let celsius = temp;
        
        // 입력 단위를 섭씨로 변환
        if (fromUnit === '°F') {
            celsius = (temp - 32) * 5/9;
        } else if (fromUnit === 'K') {
            celsius = temp - 273.15;
        } else if (fromUnit === '°C') {
            celsius = temp;
        }
        
        // 절대 영도 검증 (섭씨 -273.15도 이하)
        if (celsius < -273.15) {
            return null; // 물리적으로 불가능한 온도
        }
        
        // 섭씨를 목표 단위로 변환
        if (toUnit === '°F') {
            return celsius * 9/5 + 32;
        } else if (toUnit === 'K') {
            return celsius + 273.15;
        } else if (toUnit === '°C') {
            return celsius;
        }
        
        return null;
    }

    // 일반 단위 변환 (기본 변환 계수 사용)
    convertStandard(fromUnit, toUnit, value, category) {
        const conversions = this.getConversionFactors(category);
        
        // 직접 변환 계수가 있는 경우
        if (conversions[fromUnit] && conversions[fromUnit][toUnit]) {
            const conversionFactor = conversions[fromUnit][toUnit];
            return parseFloat(value) * conversionFactor;
        }
        
        // 역변환을 통한 계산 (A -> B가 없으면 B -> A의 역수를 사용)
        if (conversions[toUnit] && conversions[toUnit][fromUnit]) {
            const inverseFactor = 1 / conversions[toUnit][fromUnit];
            return parseFloat(value) * inverseFactor;
        }
        
        // 공통 기준 단위를 통한 변환
        const baseUnit = this.getBaseUnit(category);
        if (baseUnit && baseUnit !== fromUnit && baseUnit !== toUnit) {
            const toBase = this.convertToBase(fromUnit, value, category);
            if (toBase !== null) {
                return this.convertFromBase(toUnit, toBase, category);
            }
        }
        
        // 모든 단위 조합에 대한 완전한 변환 계수 생성
        const completeConversion = this.generateCompleteConversion(fromUnit, toUnit, category);
        if (completeConversion !== null) {
            return parseFloat(value) * completeConversion;
        }
        
        return null;
    }

    // 완전한 변환 계수 생성
    generateCompleteConversion(fromUnit, toUnit, category) {
        const conversions = this.getConversionFactors(category);
        const baseUnit = this.getBaseUnit(category);
        
        // 기준 단위를 통한 변환
        if (baseUnit) {
            const toBase = this.convertToBase(fromUnit, 1, category);
            const fromBase = this.convertFromBase(toUnit, 1, category);
            
            if (toBase !== null && fromBase !== null) {
                return toBase * fromBase;
            }
        }
        
        // 다른 단위를 통한 우회 변환 (직접 변환 계수만 사용)
        const allUnits = Object.keys(conversions);
        for (const intermediateUnit of allUnits) {
            if (intermediateUnit !== fromUnit && intermediateUnit !== toUnit) {
                const toIntermediate = conversions[fromUnit] && conversions[fromUnit][intermediateUnit] 
                    ? conversions[fromUnit][intermediateUnit] 
                    : (conversions[intermediateUnit] && conversions[intermediateUnit][fromUnit] 
                        ? 1 / conversions[intermediateUnit][fromUnit] 
                        : null);
                
                const fromIntermediate = conversions[intermediateUnit] && conversions[intermediateUnit][toUnit]
                    ? conversions[intermediateUnit][toUnit]
                    : (conversions[toUnit] && conversions[toUnit][intermediateUnit]
                        ? 1 / conversions[toUnit][intermediateUnit]
                        : null);
                
                if (toIntermediate !== null && fromIntermediate !== null) {
                    return toIntermediate * fromIntermediate;
                }
            }
        }
        
        return null;
    }

    // 기준 단위 가져오기
    getBaseUnit(category) {
        const baseUnits = {
            length: 'm',
            weight: 'kg',
            volume: 'L',
            area: 'm²',
            speed: 'm/s'
        };
        return baseUnits[category];
    }

    // 기준 단위로 변환
    convertToBase(fromUnit, value, category) {
        const conversions = this.getConversionFactors(category);
        const baseUnit = this.getBaseUnit(category);
        
        if (conversions[fromUnit] && conversions[fromUnit][baseUnit]) {
            return parseFloat(value) * conversions[fromUnit][baseUnit];
        }
        
        return null;
    }

    // 기준 단위에서 변환
    convertFromBase(toUnit, baseValue, category) {
        const conversions = this.getConversionFactors(category);
        const baseUnit = this.getBaseUnit(category);
        
        if (conversions[baseUnit] && conversions[baseUnit][toUnit]) {
            return baseValue * conversions[baseUnit][toUnit];
        }
        
        return null;
    }

    // 변환 계수 가져오기
    getConversionFactors(category) {
        const conversionFactors = {
            length: {
                mm: { cm: 0.1, m: 0.001, km: 0.000001, inch: 0.0393701, ft: 0.00328084, yard: 0.00109361, mile: 0.000000621371 },
                cm: { mm: 10, m: 0.01, km: 0.00001, inch: 0.393701, ft: 0.0328084, yard: 0.0109361, mile: 0.00000621371 },
                m: { mm: 1000, cm: 100, km: 0.001, inch: 39.3701, ft: 3.28084, yard: 1.09361, mile: 0.000621371 },
                km: { mm: 1000000, cm: 100000, m: 1000, inch: 39370.1, ft: 3280.84, yard: 1093.61, mile: 0.621371 },
                inch: { mm: 25.4, cm: 2.54, m: 0.0254, km: 0.0000254, ft: 0.0833333, yard: 0.0277778, mile: 0.0000157828 },
                ft: { mm: 304.8, cm: 30.48, m: 0.3048, km: 0.0003048, inch: 12, yard: 0.333333, mile: 0.000189394 },
                yard: { mm: 914.4, cm: 91.44, m: 0.9144, km: 0.0009144, inch: 36, ft: 3, mile: 0.000568182 },
                mile: { mm: 1609344, cm: 160934.4, m: 1609.344, km: 1.609344, inch: 63360, ft: 5280, yard: 1760 }
            },
            weight: {
                mg: { g: 0.001, kg: 0.000001, ton: 0.000000001, lb: 0.00000220462, oz: 0.000035274 },
                g: { mg: 1000, kg: 0.001, ton: 0.000001, lb: 0.00220462, oz: 0.035274 },
                kg: { mg: 1000000, g: 1000, ton: 0.001, lb: 2.20462, oz: 35.274 },
                ton: { mg: 1000000000, g: 1000000, kg: 1000, lb: 2204.62, oz: 35274 },
                lb: { mg: 453592.37, g: 453.59237, kg: 0.45359237, ton: 0.00045359237, oz: 16 },
                oz: { mg: 28349.523125, g: 28.349523125, kg: 0.028349523125, ton: 0.000028349523125, lb: 0.0625 }
            },
            volume: {
                ml: { L: 0.001, 'm³': 0.000001, cup: 0.00422675, tbsp: 0.067628, tsp: 0.202884, gal: 0.000264172, pt: 0.00211338 },
                L: { ml: 1000, 'm³': 0.001, cup: 4.22675, tbsp: 67.628, tsp: 202.884, gal: 0.264172, pt: 0.473176 },
                'm³': { ml: 1000000, L: 1000, cup: 4226.75, tbsp: 67628, tsp: 202884, gal: 264.172, pt: 473.176 },
                cup: { ml: 236.588236, L: 0.236588236, 'm³': 0.000236588236, tbsp: 16, tsp: 48, gal: 0.0625, pt: 0.5 },
                tbsp: { ml: 14.7867647813, L: 0.0147867647813, 'm³': 0.0000147867647813, cup: 0.0625, tsp: 3, gal: 0.00390625, pt: 0.03125 },
                tsp: { ml: 4.92892159375, L: 0.00492892159375, 'm³': 0.00000492892159375, cup: 0.0208333, tbsp: 0.333333, gal: 0.00130208, pt: 0.0104167 },
                gal: { ml: 3785.411784, L: 3.785411784, 'm³': 0.003785411784, cup: 16, tbsp: 256, tsp: 768, pt: 8 },
                pt: { ml: 473.176473, L: 0.473176473, 'm³': 0.000473176473, cup: 2, tbsp: 32, tsp: 96, gal: 0.125 }
            },
            area: {
                'mm²': { 'cm²': 0.01, 'm²': 0.000001, 'km²': 0.000000000001, ha: 0.0000000001, acre: 0.000000000247105, '평': 0.0000003025 },
                'cm²': { 'mm²': 100, 'm²': 0.0001, 'km²': 0.0000000001, ha: 0.00000001, acre: 0.0000000247105, '평': 0.00003025 },
                'm²': { 'mm²': 1000000, 'cm²': 10000, 'km²': 0.000001, ha: 0.0001, acre: 0.000247105, '평': 0.3025 },
                'km²': { 'mm²': 1000000000000, 'cm²': 10000000000, 'm²': 1000000, ha: 100, acre: 247.105, '평': 302500 },
                ha: { 'mm²': 10000000000, 'cm²': 100000000, 'm²': 10000, 'km²': 0.01, acre: 2.47105, '평': 3025 },
                acre: { 'mm²': 4046856422.4, 'cm²': 40468564.224, 'm²': 4046.8564224, 'km²': 0.0040468564224, ha: 0.40468564224, '평': 1224.17 },
                '평': { 'mm²': 3305785.124, 'cm²': 33057.85124, 'm²': 3.305785124, 'km²': 0.000003305785124, ha: 0.0003305785124, acre: 0.000816877 }
            },
            speed: {
                'm/s': { 'km/h': 3.6, mph: 2.23694, knot: 1.94384, 'ft/s': 3.28084 },
                'km/h': { 'm/s': 0.277778, mph: 0.621371, knot: 0.539957, 'ft/s': 0.911344 },
                mph: { 'm/s': 0.44704, 'km/h': 1.60934, knot: 0.868976, 'ft/s': 1.46667 },
                knot: { 'm/s': 0.514444, 'km/h': 1.852, mph: 1.15078, 'ft/s': 1.68781 },
                'ft/s': { 'm/s': 0.3048, 'km/h': 1.09728, mph: 0.681818, knot: 0.592484 }
            }
        };
        
        return conversionFactors[category] || {};
    }

    // 결과 포맷팅
    formatResult(result) {
        if (result === null || isNaN(result)) {
            return null;
        }

        // 0은 항상 0으로 반환
        if (result === 0) {
            return 0;
        }

        // 소수점 자릿수 결정
        let decimalPlaces = 6;
        
        // 온도는 소수점 1자리까지만
        if (this.currentCategory === 'temperature') {
            decimalPlaces = 1;
        }
        // 정수에 가까운 값은 정수로 표시
        else if (Math.abs(result - Math.round(result)) < 0.000001) {
            decimalPlaces = 0;
        }
        // 일반적인 경우 소수점 4자리까지만
        else if (Math.abs(result) < 1000) {
            decimalPlaces = 4;
        }
        // 큰 수는 소수점 없이
        else {
            decimalPlaces = 0;
        }

        // 결과를 문자열로 변환하여 불필요한 0 제거
        let formatted = parseFloat(result.toFixed(decimalPlaces));
        
        // 정수인 경우 소수점 제거
        if (formatted === Math.round(formatted)) {
            return Math.round(formatted);
        }
        
        // 매우 작은 소수점 값 처리 (0.0001 미만)
        if (Math.abs(formatted) < 0.0001 && formatted !== 0) {
            return formatted.toFixed(6);
        }
        
        // 매우 큰 수의 경우만 과학적 표기법 사용 (10억 이상)
        if (Math.abs(result) >= 1000000000) {
            return result.toExponential(6);
        }
        
        // 큰 숫자에 천 단위 구분자 추가 (10만 이상)
        if (Math.abs(formatted) >= 100000) {
            return formatted.toLocaleString();
        }
        
        return formatted;
    }

    // 변환 기록에 추가
    addToHistory(fromValue, fromUnit, toUnit, result, category) {
        const historyItem = {
            category: category,
            fromUnit: fromUnit,
            toUnit: toUnit,
            fromValue: parseFloat(fromValue),
            result: this.formatResult(result),
            timestamp: new Date()
        };

        // 최신 기록을 맨 앞에 추가
        this.conversionHistory.unshift(historyItem);

        // 최대 기록 수 제한
        if (this.conversionHistory.length > this.maxHistoryItems) {
            this.conversionHistory = this.conversionHistory.slice(0, this.maxHistoryItems);
        }

        // 로컬 스토리지에 저장
        this.saveHistoryToStorage();
    }

    // 로컬 스토리지에 기록 저장
    saveHistoryToStorage() {
        try {
            localStorage.setItem('conversionHistory', JSON.stringify(this.conversionHistory));
        } catch (error) {
            console.warn('변환 기록을 저장할 수 없습니다:', error);
        }
    }

    // 로컬 스토리지에서 기록 불러오기
    loadHistoryFromStorage() {
        try {
            const stored = localStorage.getItem('conversionHistory');
            if (stored) {
                this.conversionHistory = JSON.parse(stored);
                // 날짜 객체로 변환
                this.conversionHistory.forEach(item => {
                    item.timestamp = new Date(item.timestamp);
                });
            }
        } catch (error) {
            console.warn('변환 기록을 불러올 수 없습니다:', error);
            this.conversionHistory = [];
        }
    }

    // 변환 기록 가져오기
    getHistory() {
        return this.conversionHistory;
    }

    // 기록 지우기
    clearHistory() {
        this.conversionHistory = [];
        this.saveHistoryToStorage();
    }

    // 단위 교체
    swapUnits(fromUnit, toUnit) {
        return { from: toUnit, to: fromUnit };
    }

    // 유효한 단위인지 확인
    isValidUnit(unit) {
        const units = this.getUnits();
        return units.some(u => u.symbol === unit);
    }

    // 단위 기호 가져오기
    getUnitSymbol(unit) {
        const units = this.getUnits();
        const unitData = units.find(u => u.symbol === unit);
        return unitData ? unitData.symbol : unit;
    }

    // 단위 이름 가져오기
    getUnitName(unit) {
        const units = this.getUnits();
        const unitData = units.find(u => u.symbol === unit);
        return unitData ? unitData.name : unit;
    }

    // 단위 설명 가져오기
    getUnitDescription(unit) {
        const units = this.getUnits();
        const unitData = units.find(u => u.symbol === unit);
        return unitData ? unitData.description : '';
    }

    // 단위 공식 가져오기
    getUnitFormula(unit) {
        const units = this.getUnits();
        const unitData = units.find(u => u.symbol === unit);
        return unitData ? unitData.formula : '';
    }

    // 카테고리 이름 가져오기
    getCategoryName() {
        return UNIT_DATA[this.currentCategory] ? UNIT_DATA[this.currentCategory].name : '';
    }

    // 카테고리 설명 가져오기
    getCategoryDescription() {
        return UNIT_DATA[this.currentCategory] ? UNIT_DATA[this.currentCategory].description : '';
    }

    // 모든 단위 키 가져오기
    getAllUnitKeys() {
        const units = this.getUnits();
        return units.map(unit => unit.symbol);
    }

    // 상대적 시간 표시 (예: "2분 전")
    formatRelativeTime(timestamp) {
        const now = new Date();
        const diff = now - timestamp;
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);

        if (minutes < 1) {
            return '방금 전';
        } else if (minutes < 60) {
            return `${minutes}분 전`;
        } else if (hours < 24) {
            return `${hours}시간 전`;
        } else if (days < 7) {
            return `${days}일 전`;
        } else {
            return timestamp.toLocaleDateString('ko-KR');
        }
    }

    // 숫자 포맷팅 (천 단위 구분자)
    formatNumber(number) {
        if (number === null || isNaN(number)) {
            return '';
        }

        // 과학적 표기법이 필요한 경우
        if (Math.abs(number) >= 1000000 || (Math.abs(number) < 0.000001 && number !== 0)) {
            return number.toExponential(6);
        }

        // 정수인 경우
        if (Number.isInteger(number)) {
            return number.toLocaleString('ko-KR');
        }

        // 소수인 경우
        const decimalPlaces = Math.abs(number) < 1000 ? 2 : 0;
        return parseFloat(number.toFixed(decimalPlaces)).toLocaleString('ko-KR');
    }

    // 입력값 검증
    validateInput(value) {
        if (value === '' || value === null || value === undefined) {
            return { isValid: false, message: '값을 입력해주세요.' };
        }

        const numValue = parseFloat(value);
        if (isNaN(numValue)) {
            return { isValid: false, message: '올바른 숫자를 입력해주세요.' };
        }

        // 온도는 음수 허용
        if (this.currentCategory === 'temperature') {
            if (numValue < -1000) {
                return { isValid: false, message: '너무 낮은 온도입니다.' };
            }
            if (numValue > 10000) {
                return { isValid: false, message: '너무 높은 온도입니다.' };
            }
        } else {
            // 온도가 아닌 경우 음수 불허
            if (numValue < 0) {
                return { isValid: false, message: '음수는 입력할 수 없습니다.' };
            }
        }

        if (numValue > 999999999) {
            return { isValid: false, message: '너무 큰 숫자입니다.' };
        }

        return { isValid: true, message: '' };
    }

    // 온도 입력값 검증
    validateTemperature(value, unit) {
        const validation = this.validateInput(value);
        if (!validation.isValid) {
            return validation;
        }

        const numValue = parseFloat(value);

        if (unit === 'K' && numValue < 0) {
            return { isValid: false, message: '절대 온도는 0보다 작을 수 없습니다.' };
        }

        if (unit === '°C' && numValue < -273.15) {
            return { isValid: false, message: '절대 영도(-273.15°C)보다 낮을 수 없습니다.' };
        }

        if (unit === '°F' && numValue < -459.67) {
            return { isValid: false, message: '절대 영도(-459.67°F)보다 낮을 수 없습니다.' };
        }

        return { isValid: true, message: '' };
    }
}

// 전역 변환기 인스턴스 생성
const converter = new UnitConverter(); 