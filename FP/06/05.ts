const tenDivideBy = (n: number) => {
  if (n === 0) {
    throw new Error("0으로 나눌 수 없습니다.");
  }
  return 10 / n;
};

const test = () => {
  // const result = tenDivideBy(0) // 참조에 투명하지않음
  try {
    const result = tenDivideBy(0);
    return result;
  } catch (e) {
    return 1;
  }
};

const main = () => {
  const x = test();
  console.log(x);
  console.log("프로그램이 종료 되었습니다.");
};

export {};
