# Variables

https://youtu.be/Jvrszgiexg0

When you write code, you'll want to create shortcuts to data values so you don't have to write out the same value every time.

We can use a *variable* to create a reference to a value. Variables can be thought of as named  containers. You can place data into these containers and then refer to  the data simply by naming the container.

Before you use a variable in a JavaScript program, you must declare it. Variables are declared with *let* and *const* keywords as follows. `let` tells Javascript that the vairable will be changed. `const` tells Javascript that the variable cannot be changed.

```javascript
let greeting = "Hello world";
console.log(greeting);

const name = "Irina";
console.log(name);
```

The program above will print `Hello World` then `Irina` to the console. Notice how it uses the value assigned to the variable `greeting`

When defining a variable, always declare it as a `const`, then if you need to modify that variable change it to `let`



### Exercise 1 (5 minutes)

##### Exercise

1. Add a variable `greeting` and assign a greeting of your choice to the variable
2. Print your `greeting` to the console 3 times. You should see your greeting 3 times on the console, one on each line.



### Exercise 2 (5 minutes)

Consider this code, it has a syntax error in it.

Fix it so that when running this file it shows the message `'I'm awesome!'`

```javascript
console.log('I'm awesome'!;
```

*Exercise taken from [HakyourFuture](https://github.com/HackYourFuture/JavaScript/tree/main/Week1/practice-exercises)*



