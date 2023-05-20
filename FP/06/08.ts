import * as T from "../util/try";

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

const fromUndefined = <A>(a: A | undefined): Option<A> =>
  a === undefined ? none() : some(a);

const getOrElse = <A>(oa: Option<A>, defaultValue: A): A => {
  // 값이 없으면 지정된 값을 사용한다.
  // 값이 있다면 해당 값을 사용한다.
  return isNone(oa) ? defaultValue : oa.value;
};

const map = <A, B>(oa: Option<A>, f: (a: A) => B): Option<B> => {
  // 값이 없으면 값이 없는 상태를 유지한다.
  if (isNone(oa)) {
    return none();
  }
  // 값이 있으면 값을 함수에 적용한다.
  return some(f(oa.value));
};

const mapOrElse = <A, B>(oa: Option<A>, f: (a: A) => B, defaultValue: B): B =>
  getOrElse(map(oa, f), defaultValue);

interface Item {
  readonly code: string;
  readonly outOfStock: boolean;
  readonly name: string;
  readonly price: number;
  readonly quantity: number;
  readonly discountPrice?: number;
}

const cart: Item[] = [
  {
    code: "tomato",
    outOfStock: false,
    name: "토마토",
    price: 7000,
    quantity: 2,
    discountPrice: 1000,
  },
  {
    code: "orange",
    outOfStock: true,
    name: "오렌지",
    price: 15000,
    quantity: -3,
    discountPrice: 2000,
  },
  {
    code: "apple",
    outOfStock: false,
    name: "사과",
    price: 10000,
    quantity: 30,
  },
];

type ParsedItem = {
  _tag: "parsedItem";
} & Item;

type ParseError = {
  name: string;
  message: string;
};

const parseItem = (item: Item): T.Try<ParseError, ParsedItem> => {
  if (item.quantity < 1) {
    return T.failed({
      name: item.name,
      message: "상품은 반드시 한 개 이상 담아야 합니다.",
    });
  } else if (item.quantity > 10) {
    return T.failed({
      name: item.name,
      message: "상품은 10개 이상 담을 수 없습니다.",
    });
  }

  return T.success({
    _tag: "parsedItem",
    ...item,
  });
};

type ArrayItem = Array<T.Try<ParseError, ParsedItem>>;
const stockItem = (item: ParsedItem): string => {
  return `
    <li>
      <h2>${item.name}</h2>
      <div>가격: ${item.price}원</div>
      <div>수량: ${item.quantity}상자</div>
    </li>
  `;
};

const errorItem = (e: ParseError): string => `
  <li style="color: red">
    <h2>${e.name}</h2>
    <div>${e.message}</div>
  </li>
`;

const outOfStockItem = (item: ParsedItem): string => `
  <li class="gray">
    <h2>${item.name} (품절)</h2>
    <div class='strike'>가격: ${item.price}원</div>
  </li>
`;

const renderItem = (item: ParsedItem): string => {
  if (item.outOfStock) {
    return outOfStockItem(item);
  } else {
    return stockItem(item);
  }
};

const totalCalculator = (
  list: ArrayItem,
  getValue: (item: ParsedItem) => number
) => {
  return (
    T.KeepSuccess(list)
      // Array<T.Try<ParseError, ParsedItem>> => Array<ParsedItem>
      .filter((item) => {
        try {
          return item.outOfStock === false;
        } catch (e) {
          return false;
        }
      })
      .map(getValue)
      .reduce((total, value) => total + value, 0)
  );
};
const totalCount = (list: ArrayItem): string => {
  const totalCount = totalCalculator(list, (item) => item.quantity);
  return `<h2>전체 수량: ${totalCount}상자`;
};

const totalPrice = (list: ArrayItem): string => {
  const totalPrice = totalCalculator(
    list,
    (item) => item.price * item.quantity
  );

  return `<h2>전체 가격: ${totalPrice}`;
};
const list = (list: ArrayItem) => {
  return `
    <ul>
    ${list // 1. 목록에 있는 아이템을 태그로 변경
      .map((item) =>
        T.getOrElse(
          T.map(item, (parseItem) => renderItem(parseItem)),
          errorItem
        )
      )
      // 2. 태그의 목록을 모두 하나의 문자열로 연결
      .reduce((tags, tag) => tags + tag, "")}
    </ul>
  `;
};

console.log(
  `
    ${list(cart.map(parseItem))}
    ${totalPrice(cart.map(parseItem))}
    ${totalCount(cart.map(parseItem))}
    `
);
