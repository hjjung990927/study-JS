const todoLayout = (() => {
    const showList = (todos) => {
        const table = document.getElementById("todo-wrap");
        let text = ``;

        todos.forEach(({ userId, title, completed }) => {
            if (completed === true) {
                text += `
                    <tr class="post tr" style="color: green;">
                        <td>완료</td>
                        <td>${userId}</td>
                        <td>${title}</td>
                    </tr>`;
            } else {
                text += `
                    <tr class="post tr" style="color: red;">
                        <td>미완료</td>
                        <td>${userId}</td>
                        <td>${title}</td>
                    </tr>`;
            }
        });
        table.innerHTML = text;
    };

    return { showList: showList };
})();

// const todoLayOut = (() => {
//     const showList = (todos) => {
//         const table = document.querySelector("table.todos");
//         let text = ``;

//         todos.forEach(({ userId, title, completed }) => {
//             text += `
//                 <tr ${completed && "class=on"}>
//                     <td>${completed ? "완료" : "미완료"}</td>
//                     <td>${userId}</td>
//                     <td>${title}</td>
//                 </tr>
//             `;
//         });

//         table.innerHTML = text;
//     };

//     return { showList: showList };
// })();
