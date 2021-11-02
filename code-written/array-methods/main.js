console.log("init commit");
/*
function add(a, b) {
  return a + b;
}

function functionCaller(a, b, functionAsParameter) {
  const returnValue = functionAsParameter(a, b);
  console.log(returnValue);
}

functionCaller(1, 2, add);

const user = {
  stringLogger: function () {
    console.log("this is a string");
  },
};

const a = user.stringLogger;
console.log(typeof a);
const returnValue = user.stringLogger();
console.log(returnValue);

// Callback functions
// function greet, takes name and callback
function greet(name, anotherFunction) {
  console.log(name);
  anotherFunction();
}

function callSomeString() {
  console.log("Called some string");
}

const functionAsVariable = function () {
  console.log("Called some string, functionAsVariable");
};

greet("benjamin", function () {
  console.log("Called some string");
});

greet("benjamin", callSomeString);

greet("benjamin", functionAsVariable);
*/

// Arrow functions
const sum = function (a, b) {
  return a + b;
};

// remove function keyword and add the arrows
const sumArrow = (a, b) => {
  return a + b;
};
console.log(sumArrow(1, 1));

const sumArrowSimplified = (a, b) => a + b;
console.log(sumArrowSimplified(1, 1));

// array methods
const names = ["benjamin", "peter", "mohamed"];
for (let i = 0; i < names.length; i++) {
  const name = names[i];
  //console.log(name);
}
const newName = function (name) {
  //console.log("hello");
  console.log(name);
};

//names.forEach(newName);
names.forEach((name) => console.log(name));

// map transforming
const surnames = ["Hughes", "Jensen"];
const surnamesMapped = surnames.map(function (surname) {
  // string literal
  // return surname[0] + ".";
  return `${surname[0]}.`;
});

console.log(surnamesMapped);

// [H., J. ]
/*
const grades = [2, 5, 7, 10, 12, 12, 3, 6];
const goodGrades = grades.filter(function (grade) {
  console.log(grade);

  if (grade >= 7) {
    console.log("This item should be kept");
    return true;
  }
});

console.log(goodGrades);
*/
//optimized
const grades = [2, 5, 7, 10, 12, 12, 3, 6];
const goodGrades = grades.filter((grade) => grade >= 7);

console.log(goodGrades);
