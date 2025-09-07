// const inputText = document.getElementById("get-todos");

// inputText.addEventListener("keyup", (e) => {
//     todoService.getTodos(todoLayout.showTodos, e.target.value);
// });

// 미완료 버튼 클릭 시 완료로 변경되고 더 이상 해당 코드는 실행되지 않는다.
const button = document.getElementById("get-todos");

button.addEventListener("click", async (e) => {
    NodeList.prototype.filter = Array.prototype.filter;

    await todoService.getList(todoLayout.showList);

    const todos = document.querySelectorAll("tr");

    todos.forEach((todo) => {
        const td = todo.firstElementChild;
        if (td.innerHTML === "미완료") {
            td.style.cursor = "pointer";
        }
        td.addEventListener("click", (e) => {
            if (e.target.innerText === "미완료") {
                td.parentElement.classList.add("on");
                td.innerText = "완료";
                td.style.cursor = "unset";
            }
        });
    });
});
