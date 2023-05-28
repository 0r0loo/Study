// Generic in TYpe

type GenericSimpleType<T> = T;

const genericString: GenericSimpleType<string> = 'hello';
// const genericString2: GenericSimpleType = 'hello';


interface DoneState<T> {
    data: T[]
}

interface LoadingState {
    requestedAt: Date
}

interface ErrorState {
    error: string;
}

type State<T> = DoneState<T> | LoadingState | ErrorState


let state: State<string> = {
    data: ['hello', 'world']
}

state = {
    requestedAt: new Date()
}

state = {
    error: '404 Not Found'
}

// Error 제네릭 타입 제공 해줘야함 싫으면 제네릭 기본 타입 지정해주셈
// let state2: State = {
//     data: ['hello', 'world']
// }
