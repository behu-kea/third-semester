# Conditional

Like humans, computer programs make decisions based on the information given to them. **Conditionals** are a way of representing these decisions in code (remember, you saw this in a previous exercise!)

For example:

- In a game, if the player has 0 lives, then the game is over
- In a weather app, if rain is forecast, a picture of rain clouds is shown

The most common type of conditional is the **if statement**.

An if statement runs some code if a condition is met. If the condition is not met, then the code will be skipped.

```javascript
const isHappy = true;

if (isHappy) {
  console.log("I am happy");
}
```





The code in paratheses - e.g. `(isHappy)` - is the condition. The condition can be *any* expression. The following are all valid conditions:

```javascript
// boolean value

if (true) {
  // do something
}

// variable assigned to boolean value
const isHappy = true;

if (isHappy) {
  // do something
}

// equality operator returns a boolean value
if (1 + 1 === 2) {
  // do something
}

// comparison operator returns a boolean value
if (10 > 5) {
  // do something
}

// function call returns boolean value
if (greaterThan10(5)) {
  // do something
}
```





An `if` statement runs code when a condition is met. What if the condition is  not met? Sometimes you want to run an alternative bit of code.

An **if...else statement** also runs code when the condition is *not* met.

```javascript
const isHappy = true;

if (isHappy) {
  console.log("I am happy 😄");
} else {
  console.log("I am not happy 😢");
}
```



What if there is more than one condition you want to handle in your  function? For example, what if you can be confused as well? You can use **else if** to handle multiple conditions.



## Exercises



### Exercise 1

Investigate what a ternary operator is and how to use it. Write down 2 code examples of how to use a ternary operator. Why would you use ternary over if else?



### Exercise 1.1

Explain what these lines of code does

```javascript
const num = 23;

if (num > 20) {
  return `${num} is greater than 20`;
} else if (num === 20) {
  return `${num} is equal to 20`;
} else if (num < 20) {
  return `${num} is less than 20`;
} else {
  return `${num} isn't even a number :(`;
}
```



### Exercise 2

Create a small program that gives you a message depending on your mood! It should:

- use a variable called `mood`
- return "Good job, you're doing great!" if you pass in "happy"
- return "Every cloud has a silver lining" if you pass in "sad"
- return "Beep beep boop" if you pass in a number
- return "I'm sorry, I'm still learning about feelings!" if you pass in anything else

