// Class as Typ and Value
class Dog {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    bark() {
        return `${this.name} is barking`;
    }
}

let ori = new Dog('오리');
console.log(ori.bark());

// ori = 'Ori' // error Dog 타입이 아니라서

ori = {
    name: 'Ori',
    bark() {
        return `${this.name} is barking`
    }
}

console.log(ori)

