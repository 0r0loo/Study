// Export

export class IdolModel {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

export const rose = new IdolModel('로제', 28)


export default {
    name: 'Jennie',
    age: 32
}
