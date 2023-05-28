// Extension
interface IName {
    name: string;
}

interface IIdol extends IName {
    age: number
}

const idol: IIdol = {
    name: '아이유',
    age: 28
}

type TName = {
    name: string;
}

type TIdol = TName & {
    age: number
}

const idol2: TIdol = {
    name: '아이유',
    age: 28
}

interface IIdol2 extends TName {
    age: number
}

const idol3: IIdol2 = {
    name: '아이유',
    age: 28
}

type TIdol2 = IName & {
    age: number
}

const idol4: TIdol2 = {
    name: '아이유',
    age: 28
}


// extending multiple
type DogName = {
    name: string
}

type DogAge = {
    age: number
}

type DogBreed = {
    breed: string
}

type Dog = DogName & DogAge & DogBreed


interface CatName {
    name: string
}

interface CatAge {
    age: number
}

interface CatBreed {
    breed: string
}

interface Cat extends CatName, CatAge, CatBreed {

}

const cat: Cat = {
    name: '냥이',
    age: 3,
    breed: '페르시안'
}

// 오버라이딩
type THeight = {
    height: number;
}

type TRectangle = THeight & {
    height: string;
    width: number;
}

// const retangle: TRectangle = {
//     width: 100,
//     height: '100' // never 라서 못씀
// }

type TWidth = {
    width: number | string
}
type TRectangle2 = TWidth & {
    width: number;
    height: number;
}

const retangle2: TRectangle2 = {
    width: 100,
    height: 100
}

retangle2


interface IHeight {
    height: number;
}

// interface IRectangle extends IHeight {
//     height: string; // 이걸 허용하지 않음
//     width: number;
// }

interface IWidth {
    width: number | string
}

interface IRectangle2 extends IWidth {
    width: number; // number | string 도 가능 좁아지는거면 가능 근데 아예 다른건 ㄴㄴ
    height: number;
}

// type 은 never 로 extends 가능 interface 는 에러로 불가능
