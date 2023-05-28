// Unknown type

let anyValue : any

anyValue = 24;
anyValue = '아이유'
anyValue = false
anyValue = []
anyValue = {}
anyValue = null
anyValue = undefined



let unknownValue : unknown

unknownValue = 24;
unknownValue = '아이유'
unknownValue = false
unknownValue = []
unknownValue = {}
unknownValue = null
unknownValue = undefined


// 쌉가능
// let anyType: any = anyValue
// let unknownType: unknown = anyValue
// let booleanType: boolean = anyValue
// let arrayType: string[] = anyValue
// let objectType: {} = anyValue
// let nullType: null = anyValue
// let undefinedType: undefined = anyValue

// 언노운 타입은 애니랑 언노운 타입에만 할당이 가능하다.
let anyType: any = unknownValue
let unknownType: unknown = unknownValue
// let booleanType: boolean = unknownValue
// let arrayType: string[] = unknownValue
// let objectType: {} = unknownValue
// let nullType: null = unknownValue
// let undefinedType: undefined = unknownValue



function isString(target: unknown): target is string {
    return typeof target === 'string'
}

let testVal: unknown;

if (isString(testVal)) {
    testVal
}

// Union Type
type uOrString = unknown | string;
type uOrBoolean = unknown | boolean;
type uOrNumber = unknown | number;
type uOrArray = unknown | string[];
type uOrObject = unknown | object;
type uOrNull = unknown | null;
type uOrUndefined = unknown | undefined;
type anyOrUnknown = any | unknown;


// Intersection Type
type uAndString = unknown & string;
type uAndBoolean = unknown & boolean;
type uAndNumber = unknown & number;
type uAndArray = unknown & string[];
type uAndObject = unknown & object;
type uAndNull = unknown & null;
type uAndUndefined = unknown & undefined;
type anyAndUnknown = any & unknown;


// Operator 사용
let number1: unknown = 10;
let number2: number = 20;

// 사칙연산 불가능
// number1 - number2


// === == != !== 은 가능

