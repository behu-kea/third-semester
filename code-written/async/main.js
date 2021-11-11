import getTimeoutPromise from "./get-timeout-promise.js";
import fiveSecondTimeoutPromise from "./five-second-timeout-promise.js";

fiveSecondTimeoutPromise.then(() => console.log(5));

getTimeoutPromise(3000)
  .then(() => console.log("waited"))
  .catch(() => console.log("something happened"));
