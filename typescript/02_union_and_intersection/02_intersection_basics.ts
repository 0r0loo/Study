// Intersection And
interface Human {
    name: string;
    age: number;
}

interface Contacts {
    phone: string;
    address: string;
}

type HumanAndContacts = Human & Contacts;
let humanAndContacts: HumanAndContacts = {
    name: 'John',
    age: 30,
    phone: '123456789',
    address: '123 Main St'
}

type NumberAndString = number & string;
// never 타입이 되어버림


