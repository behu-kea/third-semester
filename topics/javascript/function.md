# Function

Support video arrow function: https://youtu.be/DFyfbJk4sZw



Functions are blocks of code that can do a task as many times as you ask them to. They take an input and return an output.

Here's a function that doubles a number:

````javascript
function double(number) {
  return number * 2;
}
````



To use a function then we we need to **call** it ( some people will say **invoke** )

```javascript
const result = double(2);
console.log(result); // 4
```



The function `double` is being called by placing parathenses after the name of the function like this `double()`

🔑 The input given to a function is called a **argument**

🔑 A **parameter** is a variable that is used to refer to an **argument**

In the example above, we're saying that inside the function `double`, there is a variable called number, but we don't know what the value of  the variable is until someone calls the function, at which point they  will give a value for that variable.

A function can have one or more **parameters**, check out the example below:

```javascript
function add(a, b) {
  return a + b;
}
```



In the function `add`, the parameters are `a` and `b`.

If we call the function like this `add(10, 32)` then we're passing 2 arguments (or inputs) into the function : `10` and `32`. We can use any expression as an argument.

When you write a function (sometimes called *declaring a function*) you can define the parameters with any valid variable name.

The function below does exactly the same thing as the one above:

``````javascript
function add(num1, num2) {
  return num1 + num2;
}
``````



### Exercises (20 minutes)

In a new javascript file try solving each of the questions below:

##### 

#### Exercise 1

Create a function called `formatPenceToPounds` that should

- take a number as an input ( representing an amount of money in pence )
- return a string starting with a `£` sign and the input number converted to pounds.

For example, `formatPenceToPounds(199)` should evaluate to `"£1.99"`

In your groups, think carefully about the following things:

- what the parameter name should be
- creating good names for any variables you use
- don't use `console.log` inside the body of the function

Call `formatPenceToPounds` a few times with different inputs and `console.log` the outputs in order to check your function. 🙂

##### 

#### Exercise 2

Create a function called `increaseByHalf` that should

- take a number as an input
- return this input number **increased by a half**

E.g. `increaseByHalf(50)` should **evaluate** to `75`

E.g. `increaseByHalf(100)` should **evaluate** to `150`

In your groups, think carefully about the following things:

- what the parameter name should be
- creating good names for any variables you use
- don't use `console.log` inside the body of the function

Call `increaseByHalf` a few times with different inputs and `console.log` the outputs in order to check your function is working properly.

Now declare a variable called `pocketMoney` and assign to it a value of `413`.

Someone's been generous and decided to increase your `pocketMoney` by 50% 😎

Using the functions `increaseByHalf` and `formatPenceToPounds` only, find the new amount of pocket money as a string in pounds with a `£` symbol at the front.

Then use `console.log` the output in order to check your function.

##### 

#### Exercise 3

Check out the code below:

```javascript
function printMessage(x) {
  console.log("Hello, nice to meet you " + x);
}

function getMessage(name) {
  return "Hello, nice to meet you " + name;
}

printMessage("Mitch");
printMessage("August");
getMessage("Laetitia");
```



The functions above behave similarly but *differ* in some important ways.

In groups, study the code above and then answer the following questions:

1. How many times is the function `printMessage` called ?
2. How many times is the function `getMessage` called ?
3. What is the parameter name for the function `printMessage` ?
4. What is the parameter name for the function `getMessage` ?

Discuss briefly which **parameter name** is better out of the two functions and why ?

5. What is the **return value** of the function `printMessage` whenever it is called ?

Someone then creates 2 further variables `messageForAli` and `curiousMessage`:

```javascript
const messageForAli = getMessage("Ali");

const curiousMessage = getMessage(42);
```



6. What will the variable `messageForAli` evaluate to when the code above is executed ? g) What will the variable `curiousMessage` evaluate to when the code above is executed ?

Remember you can use `console.log` to log variables in order to check your answers to f) and g)

Hint: Think carefully about the parameters and arguments for `getMessage` for part g)



> This part has been taken from https://syllabus.codeyourfuture.io/js-core-1/week-1/lesson#functions