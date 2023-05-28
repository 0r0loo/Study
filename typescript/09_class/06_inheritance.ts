// Inheritance

class Parent {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    dance () {
        console.log(`parent ${this.name} is dancing`);
    }
}

class Child extends Parent {
    age: number;

    constructor(name: string, age: number) {
        super(name);
        this.age = age;
    }

    jump() {
        console.log(`child ${this.name} is jumping`);
    }
}


const iu = new Parent('아이유');
const ori = new Child('오리', 2);

iu.dance()
// iu.jump() // error

ori.dance()
ori.jump()

let person: Parent;
person = iu
person = ori

let person2: Child;
person2 = ori
// person2 = iu // error

// optional 프로퍼티를 유의하자

class Parent2 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Child2 extends  Parent2 {
    age?: number;

    constructor(name: string, age?: number) {
        super(name);
        this.age = age;
    }
}

const iu2 = new Parent2('아이유');
const ori2 = new Child2('오리', 2);

let child: Child2
child = iu2 // 에러가 나야하는데... 타입스크립트는 구조만 보기 떄문에 에러가 안남.. 조심하자
// 구조가 똑같으면 에러가 안남
child = ori2
