//형 변환 conversion



//숫자 1 (true)
//숫자 2 (false)
let value = true;

value = String(value);
console.log(typeof (value));

value = "123";

value = Number(value);
console.log(value + 10);

let age = Number("임의의 문자열 123");
console.log(age);   //NaN, 형변환 실패

let abc = Boolean(1);
let abc2 = Boolean(0);
console.log(abc);
console.log(abc2);

