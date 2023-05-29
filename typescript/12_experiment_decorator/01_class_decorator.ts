// Class Decorator

@Test
@Frozen
@LogTest('local')
@ChangeClass
class Idol  {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}


function Test(constructor: Function) {
    console.log(constructor);
}

function Frozen(constructor: Function) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}

const yuJin = new Idol('안유잔', 23);

console.log(Object.isFrozen(Object.getPrototypeOf(yuJin)))


// decorator factory
function LogTest(env: string) {
    return function (constructor: Function) {
        console.log(`[${env}] ${constructor} 가 실행 됐습니다.`);
    }
}


console.log('=============');
const wonYoung = new Idol('장원영', 22);
console.log(wonYoung)

// class 가 선언될 때 딱 1번만 실행됨.


function ChangeClass<T extends {new(...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
        groupName = '아이브';

        constructor(...params  :any[]) {
            super(...params);

            console.log('constructor instantiated');

        }

    }
}
