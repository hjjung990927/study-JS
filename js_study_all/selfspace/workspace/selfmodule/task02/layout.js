// const todoLayout = (() => {
//     const showTodos = (todos) => {
//         const table = document.getElementById("todo-wrap");
//         let text = ``;

//         todos.forEach(({ userId, title, completed }) => {
//             if (completed === true) {
//                 text += `
//                     <tr class="post tr">
//                         <td>${userId}</td>
//                         <td style="color: green;">${title}</td>
//                     </tr>`;
//             } else {
//                 text += `
//                     <tr class="post tr">
//                         <td>${userId}</td>
//                         <td style="color: red;">${title}</td>
//                     </tr>`;
//             }
//         });
//         table.innerHTML = text;
//     };

//     return { showTodos: showTodos };
// })();
const todoLayout = (() => {
    const showList = (todos) => {
        const table = document.querySelector("table.todos");
        let text = ``;

        todos.forEach(({ userId, title, completed }) => {
            text += `
                <tr ${completed && "class=on"}>
                    <td>${completed ? "완료" : "미완료"}</td>
                    <td>${userId}</td>
                    <td>${title}</td>
                </tr>`;
        });
        table.innerHTML = text;
    };
    return { showList: showList };
})();
