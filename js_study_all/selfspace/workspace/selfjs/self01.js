// 두 정수의 덧셈, 결과 출력
// const add = (a, b, callback) => {
//     let result = a + b;

//     if (callback) {
//         return callback(result);
//     }
//     return result;
// };

// let messeage = add(2, 7, (messeage) => {
//     console.log(messeage);
// });

// 두 정수의 곱셈, 결과에 2를 곱해서 출력
// const add = (a, b, callback) => {
//     let result = a + b;

//     if (callback) {
//         return callback(result);
//     }
//     return result;
// };

// let messeage = add(2, 7, (message) => {
//     console.log(message * 2);
// });

// 성씨와 이름을 전달받아서 전체 이름을 만든 뒤 "000님" 출력
// const makeFullName = (firstName, secondName, callback) => {
//     let fullName = firstName + secondName;

//     if (callback) {
//         return callback(fullName);
//     }
//     return fullName;
// };

// const printFullName = (fullName) => {
//     console.log(`${fullName}님`);
// };

// makeFullName("정", "희준", printFullName);

// 상품 1개 가격과 총 합을 입력받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니면 false 리턴
// const countCheck = (price, total, callback) => {
//     let count = total / price;

//     if (callback) {
//         return callback(count);
//     }
//     return count;
// };

// const check = (count) => {
//     return count <= 5; // true 또는 false 반환
// };

// let result = countCheck(2000, 8000, check);
// console.log(result); // true

// 농장에서 축사 대청소를 하려고 한다.
// 소와 돼지의 총 마리 수를 각각 비교해 가축 중 마리 수가 적은 동물 이름을 리턴
// 두 수는 절대 같지 않다.
// const countLow = (cowCount, pigCount, callback) => {
//     let count = cowCount < pigCount;

//     if (callback) {
//         return callback(count);
//     }
//     return count;
// };

// let message = countLow(10, 5, (count) => (count ? "소" : "돼지"));
// console.log(message);

// 학생의 국어, 영어, 수학 점수를 전달받아서 평균을 구한 뒤
// 정확히 60점일 경우 합격, 아니면 불합격
// const checkPass = (korean, english, math, callback) => {
//     let average = (korean + english + math) / 3;
//     if (callback) {
//         return callback(average);
//     }
//     return average;
// };

// let checkAverage = checkPass(50, 60, 60, (average) =>
//     average === 60 ? "합격" : "불합격"
// );
// console.log(checkAverage);

// 1 ~ n까지 합을 구한 뒤 5000이상이면 5000을 빼고 출력
// const addTo = (n, callback) => {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }

//     if (callback) {
//         return callback(sum);
//     }
//     return sum;
// };

// let print = addTo(99, (sum) => (sum >= 5000 ? sum - 5000 : sum));
// console.log(print);

// body 줄바꿈 처리해서 한 줄씩 출력
// 줄바꿈(\n) 기준으로 잘라서 한 줄씩 출력
// const getLine = async () => {
//     const responce = await fetch(
//         "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     const lines = await responce.json();
//     console.log(lines.body.split("\n"));
// };

// await getLine();

// 제목 대문자로 출력
// 게시글1을 받아온 후 title을 전부 대문자로 바꿔서 출력.
// const getPost1 = async () => {
//     const responce = await fetch(
//         "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     const post1 = await responce.json();
//     console.log(post1.title.toUpperCase());
// };

// await getPost1();

// 도전 과제 🔥: 사용자 이름까지 가져와서 함께 출력
// const getTitleName = async () => {
//     const responce1 = await fetch(
//         "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     const responce2 = await fetch(
//         "https://jsonplaceholder.typicode.com/users/1"
//     );

//     const title = await responce1.json();
//     const name = await responce2.json();

//     console.log(title.title, name.name);
// };

// await getTitleName();
