// 서버에서 게시글 목록 요청하기
// 받은 게시글 중 id가 짝수인 게시글의 아이디와 제목 출력하기
// const getPosts = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const posts = await response.json();
//     posts
//         .filter((post) => post.id % 2 === 0)
//         // .forEach((post) => {
//         //     console.log(post.id, post.title);
//         // });
//         // 밑에는 비구조화 할당으로 작성된 코드
//         .forEach(({ id, title }) => {
//             console.log(id, title);
//         });
// };

// await getPosts();

// 비구조화 할당
// let { id, name, ...rest } = user;

// console.log(id, name);
// console.log(rest);

// 전달받은 댓글들 중, postId가 3인 댓글 내용 출력
// const getComment = async () => {
//     const response = await fetch(
//         "https://jsonplaceholder.typicode.com/comments"
//     );
//     const comments = await response.json();
//     comments
//         .filter((comment) => comment.postId === 3)
//         .forEach(({ postId, id, body }) => {
//             console.log(postId, id, body);
//         });
// };

// await getComment();

// 전달받은 회원들 중, zipcode만 출력
// const getUser = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     users.forEach((user) => {
//         console.log(user.id, user.address.zipcode);
//     });
// };

// await getUser();

// const getUser = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     users.forEach(({ id, address: { zipcode } }) => {
//         console.log(id, zipcode);
//     });
// };

// await getUser();

// 전달받은 댓글들 중, postId가 3인 댓글 내용 출력
// const replyService = (function () {
//     const getList = async (callback) => {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/comments"
//         );
//         const replies = await response.json();
//         return callback(replies);
//     };

//     return { getList: getList };
// })();

// const replyLayout = (function () {
//     const showList = (replies) => {
//         return replies.filter(({ postId, ...rest }) => postId === 3);
//     };

//     return { showList: showList };
// })();

// const show = async () => {
//     const replies = await replyService.getList(replyLayout.showList);
//     console.log(replies);
// };

// await show();

// 전달받은 회원들 중, zipcode만 출력
// const userService = (function () {
//     const getList = async (callback) => {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );
//         const users = await response.json();
//         callback(users);
//     };

//     return { getList: getList };
// })();

// const printZipcode = (users) => {
//     users
//         .map((user) => user.address)
//         .forEach(({ zipcode, ...rest }) => console.log(zipcode));
// };

// userService.getList(printZipcode);

// 게시글 정보를 전달받은 후,
// 게시글 조회를 모듈화하여 사용한다.
// 게시글 조회시, 회원의 번호를 전달받아서 그 작성자의 게시글만 가져온다.
// 전체 정보를 출력한다.
// const getPost = (function () {
//     const getList = async (userId, callback) => {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/posts"
//         );
//         const posts = await response.json();
//         callback(userId, posts);
//     };

//     return { getList: getList };
// })();

// const printPost = (userId, posts) => {
//     posts
//         .filter((post) => post.userId === userId)
//         .forEach((post) => console.log(post));
// };

// getPost.getList(5, printPost);

// 앨범 정보를 전달받은 후,
// 회원 번호가 5인 정보를 모두 가져온다.
// 그 중 userId와 title만 출력한다.
// const albumService = (function () {
//     const getAlbum = async (callback) => {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/albums"
//         );
//         const albums = await response.json();
//         callback(albums);
//     };
//     return { getAlbum: getAlbum };
// })();

// const printAlbum = (albums) => {
//     albums
//         .filter((album) => album.userId === 5)
//         .forEach((album) => {
//             console.log(album.userId, album.title);
//         });
// };

// albumService.getAlbum(printAlbum);

// 1️⃣ https://jsonplaceholder.typicode.com/users에서 사용자 정보를 가져온다.
// 2️⃣ username이 K로 시작하는 사용자만 걸러낸다.
// 3️⃣ 걸러낸 사용자들의 id와 username을 출력한다.
// 4️⃣ userService 모듈 패턴 안에 getUsers(callback) 메서드를 만들고,
// 출력은 printUsers 콜백에서 처리한다.
const userService = (function () {
    const getUsers = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        callback(users);
    };
    return { getUsers: getUsers };
})();

const printUsers = (users) => {
    users
        .filter((user) => user.username.startsWith("K"))
        .forEach((user) => {
            console.log(user.id, user.username);
        });
};

userService.getUsers(printUsers);
