// Type Inference 타입 추론

let stringType = 'string'
let booleanType = true;
let numberType = 10


const constStringType = 'const string'
const constBooleanType = true;


let yuJin = {
    name: '안유진',
    year: 2003
}

const yuJin2 = {
    name: '안유진',
    year: 2003
}

yuJin2.name = '유진'
console.log(yuJin2)

const yuJin3 = {
    name: '안유진' as const,
    year: 2003 as const
}

// yuJin3.name = '유진' // error
console.log(yuJin3.name)

// Array
let numbers = [1, 2, 3]
let numberAndString = [1, '2', 3]

// numbers.push('6')
const number = numbers[0]
const nos = numberAndString[0]

const twoNumbers = [1, 3] as const
// twoNumbers.push(100) // error

const first = twoNumbers[0]
