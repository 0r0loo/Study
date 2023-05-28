// Visibility keyword
// 1. public (default) - 어디서든 접근이 가능하다
// 2. private - 해당 클래스 내부에서만 접근이 가능하다
// 3. protected - 해당 클래스 내부와 상속받은 자식 클래스에서만 접근이 가능하다

class PropertyTestParent {
    // ts 에만 존재
    public publicProperty: string = 'publicProperty';
    private privateProperty: string = 'privateProperty';
    protected protectedProperty: string = 'protectedProperty';

    // js 에만 존재
    #jsPrivateProperty: string = 'jsPrivateProperty';

    test () {
        this.publicProperty;
        this.privateProperty;
        this.protectedProperty;
        this.#jsPrivateProperty;
    }
}

class PropertyTestChild extends PropertyTestParent {
    test () {
        this.publicProperty;
        this.protectedProperty;

        // this.privateProperty; // error
        // this.#jsPrivateProperty; // error
    }
}

const instance = new PropertyTestChild();

instance.publicProperty
// instance.protectedProperty // error
// instance.privateProperty // error
// instance.#jsPrivateProperty // error


