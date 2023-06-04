// Export


/* export default */ class IdolModel {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const number = 12

interface ICat {
    name: string;
    breed: string
}

// interface 는 타입스크립트 타입이라 객체에 넣을 수 없다.

export default  {
    IdolModel,
    number
}
