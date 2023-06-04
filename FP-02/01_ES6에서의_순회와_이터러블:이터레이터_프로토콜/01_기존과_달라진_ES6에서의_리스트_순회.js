const log = console.log

// ## 기존과 달라진 ES6에서의 리스트 순회
// - for i++
// - for of

// ES5
const list = [1, 2, 3];
for (var i = 0; i < list.length; i++ ) {
    log(list[i]);
}

const str = 'abc';
for (var i = 0; i < str.length; i++ ) {
    log(str[i]);
}


// ES6
for (const a of list) {
    log(a);
}

for (const a of str) {
    log(a);
}

















