// Generic in Interface


interface Cache<T> {
    data: T[];
    lastUpdate: Date
}

const cache1: Cache<string> = {
    data: ['abc', 'def'],
    lastUpdate: new Date()
}

// 제네릭 T 생략은 안된다.
const cache2: Cache<number> = {
    data: [1, 2, 3],
    lastUpdate: new Date()
}

// 기본 제네릭 타입
interface DefaultGeneric<T = string> {
    data: T[];
}

// 에러
const cache3: DefaultGeneric = {
    data: ['abc', 'def']
    // data: [123, 4] // error number 는 string 이 될수 없기 때문에
}


