/*
Types

 */
let helloText: string = 'Hello';
// helloText = true; // Error: Type 'true' is not assignable to type 'string'.

/*
JS에 존재하는
7개의 타입
 */
const stringVar: string = 'string';
const numberVar: number = 1;
const bigIntVar: bigint = BigInt(130) // 1n;
const booleanVar: boolean = true;
const nullVar: null = null;
const undefinedVar: undefined = undefined;
const symbolVar: symbol = Symbol();

/*
TS 에만 존재하는 타입
 */
// any - 아무 타입이나 입력 할 수 있는 치트키 같은 타입
let anyVar: any = 'any';
anyVar = 1;
anyVar = true;
anyVar = null;
anyVar = undefined;
anyVar = Symbol();
anyVar = {a: 1};
anyVar = [1, 2, 3];
anyVar = () => {
    console.log('any');
}

// 다른타입에 any 를 할당 할 수 있다.
let stringVar2: string = anyVar;
let numberVar2: number = anyVar;
let bigIntVar2: bigint = anyVar;
let booleanVar2: boolean = anyVar;
let nullVar2: null = anyVar;
let undefinedVar2: undefined = anyVar;
let symbolVar2: symbol = anyVar;

// unknown - 알 수 없는 타입 / any 와 비슷하지만, any 보다는 조금 더 엄격한 타입
let unknownVar: unknown = 'unknown';
unknownVar = 1;
unknownVar = true;
unknownVar = null;
unknownVar = undefined;
unknownVar = Symbol();
unknownVar = {a: 1};
unknownVar = [1, 2, 3];
unknownVar = () => {
    console.log('unknown');
}

// let testNumber: number = unknownVar; // Error: Type 'unknown' is not assignable to type 'number'.
// let testString: string = unknownVar; // Error: Type 'unknown' is not assignable to type 'string'.
// let testBoolean: boolean = unknownVar; // Error: Type 'unknown' is not assignable to type 'boolean'.

// never - 어떠한 값도 저장되거나 반환되지 않을 때 사용하는 타입
// let neverType: never = null;
// let neverType: never = undefined;
// let neverType: never = 'test';

/*
리스트 타입
 */
const koreanGirlGroup: string[] = ['twice', 'blackpink', 'redvelvet'];
const booleanList: boolean[] = [true, false, true];














