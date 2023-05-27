"use strict";
/*
Enum
 */
/*
API 요청을 한다
상태는 4가지 상태
DONE - 요청 완료 상태
ERROR - 에러가 생긴 상태
LOADING - 로딩 상태
INITIAL - 초기 상태
 */
function runWork() {
    var state = 'INITIAL';
    try {
        state = "LOADING";
        // 작업을 한다.
        state = 'DONE';
    }
    catch (e) {
        state = 'ERROR';
    }
    finally {
        return state;
    }
}
console.log(runWork());
