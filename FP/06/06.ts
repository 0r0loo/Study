// 실패하거나 성공했을 때 각각 다른 값을 가지는 자료 구조

type Success<R> = {
  readonly _tag: "success";
  readonly result: R;
};

type Failed<E> = {
  readonly _tag: "failed";
  readonly error: E;
};

type Try<R, E> = Success<R> | Failed<E>;

const success = <R>(result: R): Try<R, never> => ({
  _tag: "success",
  result,
});

const failed = <E>(error: E): Try<never, E> => ({
  _tag: "failed",
  error,
});

const isSuccess = <R>(ta: Try<R, unknown>): ta is Success<R> =>
  ta._tag === "success";

const isFailed = <E>(ta: Try<unknown, E>): ta is Failed<E> =>
  ta._tag === "failed";

const getOrElseReturnPrimitive = <R>(ta: Try<R, unknown>, defaultValue: R): R =>
  // 에러가 있을 경우 기본 값을 사용한다.
  // 결과가 성공이라면 해당 값을 사용한다.
  isSuccess(ta) ? ta.result : defaultValue;

const getOrElse = <R, E>(ta: Try<R, E>, defaultValue: (e: E) => R): R =>
  // 에러가 있을 경우 에러에 기반하여 기본값을 결정한다.
  // 결과가 성공이라면 해당 값을 사용한다.
  isSuccess(ta) ? ta.result : defaultValue(ta.error);

export {};
