// 함수형 방식으로
/*
	토마토 : 7000원
	오렌지 : 15000원
	사과 : 10000원
*/

function priceOfTomato() {
  return 7000;
}

function priceOfOrange() {
  return 15000;
}

function priceOfApple() {
  return 10000;
}

function list1() {
  // 토마토, 오렌지, 사과 한상자
  return priceOfTomato() + priceOfOrange() + priceOfApple();
}

console.log(list1);

function list2() {
  // 토마토 2상자
  return priceOfTomato() * 2;
}
console.log(list2);

function list3() {
  // 오렌지 100상자
  return priceOfOrange() * 100;
}

console.log(list3);

function getPrice1(fruit: string) {
  if (fruit === "tomato") {
    return 7000;
  } else if (fruit === "orange") {
    return 15000;
  } else if (fruit === "apple") {
    return 10000;
  }
}

function getPrice2(fruit: "tomato" | "orange" | "apple"): number {
  const priceOfFruit = {
    tomato: 7000,
    orange: 15000,
    apple: 10000,
  };
  return priceOfFruit[fruit];
}

export {};
