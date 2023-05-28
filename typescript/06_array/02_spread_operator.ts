// Spread operator
const onlyString = ['1', '2', '3'];
const onlyNumbers = [1, 2, 3];

const arr1 = [
    ...onlyString
]
// string[]

const arr2 = [
    ...onlyString,
    ...onlyNumbers
]
// (string | number)[]
