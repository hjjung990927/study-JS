// JS에서 false로 취급되는 값
// 0, "", null, undefined

// 두 정수의 덧셈, 결과 출력
// const add = (number1, number2, callback) => {
//     if (callback) {
//         callback(number1 + number2);
//         return;
//     }
//     return number1 + number2;
// };

// let result = add(1, 3, (result) => {
//     console.log(result);
// });
// console.log(result);

// 두 정수의 곱셈, 결과에 2를 곱해서 출력
// const multiply = (number1, number2, callback) => {
//     if (callback) {
//         callback(number1 * number2);
//         return;
//     }
//     return number1 * number2;
// };

// const print = multiply(2, 7, (result) => {
//     console.log(result * 2);
// });

// 성씨와 이름을 전달받아서 전체 이름을 만든 뒤 "000님" 출력
// const makeFullName = (firstName, lastName, callback) => {
//     let fullName = lastName + firstName;
//     if (callback) {
//         callback(fullName);
//     }
//     return fullName;
// };

// const printFullName = (fullName) => {
//     console.log(`${fullName}님`);
// };

// makeFullName("희준", "정", printFullName);

// 상품 1개 가격과 총 합을 입력받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니면 false 리턴
// const getCount = (price, total, callback) => {
//     let count = total / price;

//     if (callback) {
//         return callback(count);
//     }
//     return count;
// };

// const checkLessEqualsThan5 = (count) => {
//     return count <= 5;
// };

// let condition = getCount(2000, 10000, checkLessEqualsThan5);
// console.log(condition);

// 농장에서 축사 대청소를 하려고 한다.
// 소와 돼지의 총 마리 수를 각각 비교해 가축 중 마리 수가 적은 동물 이름을 리턴
// 두 수는 절대 같지 않다.
// const compareCowWithPig = (cowCount, pigCount, callback) => {
//     let result = cowCount > pigCount;
//     if (callback) {
//         return callback(result);
//     }

//     return result;
// };

// let message = compareCowWithPig(100, 40, (result) => (result ? "소" : "돼지"));

// console.log(message);

// 학생의 국어, 영어, 수학 점수를 전달받아서 평균을 구한 뒤
// 정확히 60점일 경우 합격, 아니면 불합격
// const checkAccept = (koreanScore, englishScore, mathScore, callback) => {
//     let average = (koreanScore + englishScore + mathScore) / 3;
//     if (callback) {
//         return callback(average);
//     }
//     return average;
// };

// let message = checkAccept(60, 60, 60, (average) =>
//     average === 60 ? "합격" : "불합격"
// );

// console.log(message);

// 1 ~ n까지 합을 구한 뒤 5000이상이면 5000을 빼고 출력
// const plusContinue = (n, callback) => {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }

//     if (callback) {
//         return callback(sum);
//     }
//     return sum;
// };

// const checkPlus = (sum) => (sum >= 5000 ? sum - 5000 : sum);
// let message = plusContinue(10, checkPlus);
// console.log(message);

// n ~ m에서 첫 번째로 짝수인 숫자를 찾고, 그 숫자가 10 이상이면 true, 아니면 false
// const checkEven = (start, end, callback) => {
//     let target = 0;
//     for (let i = start; i <= end; i++) {
//         if (i % 2 == 0) {
//             target = i;
//             break;
//         }
//     }

//     if (callback) {
//         return callback(target);
//     }

//     return target;
// };

// let condition = checkEven(6, 9, (target) => target >= 10);
// console.log(condition);

// 두 정수의 뺄셈 결과와 두 정수의 곱셈 결과가 각각 5이상 50이상이면 true
// 하나라도 false라면 false
// 내 코드
// const check = (number1, number2, callback) => {
//     let subtract = number1 + number2;
//     let multiply = number1 * number2;

//     let checkResult = subtract >= 5 && multiply >= 50;

//     if (callback) {
//         return callback(checkResult);
//     }
//     return checkResult;
// };

// let message = check(10, 4, (checkResult) => {
//     console.log(checkResult);
// });

// 두 정수의 뺄셈 결과와 두 정수의 곱셈 결과가 각각 5이상 50이상이면 true
// 하나라도 false라면 false
// 강사님 코드
// const subtract = (number1, number2, callback) => {
//     if (callback) {
//         return callback(number1 - number2);
//     }
// };

// const multiply = (number1, number2, callback) => {
//     if (callback) {
//         return callback(number1 * number2);
//     }
// };

// const subtractCheck = (result) => result >= 5;
// const multiplyCheck = (result) => result >= 50;

// const check = (number1, number2, callback1, callback2) => {
//     if (callback1 && callback2) {
//         return (
//             callback1(number1, number2, subtractCheck) &&
//             callback2(number1, number2, multiplyCheck)
//         );
//     }
// };

// let condition = check(10, 6, subtract, multiply);

// console.log(condition);
