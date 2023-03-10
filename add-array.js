const myNumber = [45, 85, 95, 35, 15];
const yourNumber = [12, 98, 69, 78];
function addArray(num1, num2) {
  const sumArray = num1.concat(num2);
  const maxNumber = Math.max(...sumArray);
  return maxNumber;
}
const sumNumbers = addArray(myNumber, yourNumber);
console.log(sumNumbers);
