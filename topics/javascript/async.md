# Async

Asynchronous programming is for some the hardest part of Javascript. But throughout this course you have actually worked with asynchronous programming but probably without you noticing it! Here are two examples:

1. `addEventListener` - this method will call another method some event happens
2. `fetch` - this method will fetch some data and when that data is fetched it will call a method

This is what essentially asynchronous programming in Javascript is: You set up a function that will wait until something happens (a button is clicked, some data is fetched, a countdown is done and so on). When that something happens a function that you gave the other function will get called. This is also the concept behind a callback function that we briefly talked about.



## `setTimeout`/`setInterval`

The `setTimeout` method will wait some time before calling a method.

```js
setTimeout(function() {
	console.log("This is logged after 3 seconds");
}, 3000);
```

`setTimeout` takes two arguments. 

1. The function you want to run when the time is up (the callback function)
2. The number of milliseconds before the callback function will be called



The `setInterval` will works nearly like the `setTimeout` function it just keeps calling the callback function for every milliseconds you specify

```js
setinterval(function() {
	console.log("This is logged every 3 seconds");
}, 3000);
```



## Function can take another method

In Javascript functions work just like any other variable. That means that they can be added to an array, the can be given as an argument to antoher function or the can be the value of an object's key. 



Let's first take a look at this example. It is a number that gets thrown around in an array, as an object key, and as a parameter in a function.

```js
const someNumber = 2;

const methodArray = [someNumber, 6];

const functionObject = {
  numberKey: someNumber
}

function takesAnotherNumber(numberParameter) {
	console.log(numberParameter);
}

takesAnotherNumber(someNumber);
```



Now take a look at this example. Here what is being thrown around is not a number but a function. Because for Javascript there is no difference.

```js
const someFunction = function() {
	const age = 22;
	console.log(age);
}

const methodArray = [someFunction, function() {
  console.log("I am a function in an array");
}];

const functionObject = {
  functionKey: someFunction
}

function takesAnotherFunction(functionParameter) {
  functionParameter();
}

// In the example someFunction is acting as a callback function
takesAnotherFunction(someFunction);
```

This might be a bit mind bending, but is supposed to help with realizing that functions in Javascript is **just** like any other type.



## Promise usage

Remember last class when we were working with `fetch`. 



Remember errors!

