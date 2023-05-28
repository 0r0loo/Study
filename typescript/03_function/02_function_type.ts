// Function Type

const runner = () => {
    return ['안유진', '장원영', ].map(x => `아이브 멤버 : ${x}`)
}
console.log(runner())

type Mapper = (x: string) => string
const runner2 = (callback: Mapper) => {
    return ['안유진', '장원영', ].map(callback)
}

console.log(runner2(x => `아이브 멤버 : ${x}`))

type MultiplyTwoNumbers = (x:number, y:number) => number;
const multiplyTwoNumbers: MultiplyTwoNumbers = (x, y) => x * y

// interface 로 함수 타입 선언하기
interface IMultiplyTwoNumbers {
    (x: number, y: number): number
}

const multiplyTwoNumbers2: IMultiplyTwoNumbers = (x, y) => x * y










