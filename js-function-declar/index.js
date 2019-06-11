// ----------- Function Declarations
// The order of the function declarations doesn't matter.
console.log('---- Function Declarations ----');
console.log(doubleNumber());
function doubleNumber() {
  return 2*getNumber();
}

function getNumber() {
  return 1;
}



// ------------ Function Expressions
console.log('---- Function Expressions ----');
// console.log(fun1(1,2)); // error (called before function expression)

let fun1 = function(val1 = 1, val2) {
  return val1 + val2;
}

console.log(fun1(1,2)); // it works!

// ------------- Callbacks
console.log('--- Callbacks ---');
mainExample(a, b);

function mainExample(func1, func2) {
  func1();
  func2();
}

function a() {
  console.log('a');
}

function b() {
  console.log('b');
}

// ------------- Anonymous Functions
console.log('--- Anonymous Functions ---');
mainExample(function() {console.log(1)}, function() {console.log(2)});

// ------------- Arrow Functions
console.log('--- Arrow Functions ---');

let arrowFunc = () => 1 + 1;
console.log(arrowFunc());

let arrowFunc2 = i => i + 1;
console.log(arrowFunc2(2));

// Arrow + Callback
let mainArrow = (arrowFunc) => arrowFunc(2, 2);
console.log(mainArrow((a, b) => a + b));

// ------------- Function Object
console.log('--- Function Object ---');
let functionObj = function() {
  console.log("function object print");
}
functionObj.message = 'this is the function message';
console.log(functionObj.name, functionObj.message, functionObj.length, functionObj.caller);
functionObj();
functionObj.call();

// ------------- Named Function Expression (NFE)
console.log('--- Named Function Expression (NFE) ---');
functionGlobalName = function internalFunctionName() {
  console.log(internalFunctionName.name);
}
functionGlobalName();
// internalFunctionName(); // error
let fun = new Function('console.log(\'new Function\')');
fun();