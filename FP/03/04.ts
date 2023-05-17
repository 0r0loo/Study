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

const list = () => {
  let html = "";
  let totalPrice = 0;
  let totalQuantity = 0;

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    if (!item.outOfStock) {
      html += `
        <li class="item">
            <h2>${item.name}</h2>
            <div>가격 : ${item.price}</div>
            <div>수량 : ${item.quantity}</div>
        </li>`;
    } else {
      html += `
        <li>
            <h2>${item.name} (품절)</h2>
            <div>가격 : ${item.price}</div>
            <div>수량 : ${item.quantity}</div>
        </li>`;
    }

    totalPrice += item.price * item.quantity;
    totalQuantity += item.quantity;
  }

  html += `
    <li class="summary">
        <h2>Summary</h2>
        <div>총 가격 : ${totalPrice}</div>
        <div>총 수량 : ${totalQuantity}</div>
    </li>`;
  return `<ul class="cart">
    ${html}
    </ul>`;
};

// 관심사 ㅈ망
// 나누면 for 문 여러개라 중복 코드 ㅈ망

console.log(list());

export {};
