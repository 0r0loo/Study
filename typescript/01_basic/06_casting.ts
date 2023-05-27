// Casting
// TS 에서 Casting 을 하면 JS 에서는 적용이 안된다.


const yuJin = 'yuJin'
let testNumber = 3;

console.log(yuJin.toUpperCase())
// console.log(testNumber.toUpperCase()) // error

let sampleNumber: any = 5;
// console.log(sampleNumber.toUpperCase()) // error

let stringVar = sampleNumber as string;
// console.log(stringVar.toUpperCase()) // error

console.log(typeof (sampleNumber as string)) // number 로 나옴

