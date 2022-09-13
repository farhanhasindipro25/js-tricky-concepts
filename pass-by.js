// Primitive Types: Pass By Value
// Primitive Types don't change values of original variables if they are changed inside a block scope.
let n1 = 5;
let n2 = 7;

function multiply(a, b) {
  a = 27;
  const result = a * b;
  return result;
}
console.log(n1);
const output = multiply(n1, n2);
console.log(output);
console.log(n1);

// Non-Primitive Types: Pass By Reference
// Non-Primitive Types change values of original variables if they are changed inside a block scope.

let obj1 = {
  name: "A",
};
let obj2 = {
  name: "B",
};
function printObj(obj1, obj2) {
  obj1.name = "C";
  obj2.name = "D";
}
console.log(obj1, obj2);
printObj(obj1, obj2);
console.log(obj1, obj2);
