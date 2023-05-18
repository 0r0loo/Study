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
    quantity: 3,
    discountPrice: 2000,
  },
  {
    code: "apple",
    outOfStock: false,
    name: "사과",
    price: 10000,
    quantity: 1,
  },
];

const stockItem = (item: Item): string => {
  const optionDiscountPrice = fromUndefined(item.discountPrice);
  const discountPrice = getOrElse(optionDiscountPrice, 0);
  let saleText = "";
  if (isSome(optionDiscountPrice)) {
    saleText = `<span>세일가 : ${discountPrice}원</span>`;
  }

  return `
      <li class="item">
          <h2>${item.name}</h2>
          <div>가격 : ${item.price - discountPrice}원 ${saleText}</div>
          <div>수량 : ${item.quantity}</div>
      </li>
`;
};

const outOfStockItem = (item: Item): string => `
        <li>
            <h2>${item.name} (품절)</h2>
            <div>가격 : ${item.price}</div>
            <div>수량 : ${item.quantity}</div>
        </li>
`;

const itemHTML = (item: Item): string => {
  if (item.outOfStock) return outOfStockItem(item);
  return stockItem(item);
};

const totalCalculator = (list: Item[], getValue: (item: Item) => number) => {
  return list
    .filter((item) => !item.outOfStock)
    .map(getValue)
    .reduce((total, value) => total + value, 0);
};

const totalCount = (list: Item[]): string => {
  const totalCount = totalCalculator(list, (item) => item.quantity);
  return `<h2>전체 수량 : ${totalCount}상자<h2/>`;
};

const totalPrice = (list: Item[]): string => {
  const totalPrice = totalCalculator(
    list,
    (item) => item.price * item.quantity
  );

  const totalDiscountPrice = totalCalculator(list, (item) => {
    const discountPrice = getOrElse(fromUndefined(item.discountPrice), 0);
    return discountPrice * item.quantity;
  });

  return `<h2>전체 가격 : ${
    totalPrice - totalDiscountPrice
  }원 (총 ${totalDiscountPrice} 할인)<h2/>`;
};

const list = (list: Item[]) => {
  return `
    <ul>
    ${list
      // 1. 목록에 있는 아이템을 태그로 변경
      .map(itemHTML)
      // 2. 태그의 목록을 모두 하나의 문자열로 연결
      .reduce((tags, tag) => tags + tag, "")}
    </ul>
  `;
};

console.log(
  `
    ${list(cart)}
    ${totalPrice(cart)}
    ${totalCount(cart)}
    `
);

export {};
