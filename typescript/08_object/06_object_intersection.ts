// Object Intersection
type PrimitiveIntersection = string & number;

type PersonType = {
    name: string;
    age: number;
}

type CompanyType = {
    company: string;
    companyRegistrationNumber: string;
}

type PersonAndCompany = PersonType & CompanyType;

const jiSoo: PersonAndCompany = {
    name: '지수',
    age: 26,
    company: 'YG',
    companyRegistrationNumber: '123-456-7890'
}

type PetType = {
    petName: string;
    petAge: number;
}

type CompanyOrPet = PersonType & (CompanyType | PetType);

const companyOrPet: CompanyOrPet = {
    // PersonType
    name: '지수',
    age: 26,

    // CompanyType
    company: 'YG',
    companyRegistrationNumber: '123-456-7890',

    // PetType
    petName: '뽀삐',
    petAge: 3
}

