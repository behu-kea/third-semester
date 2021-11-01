# Tuesday

- [Callback functions](../../topics/javascript/callback-function.md) 
- [Arrow function](../../topics/javascript/arrow-function.md) 
- [Array methods](../../topics/javascript/array-methods.md)
- Do the exerises in [array methods](../../topics/javascript/array-methods.md)



## Peer instruction



### Exercise 1

```javascript
function add(a, b) {
	return a + b;
}

function functionCaller(functionAsParameter) {
  const returnValue = functionAsParameter();
  console.log(returnValue);
}

functionCaller(add(1,2.0));
```

What will be logged?

1. `3`
2. `undefined`
3. `3.0`
4. `throws error`



### Exercise 2

```javascript
const user = {
	stringLogger: function() {
    console.log("this is a string");
  }
};

const returnValue = user.stringLogger();
console.log(returnValue);
```

What will be logged when we log out `returnValue`?

1. `this is a string`
2. `"this is a string"`
3. `undefined`
4. `null`
5. `throws error`

