// /**
//  *  NULL 병합 연산자 ??
//  *
//  * 최근에 추가됌..
//  *
//  * a ?? b 의 평가
//  *
//  * a 가 null도 아니가 undefined도 아니면 a
//  * 그 외의 경우는 b
//  *
//  * let x = a ?? b;
//  *
//  * x = (a !== null && a !== undefined) ? a : b;
//  *
//  */

let firstName = null;
let lastName = null;
let nickName = "Violet";

let myName = firstName ?? lastName ?? nickName;
//               첫번쨰 비교     //두번쨰 비교

console.log(myName);

let name1 = null;
let name2 = 'jong';
let name3 = 'min';

let myName4 = name1 ?? name2 ?? name3;
console.log(myName4)