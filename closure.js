function kitchen() {
  let roast = 0;
  return function () {
    roast++;
    return roast;
  };
}

const firstServer = kitchen();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());

console.log(".............................");

const secondServer = kitchen();
console.log(secondServer());
console.log(secondServer());
console.log(secondServer());
console.log(secondServer());
console.log(secondServer());
console.log(secondServer());
console.log(secondServer());
console.log(secondServer());
console.log(secondServer());
console.log(secondServer());
console.log(secondServer());
console.log(secondServer());
console.log(secondServer());
console.log(secondServer());
console.log(secondServer());
console.log(secondServer());
console.log(secondServer());

// Instances are created for the same function.
// Closure: Inner function can access the variable outside it's scope.
