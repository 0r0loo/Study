// Interface


interface Animal {
    name: string;
    age: number;
    jump(): string;
}

class Dog implements Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    jump():string {
        return `${this.name} 이 점프를 합니다.`;
    }
    dance(){

    }
}

// const ori = new Dog('오리', 2);
// console.log(ori.jump());
const ori: any = new Dog('오리', 2);

function instanceOfAnimal(object: any): object is Animal {
    return 'jump' in object;
}

if (instanceOfAnimal(ori)) {
    ori
}

// 다중 인터페이스 구현
interface Pet {
    legsCount: number;
    bark(): void;
}

class Cat implements Animal, Pet {
    // Animal
    name: string;
    age: number;

    // Pet
    legsCount: number;

    constructor(name: string, age: number, legsCount: number) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }

    // Animal
    jump(): string {
        return `${this.name} 이 점프를 합니다.`;
    }

    // Pet
    bark(): void {
        console.log('야옹');
    }
}

type AnimalAndPet = Animal & Pet;

class Cat2 implements AnimalAndPet {
    // Animal
    name: string;
    age: number;

    // Pet
    legsCount: number;

    constructor(name: string, age: number, legsCount: number) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }

    // Animal
    jump(): string {
        return `${this.name} 이 점프를 합니다.`;
    }

    // Pet
    bark(): void {
        console.log('야옹');
    }
}


// 안되는 상황
interface WrongInterface1 {
    name: string;
}

interface WrongInterface2 {
    name: number
}

// class Person implements WrongInterface1, WrongInterface2 {
    // name: string;
    // name: number;
    // name: number | string
// }
// 둘다 만족시키기 불가능한 상태


class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

interface IdolConstructor {
    new (name: string, age: number): Idol;
}

function createIdol(constructor: IdolConstructor, name: string, age: number) {
    return new constructor(name, age);
}

console.log(createIdol(Idol, '아이유', 28));
