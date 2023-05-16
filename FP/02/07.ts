// 숫자를 그대로 돌려주는 함수

const idNumber = (n: number): number => n;

// 문자열을 그대로 돌려주는 함수
const idString = (s: string): string => s;

// boolean 값을 그대로 돌려주는 함수
const idBoolean = (b: boolean): boolean => b;

// 어떤 타입의 값이라도 그대로 돌려주는 함수
const id = <T>(x: T): T => x;

function id2<T>(x: T): T {
  return x;
}

const compose =
  <A, B, C>(g: (n: B) => C, f: (s: A) => B) =>
  (x: A) => {
    return g(f(x));
  };

// <A, B, C>((B) => C, (A) => B): (A) => C

export {};
