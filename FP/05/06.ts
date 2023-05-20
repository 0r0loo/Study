import * as O from "../04/08";

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

  // map_ :: (A => B) => Array<A> => Array<B>
  const map_ = curry2(flip(map));
  map_(isEven)(numbers);

  // isEven :: number => boolean
  // mapIsEven :: Array<number> => Array<boolean>
  const mapIsEven = map_(isEven);

  isEven(4);
  isEven(511);

  mapIsEven(numbers);
  mapIsEven([]);

  // Option map 코드 구현해줘

  const omap = curry2(flip(O.map));
  // optionIsEven :: Option<number> => Option<boolean>
  const optionIsEven = omap(isEven);

  optionIsEven(O.some(42));
  optionIsEven(O.none());
};

export {};
