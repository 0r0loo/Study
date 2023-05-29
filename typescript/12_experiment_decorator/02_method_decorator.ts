// Method Decorator

class Idol {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    @TestMethodDecorator
    @Configurable(false)
    @MethodCallLogger('PROD')
    dance() {
        return `${this.name} 가 춤을 춥니다.`
    }
}

// target - static method 에 데코레이팅을 할 경우 생성자 함수
//        - instance method 에 데코레이팅을 할 경우 prototype
// propertyKey - 메서드의 이름
// descript - propertyKey 에 해당하는 메서드의 descriptor
function TestMethodDecorator(target: any, property: string, descriptor: PropertyDescriptor) {
    console.log('Log Call')
    console.log('--- target ---')
    console.log(target);
    console.log('--- property ---')
    console.log(property);
    console.log('--- descriptor ---')
    console.log(descriptor);
}

const rose = new Idol('로제')
console.log('--- run dance ---')

rose.dance()

function Configurable(configurable: boolean) {
    return function (target: any, property: string, descriptor: PropertyDescriptor) {
        console.log('--- Configurable ---')
        console.log(configurable);
        descriptor.configurable = configurable;
    }
}

console.log(Object.getOwnPropertyDescriptors(Idol.prototype))

function MethodCallLogger(env: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            console.log(`[${env}] MethodCall: ${propertyKey}(${args})`)

            return originalMethod.apply(this, ...args)
        }
    }
}
