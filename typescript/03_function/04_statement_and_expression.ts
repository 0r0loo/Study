// statement and expression

// statement 문장
function addTwoNumbers(a: number, b: number): number {
  return a + b;
}

// expression 표현식
const addTwoNumbers2 = function (a: number, b: number): number {
  return a + b;
}

// statement
function add (a: number, b: number): number {
  return a + b;
}

function subtract (a: number, b: number): number {
  return a - b;
}

function multiply (a: number, b: number): number {
  return a * b;
}

function divide (a: number, b: number): number {
    return a / b;
}

// expression

type Calculator = (a: number, b: number) => number;
const add2: Calculator = function (a, b) {
    return a + b;
}

const subtract2: Calculator = function (a, b) {
    return a - b;
}

const multiply2: Calculator = function (a, b) {
    return a * b;
}

const divide2: Calculator = function (a, b) {
    return a / b;
}














