// Overloading
// 파라미터를 하나를 받거나 세개를 받는 함수

function stringOrString(memberOrMembers:string, member2?:string, member3?:string) {
    if (member2 && member3) {
        return memberOrMembers + member2 + member3;
    }
    return memberOrMembers
}

console.log(stringOrString('안유진', '장원영', '레이'))
console.log(stringOrString('안유진, 장원영, 레이'))
console.log(stringOrString('안유진', '장원영')) // 이건 안돼

function stringOrString2(members: string): string;
function stringOrString2(member1: string, member2: string, member3: string): string;

function stringOrString2 (memberOrMembers:string, member2?:string, member3?:string) {
    if (member2 && member3) {
        return memberOrMembers + member2 + member3;
    }
    return memberOrMembers
}


// console.log(stringOrString2('안유진', '레이')) // 1 or 3개의 파라미터를 받음
