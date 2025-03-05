const monthElement = document.querySelector(".month p");
const backBtn = document.querySelector("#backBtn");
const nextBtn = document.querySelector("#nextBtn");
const calendar = document.querySelector(".calendar");

let monthText = 1; // 現在の月

// ゴミの種類を曜日ごとに設定
const garbageSchedule = {
    1: { img: "img/heating.png", text: "もえるごみ" }, // 月曜日
    3: { img: "img/bottle.png", text: "ペットボトル" }, // 水曜日
    5: { img: "img/bulky.png", text: "粗大ごみ" }, // 金曜日
    7: { img: "img/noneHeating.png", text: "もえないごみ" } // 日曜日
};

// 月の日数
const daysInMonth = (month, year) => new Date(year, month, 0).getDate();

// 月の更新処理
function updateCalendar() {
    monthElement.textContent = monthText + "月";
    calendar.innerHTML = ""; // カレンダーをリセット

    const today = new Date();
    const year = today.getFullYear();
    const firstDay = new Date(year, monthText - 1, 1).getDay(); // 1日の曜日

    console.log(`月: ${monthText}, 1日の曜日: ${firstDay}`); // デバッグ用

    const totalDays = daysInMonth(monthText, year);

    // 空白（前月の残り）を追加
    for (let i = 0; i < firstDay; i++) {
        calendar.innerHTML += `<div class="day"></div>`;
    }

    // 日付とゴミの種類を追加
    for (let day = 1; day <= totalDays; day++) {
        const weekDay = (firstDay + day - 1) % 7 + 1; // 曜日（1=月曜, 7=日曜）
        let garbageHTML = "";

        // ゴミの種類が設定されている曜日に追加
        if (garbageSchedule[weekDay]) {
            garbageHTML = `
                <img class="calendarImg" src="${garbageSchedule[weekDay].img}" alt="${garbageSchedule[weekDay].text}">
                <span class="calendarText">${garbageSchedule[weekDay].text}</span>
            `;
        }

        calendar.innerHTML += `<p>${day}${garbageHTML}</p>`;
    }
}

nextBtn.addEventListener("click", () => {
    monthText = monthText === 12 ? 1 : monthText + 1;
    updateCalendar();
});

backBtn.addEventListener("click", () => {
    monthText = monthText === 1 ? 12 : monthText - 1;
    updateCalendar();
});

// 初期カレンダー表示
updateCalendar();
