import getTimeoutPromise from "./get-timeout-promise.js";
import fiveSecondTimeoutPromise from "./five-second-timeout-promise.js";

//console.log(1);
//g();
// different scoping
function g() {
  console.log("g");
}

// this does not work because scoping
//f();

const f = () => {
  console.log(2);
  console.log("hello");
};
//console.log(3);

//setTimeout(f, 3000);

setTimeout(() => {
  //console.log("called after 3 seconds");
}, 3000);

const intervalId = setInterval(() => {
  //console.log("called after 3 seconds");
}, 3000);
//console.log(intervalId);

// PROMISE
//console.log(fiveSecondTimeoutPromise);

fiveSecondTimeoutPromise
  .then(() => {
    //console.log("sucesseful");
    //console.log(fiveSecondTimeoutPromise);
  })
  .catch(() => {
    console.log("there was an error");
    console.log(fiveSecondTimeoutPromise);
  });
/*
const timeoutPromise = getTimeoutPromise(1000);
console.log(timeoutPromise);
timeoutPromise
  .then(() => {
    console.log("sucesseful");
    console.log(timeoutPromise);
  })
  .catch(() => {
    console.log("there was an error");
    console.log(timeoutPromise);
  });
*/
const fetchVariable = fetch("http://api.open-notify.org/astros.json");
//console.log(fetchVariable);

const thenReturn = fetchVariable
  .then((Response) => {
    //console.log(Response);
    //return 1;
    const jsonRepsonse = Response.json();
    console.log(jsonRepsonse);
    return jsonRepsonse;
  })
  .then((data) => {
    console.log(data);
    //console.log(number);
    //console.log("resolved");
  })
  .catch(() => {
    console.log("we have an error");
  });
