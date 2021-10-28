# Callback functions

A function that we provide to another function is commonly called a *callback* function. 

In javascript a function is just like any other variable. That means that it can be provided as a parameter to a function. lets try and see an example 👇



```javascript
function functionRunner(functionToRun) {
  // Here we are calling the function that is provided as an argument when calling functionRunner
  functionToRun();
}

function icecreamLogger() {
  console.log('🍦');
}

function icecreamAlerter() {
  alert('🚨🍦🚨');
}

functionRunner(icecreamLogger);
functionRunner(icecreamAlerter);
```

Here `functionRunner` is a function that receives functions and runs them! So whatever function we give to `functionRunner` it will run it!

First `functionRunner` runs the `icecreamLogger` which just logs out an emoji. Then `functionRunner` runs another `icecreamAlerter` that alerts some emojis. B



We can write this in abother way, here

```javascript
function functionRunner(functionToRun) {
  // Here we are calling the function that is provided as an argument when calling functionRunner
  functionToRun();
}

functionRunner(function () {
  console.log('🍦');
});

functionRunner(function () {
  alert('🚨🍦🚨');
});
```

The same as above happens. **But** the two functions we called `functionRunner` with has no name! It just says `function ()`. Therefore this kind of function is called an **anonomous function**!



We can also write it like this 👇

```javascript
function functionRunner(functionToRun) {
  // Here we are calling the function that is provided as an argument when calling functionRunner
  functionToRun();
}

const icecreamLogger = function() {
  console.log('🍦');
}

const icecreamAlerter = function () {
  alert('🚨🍦🚨');
}

functionRunner(icecreamLogger);
functionRunner(icecreamAlerter);
```

Here we create a variabel called `icecreamLogger` then we assign that variable to be an anomous function



## Exercise 1

Create two functions and assign them to two different variables. One function logs out `Earth`, the other function logs out `Saturn`. Now create a new third function that has one parameter: `planetLogFunction`. The only thing the third function should do is call the provided parameter function. Try call the third function once with the `Earth` function and once with the `Saturn` function.

![second task](https://github.com/HackYourFuture-CPH/JavaScript/raw/master/javascript2/week3/assets/planet-log.png)



*Exercise taken from https://github.com/HackYourFuture-CPH/JavaScript*