// 자바 스크립트 자료형
// 8가지 기본 자료형

let message = "hello";
message = 1234567;

console.log(message);

// 변수는 어떤 순간의 문자열일 수 있고 다른 순간엔 숫자가 될 수 있다.

// 1. 숫자형(number type)
let n = 234;
n = 12.345;

// * , / , + , -

//특수 숫자 값
//Infinity

console.log(1 / 0);

//NaN
console.log("숫자가아님" / 2);

//2. BigInt
const bigNumber = 12332158193740529734097120935612908374832907591n;
//끝에 n을 넣어주면 BigInt 형이 됌
console.log(bigNumber);

//3. 문자형
let str = "Hello";
let str2 = 'hello';
let str3 = `Hello`;

console.log(` this return value ${1 + 100}`);
//`` 를 쓰면 문자열 하나로 간단하게 사용가능.

//4. 불린형
let check = true;
let check2 = false;

let isGreater = 4 > 1;
console.log(isGreater);

//5. null 값 : 존재하지 않는 값. 알수 없는 값
let age = null;
console.log(age);

//6. undefined : 값이 할당 되지 않은 상태를 나타낸다.
let age2;
console.log(age2);

//7. 객체(object) --> 특수한 자료형

//8. symbol --> 객체의 고유한 식별자를 만들 때 사용

//9. typeof 
console.log(typeof (undefined));
console.log(typeof (0));
console.log(typeof (10n));
console.log(typeof (true));
console.log(typeof ("foo"));
console.log(typeof (Math));
console.log(typeof (null));
