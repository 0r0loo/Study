// Union Basics
// 유니온은 TS 에서 타입을 병합 할 수 있는 수많은 방법중 하나이다.

type StringOrBooleanType = string | boolean;

let stringOrBoolean: StringOrBooleanType = 'string';
stringOrBoolean = true;

// stringOrBoolean = undefined; // error
// stringOrBoolean = null; // error

type StringBoolNullType = StringOrBooleanType | null

type StateTypes = 'DONE' | 'LOADING' | 'ERROR'
let state: StateTypes = 'DONE'
state = 'LOADING'
// state = 'INITIAL' // error

// 리스트의 유니언
// string 으로 구성된 리스트 또는 boolean 으로 구성된 리스트

type StringListOrBooleanListType = string[] | boolean[];
let stringListOrBooleanList: StringListOrBooleanListType = ['a', 'b', 'c'];
stringListOrBooleanList = [true, false, true];

// stringListOrBooleanList = ['a', true]; // error

type StringOrBooleanListType = (string | boolean)[];
let stringOrBooleanList: StringOrBooleanListType = ['a', 'b', 'c'];
stringOrBooleanList = [true, false, true];
stringOrBooleanList = ['a', true];


// Interface 로 사용하는 유니언
interface Human {
    name: string;
    age: number;
    address: string;
}

interface Animal {
    name: string;
    age: number;
}

type HumanOrAnimalType = Human | Animal;
let animal: HumanOrAnimalType = {
    name: 'dog',
    age: 3
}

console.log(animal)
let human: HumanOrAnimalType = {
    name: 'yuJin',
    age: 28,
    address: 'Seoul'
}
console.log(human)

console.log(animal.age)
console.log(animal.name)
// console.log(animal.address) // error


let animalOrHuman2 : {
    name: string;
    age: number;
} | {
    name: string;
    age: number;
    address: string;
} = {
    name: '인간',
    age: 28,
    address: 'Seoul'
}

console.log(animalOrHuman2.age)
console.log(animalOrHuman2.name)
console.log(animalOrHuman2.address)

animalOrHuman2 = {
    name: '동물',
    age: 3
}

console.log(animalOrHuman2.age)
console.log(animalOrHuman2.name)
// console.log(animalOrHuman2.address) // error



// 서로 관계가 없는 유니언을 선언하면 어떻게 되는가
type Person = {
    name: string;
    age: number;
}

type Cat = {
    breed: string
    country : string
}

type PersonOrCatType = Person | Cat;

const personOrCat: PersonOrCatType = {
    name: 'yuJin',
    age: 28,
    breed: 'cat',
    country: 'korea'
}
// 둘다 만족하지 않는 것 빼고 다됨..



