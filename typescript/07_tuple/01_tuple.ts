// Tuple

let iveTopMembers: string[] = ['안유진', '장원영', '레이']

let numberAndStringTuple: [number, string] = [1, 'one']



// push 해버리면 들어감 ㅠ
numberAndStringTuple.push('two')
console.log(numberAndStringTuple)

let unmodifiableTuple: readonly [number, string] = [1, 'one']

// 못넣게 막아줌 왜? 리드온니
// unmodifiableTuple.push('two') // error

// 튜플을 사용할 땐 리드온니랑 같이 써서 사용하는게 좋음

// Tuple 유추하기
let actress = ['김고은', '박소담', '전여빈']
let actressTuple = ['김고은', '박소담', '전여빈'] as const
const actressTupleConst = ['김고은', '박소담', '전여빈'] as const

let stringArray: string[] = [
    ...actressTuple,
    ...actressTupleConst,
    // ...[1, 2, 4] error
]

// Named Tuple
const namedTuple: [name: string, age: number] = ['김고은', 26]

// Assigning Tuple to Tuple
// Tuple 은 같은 타입끼리만 할당이 가능하다.
const tuple1: [string, string]= ['a', 'b']
const tuple2: [number, number] = [1, 2]

// let tuple3: [boolean, boolean] = tuple1 // error

let tuple4: [number, number] = tuple2

// Tuple 과 Array 의 관계

let ive: [string, string] = [
    '안유진',
    '장원영',
]

let stringArray2: string[] = ive

// let ive2: [string, string] = stringArray2
// 더 넓은 범위에 할당은 가능 좁은 범위는 불가능

// Multi Dimensional Tuple
const tuple2D: [string, number][] = [
    ['안유진', 26],
    ['장원영', 26],
]
