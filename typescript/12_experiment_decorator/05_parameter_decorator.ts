// Parameter Decorator

class Cat {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    dance(@LogParam adj: string) {
        console.log(`${this.name} 가 ${adj} 춤을 춥니다.`)
    }
}

const cat = new Cat('야옹이');
cat.dance('멋진');

function LogParam(target: any, propertyKey: string, paramIndex: number) {
    console.log(`${propertyKey} method의 ${paramIndex} 번째 parameter가 로깅되었습니다.`)
}
