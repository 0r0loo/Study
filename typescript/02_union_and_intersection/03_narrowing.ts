// Narrowing
// Narrowing 은 Union 타입에서 더욱 구체적인 타입으로
// 논리적으로 유추 할 수 있게 되는걸 의미한다.
let numberOrString: number | string = 'string'

// Narrowing 을 하기 위해서는
// 타입 가드를 사용해야 한다.
// 타입 가드는 타입을 좁히는 역할을 한다.
// 타입 가드는 다음과 같은 방법으로 사용할 수 있다.
// 1. typeof
// 2. in
// 3. instanceof
// 4. is
// 5. switch

const decimal = 12.34567
console.log(decimal.toFixed(2))

// numberOrString.toFixed(2) // error

/*
Narrowing 의 종류
1) Assignment Narrowing
2) typeof Narrowing
3) Truthiness narrowing
4) Equality narrowing
5) in operator narrowing
6) instanceof narrowing
7) discriminated union narrowing (차별된 유니언 내로잉)
8) exhaustive checking (완전한 검사)
 */

// 1. Assignment Narrowing
// 특정 값을 할당해서 내로잉
let numberOrString2: number | string = '아이유'

numberOrString2.toString()

// 2. typeof narrowing
// typeof 연산자를 사용해서 내로잉
numberOrString2 = Math.random() > 0.5 ? 'string' : 100;

if (typeof numberOrString2 === 'string') {
    numberOrString2;
} else {
    numberOrString2;
}

// 3. Truthiness narrowing
// Truthiness 는 true 같은 것을 의미한다.
let nullOrString: null | string[] = Math.random() > 0.5 ? ['hello'] : null;

if (nullOrString) {
    nullOrString
} else {
    nullOrString;
}

// 4. Equality narrowing
// Equality 는 === 같은 것을 의미한다.
let numberOrString3 : number | string = Math.random() > 0.5 ? 12345 : 'string';

let stringOrBool2: string | boolean = Math.random() > 0.5 ? 'stringOrBool' : true;

if (numberOrString3 === stringOrBool2) {
    numberOrString3; // string
    stringOrBool2; // string
} else  {
    numberOrString3; // number | string
    stringOrBool2; // string | true
}


let numberOrStringOrNull: number | string | null = Math.random() > 0.5 ? 1234 : Math.random() > 0.5 ? 'string' : null;

if (typeof numberOrStringOrNull === 'string') {
    numberOrStringOrNull; // string
} else if (typeof numberOrStringOrNull === 'number') {
    numberOrStringOrNull; // number
} else {
    numberOrStringOrNull; // null
}


// 5. in operator narrowing
// in 연산자를 사용해서 내로잉
interface Human {
    name: string;
    age: number;
}

interface Dog {
    name: string;
    type: string;
}

let human: Human = {
    name : '충근',
    age: 30
}

let dog: Dog = {
    name: '댕댕이',
    type: '진돗개'
}

let humanOrDog: Human | Dog = Math.random() > 0.5 ? human : dog;


console.log('name' in humanOrDog)

if ('type' in humanOrDog) {
    humanOrDog; // Dog
} else {
    humanOrDog; // Human
}

// 6. instanceof narrowing
// instanceof 연산자를 사용해서 내로잉
let dateOrString: Date | string = Math.random() > 0.5 ? new Date() : '2021-06-01';

if (dateOrString instanceof Date) {
    dateOrString; // Date
} else {
    dateOrString; // string
}

// 7. discriminated union narrowing (차별된 유니언 내로잉)
// discriminated union 은 유니언 타입에
// 공통된 속성을 가진 타입을 지정하는 것을 의미한다.
// discriminated union 을 사용하면
// switch 문을 사용해서 내로잉 할 수 있다.

// 공통 속성이 있다고해도 이렇게 선언하지말자
interface Animal {
    type : 'dog' | 'human';
    // human 일 떄만 키
    height?: number;
    // dog 일 때만 품종
    breed?: string
}

let animal: Animal = Math.random() > 0.5 ?
    { type: 'dog', breed: '진돗개' } : { type: 'human', height: 170 };

if (animal.type === 'human') {
    animal.height // number | undefined
} else {
    animal.breed // string | undefined
}


interface Human2 {
    type: 'human';
    height: string;
}

interface Dog2 {
    type: 'dog';
    breed: string;
}

interface Fish2 {
    type: 'fish';
    length: number
}

type HumanOrDog2 = Human2 | Dog2 | Fish2;

let humanOrDog2: HumanOrDog2 = Math.random() > 0.5 ? { type: 'human', height: '170' } : Math.random() > 0.5 ? { type: 'dog', breed: '진돗개' } : { type: 'fish', length: 100 };

if (humanOrDog2.type === 'human') {
    humanOrDog2 // Human2
} else {
    humanOrDog2 // Dog2
}


// 8. exhaustive checking (완전한 검사)
switch (humanOrDog2.type) {
    case 'human':
        humanOrDog2; // Human2
        break;
    case 'dog':
        humanOrDog2; // Dog2
        break;
    // 얘는 나중에 추가됨
    case 'fish':
        humanOrDog2; // Fish2
        break;
    default:
        humanOrDog2; // never
        const _check: never = humanOrDog2; // 새로생긴 타입의 실수를 방지 할 수 있음 Fish 가 새로 생겨서 오류가남
        break
}












