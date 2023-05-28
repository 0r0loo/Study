// property initialization

class Person {
    // 일반적인 필수값 선언법
    name: string;
    // 초기값 제공 선언법
    age: number = 0;
    // 선택적 값 선언법
    address?: string;

    // type of undefined 선언법
    pet: string | undefined;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class RouteStack {
    stack!: string[];

    constructor() {
        this.initialize();
    }

    initialize() {
        this.stack = []
    }
}

const routeStack = new RouteStack();
console.log(routeStack);















