function add(a, b) {
  // function scoped (Block Scoped)
  const total = a + b;
  console.log(a, b);
  if(b > 5){
    // sum is available/accessible only within this if statement (Block Scoped)
    const sum = 25 + a + b;
  }
  else{
    const sum = 5 + a + b;
    var current = sum;
  }
  console.log(current)
  return total;
}

// Not accessible outside function
// console.log(total);
// console.log(a, b);
console.log(add(5, 7));


// Variables declared with var are taken to the top of the function. This is called hoisting. That is why variables declared with var can be accessed outside it's block scope.