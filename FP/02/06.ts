function getPrice(fruit: string): number | undefined {
  if (fruit === "tomato") {
    return 7000;
  } else if (fruit === "orange") {
    return 15000;
  } else if (fruit === "apple") {
    return 10000;
  }
}

// undefined 까지 받게하 getPrice 와 공역 치역 일치시킴
function isExpensive(price: number | undefined): boolean {
  if (price === undefined) {
    return false;
  }

  return price >= 10000;
}

function main() {
  return isExpensive(getPrice("tomato"));
}

export function isExpensivePrice(fruit: string): boolean {
  return isExpensive(getPrice(fruit));
}

export {};
