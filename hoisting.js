for (var i = 0; i < 5; i++) {
  console.log("Inside Loop:", i);
}
console.log("Outside Loop:", i);

// Variables declared with var are taken to the top of the function. This is called hoisting. That is why variables declared with var can be accessed outside it's block scope.
// const/let are not hoisted.
// That is why for loop uses let to avoid hoisting.
for (let j = 0; j < 5; j++) {
  console.log("Inside Loop:", j);
}
// console.log("Outside Loop:", j);

// Function declarations are hoisted.
print5();
function print5() {
  console.log("Inside Print 5 Function:", 5);
}

// Function expressions are not hoisted.
print10();
const print10 = function(){
    console.log('Inside Print 5 Function:',10)
}

// if let is used the expression is hoisted, but not the body.