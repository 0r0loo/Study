// Optional adn Indefined Propert

interface Dog {
    name: string;
    age: number;
    breed?: string;
}

const byuLe: Dog = {
    name: 'ByuLe',
    age: 2,
    breed: 'Poodle'
}

const ori: Dog = {
    name: 'Ori',
    age: 3
}

interface Cat {
    name: string;
    age: number;
    breed: string | undefined
}

const nabi: Cat = {
    name: 'Nabi',
    age: 2,
    breed: undefined // undefined 를 직접 넣어줘야함 이게 차이임
}

