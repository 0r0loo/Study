const map = <A, B>(array: Array<A>, f: (a: A) => B): Array<B> => {
  const result: Array<B> = [];
  for (const value of array) {
    result.push(f(value));
  }
  return result;
};

export {};
