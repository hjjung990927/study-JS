// button 태그로 이벤트 활용
// const button = document.getElementById("get-posts");

// button.addEventListener("click", (e) => {
//     postService.getPosts(postLayout.showPosts, 1);
// });

// input 태그로 이벤트 활용
const input = document.getElementById("page");

input.addEventListener("keydown", (e) => {
    if ((e.Key = "Enter")) {
        postService.getPosts(postLayout.showPosts, e.target.value);
    }
});
