// Type vs Interface
//

interface IObject {
    x: number
    y: number
}

type TObject = {
    x: number
    y: number
}

interface IFunction {
    (x: number, y: number): number
}

type TFunction = (x: number, y: number) => number

// Type 에서는 할 수 있지만
// interface 에서는 할 수 없는 것

// 1. primitive 타입 선언하기
type Name = string;

// 2. union 타입 선언하기
type UnionType = string | number;

// 3. tuple 타입 선언하기
type TupleType = [string, number];

// interface 는 할 수 있고
// type 은 못하는것

// interface merging
interface IRectangle {
    height: number;
}

interface IRectangle {
    width: number;
}

// 다 interface 가 합쳐진다.
let rectangle: IRectangle = {
    height: 10,
    width: 20
}

// 중복 선언 불가
// type TRectangle = {
//     height: number;
// }
//
// type TRectangle = {
//     width: number;
// }


class Review {
    // 프로퍼티 (인스턴스에 귀속)
    getY = (x: number) => x
    // 메서드 (프로토타입에 귀속)
    getX(x: number) {
        return x
    }
}

interface GetXnY {
    getX:(x: number) => number
    getY:(y: number) => number
}

interface GetXnY {
    getX:(x: number) => number
    // getY:(y: string) => number // error 오버로딩 안됨
}

interface GetXnY2 {
    getX(x: number): number
    getY(x: number): number
}

interface GetXnY2 {
    getX(x: number): number
    getY(x: string): number // 오버로딩이 됨 메소드로 선언했기 떄문에 가능
}


const testMethod: GetXnY2 = {
    getX(x) {
        return x
    },
    getY(x) {
        return 1
    }
}
