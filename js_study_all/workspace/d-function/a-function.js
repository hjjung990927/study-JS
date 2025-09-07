// 호이스팅: 선언부가 아래에 있어도 사용할 수 있는 기술
// let result = f(2);
// console.log(result);

// 함수의 선언
// function f(x) {
//     return 2 * x + 1;
// }

// 두 정수의 곱셈을 구해주는 함수
function f(a, b) {
    return a * b;
}

let result = f(2, 7);
console.log(result);
