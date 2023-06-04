import 'reflect-metadata'

const iu = {
    name: '아이유',
    age: 32,
    nationality: 'Korea',
}

console.log(iu)

// 파라미터의 정의
// 1) 메타데이터의 키
// 2) 메타데이터 키에 저장할 값
// 3) 메타데이터를 저장할 객체
// 4) 메타데이터를 저장할 객체의 프로퍼티
// 4번은 필수가 아님
// 메타데이터가 무엇인가? - 데이터에 대한 데이터


Reflect.defineMetadata('test-meta', 123, iu)

console.log(iu);

console.log(Reflect.getMetadata('test-meta', iu))

Reflect.defineMetadata('test-meta', 456, iu)
console.log(Reflect.getMetadata('test-meta', iu,))


// 프로퍼티에 저장하기
Reflect.defineMetadata('object-meta', 999, iu, 'name')
console.log(Reflect.getMetadata('object-meta', iu, 'name'))


// 삭제하기
Reflect.deleteMetadata('object-meta', iu, 'name')
console.log(Reflect.getMetadata('object-meta', iu, 'name'))


console.log(Reflect.getMetadataKeys(iu))
console.log(Reflect.getMetadataKeys(iu, 'name'))
