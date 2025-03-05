const search = document.querySelector(".search");
const btn = document.querySelector(".searchBtn");
const heating = document.querySelector("#heatingWrap");
const noneHeating = document.querySelector("#noneHeatingWrap");
const heatingRequest = heating.querySelector(".request"); // heatingWrap 内の h3 を取得
const noneHeatingRequest = noneHeating.querySelector(".request"); // noneHeatingWrap 内の h3 を取得

btn.addEventListener("click", () => {
    const query = search.value.trim(); // 入力値を取得し、前後の空白を削除

    const heatingText = ["紙", "牛乳パック", "衣類", "布", "草", "雑草", "小枝", "生ごみ", "靴", "かばん", "プラスチック", "お弁当の容器", "靴下", "歯ブラシ",
        "包装紙", "ダンボール", "カップ麺", "紙ナプキン", "タオル", "カイロ", "スポンジ", "手袋", "ゴム性のおもちゃ", "ガムテープ", "ブラシ"
    ];
    const noneHeatingText = ["ガラス瓶", "鍋", "フライパン", "釘", "ペットボトルキャップ", "ハンガー", "時計のバンド", "リモコン", "はさみ", "ケース", "ディスク", "傘",
        "時計", "網", "釣り竿", "ビニール", "ボトル", "かご"
    ];

    heating.style.display = "none";
    noneHeating.style.display = "none";
    heatingRequest.innerHTML = "";
    noneHeatingRequest.innerHTML = "";

    // 入力内容に応じて表示
    if (heatingText.includes(query)) {
        heating.style.display = "block";
        heatingRequest.innerHTML = query; // heatingWrap 内の request を更新
    } else if (noneHeatingText.includes(query)) {
        noneHeating.style.display = "block";
        noneHeatingRequest.innerHTML = query; // noneHeatingWrap 内の request を更新
    }
});
