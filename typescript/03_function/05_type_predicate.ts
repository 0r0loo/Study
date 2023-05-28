// Type Predicate

function isNumber(x: any): x is number {
  return typeof x === "number";
}

console.log(isNumber(10))

function isNumberReturnBool(input: any): boolean {
    return typeof input === 'number';
}

let number: any = 5;

if (isNumberReturnBool(number)) {
    number // any
}

if (isNumber(number)) {
    number // number
}



interface Doge {
    name: string;
    age: number;
}

interface Cat {
    name: string;
    breed: string;
}

type DogeOrCat = Doge | Cat;

function isDoge(animal: DogeOrCat): animal is Doge {
    return (animal as Doge).age !== undefined;
}

const doge: DogeOrCat = {
    name: 'doge',
    age: 5
}

if (isDoge(doge)) {
    doge // Doge
} else {
    doge // never 왜? cat 이 될 수 있는 프로퍼티가 없음
}

















