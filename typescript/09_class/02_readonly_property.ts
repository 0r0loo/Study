// readonly 프로퍼티

class Idol {
    readonly name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}


const iu = new Idol('아이유', 28);

// iu.name = '이지은'; // error
iu.age = 29;

