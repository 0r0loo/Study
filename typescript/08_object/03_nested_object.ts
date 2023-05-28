// Nested Object

type NestedPerson = {
    identity: {
        name: string;
        age: number;
    },
    nationality: string;
}

const nestedPerson: NestedPerson = {
    identity: {
        name: 'John',
        age: 30
    },
    nationality: 'American'
}


type TPersonIdentity = {
    name: string;
    age: number;
}

type TPerson = {
    identity: TPersonIdentity
    nationality: string;
}

const iu: TPerson = {
    identity: {
        name: 'IU',
        age: 28
    },
    nationality: 'Korean'
}

// 에러가 났을 때 디버깅 하기 힘드니까 (에러메시지가 길어져서 )
// 타입 지정해서 넣어주는게 좋음
// 후자방법으로

interface IPersonIdentity {
    name: string;
    age: number;
}

interface IPerson {
    identity: IPersonIdentity;
    nationality: string;
}











