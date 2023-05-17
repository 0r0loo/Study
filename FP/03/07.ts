interface Item {
  code: string;
  outOfStock: boolean;
  name: string;
  price: number;
  quantity: number;
}

const cart: Item[] = [
  { code: "001", outOfStock: true, name: "Water", price: 1.99, quantity: 1 },
  { code: "002", outOfStock: true, name: "Juice", price: 3.99, quantity: 2 },
  { code: "003", outOfStock: false, name: "Apple", price: 0.99, quantity: 3 },
  { code: "004", outOfStock: false, name: "Orange", price: 0.79, quantity: 4 },
  { code: "005", outOfStock: false, name: "Banana", price: 0.59, quantity: 5 },
  { code: "006", outOfStock: false, name: "Kiwi", price: 1.09, quantity: 6 },
  { code: "007", outOfStock: false, name: "Lime", price: 1.29, quantity: 7 },
  { code: "008", outOfStock: false, name: "Peach", price: 1.49, quantity: 8 },
  { code: "009", outOfStock: false, name: "Grapes", price: 1.69, quantity: 9 },
  { code: "010", outOfStock: false, name: "Cherry", price: 1.89, quantity: 10 },
];

const stockItem = (item: Item): string => `
      <li class="item">
          <h2>${item.name}</h2>
          <div>가격 : ${item.price}</div>
          <div>수량 : ${item.quantity}</div>
      </li>
`;

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
  // 전체 목록중 재고가 있는 상품만 getValue를 실행하고 그 값을 모두 더한다.
  // let total = 0;
  // for (let i = 0; i < list.length; i++) {
  //   if (list[i].outOfStock) continue;
  //   total += getValue(list[i]);
  // }
  // return total;

  return (
    list
      // 1. 재고가 있는 상품만 분류하기
      .filter((item) => !item.outOfStock)
      // 2. 분류된 상품들에 대해서 getValue 실행하기
      .map(getValue)
      // 3. getValue 실행된 값들을 모두 더하기
      .reduce((total, value) => total + value, 0)
  );
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
  return `<h2>전체 가격 : ${totalPrice}원<h2/>`;
};

const list = (list: Item[]) => {
  // let html = "";
  //
  // for (let i = 0; i < cart.length; i++) {
  //   const item = cart[i];
  //   html += itemHTML(item);
  // }
  //
  // html += `
  //   <li class="summary">
  //       <h2>Summary</h2>
  //       <div>총 가격 : ${totalPrice(list)}</div>
  //       <div>총 수량 : ${totalCount(list)}</div>
  //   </li>`;
  // return `
  //   <ul class="cart">
  //       ${html}
  //   </ul>`;

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
