// id 하나만 있다 → getElementById
// class, 태그, 구조, 속성까지 복잡하다 → querySelector
// 여러 개 가져와서 forEach 돌려야 한다 → querySelectorAll

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
    }
});
