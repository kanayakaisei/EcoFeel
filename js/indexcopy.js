document.addEventListener("DOMContentLoaded", () => {
    const number = document.querySelector(".number");
    const percent = document.getElementById("percent");
    const backImg = document.querySelector(".backImg");
    const modalB = document.querySelector("#modalB");
    const modalC = document.querySelector("#modalC");
    const closeBtn = document.querySelectorAll(".close");
    let count = 0;
    let total;
    modalB.style.display = "none";
    modalC.style.display = "none";

    // const duration = 1000;
    // const url = "https://click.ecc.ac.jp/ecc/kkanaya/EcoFeel/data/select.php";
    let flg = true;

    // setInterval(() => {
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(json => {
    //             // console.log(Object.keys(json));
    //             total = Object.keys(json).length;
    //             // console.log(Object.keys(json));
    //             if (total == undefined) {
    //                 // console.log("no data");
    //                 total = 0;
    //             }
    //             if (total <= 1) {
    //                 console.log(total, "0%");
    //                 //初期画面
    //             }
    //             else if (total == 2) {
    //                 console.log(total, "50%");
    //                 //50%の画面
    //                 if (flg) {
    //                     backImg.style.backgroundImage = "url(img/backImgB.png)";
    //                     number.textContent = "50";
    //                     number.appendChild(percent);
    //                     modalB.style.display = "flex";
    //                     backImg.style.transition = "background-image 3s ease";
    //                     backImg.style.backgroundImageSize = "contain"
    //                 }
    //             }
    //             else if (total >= 4) {
    //                 console.log(total, "100%");
    //                 //100%の画面
    //             }

    //         })
    //         .catch(error => {
    //             console.log("error", error);
    //         })

    // }, duration);

    total = 4;

    if (total == undefined) {
        // console.log("no data");
        total = 0;
    }

    if (total <= 1) {
        console.log(total, "0%");
        //初期画面
        backImg.style.backgroundImage = "url(img/backImgA.png)";
        number.textContent = "1";
        number.appendChild(percent);
        backImg.style.transition = "background-image 3s ease";
        backImg.style.backgroundImageSize = "contain"

    }
    else if (total == 2) {
        console.log(total, "50%");
        //50%の画面
        if (flg) {
            backImg.style.backgroundImage = "url(img/backImgB.png)";
            number.textContent = "50";
            number.appendChild(percent);
            modalB.style.display = "flex";
            backImg.style.transition = "background-image 3s ease";
            backImg.style.backgroundImageSize = "contain"
        }
    }
    else if (total >= 4) {
        console.log(total, "100%");
        //100%の画面
        backImg.style.backgroundImage = "url(img/backImgC.png)";
        number.textContent = "100";
        number.appendChild(percent);
        modalC.style.display = "flex";
        backImg.style.transition = "background-image 3s ease";
        backImg.style.backgroundImageSize = "contain"

    }

    function updateCount() {
        // count++;
        // console.log("クリック回数:", count);
        // if (count === 3) {
        // backImg.style.backgroundImage = "url(../img/backImgB.png)";
        // number.textContent = "50";
        // number.appendChild(percent);
        // modalB.style.display = "flex";
        // backImg.style.transition = "background-image 3s ease";
        // }
        // else if (count === 6) {
        //     backImg.style.backgroundImage = "url(../img/backImgC.png)";
        //     number.textContent = "100";
        //     number.appendChild(percent);
        //     modalC.style.display = "flex";
        //     backImg.style.transition = "background-image 3s ease";
        // }
    }

    // クリックでカウント増加
    // document.body.addEventListener("click", updateCount);

    closeBtn.forEach(button => {
        button.addEventListener("click", () => {
            console.log("aaa");
            modalB.style.display = "none";
            modalC.style.display = "none";
            flg = false;
        });
    });
});







// var baseURI = 'http://click.ecc.ac.jp/ecc/kkanaya/EcoFeel/';
// var sendFile = 'data.php';
// var apiURI = baseURI + sendFile;

// var jsonData = {
//     id: runtimeValues.id + 1,
//     num: runtimeValues.num
// };

// ajax({
//     url: apiURI,
//     type: 'POST',
//     data: { sendData: JSON.stringify(jsonData) },
//     //contentType : "application/json",
//     //dataType : "json",
//     timeout: 3000,
//     success: function () {
//         log('ajax success');
//         return {
//             resultType: "continue"
//         }
//     },
//     error: function () {
//         log('ajax error');
//         return {
//             resultType: "pause"
//         }
//     }
// });

















