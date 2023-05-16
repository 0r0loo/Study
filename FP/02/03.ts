// 명령적 방식으로 부수효과 개쩜
/*
	토마토 : 7000원
	오렌지 : 15000원
	사과 : 10000원
*/

// 1번 예제
let totalPrice = 0;
totalPrice += 7000;
totalPrice += 15000;
totalPrice += 10000;

console.log(totalPrice);

// 2번 예제
totalPrice = 0;
function addTomato() {
  totalPrice += 7000;
}

function addOrange() {
  totalPrice += 15000;
}

function addApple() {
  totalPrice += 10000;
}

function getList1() {
  addTomato();
  addOrange();
  addApple();
  console.log(totalPrice);
}

totalPrice = 0;
function getList2() {
  // 토마토 2상자
  addTomato();
  addTomato();
  console.log(totalPrice);
}

totalPrice = 0;
function getList3() {
  // 오렌지 100상자
  for (let i = 0; i < 100; i++) {
    addOrange();
  }
  // or
  addOrange();
  addOrange();
  addOrange();
  // .......

  console.log(totalPrice);
}

export {};
