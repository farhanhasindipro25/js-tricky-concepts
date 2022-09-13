// Callback Functions: When a function is passed as a parameter into another function.

function greeting(callbackFunction, parameter) {
  callbackFunction(parameter);
}

function greetingHandler(name) {
  console.log("Good Morning", name);
}
function greetingEvening(name) {
  console.log("Good Evening", name);
}

greeting(greetingHandler, "Tom Hiddleston");
greeting(greetingEvening, "Tom Hiddleston");

// function.length gives the number of parameters the function takes.