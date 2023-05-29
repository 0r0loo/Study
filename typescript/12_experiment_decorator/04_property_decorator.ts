// Property Decorator

class UserModel {
    @PropertyLogger
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}

function PropertyLogger(target: any, propertyKe: string) {
    console.log(`${propertyKe} property has been logged`)
}


