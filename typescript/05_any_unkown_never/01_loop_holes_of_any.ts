// Loopholes of any
let number: number;
number = 10;

// 에러 런타임에 에러남
(number as any).toUpperCase()


const multiplyTwo = (x: number, y: number) => {
    return x * y ;
}

let args1: any = '하이'
let args2: any = true

multiplyTwo(args1, args2)

let iu: any = {name: '아이유', age: 30}

// 킹 웹스톰은 자동완성 되네
iu

const callbackRunner = (x:number, y: number, callback: any) => {
    return callback(x, y);
}

const callback = (x: number) => x;

console.log(callbackRunner(5, 4, callback))
