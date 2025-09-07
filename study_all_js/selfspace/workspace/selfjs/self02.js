// 게시글 정보를 전달받은 후,
// 게시글 조회를 모듈화하여 사용한다.
// 게시글 조회시, 회원의 번호를 전달받아서 그 작성자의 게시글만 가져온다.
// 전체 정보를 출력한다.
// const getPost = (function () {
//     const getList = async (callback, userId) => {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/posts"
//         );
//         const posts = await response.json();
//         return callback(posts, userId);
//     };
//     return { getList: getList };
// })();

// const printPost = (posts, userId) => {
//     posts
//         .filter((post) => post.userId === userId)
//         .forEach((list) => console.log(list));
// };

// getPost.getList(printPost, 5);

// 앨범 정보를 전달받은 후,
// 회원 번호가 5인 정보를 모두 가져온다.
// 그 중 userId와 title만 출력한다.
// const getAlbum = (function () {
//     // 함수 표현식을 소괄호로 묶어 값으로 만든다.
//     const getList = async (callback) => {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/albums"
//         );
//         const albums = await response.json();
//         callback(albums);
//     };
//     return { getList: getList };
//     // getList 함수 하나를 {} 객체 안에 getList라는 이름으로 담아서 반환한다.
//     // 그래서 getAlbum이 { getList: [함수] }가 된다.
//     // 앞에 getList는 키 값이므로 마음대로 작성할 수 있다.
// })();
// // 뒤에 ()를 붙여 바로 실행 후 실행하면 return 값이 getAlbum에 저장된다.
// // 즉, getAlbum은 함수가 아닌 객체이고 그 안에 getList라는 함수가 있다.

// const printAlbum = (albums) => {
//     albums
//         .filter((album) => album.userId === 5)
//         .forEach((album) => {
//             console.log(album.userId, album.title);
//         });
// };

// getAlbum.getList(printAlbum);
