// Readonly type

interface Cat {
    name: string;
    age: number;
}

const nyaong: Cat = {
    name: '냥',
    age: 3,
}

nyaong.name = '냥냥이';

const bori: Readonly<Cat> = {
    name: '보리',
    age: 2,
}

// bori.name = '보리보리'; // Error

Object.freeze(bori); // 객체를 읽기 전용으로 만듦
