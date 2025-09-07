const button = document.querySelector("input[type=button]");
const inputText = document.getElementById("input");
const texts = document.querySelectorAll("tbody tr");

button.addEventListener("click", (e) => {
    let checkFind = false;

    texts.forEach((text) => {
        const checkText = text.querySelector("td:first-child");
        checkText.textContent = checkText.textContent.replace("★", "");
        // replace()는 문자열에서 특정 부분을 다른 문자열로 대체할 때 사용한다.
        // replace("찾을 문자열", "바꿀 문자열")
        text.style.background = "";
        // 초기화 부분

        if (checkText.textContent.trim() === inputText.value.trim()) {
            // trim()을 사용하지 않으면 공백도 문자열로 포함해 인식한다.
            checkText.textContent = "★" + checkText.textContent;
            text.style.background = "red";
            checkFind = true;
        }
    });

    if (!checkFind) {
        alert("다시 시도해주세요.");
        inputText.value = "";
    }
});

// const button = document.querySelector("input[type=button]");
// const input = document.querySelector("#input");
// const trList = document.querySelectorAll("tbody tr");
// let tempTr = null;
// let tempText = null;

// button.addEventListener("click", (e) => {
//     let check = false;

//     if (tempTr) {
//         tempTr.style.background = "#fff";
//         tempTr.firstElementChild.innerText = tempText;
//     }

//     trList.forEach((tr) => {
//         const td = tr.firstElementChild;

//         if (td.innerText === input.value) {
//             check = true;

//             tempTr = tr;
//             tempText = td.innerText;

//             tr.style.background = "#ef5350";
//             td.innerText = "★" + input.value;
//         }
//     });

//     if (!check) {
//         alert("다시 시도해주세요.");
//         input.value = "";
//     }
// });
