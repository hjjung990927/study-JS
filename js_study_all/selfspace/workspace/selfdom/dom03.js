const button = document.querySelector("input[type=button]");
const inputText = document.getElementById("menuInput");
const texts = document.querySelectorAll("tbody tr");

button.addEventListener("click", (e) => {
    let found = false;
    texts.forEach((text) => {
        const checkPrice = text.querySelector("td:nth-child(2)");
        const checkText = text.querySelector("td:first-child");
        checkText.textContent = checkText.textContent.replace("◆", "");
        text.style.background = "";
        if (checkText.textContent.trim() === inputText.value.trim()) {
            checkText.textContent = "◆" + checkText.textContent;
            text.style.background = "yellow";
            alert(
                `${inputText.value.trim()}은(는) ${
                    checkPrice.textContent
                }입니다.`
            );
            // alert(
            //     inputText.value.trim() +
            //         "은(는) " +
            //         checkPrice.textContent +
            //         "입니다."
            // );
            found = true;
        }
    });

    if (!found) {
        alert("다시 실행");
    }
});
