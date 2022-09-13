/* 
8 ways to get 'undefined'

1. Using a variable that is not initialized.
2. Function with no return statement.
3. Using parameters that are not passed as per arguments of a function/method.
4. Not mentioning what to be returned.
5. Using properties that does not exist inside an object.
6. Accessing array elements outside the index range/ array length.
7. Deleting an element inside an array.
8. Setting a value directly to undefined. Use null instead.
*/

// 1
let first;
console.log(first);

console.log();

// 2
function second(a, b) {
  const total = a + b;
}
console.log(second(2, 2));

console.log();

// 3
function third(a, b, c, d, e) {
  console.log(a, b, c, d, e);
}
third(2, 3);

console.log();

// 4
function noNegative(a, b) {
  if (a < 0 || b < 0) {
    return;
  }
  return a + b;
}
console.log(noNegative(2, -5));

console.log();

// 5
const obj = {
  name: "A",
  id: 1,
};
console.log(obj.name, obj.id, obj.salary, obj.car);

console.log();

// 6.
const arr = [1, 2, 3, 4, 5];
console.log(arr[0], arr[4], arr[10]);

console.log();

// 7. (Absolutely not recommended)
console.log(arr);
delete arr[3];
console.log(arr); // <1 empty item>

console.log();

// 8.
const g = undefined;
const h = null;
console.log(g, h);
