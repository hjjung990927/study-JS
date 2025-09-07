// button 태그로 이벤트 활용
// const button = document.getElementById("get-posts");

// button.addEventListener("click", (e) => {
//     postService.getPosts(postLayout.showPosts, 1);
// });

// 버튼 누를 때마다 10개씩 출력
// const buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         postService.getPosts(postLayout.showPosts, e.target.innerText);
//     });
// });

// input 태그 (입력 후 바로 출력)으로 이벤트 활용
// const input = document.getElementById("page");

// input.addEventListener("keyup", (e) => {
//     postService.getPosts(postLayout.showPosts, e.target.value);
//     e.target.value = "";
// });

// input 태그 (enter키 입력)으로 이벤트 활용
const input = document.getElementById("page");

input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        postService.getPosts(postLayout.showPosts, e.target.value);
        e.target.value = "";
    }
});
