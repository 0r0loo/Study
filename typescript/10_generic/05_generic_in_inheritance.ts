// Generic in Inheritance

class BaseCache<T> {
    data: T[] = [];
}

class StringCache extends BaseCache<string> {
}

const stringCache = new StringCache();
stringCache.data

class GenericChild<T, Message> extends BaseCache<T> {
    message?: Message

    constructor(message?: Message) {
        super();
        this.message = message;
    }
}

const genericChild = new GenericChild<string, string>('error')

genericChild.data
genericChild.message


// 제네릭의 inheritance
interface BaseGeneric {
    name: string;
}

class Idol<T extends BaseGeneric> {
    information: T;
    constructor(information: T) {
        this.information = information;
    }
}

const yuJin = new Idol({ name: 'YuJin', age: 23});

// ok
const yuJin2 = new Idol({ name: 'YuJin'});

// error name 은 필수임 BaseGeneric 상속 받았기 떄문에
// const yuJin3 = new Idol({ age: 23});

// keyof 함께 사용하기
const testObj = {
    a: 1,
    b: 2,
    c: 3,
}

function objectParser<O, Key extends keyof O>(obj: O, key: Key) {
    return obj[key];
}

const val = objectParser(testObj, 'a')

// 1 === 2 ? true : false
// Ternary Operator
class Idol2 {
    type?: string;
}

class FemaleIdol extends Idol2 {
    type: 'Female Idol' = 'Female Idol'
}

class MaleIdol extends Idol2 {
    type: 'Male Idol' = 'Male Idol'
}

type SpecificIdol<T extends Idol2> = T extends MaleIdol ?
    MaleIdol : FemaleIdol;


const idol2: SpecificIdol<FemaleIdol> = new FemaleIdol()
const idol3: SpecificIdol<MaleIdol> = new MaleIdol()



