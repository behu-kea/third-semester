console.log("script loaded");
/*
const username = "benjamin";

const age = 12;

console.log(typeof username);
console.log(typeof age);

let schoolName;

console.log(schoolName);

const isOneWrong = "1" == 1;
console.log(typeof isOneWrong);
console.log(isOneWrong);

const isOne = "1" === 1;
console.log(typeof isOne);
console.log(isOne);

/*
ArrayList<String> names = new ArrayList();
names.add("benjamin");
names.add("camilla");
*/

/*
const names = ["benjamin", "camilla"];
names.push("bine");
names.push(2);
names.push(false);
console.log(names);
*/

function printName(name) {
  return name;
}

const returnValue = printName("Benjamin");
console.log(returnValue);

const functions = [printName];
console.log(functions);
console.log(typeof functions[0]);
functions[0]("peter");

function callOtherFunction(functionPrintName) {
  functionPrintName();
}

callOtherFunction(printName);

const usernameAges = {
  benna: 23,
};
console.log(usernameAges);
console.log(usernameAges.benna);
