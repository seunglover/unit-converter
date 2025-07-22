
const en = {
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
    historyButtonText: "Learn Unit History",
    
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
    
    // Tip-row data
    cupLabel: "1 cup",
    cupValue: "= 240ml",
    tbspLabel: "1 tablespoon (tbsp)",
    tbspValue: "= 15ml",
    tspLabel: "1 teaspoon (tsp)",
    tspValue: "= 5ml",
    ozLabel: "1 ounce (oz)",
    ozValue: "= 28.35g",
    lbLabel: "1 pound (lb)",
    lbValue: "= 453.59g",
    
    // Flour conversion data
    allPurposeLabel: "All-purpose flour",
    allPurposeValue: "= 125g",
    breadLabel: "Bread flour",
    breadValue: "= 130g",
    cakeLabel: "Cake flour",
    cakeValue: "= 115g",
    
    // Clothing size data
    koreaS: "S (88-90)",
    koreaM: "M (91-93)",
    koreaL: "L (94-96)",
    koreaXL: "XL (97-99)",
    usS: "S (34-36)",
    usM: "M (38-40)",
    usL: "L (42-44)",
    usXL: "XL (46-48)",
    
    // Shoe size data
    koreaShoe240: "240mm",
    koreaShoe250: "250mm",
    koreaShoe260: "260mm",
    koreaShoe270: "270mm",
    usShoe7: "US 7",
    usShoe8: "US 8",
    usShoe9: "US 9",
    usShoe10: "US 10",
    
    // Weight conversion data
    kgLabel: "1kg",
    kgValue: "= 2.2lb",
    lbLabel2: "1lb",
    lbValue2: "= 0.45kg",
    
    // Distance conversion data
    kmLabel: "1km",
    kmValue: "= 0.62mile",
    mileLabel: "1mile",
    mileValue: "= 1.61km",
    
    // Temperature conversion data
    celsiusLabel: "20°C",
    celsiusValue: "= 68°F",
    fahrenheitLabel: "68°F",
    fahrenheitValue: "= 20°C",
    
    // Speed conversion data
    kmhLabel: "60km/h",
    kmhValue: "= 37mph",
    mphLabel: "60mph",
    mphValue: "= 97km/h",
    
    // Area conversion data
    pyeongLabel: "1 pyeong",
    pyeongValue: "= 3.3m²",
    m2Label: "1m²",
    m2Value: "= 0.3 pyeong",
    
    // Category card example tags
    lengthExamples: ["m ↔ cm", "km ↔ mile", "inch ↔ cm"],
    weightExamples: ["kg ↔ lb", "g ↔ oz", "mg ↔ g"],
    volumeExamples: ["L ↔ gal", "ml ↔ cup", "tbsp ↔ ml"],
    temperatureExamples: ["°C ↔ °F", "°C ↔ K", "°F ↔ K"],
    areaExamples: ["m² ↔ cm²", "acre ↔ ha", "km² ↔ m²"],
    speedExamples: ["km/h ↔ mph", "m/s ↔ km/h", "knot ↔ km/h"],
    
    // Unit History Page
    history: {
        title: "📚 History of Units",
        description: "Discover the fascinating history of various measurement units used by humanity",
        
        // Date texts
        dates: {
            ancient: "Ancient",
            year1793: "1793",
            year1795: "1795",
            year1701: "1701",
            year1742: "1742",
            year1848: "1848",
            year1875: "1875",
            year1960: "1960",
            year1964: "1964",
            year2019: "2019",
            current: "Present"
        },
        
        // Length unit history
        lengthHistory: {
            title: "History of Length Units",
            ancient: {
                title: "Body-based Measurement",
                description: "Ancient people measured length based on their own bodies. Foot, cubit, and finger are typical examples.",
                foot: "Foot: Based on the length of an adult male's foot",
                cubit: "Cubit: From the elbow to the tip of the middle finger",
                span: "Span: The distance between the tip of the thumb and little finger when stretched"
            },
            meter1793: {
                title: "Birth of the Meter",
                description: "During the French Revolution, the meter was defined based on the Earth's meridian. 1 meter was set as 1/40,000,000 of the Earth's meridian.",
                fact: "Fun Fact: The first meter standard was made of platinum-iridium alloy."
            },
            modern1960: {
                title: "Modern Definition",
                description: "The meter was redefined based on the spectrum of krypton-86. In 1983, it was redefined based on the speed of light.",
                formula: "Current Definition: 1 meter = the distance light travels in vacuum in 1/299,792,458 seconds"
            }
        },
        
        // Weight unit history
        weightHistory: {
            title: "History of Weight Units",
            ancient: {
                title: "Grain-based Measurement",
                description: "Ancient people measured weight based on grains. Wheat and barley grains were used as basic units.",
                grain: "Grain: Weight of one barley grain",
                dram: "Dram: 16 grains",
                ounce: "Ounce: 437.5 grains"
            },
            kg1795: {
                title: "Birth of the Kilogram",
                description: "In France, the kilogram was defined based on the weight of 1 liter of water. The first kilogram standard was made of platinum.",
                fact: "Fun Fact: The first kilogram standard was called 'Le Grand K'."
            },
            modern2019: {
                title: "Modern Definition",
                description: "The kilogram was redefined based on Planck's constant. Now we can measure weight accurately based on physical constants.",
                formula: "Current Definition: 1 kilogram = the mass when Planck's constant h is defined as 6.62607015×10⁻³⁴ J⋅s"
            }
        },
        
        // 온도 단위 역사
        temperatureHistory: {
            title: "History of Temperature Units",
            fahrenheit1701: {
                title: "Birth of Fahrenheit",
                description: "Daniel Gabriel Fahrenheit invented the Fahrenheit thermometer in Germany.",
                zero: "0°F: Temperature of a mixture of ice, salt, and ammonia",
                freeze: "32°F: Freezing point of water",
                boil: "212°F: Boiling point of water"
            },
            celsius1742: {
                title: "Birth of Celsius",
                description: "Anders Celsius of Sweden invented the Celsius thermometer.",
                fact: "Fun Fact: Initially, the boiling point of water was defined as 0°C and the freezing point as 100°C."
            },
            kelvin1848: {
                title: "Birth of Kelvin",
                description: "William Thomson (Lord Kelvin) of the United Kingdom proposed the absolute temperature unit, Kelvin.",
                formula: "Current Definition: 1K = 1/273.16 of the thermodynamic temperature of the triple point of water"
            }
        },
        
        // Volume unit history
        volumeHistory: {
            title: "History of Volume Units",
            ancient: {
                title: "Measurement based on everyday items",
                description: "Ancient people measured volume based on the containers they used in daily life.",
                cup: "Cup: The volume of a typical drinking cup",
                gallon: "Gallon: 8 pints",
                barrel: "Barrel: A container for wine or beer"
            },
            liter1793: {
                title: "Birth of the Liter",
                description: "In France, 1 cubic decimeter (1dm³) was defined as 1 liter.",
                fact: "Fun Fact: The word liter comes from the Greek word 'λίτρα' (litra)."
            },
            modern1964: {
                title: "Modern Definition",
                description: "1 liter was defined as exactly 1 cubic decimeter (1dm³).",
                formula: "Current Definition: 1L = 1dm³ = 1000cm³"
            }
        },
        
        // SI unit system history
        siHistory: {
            title: "History of the International System of Units (SI)",
            convention1875: {
                title: "Metre Convention Signed",
                description: "17 countries signed the Metre Convention, establishing international standards for measurement.",
                fact: "Fun Fact: Korea joined the Metre Convention in 1959."
            },
            si1960: {
                title: "Establishment of the SI Unit System",
                description: "The General Conference on Weights and Measures (CGPM) officially adopted the International System of Units (SI).",
                basic: "7 basic units: meter, kilogram, second, ampere, kelvin, mole, candela",
                supplementary: "2 supplementary units: radian, steradian"
            },
            current: {
                title: "Continuous Development",
                description: "All SI units have been redefined based on physical constants, greatly improving jejich accuracy.",
                formula: "Current 7 basic units: meter (m), kilogram (kg), second (s), ampere (A), kelvin (K), mole (mol), candela (cd)"
            }
        },
        
        // Fun unit stories
        funFacts: {
            title: "Fun Unit Stories",
            elephant: {
                title: "🐘 Elephant Unit",
                description: "In the United States, the weight of large objects is sometimes expressed in 'elephants'. 1 elephant = about 6 tons"
            },
            football: {
                title: "🏈 Football Field Unit",
                description: "In the United States, distance is sometimes expressed in 'football fields'. 1 football field = 100 yards (about 91.44m)"
            },
            pizza: {
                title: "🍕 Pizza Unit",
                description: "In Italy, area is sometimes expressed in 'pizzas'. 1 pizza = about 0.5m²"
            },
            car: {
                title: "🚗 Car Unit",
                description: "Parking lot area is expressed in 'cars'. 1 car = about 15m²"
            }
        },
        labels: {
            fact: 'Fun Fact:',
            formula: 'Current Definition:'
        },
        noResults: "No results found.",
        category: "Category",
        unit: "Unit",
        information: "Information",
        justNow: "Just now",
        minutesAgo: " minutes ago",
        hoursAgo: " hours ago",
        locale: "en-US"
    }
};

// 전역 변수로 할당
window.en = en;
