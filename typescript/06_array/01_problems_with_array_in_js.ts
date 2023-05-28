// 자바스크립트 Array 의 문제점

const numbers = [1, 2, 3, 4, '5']

let strings: string[] = ['1', '2', '3']

// strings.push(1) // 문자열만 가능

let stringsOrNumbersArray: (string | number)[] = ['1', '2', '3', 4, 5]

let stringArrayNumberArr: string[] | number[] = [1, 2, 3]

stringArrayNumberArr = ['1', '2', '3']


let stringOrNumberArr: string | number[] = [1, 2, 3]

stringOrNumberArr = '1'

let boolsArr = [true, false, true]
// boolsArr.push(1) // error

const onlyString = ['1', '2', '3']
const onlyNumber = [1, 2, 3]

for (let i = 0; i < onlyString.length; i++) {
    let item = onlyString[i];
}

for (let item of onlyNumber) {

}


// 타입스크립트 어레이는 렝스를 신경쓰지 않는다.
// 실제론 undefined 지만 number 타입으로 됨...
const number = onlyNumber[142344]
