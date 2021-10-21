# Array methods

Support video: https://youtu.be/wBKv2EX2hw8 and https://youtu.be/w4FNF8FLjQU



## Array map

Imagine you have an array of names...

```js
const mentors = ["Daniel ", "irina ", " Gordon", "ashleigh "];
```



You notice that the names are not formatted consistently. To fix the array  you decide you need to trim whitespace and convert to lowercase. How do  you do that for every value in the array?

We can write a function that changes one name:

```js
function tidy(name) {
  return name.trim().toLowerCase();
}
```



All you need to run every name in the array through this function and  update the array values. Thankfully there is an array method that does  just this!



### `.map()`

*Runs every item in the array through a function and returns a new array with the values returned by the function*.

Have a look at this other example:

```js
function double(number) {
  return number * 2;
}

const numbers = [1, 2, 3];
const numbersDoubled = numbers.map(double);
```



The `map()` method runs the function we provided (`double`) on each item in the array and uses the return values to create a new array. In the example `numbersDoubled` is a new array containing `[2, 4, 6]`.



### Callback functions

A function that we provide to a method is commonly called a *callback* function. The term highlights that although we *provide* the `double` function, the `.map()` method *calls* it. (Notice how we never write `double()` to call the function).

We'll see callback functions used a lot more in the coming weeks.

Often, when a function is only needed for a map operation, developers will  declare the callback function inside of the method call. Let's try  copying and pasting the function declaration inside of the `.map()` method call.

```js
const numbers = [1, 2, 3];
const numbersDoubled = numbers.map(function double(number) {
  return number * 2;
});
```



We can make this shorter by removing the function name to declare an *anonymous function*. We can do this because we are not using the function anywhere else in  the code, so we do not need the function name to reference it.

```js
const numbers = [1, 2, 3];
const numbersDoubled = numbers.map(function (number) {
  return number * 2;
});
```





We can make this code even shorter still. In the latest versions of  JavaScript a way of declaring functions was introduced called *arrow functions*.

```js
const numbers = [1, 2, 3];
const numbersDoubled = numbers.map((number) => {
  return number * 2;
});
```



The arrow function syntax lets you declare a function without the `function` keyword. (There are some other subtle differences between arrow  functions and regular functions that you will learn about at a much  later stage).

There is one last thing you can do to make your code shorter. If you remove the braces (`{}`) from an arrow function, the body of the function will be returned without needing to write the `return` keyword.

```js
const numbers = [1, 2, 3];
const numbersDoubled = numbers.map((number) => number * 2);
```



In the example above, the expression `number * 2` is automatically returned because it comes directly after the `=>` arrow (instead of coming after curly braces). This is called an `implicit return`.



### Exercise (10 minutes)

I have a function defined below as:

```js
function abracaFunction(yourFunc) {
  console.log("I am abracaFunction! Watch as I mutate an array of strings to your heart's content!");

  const abracaArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
  ];

  const abracaOutput = yourFunc(abracaArray);

  return abracaOutput;
}
```





This function does not need to be modified. Can you pass in a *callback function* which will mutate `abracaArray` such that it:

- Upper cases all letters in the array



### Exercise - extra credit

Modify your callback function from the previous exercise so that it also:

- Sorts `abracaArray` in alphabetical order



## Array forEach

The `.forEach()` method is similar to `.map()` except it does not return a new array. Therefore `.forEach()` is only useful if you want to perform *side effects*.



### Side effects

Generally, functions should take an input and return an output (based on that input), and not do anything else.

When functions meet this criteria they can be called *pure functions*.

A pure function does not:

- access any data unless it was passed in as a parameter
- change data declared outside the function
- interacts with anything outside of the function (e.g. logs a message to the  console, shows a message on a website, saves data to disk)

These are all example of *side effects*. Of course, from time to time, we will need to perform side effects, but we should try to avoid side effects inside of functions and only have  them when absolutely necessary.



### `.forEach()`

Say we want to log to the console a list of names.

```js
const names = ["Daniel", "mozafar", "irina"];
```



We can use `.forEach()` to go through the array, item by item, and call a function we provide.

```js
names.forEach(function (name, index) {
  console.log(index + ": " + name);
});
```



### Exercise (10 minutes)

- Create a function that takes a `birthYear`, and returns the age of someone
- You are given an array with year that 7 people were born, `[1964, 2008, 1999, 2005, 1978, 1985, 1919]`. Take this array and create another array containing their ages.
- `console.log` the birth years array



### Exercise (5 minutes)

You can drive in the UK at the age of 17.

- Write another function that takes a birth year and returns a string `Born in {year} can drive` or `Born in {year} can drive in {x} years`
- Use the array of birth years, `[ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ]`, to get an array of strings saying if these people can drive
- `console.log` the answers



## Array filter

Imagine you have an array of trainees' test scores:

```js
*const* testScores = [90, 50, 100, 66, 25, 80, 81];
```



You want to show only the test scores that are higher than 80. How do you do that for every value in the array?

We can write a function that checks if one score is greater than 80:

```js
function isHighScore(score) {
  return score > 80;
}
```



To find out which scores were greater than 80, you'd have to run this  function against every score in the array, and push the 80+ scores into a new array. Thankfully there is an array method that does just this!



### `.filter()`

*Runs every item in the array through a condition that we set, and returns a new array with the values that match the condition*.

```js
const highTestScores = testScores.filter(isHighScore);
console.log(highTestScores); // logs [90, 100, 81]
```



### Exercise (10 mins)

Create a function which:

- Takes an array of `birthYears`
- Uses `console.log` to print the message `These are the birth years of people who can drive: <filtered birth years>`
- Returns an array of people who can drive (remember, you can drive if you are 17 years or older)



### Chaining

Notice how we were able to write one method after another e.g. `names.map(formatName).forEach(log)`? This is called *method chaining*.

You can call `.forEach()` after `.map()` because `.map()` returns a new array.

Consider this code:

```js
function formatName(name) {
  return name.split("")[0].toUpperCase() + name.slice(1);
}

function log(name, index) {
  console.log(index + ": " + name);
}

const namesFormatted = names.map(formatName);
namesFormatted.forEach(log);
```



It can be written more simply (without assigning the array returned from `.map()` to a variable):

names.map(formatName).forEach(log);

Be careful though! You can not call `.map()` after `.forEach`.

names.forEach(log).map(formatName); *// ERROR*

This code does not work because `forEach()` does not return a new array (it returns `undefined`). The code is therefore attempting to call `.map()` on `undefined`, and `undefined` does not have a `.map()` method.



### Exercise (15 minutes)

Create a function which accepts an array of "messy" strings. Example:

```js
[
  100,
  "iSMael",
  55,
  45,
  "sANyiA",
  66,
  "JaMEs",
  "eLAmIn",
  23,
  "IsMael",
  67,
  19,
  "ElaMIN",
];
```



This function should:

- Remove all non-string entries
- Change the strings to upper case, and add an exclamation mark to the end

If you're using the above example, you should expect to return an array with 2x `ELAMIN!`, 1x `SANYIA!`, 2x `ISMAEL!` and 1x `JAMES!`.



> Taken from https://syllabus.codeyourfuture.io/js-core-1/week-3/lesson