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

export {};
