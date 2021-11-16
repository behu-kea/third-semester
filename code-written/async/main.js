import getTimeoutPromise from "./get-timeout-promise.js";
import fiveSecondTimeoutPromise from "./five-second-timeout-promise.js";

fiveSecondTimeoutPromise.then(() => console.log(fiveSecondTimeoutPromise));
console.log(fiveSecondTimeoutPromise);
getTimeoutPromise(3000)
  .then(() => console.log("waited for 3 seconds"))
  .catch(() => console.log("something happened"));
