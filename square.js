function squareNumber(num1, num2, num3) {
  const total = num1 ** 2 + num2 ** 2 + num3 ** 2;
  console.log(total);
  const average = total / 3;
  return average;
}
const numbers = squareNumber(5, 6, 7);
console.log(numbers);
