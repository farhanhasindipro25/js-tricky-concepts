// For primitive data types:
// double equals(==) checks the value.
// triple equals(===) checks the value and the type of the variable.

// For non-primitive data types:
// both double and triple equals checks the references.

const first = 2;
const second = 2;
if (first == second) {
  console.log("Equal");
} else {
  console.log("Unequal");
}


// Type Coercion/Conversion/Casting.

// 1 == true => equal
// 0 == false => equal
// '1' == true => equal
// '0' == false => equal