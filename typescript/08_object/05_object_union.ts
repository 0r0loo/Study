// Object Union

// 유추된 객체 타입 유니언

const dogOrCat = Math.random() > 0.5 ?
    {
        name : 'dog',
        age: 12
    } : {
        name : 'cat',
        breed : 'korean'
    }

dogOrCat.name
dogOrCat.age
dogOrCat.breed

interface Dog {
    name: string
    age: number
}

interface Cat {
    name: string;
    breed: string;
}

type DogOrCat = Dog | Cat;


const dogOrCat2: DogOrCat = Math.random() > 0.5 ?
    {
        name : 'dog',
        age: 12
    } : {
        name : 'cat',
        breed : 'korean'
    }

dogOrCat2.name
// dogOrCat2.age // error Cat 에는 존재 하지 않음

// narrowing 을 사용해야함
if ('age' in dogOrCat2) {
    dogOrCat2
    dogOrCat2.age
    dogOrCat2.name
} else {
    dogOrCat2
    dogOrCat2.name
    dogOrCat2.breed
}
