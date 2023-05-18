// 값이 있을 수도, 없을 수도 있는 자료구조
// 이건 에바임 혼동이 올수있음
type OptionBadCase<A> = A | undefined;

// 값이 있으면 Some, 없으면 None

type Some<A> = {
  readonly _tag: "Some";
  readonly value: A;
};

export type None = {
  readonly _tag: "None";
};

type Option<A> = Some<A> | None;

const some = <A>(value: A): Option<A> => ({ _tag: "Some", value });
const none = (): None => ({ _tag: "None" });

const isSome = <A>(oa: Option<A>): oa is Some<A> => oa._tag === "Some";
const isNone = <A>(oa: Option<A>): oa is None => oa._tag === "None";

export {};
