// Generic in Promise

const afterTwoSecond = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done');
        }, 2000);
    });
}

const runner = async function () {
    const res = await afterTwoSecond();
    console.log(res)
}

runner()

const afterOneSecond = function(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done');
        }, 1000);
    });
}


const runner2 = async function () {
    const res = await afterOneSecond();
    console.log(res)
}

runner2()


// 비동기는 Promise 를 반환 해주고 제네릭에 타입 넣어주면 된다.

const runner3 = async function() {
    return 'string return';
}

// async 붙이면 무조건 Promise 를 반환한다.










