// Multi Dimension Array


const number2DArray: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
];

const str2DArr = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f']
]

const strAndNumber: (number| string)[][] = [
    [1, '2', 3],
    ['4', 5, 6]
]


let strArrOrNumberArr: string[][] | number[][] = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f']
]

strArrOrNumberArr = [
    [1, 2, 3],
    [4, 5, 6]
]

for (let arr of number2DArray) {
    for (let item of arr) {
        console.log(item)
    }
}
