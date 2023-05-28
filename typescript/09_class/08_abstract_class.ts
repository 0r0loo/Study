// Abstract class

abstract class ModelWithId {
    id: number;

    constructor(id: number) {
        this.id = id;
    }
}

// const modelWithId = new ModelWithId(1); // Error: Cannot create an instance of an abstract class.

class Product extends ModelWithId {

}

const product = new Product(1);
console.log(product.id); // 1

abstract class ModelWithAbstractMethod {
    abstract shout(name: string): string;
}

class Person extends ModelWithAbstractMethod {
    shout(name: string): string {
        return 'Hello';
    }
}
