"use strict";
/*
Types

 */
var helloText = 'Hello';
// helloText = true; // Error: Type 'true' is not assignable to type 'string'.
/*
JS에 존재하는
7개의 타입
 */
var stringVar = 'string';
var numberVar = 1;
var bigIntVar = BigInt(130); // 1n;
var booleanVar = true;
var nullVar = null;
var undefinedVar = undefined;
var symbolVar = Symbol();
/*
TS 에만 존재하는 타입
 */
// any - 아무 타입이나 입력 할 수 있는 치트키 같은 타입
var anyVar = 'any';
anyVar = 1;
anyVar = true;
anyVar = null;
anyVar = undefined;
anyVar = Symbol();
anyVar = { a: 1 };
anyVar = [1, 2, 3];
anyVar = function () {
    console.log('any');
};
// 다른타입에 any 를 할당 할 수 있다.
var stringVar2 = anyVar;
var numberVar2 = anyVar;
var bigIntVar2 = anyVar;
var booleanVar2 = anyVar;
var nullVar2 = anyVar;
var undefinedVar2 = anyVar;
var symbolVar2 = anyVar;
// unknown - 알 수 없는 타입 / any 와 비슷하지만, any 보다는 조금 더 엄격한 타입
var unknownVar = 'unknown';
unknownVar = 1;
unknownVar = true;
unknownVar = null;
unknownVar = undefined;
unknownVar = Symbol();
unknownVar = { a: 1 };
unknownVar = [1, 2, 3];
unknownVar = function () {
    console.log('unknown');
};
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
var koreanGirlGroup = ['twice', 'blackpink', 'redvelvet'];
var booleanList = [true, false, true];
