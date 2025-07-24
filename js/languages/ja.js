
const ja = {
    // ロゴテキスト
    logoText: "単位変換機",
    
    // メインページ
    heroTitle: "日常生活のすべての単位変換",
    heroDescription: "長さ、重さ、体積、温度など様々な単位を簡単に素早く変換できます",
    educationGuideBtn: "単位変換教育ガイド",
    
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
    historyButtonText: "単位の歴史を学ぶ",
    
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

    // Educationページ
    edu_title: "単位変換教育ガイド",
    edu_subtitle: "単位変換の原理と方法を体系的に学びましょう。",
    toc_principle: "1. 単位変換の基本原理",
    toc_length: "2. 長さ単位変換",
    toc_weight: "3. 重さ単位変換",
    toc_volume: "4. 体積単位変換",
    toc_temperature: "5. 温度単位変換",
    toc_area: "6. 面積単位変換",
    toc_speed: "7. 速度単位変換",
    toc_practice: "8. 演習問題",

    section_principle_title: "1. 単位変換の基本原理",
    principle_what_title: "単位変換とは？",
    principle_what_content: "単位変換とは、同じ物理量を異なる単位に変換するプロセスです。例えば、1メートルは100センチメートルと同じです。単位変換を通じて、様々な状況で必要な値を簡単に計算できます。",
    principle_formula_title: "基本公式",
    principle_formula: "変換係数 × 元の値 = 変換された値",
    principle_example: "例: 1m = 100cmなので、5m = 5 × 100 = 500cm",
    principle_ratio_title: "比例式の活用法",
    principle_ratio_intro: "単位変換は比例式を使用して計算できます。",
    principle_ratio_formula: "元の単位 : 変換単位 = 元の値 : 変換値",
    principle_ratio_example: "例: 1m : 100cm = 3m : x cm",
    principle_ratio_solution: "x = (3 × 100) ÷ 1 = 300cm",

    section_length_title: "2. 長さ単位変換",
    length_metric_title: "メートル法長さ単位",
    table_unit: "単位",
    table_conversion: "換算値",
    length_km: "1 キロメートル (km)",
    length_km_to_m: "1,000 メートル (m)",
    length_m: "1 メートル (m)",
    length_m_to_cm: "100 センチメートル (cm)",
    length_cm: "1 センチメートル (cm)",
    length_cm_to_mm: "10 ミリメートル (mm)",
    example: "例:",
    length_example_question: "2.5kmをメートルに変換してください。",
    length_example_solution: "2.5km × 1,000 = 2,500m",
    length_imperial_title: "英国式/米国式長さ単位",
    length_mile: "1 マイル (mile)",
    length_mile_to_km: "1.609km",
    length_yard: "1 ヤード (yard)",
    length_yard_to_m: "0.914m",
    length_foot: "1 フィート (foot)",
    length_foot_to_m: "0.305m",
    length_inch: "1 インチ (inch)",
    length_inch_to_cm: "2.54cm",

    section_weight_title: "3. 重さ単位変換",
    weight_metric_title: "メートル法重さ単位",
    weight_ton: "1 トン (t)",
    weight_ton_to_kg: "1,000 キログラム (kg)",
    weight_kg: "1 キログラム (kg)",
    weight_kg_to_g: "1,000 グラム (g)",
    weight_g: "1 グラム (g)",
    weight_g_to_mg: "1,000 ミリグラム (mg)",
    weight_imperial_title: "英国式/米国式重さ単位",
    weight_lb: "1 ポンド (lb)",
    weight_lb_to_kg: "0.454kg",
    weight_oz: "1 オンス (oz)",
    weight_oz_to_g: "28.35g",
    weight_example_question: "5ポンドをキログラムに変換してください。",
    weight_example_solution: "5lb × 0.454 = 2.27kg",

    section_volume_title: "4. 体積単位変換",
    volume_metric_title: "メートル法体積単位",
    volume_kl: "1 キロリットル (kL)",
    volume_kl_to_l: "1,000 リットル (L)",
    volume_l: "1 リットル (L)",
    volume_l_to_ml: "1,000 ミリリットル (mL)",
    volume_ml: "1 ミリリットル (mL)",
    volume_ml_to_cm3: "1 立方センチメートル (cm³)",
    volume_cooking_title: "料理単位変換",
    volume_gal: "1 ガロン (gal)",
    volume_gal_to_l: "3.785L",
    volume_cup: "1 カップ (cup)",
    volume_cup_to_ml: "240mL",
    volume_tbsp: "1 大さじ (tbsp)",
    volume_tbsp_to_ml: "15mL",
    volume_tsp: "1 小さじ (tsp)",
    volume_tsp_to_ml: "5mL",
    volume_example_question: "2カップをミリリットルに変換してください。",
    volume_example_solution: "2cup × 240 = 480mL",

    section_temperature_title: "5. 温度単位変換",
    temperature_formula_title: "温度変換公式",
    temp_c_to_f: "摂氏 → 華氏: °F = (°C × 9/5) + 32",
    temp_f_to_c: "華氏 → 摂氏: °C = (°F - 32) × 5/9",
    temp_c_to_k: "摂氏 → ケルビン: K = °C + 273.15",
    temp_f_to_k: "華氏 → ケルビン: K = (°F - 32) × 5/9 + 273.15",
    temp_example_question: "25°Cを華氏に変換してください。",
    temp_example_solution: "°F = (25 × 9/5) + 32 = 45 + 32 = 77°F",
    temperature_special_title: "温度変換の特別な点",
    temp_absolute_zero: "絶対零度:",
    temp_absolute_zero_value: "-273.15°C = -459.67°F = 0K",
    temp_freezing: "水の凝固点:",
    temp_freezing_value: "0°C = 32°F = 273.15K",
    temp_boiling: "水の沸点:",
    temp_boiling_value: "100°C = 212°F = 373.15K",
    temp_body: "体温:",
    temp_body_value: "37°C = 98.6°F = 310.15K",

    section_area_title: "6. 面積単位変換",
    area_metric_title: "メートル法面積単位",
    area_km2: "1 平方キロメートル (km²)",
    area_km2_to_m2: "1,000,000 平方メートル (m²)",
    area_m2: "1 平方メートル (m²)",
    area_m2_to_cm2: "10,000 平方センチメートル (cm²)",
    area_ha: "1 ヘクタール (ha)",
    area_ha_to_m2: "10,000m²",
    area_korean_title: "韓国式面積単位",
    area_pyung: "1 坪",
    area_pyung_to_m2: "3.3m²",
    area_acre: "1 エーカー (acre)",
    area_acre_to_m2: "4,047m²",
    area_example_question: "30坪を平方メートルに変換してください。",
    area_example_solution: "30坪 × 3.3 = 99m²",

    section_speed_title: "7. 速度単位変換",
    speed_formula_title: "速度変換公式",
    speed_kmh_to_mph: "km/h → mph: mph = km/h × 0.621",
    speed_mph_to_kmh: "mph → km/h: km/h = mph × 1.609",
    speed_ms_to_kmh: "m/s → km/h: km/h = m/s × 3.6",
    speed_example_question: "100km/hをmphに変換してください。",
    speed_example_solution: "mph = 100 × 0.621 = 62.1mph",
    speed_life_title: "実生活速度比較",
    speed_activity: "活動",
    speed_value: "速度",
    speed_walking: "歩行",
    speed_walking_value: "5km/h",
    speed_bicycle: "自転車",
    speed_bicycle_value: "20km/h",
    speed_city: "都市速度",
    speed_city_value: "50km/h",
    speed_highway: "高速道路",
    speed_highway_value: "100km/h",

    section_practice_title: "8. 演習問題",
    practice_basic_title: "基本問題",
    practice_1: "1.",
    practice_1_question: "2.5kmをメートルに変換してください。",
    show_answer: "答えを見る",
    hide_answer: "答えを隠す",
    answer: "答え:",
    practice_1_answer: "2,500m",
    solution: "解答:",
    practice_1_solution: "2.5km × 1,000 = 2,500m",
    practice_2: "2.",
    practice_2_question: "3ポンドをキログラムに変換してください。",
    practice_2_answer: "1.36kg",
    practice_2_solution: "3lb × 0.454 = 1.36kg",
    practice_3: "3.",
    practice_3_question: "25°Cを華氏に変換してください。",
    practice_3_answer: "77°F",
    practice_3_solution: "(25 × 9/5) + 32 = 45 + 32 = 77°F",
    practice_intermediate_title: "中級問題",
    practice_4: "4.",
    practice_4_question: "30坪を平方メートルに変換してください。",
    practice_4_answer: "99m²",
    practice_4_solution: "30坪 × 3.3 = 99m²",
    practice_5: "5.",
    practice_5_question: "100km/hをmphに変換してください。",
    practice_5_answer: "62.1mph",
    practice_5_solution: "100 × 0.621 = 62.1mph",
    
    // FAQページ
    faqTitle: "よくある質問 (FAQ)",
    faqDescription: "単位変換機の使い方とよくある質問を確認してください",
    
    // FAQカテゴリ
    faqUsage: "📖 使い方ガイド",
    faqAccuracy: "🎯 精度とコツ",
    faqLifestyle: "💡 日常生活での活用",
    faqTechnical: "🔧 技術的な質問",
    faqTroubleshooting: "⚠️ トラブルシューティング",
    
    // FAQ内容
    faqHowToUse: "単位変換機はどのように使用しますか？",
    faqHowToUseAnswer1: "1. 希望するカテゴリ（長さ、重さ、体積など）を選択します。",
    faqHowToUseAnswer2: "2. 変換したい値を入力します。",
    faqHowToUseAnswer3: "3. 変換する単位を選択します。",
    faqHowToUseAnswer4: "4. リアルタイムで変換結果が表示されます。",
    
    faqSearch: "検索機能はどのように使用しますか？",
    faqSearchAnswer1: "• 上部の検索ボックスに単位名（例：「グラム」、「オンス」）またはカテゴリ名（例：「長さ」、「重さ」）を入力してください。",
    faqSearchAnswer2: "• 矢印キー（↑↓）で検索結果を選択できます。",
    faqSearchAnswer3: "• Enterキーで選択した項目に移動します。",
    
    faqShortcuts: "キーボードショートカットは何がありますか？",
    faqShortcutsAnswer1: "Ctrl + K: 検索ボックスにフォーカス",
    faqShortcutsAnswer2: "Ctrl + Enter: 変換実行",
    faqShortcutsAnswer3: "Ctrl + S: 単位交換",
    faqShortcutsAnswer4: "Escape: 検索結果を隠す",
    
    faqAccuracy: "変換結果の精度はどの程度ですか？",
    faqAccuracyAnswer1: "• すべての変換係数は国際標準に基づいています。",
    faqAccuracyAnswer2: "• 小数点6桁まで正確な計算を提供します。",
    faqAccuracyAnswer3: "• 温度変換は物理的限界（絶対零度）を考慮します。",
    faqAccuracyAnswer4: "• 大きな数字は千単位区切りと科学的表記を使用します。",
    
    faqTemperature: "温度変換時の注意事項は何ですか？",
    faqTemperatureAnswer1: "• 絶対零度（-273.15°C、-459.67°F、0K）以下の温度は入力できません。",
    faqTemperatureAnswer2: "• 温度は負の値も許可されます。",
    faqTemperatureAnswer3: "• ケルビン（K）は常に正の値のみ可能です。",
    
    faqLargeNumbers: "大きな数字が「1.057856e+8」と表示される理由は？",
    faqLargeNumbersAnswer1: "• 10億（1,000,000,000）以上の数字は可読性のために科学的表記を使用します。",
    faqLargeNumbersAnswer2: "• 10万以上の数字は千単位区切り（,）を追加します。",
    faqLargeNumbersAnswer3: "• これは数字の大きさに応じて自動的に適用されます。",
    
    faqCooking: "料理時に使用する単位は？",
    faqCookingAnswer1: "重さ: グラム（g）↔ オンス（oz）、キログラム（kg）↔ ポンド（lb）",
    faqCookingAnswer2: "体積: ミリリットル（ml）↔ 液量オンス（fl oz）、リットル（L）↔ ガロン（gal）",
    faqCookingAnswer3: "容量: カップ ↔ ミリリットル（ml）、大さじ（tbsp）↔ ミリリットル（ml）",
    
    faqShopping: "海外通販に役立つ単位は？",
    faqShoppingAnswer1: "長さ: センチメートル（cm）↔ インチ、メートル（m）↔ フィート（ft）",
    faqShoppingAnswer2: "重さ: グラム（g）↔ オンス（oz）、キログラム（kg）↔ ポンド（lb）",
    faqShoppingAnswer3: "面積: 平方メートル（m²）↔ 坪、平方フィート（ft²）",
    
    faqExercise: "運動時に使用する単位は？",
    faqExerciseAnswer1: "重さ: キログラム（kg）↔ ポンド（lb）- 運動器具の重さ",
    faqExerciseAnswer2: "距離: キロメートル（km）↔ マイル - ランニング距離",
    faqExerciseAnswer3: "速度: キロメートル/時（km/h）↔ マイル/時（mph）- 運動速度",
    
    faqOffline: "オフラインでも使用できますか？",
    faqOfflineAnswer1: "• はい、PWA（Progressive Web App）機能をサポートしています。",
    faqOfflineAnswer2: "• ブラウザで「ホーム画面に追加」を通じてアプリのようにインストールできます。",
    faqOfflineAnswer3: "• 一度訪問した後はオフラインでも基本機能を使用できます。",
    
    faqPrivacy: "個人情報はどのように保護されますか？",
    faqPrivacyAnswer1: "• すべての計算はブラウザでのみ処理されます。",
    faqPrivacyAnswer2: "• サーバーに個人情報を送信しません。",
    faqPrivacyAnswer3: "• 変換履歴はローカルストレージにのみ保存されます。",
    faqPrivacyAnswer4: "• 外部サービスとの連携なしに独立して動作します。",
    
    faqMobile: "モバイルでもよく動作しますか？",
    faqMobileAnswer1: "• はい、すべてのモバイルデバイスで最適化されています。",
    faqMobileAnswer2: "• タッチインターフェースに最適化されたUIを提供します。",
    faqMobileAnswer3: "• レスポンシブデザインで画面サイズに自動調整されます。",
    faqMobileAnswer4: "• モバイルブラウザでもすべての機能を使用できます。",
    
    faqNotWorking: "変換が動作しない時はどうすればよいですか？",
    faqNotWorkingAnswer1: "• 正しい数字を入力したか確認してください。",
    faqNotWorkingAnswer2: "• 負の入力が許可されていない単位かどうか確認してください。",
    faqNotWorkingAnswer3: "• 温度変換時は絶対零度以下の値は入力できません。",
    faqNotWorkingAnswer4: "• ブラウザをリフレッシュしてみてください。",
    
    faqNoSearch: "検索結果が表示されない時は？",
    faqNoSearchAnswer1: "• 検索語を2文字以上入力してください。",
    faqNoSearchAnswer2: "• 単位名やカテゴリ名を正確に入力してください。",
    faqNoSearchAnswer3: "• 例：「グラム」、「オンス」、「長さ」、「重さ」など",
    faqNoSearchAnswer4: "• ブラウザキャッシュをクリアしてみてください。",
    
    faqSlowLoading: "ページが遅く読み込まれる時は？",
    faqSlowLoadingAnswer1: "• インターネット接続状態を確認してください。",
    faqSlowLoadingAnswer2: "• ブラウザキャッシュをクリアしてみてください。",
    faqSlowLoadingAnswer3: "• 別のブラウザで試してみてください。",
    faqSlowLoadingAnswer4: "• モバイルではWi-Fi接続を推奨します。",
    
    // プライバシーポリシー
    privacyTitle: "プライバシーポリシー",
    privacyIntro: "<strong>単位変換機</strong>（以下「サイト」）は利用者の個人情報を大切に考え、以下のように最小限の個人情報のみを安全に処理します。",
    privacySection1: "1. 収集する個人情報項目",
    privacySection1Item1: "本サイトは別途の会員登録なしで自由にご利用いただけます。",
    privacySection1Item2: "サービス改善のための<strong>クッキー、訪問記録、ブラウザ情報</strong>などの非識別情報のみを収集する場合があります。",
    privacySection2: "2. 個人情報の利用目的",
    privacySection2Item1: "サービス品質向上及び統計分析",
    privacySection2Item2: "利用者お問い合わせ対応",
    privacySection3: "3. 個人情報の保管及び廃棄",
    privacySection3Item1: "収集された情報は目的達成後即座に廃棄するか、法令に従って安全に保管します。",
    privacySection4: "4. 第三者提供",
    privacySection4Item1: "本サイトは利用者の個人情報を外部に提供しません。",
    privacySection5: "5. 利用者の権利",
    privacySection5Item1: "いつでも個人情報の閲覧、訂正、削除を請求できます。",
    privacySection6: "6. ポリシー変更案内",
    privacySection6Item1: "本方針は法令及びサービス変更に伴い事前告知後修正される場合があります。",
    privacyLastUpdate: "最終更新: 2025-07-01",
    
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
    
    // Tip-rowデータ
    cupLabel: "1カップ (cup)",
    cupValue: "= 240ml",
    tbspLabel: "1大さじ (tbsp)",
    tbspValue: "= 15ml",
    tspLabel: "1小さじ (tsp)",
    tspValue: "= 5ml",
    ozLabel: "1オンス (oz)",
    ozValue: "= 28.35g",
    lbLabel: "1ポンド (lb)",
    lbValue: "= 453.59g",
    
    // 小麦粉変換データ
    allPurposeLabel: "薄力粉 (all-purpose)",
    allPurposeValue: "= 125g",
    breadLabel: "強力粉 (bread)",
    breadValue: "= 130g",
    cakeLabel: "薄力粉 (cake)",
    cakeValue: "= 115g",
    
    // 服のサイズデータ
    koreaS: "S (88-90)",
    koreaM: "M (91-93)",
    koreaL: "L (94-96)",
    koreaXL: "XL (97-99)",
    usS: "S (34-36)",
    usM: "M (38-40)",
    usL: "L (42-44)",
    usXL: "XL (46-48)",
    
    // 靴のサイズデータ
    koreaShoe240: "240mm",
    koreaShoe250: "250mm",
    koreaShoe260: "260mm",
    koreaShoe270: "270mm",
    usShoe7: "US 7",
    usShoe8: "US 8",
    usShoe9: "US 9",
    usShoe10: "US 10",
    
    // 重さ変換データ
    kgLabel: "1kg",
    kgValue: "= 2.2lb",
    lbLabel2: "1lb",
    lbValue2: "= 0.45kg",
    
    // 距離変換データ
    kmLabel: "1km",
    kmValue: "= 0.62mile",
    mileLabel: "1mile",
    mileValue: "= 1.61km",
    
    // 温度変換データ
    celsiusLabel: "20°C",
    celsiusValue: "= 68°F",
    fahrenheitLabel: "68°F",
    fahrenheitValue: "= 20°C",
    
    // 速度変換データ
    kmhLabel: "60km/h",
    kmhValue: "= 37mph",
    mphLabel: "60mph",
    mphValue: "= 97km/h",
    
    // 面積変換データ
    pyeongLabel: "1坪",
    pyeongValue: "= 3.3m²",
    m2Label: "1m²",
    m2Value: "= 0.3坪",
    
    // カテゴリカード例タグ
    lengthExamples: ["m ↔ cm", "km ↔ mile", "inch ↔ cm"],
    weightExamples: ["kg ↔ lb", "g ↔ oz", "mg ↔ g"],
    volumeExamples: ["L ↔ gal", "ml ↔ cup", "tbsp ↔ ml"],
    temperatureExamples: ["°C ↔ °F", "°C ↔ K", "°F ↔ K"],
    areaExamples: ["m² ↔ cm²", "acre ↔ ha", "km² ↔ m²"],
    speedExamples: ["km/h ↔ mph", "m/s ↔ km/h", "knot ↔ km/h"],
    
    // 単位歴史ページ
    history: {
        title: "📚 単位の歴史",
        description: "人類が使用してきた様々な測定単位の興味深い歴史を学びましょう",
        
        // 日付テキスト
        dates: {
            ancient: "古代",
            year1793: "1793年",
            year1795: "1795年",
            year1701: "1701年",
            year1742: "1742年",
            year1848: "1848年",
            year1875: "1875年",
            year1960: "1960年",
            year1964: "1964年",
            year2019: "2019年",
            current: "現在"
        },
        
        // 長さ単位の歴史
        lengthHistory: {
            title: "長さ単位の歴史",
            ancient: {
                title: "人体を基準とした測定",
                description: "古代人は自分の体を基準として長さを測定していました。フィート（足）、キュービット（肘）、フィンガー（指）などが代表的な例です。",
                foot: "フィート（Foot）: 成人男性の足の長さを基準",
                cubit: "キュービット（Cubit）: 肘から指先までの長さ",
                span: "スパン（Span）: 親指と小指を広げた長さ"
            },
            meter1793: {
                title: "メートルの誕生",
                description: "フランス革命当時、地球の子午線の長さを基準としてメートルが定義されました。地球子午線の1/40,000,000を1メートルとしました。",
                fact: "興味深い事実: 最初のメートル標準は白金-イリジウム合金で作られました。"
            },
            modern1960: {
                title: "現代的定義",
                description: "クリプトン-86原子の放出スペクトラムを基準としてメートルが再定義されました。その後1983年には光の速度を基準とする定義に変更されました。",
                formula: "現在の定義: 1メートル = 光が真空中で1/299,792,458秒間に進む距離"
            }
        },
        
        // 重量単位の歴史
        weightHistory: {
            title: "重量単位の歴史",
            ancient: {
                title: "穀物を基準とした測定",
                description: "古代人は穀物の重さを基準として重量を測定していました。麦粒、大麦粒などが基本単位として使用されました。",
                grain: "グレイン（Grain）: 大麦一粒の重さ",
                dram: "ドラム（Dram）: 16グレイン",
                ounce: "オンス（Ounce）: 437.5グレイン"
            },
            kg1795: {
                title: "キログラムの誕生",
                description: "フランスで1リットルの水の重さを基準としてキログラムが定義されました。最初のキログラム標準は白金で作られました。",
                fact: "興味深い事実: 最初のキログラム標準は'Le Grand K'と呼ばれていました。"
            },
            modern2019: {
                title: "現代的定義",
                description: "プランク定数を基準としてキログラムが再定義されました。現在は物理定数を基準として正確な重量を測定できます。",
                formula: "現在の定義: 1キログラム = プランク定数hを6.62607015×10⁻³⁴ J⋅sと定義したときの質量"
            }
        },
        
        // 温度単位の歴史
        temperatureHistory: {
            title: "温度単位の歴史",
            fahrenheit1701: {
                title: "ファーレンハイト温度の誕生",
                description: "ドイツのダニエル・ガブリエル・ファーレンハイト（Daniel Gabriel Fahrenheit）が華氏温度計を発明しました。",
                zero: "0°F: 氷、塩、アンモニアの混合物の温度",
                freeze: "32°F: 水の凍結点",
                boil: "212°F: 水の沸点"
            },
            celsius1742: {
                title: "セルシウス温度の誕生",
                description: "スウェーデンのアンダーシュ・セルシウス（Anders Celsius）が摂氏温度計を発明しました。",
                fact: "興味深い事実: 初期には水の沸点を0°C、凍結点を100°Cと定義していました。"
            },
            kelvin1848: {
                title: "ケルビン温度の誕生",
                description: "イギリスのウィリアム・トムソン（ケルビン卿）が絶対温度単位であるケルビンを提案しました。",
                formula: "現在の定義: 1K = 水の三重点温度の1/273.16"
            }
        },
        
        // 体積単位の歴史
        volumeHistory: {
            title: "体積単位の歴史",
            ancient: {
                title: "日用品を基準とした測定",
                description: "古代人は日常で使用する容器を基準として体積を測定していました。",
                cup: "カップ（Cup）: 一般的な飲み物用カップの体積",
                gallon: "ガロン（Gallon）: 8パイント",
                barrel: "バレル（Barrel）: ワインやビールを入れる樽"
            },
            liter1793: {
                title: "リットルの誕生",
                description: "フランスで1立方デシメートル（1dm³）を1リットルと定義しました。",
                fact: "興味深い事実: リットルはギリシア語の'λίτρα'（litra）に由来しています。"
            },
            modern1964: {
                title: "現代的定義",
                description: "1リットルは正確に1立方デシメートル（1dm³）と定義されました。",
                formula: "現在の定義: 1L = 1dm³ = 1000cm³"
            }
        },
        
        // SI単位系の歴史
        siHistory: {
            title: "国際単位系（SI）の歴史",
            convention1875: {
                title: "メートル条約締結",
                description: "17カ国がメートル条約に署名し、国際的な測定基準を確立しました。",
                fact: "豆知識: 韓国は1959年にメートル条約に加盟しました。"
            },
            si1960: {
                title: "SI単位系の確立",
                description: "国際度量衡総会（CGPM）で国際単位系（SI）が公式に採択されました。",
                basic: "7つの基本単位: メートル、キログラム、秒、アンペア、ケルビン、モル、カンデラ",
                supplementary: "2つの補助単位: ラジアン、ステラジアン"
            },
            current: {
                title: "継続的な発展",
                description: "すべてのSI単位が物理定数を基準に再定義され、精度が大幅に向上しました。",
                formula: "現在の7つの基本単位: メートル(m)、キログラム(kg)、秒(s)、アンペア(A)、ケルビン(K)、モル(mol)、カンデ라(cd)"
            }
        },
        
        // 재미있는 단위 이야기
        funFacts: {
            title: "面白い単位の話",
            elephant: {
                title: "🐘 象の単位",
                description: "アメリカでは大きな物の重さを「象」単位で表現することがあります。1象 = 約6トン"
            },
            football: {
                title: "🏈 アメフト場の単位",
                description: "アメリカでは距離を「アメフト場」単位で表現します。1アメフト場 = 100ヤード（約91.44m）"
            },
            pizza: {
                title: "🍕 ピザの単位",
                description: "イタリアでは面積を「ピザ」単位で表現することがあります。1ピザ = 約0.5m²"
            },
            car: {
                title: "🚗 車の単位",
                description: "駐車場の面積を「車」単位で表現します。1車 = 約15m²"
            }
        },
        labels: {
            fact: '豆知識:',
            formula: '現在の定義:'
        },
        noResults: "検索結果がありません。",
        category: "カテゴリ",
        unit: "単位",
        information: "情報",
        justNow: "たった今",
        minutesAgo: "分前",
        hoursAgo: "時間前",
        locale: "ja-JP",
        
        // フッター関連テキスト
        footerTitle: "単位変換ツール",
        footerDescription: "正確で高速な単位変換をサポートします。",
        footerUsefulLinks: "便利なリンク",
        footerTipsLink: "変換のコツ",
        footerPrivacyLink: "プライバシーポリシー",
        footerSupportedUnits: "対応単位",
        footerCopyright: "© 2025 単位変換ツール. All rights reserved."
    }
};

// 전역 변수로 할당
window.ja = ja;
