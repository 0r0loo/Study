// Require Type
// 모든 프로퍼티를 필수를 만드는 타입
interface Dog {
    name: string;
    age?: number;
    country?: string;
}


const requiredDog: Required<Dog> = {
    name: '멍멍이',
    age: 2,
    country: 'korea'
}
