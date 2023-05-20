const delivery = (present: string, from: string, to: string) => {
  return `
        보내는 물건 : ${present}
        보내는 사람 : ${from}
        받는 사람 : ${to}
    `;
};

console.log(delivery("선물", "엄마", "아들"));

const delivery2 = (present: string, from: string) => (to: string) => {
  return `
        보내는 물건 : ${present}
        보내는 사람 : ${from}
        받는 사람 : ${to}
    `;
};

const momsPresent = delivery2("선물", "엄마");
console.log(momsPresent("아들"));
console.log(momsPresent("딸"));

// 커링으로 바꾸기
const delivery3 = (present: string) => (from: string) => (to: string) => {
  return `
            보내는 물건 : ${present}
            보내는 사람 : ${from}
            받는 사람 : ${to}
        `;
};

const curry3 =
  <A, B, C, D>(f: (a: A, b: B, c: C) => D) =>
  (a: A) =>
  (b: B) =>
  (c: C) =>
    f(a, b, c);

const curriedDelivery = curry3(delivery);

const momsPresent2 = curriedDelivery("선물")("엄마");
console.log(momsPresent2("아들"));

export {};
