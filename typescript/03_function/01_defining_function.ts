 // Defining Function

 function printName (name: string): void {
   console.log(name)
 }

 function returnTwoCouple (person1: string, person2: string): string {
   return `${person1} and ${person2}`
 }


 // Optional Parameter
 function multiplyOrReturn (x: number, y?: number /* number | undefined */) {
    if (y) {
      return x * y
    }
    return x
 }
 console.log(multiplyOrReturn(10, 20))
 console.log(multiplyOrReturn(10))

 function multiplyOrReturn2 (x: number, y = 10 /* number */) {
   return x * y
 }

console.log(multiplyOrReturn2(10, 20))
console.log(multiplyOrReturn2(10))


// 나머지 매개변수
 function getInfiniteParameters(...args: string[]) {
    return args.map(x => `Hello ${x}`)
 }

 console.log(getInfiniteParameters('Mark', 'Ellie', 'Bob'))


 // Return Type
 function addTwoNumbers(x: number, y: number) {
    return x + y
 }

 addTwoNumbers(1, 2) // 3

 function randomNumber() {
    return Math.random() > 0.5 ? 10 : '랜덤'
 }

 randomNumber() // 10 | 랜덤

 function subtractTwoNumbers(x: number, y: number): number {
    // return '문자열' // Error
    return x - y
 }

 const subtractTowNumbersArrow = (x: number, y: number): number => x - y

 // 특수 반환 타입
 // void / never
 function doNotReturn(): void {
    console.log('I am just saying hello world')
 }

function errorFunction(): never {
    throw new Error()
}



















