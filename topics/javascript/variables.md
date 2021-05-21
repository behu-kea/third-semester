# Variables

https://youtu.be/Jvrszgiexg0

When you write code, you'll want to create shortcuts to data values so you don't have to write out the same value every time.

We can use a *variable* to create a reference to a value. Variables can be thought of as named  containers. You can place data into these containers and then refer to  the data simply by naming the container.

Before you use a variable in a JavaScript program, you must declare it. Variables are declared with *let* and *const* keywords as follows.

```js
let greeting = "Hello world";
console.log(greeting);

const name = "Irina";
console.log(name);
```

The program above will print "Hello world" to the console. Notice how it uses the value assigned to the variable `greeting`.



### Exercise (5 minutes)

##### Exercise

1. Add a variable `greeting` to js1-week1.js and assign a greeting of your choice to the variable
2. Print your `greeting` to the console 3 times. You should see your greeting 3 times on the console, one on each line.



### Exercise (5 minutes)

Consider this code, it has a syntax error in it.

Fix it so that when running this file it shows the message `'I'm awesome!'`

```js
console.log('I'm awesome'!;
```

*Exercise taken from [HakyourFuture](https://github.com/HackYourFuture/JavaScript/tree/main/Week1/practice-exercises)*



## Strings



In programming there are different *types of* data. You've used one data type already: **string**.

Computers recognise strings as a sequence of characters but to humans, strings are simply lines of text.

*const* message = "This is a string";

Notice that strings are always wrapped **inside of quote marks**. We do this so that the computer knows when the string starts and ends.

You can check that the data is a string by using the `typeof` operator:

```js
const message = "This is a string";
const messageType = typeof message;

console.log(messageType); *// logs 'string'*
```



##### Exercise

1. Write a program that:

- creates a variable called `colors`
- assigns colors "blue" and "yellow" as a comma separate string to `colors`
- logs the type `colors` using `typeof`.

1. What is the `typeof` a number?





### 