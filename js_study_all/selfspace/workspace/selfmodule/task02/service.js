// const todoService = (() => {
//     const getTodos = async (callback, page = 1) => {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/todos"
//         );
//         const todos = await response.json();

//         const rowSize = 20;
//         const end = page * rowSize;
//         const start = end - rowSize + 1;

//         if (callback) {
//             callback(todos.slice(start - 1, end));
//         }
//     };

//     return { getTodos: getTodos };
// })();
const todoService = (() => {
    const getList = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );
        const todos = await response.json();

        if (callback) {
            callback(todos.slice(0, 20));
        }
    };
    return { getList: getList };
})();
