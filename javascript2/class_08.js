let result1 = 2 > 1;
let result2 = 2 == 1;
let result3 = 2 != 1;

console.log(result1);
console.log(result2);
console.log(result3);

console.log("-------------------");

//문자열 비교
//앞글자부터 비교
let result4 = 'Z' > 'A';
let result5 = 'Glow' > 'Glee';
let result6 = 'Bee' > 'Be';

console.log(result4);
console.log(result5);
console.log(result6);

console.log("-------------------");

// 다른 형을 가진 값 간의 비교
// 비교하려는 값의 자료형이 다르면
// 자바스크립트는 이 값들을 숫자형으로 바꿉니다.

let result7 = '2' > 1;
let result8 = '01' == 1;

console.log(result7);
console.log(result8);

console.log("-------------------");

// === <--- 일치연산자
// == 동등 연산자

let result9 = 0 == false;   // 0과 false를 구별 못한다
let result10 = '' == false; // 빈 문자열일때도 구별하지 못한다.

console.log(result9);
console.log(result10);

console.log("-------------------");

// 일치연산자 엄격한(strict) 동등연산자

let result11 = 0 === false;
let result12 = '' === false;

console.log(result11);
console.log(result12);

console.log("-------------------");