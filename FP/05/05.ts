const curry2 =
  <A, B, C>(f: (a: A, b: B) => C) =>
  (a: A) =>
  (b: B): C =>
    f(a, b);

const flip =
  <A, B, C>(f: (a: A, b: B) => C) =>
  (b: B, a: A): C =>
    f(a, b);

const map = <A, B>(array: Array<A>, f: (a: A) => B): Array<B> => {
  const result: Array<B> = [];
  for (const value of array) {
    result.push(f(value));
  }
  return result;
};

const main = () => {
  const numbers = [1, 2, 3];
  const isEven = (x: number) => x % 2 === 0;

  map(numbers, isEven);

  // curriedMap :: Array<A> => (A => B) => Array<B>
  const curriedMap = curry2(map);
  curriedMap(numbers)(isEven);

  // map :: Array<A> ~> (A => B) => Array<B>
  numbers.map(isEven);

  const map_ = curry2(flip(map));
  map_(isEven)(numbers);
};

export {};
