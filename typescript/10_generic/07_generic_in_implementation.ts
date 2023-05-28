// Generic in Implementation

interface Singer<T, V> {
    name: T;
    sing(year: V): void;
}

class Idol implements Singer<string, number> {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sing(year: number): void {
        console.log(`${this.name} is singing in ${year}`);
    }
}


const yuJin = new Idol('YuJin');
yuJin.sing(2018); // YuJin is singing in 2018

class Idol2<T, V> implements Singer<T, V> {
    name: T;

    constructor(name: T) {
        this.name = name;
    }

    sing(year: V): void {
        console.log(`${this.name} is singing in ${year}`);
    }
}

const wonYoung = new Idol2('WonYoung');

wonYoung.sing(2018); // WonYoung is singing in 2018

