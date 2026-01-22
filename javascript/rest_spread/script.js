console.log("samdnjasnd");

function sum(a, ...num) {
  // rest operator  - grouping the remaining part
  let total = 0;
  for (let i = 0; i < num.length; i++) {
    total += num[i];
  }
  return total;
}

sum(4, 5, 6);
