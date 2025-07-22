
const ja = {
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
        information: "情報",
        justNow: "たった今",
        minutesAgo: "分前",
        hoursAgo: "時間前",
        locale: "ja-JP"
    }
};

// 전역 변수로 할당
window.ja = ja;
