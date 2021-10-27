# Arrow function



There is another way of writing functions. It is quite useful and used a ton in more modern Javascript! especially with array methods!



Let's first create a simple example of a function 👇

```javascript
function sum(a, b) {
	return a + b;
}

// lets rewrite this into a variable that is assigned

const sum = function (a, b) {
	return a + b;
}

console.log(sum(1,2)); // 3
```

Now let's rewrite this into using arrow functions

```javascript
const sum = (a, b) => {
	return a + b;
}
console.log(sum(1,2)); // 3
```

So it looks quite similar. but we omit the `function` keyword and write the arrow `=>` between the parameters and the curly brackets. 

Now if there only is one line in the method you can even omit the curly brackets!

```javascript
const sum = (a, b) => a + b;
console.log(sum(1,2)); // 3
```

Now `a + b` is automatically returned. That is called implicit return! 

```javascript
const numberLogger = (a, b) => console.log(a, b);
numberLogger(1,2); // 1 2
```





