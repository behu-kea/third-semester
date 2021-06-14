# Scope

The scope meaning is defined by whether or not the variable is accessible. If the variable is not within the "scope" of any given code block, it can't  access it. Which means it doesn't exist from the perspective of that  code block.

This is actually a good thing: we want to make sure  that parts of our data have limited accessibility. Imagine that the  password to your email account would be available everywhere, and you  could easily get access to it by writing some code in the console of  your browser. Do you know how easily it would be to hack into your  account?

Scope sounds simple, but is actually hard to wrap your head around. Wilgert has made another video to help you out:

<iframe src="https://www.youtube.com/embed/0xCQ3G7a2Rw" width="100%" height="400px"></iframe>



### Global vs. local (function and block)

Scope can be divided into two basic types: global and local scope. In any  given application, there is one global scope. But there can be many  local scopes. Any variable declared outside of a function belongs to the global scope and is therefore accessible from anywhere in the code.  Variables declared within a local scope are only accessible within that  scope.

Local scope can be further divided into two categories: function and block. Let's look at **function scope** first.

A unique local scope gets created whenever a function is declared. The  variables declared within will only be accessible within that scope,  nowhere else. This makes it possible to declare variables within the  same name in each different local scope. This also means that it's not  possible to refer to a variable declared in one local scope, within  another local scope.

```js
function createLocalScope() {
  const localVariable = 'this variable can only be accessed within this function';
  console.log(localVariable);

  const localOnlyHere = 'This variable can only be accessed here, nowhere else';
}

function createAnotherLocalScope() {
  const localVariable =
    "Even though this variable has the same name, it has nothing to do with the other localVariable, because it doesn't exist outside of that function";
  console.log(localVariable);
  console.log(localOnlyHere);
}

createLocalScope();
createAnotherLocalScope();
```

However, variables declared within the global scope can be accessed anywhere!  Actually, that's the very purpose of global scope. In the context of  functions this means that you don't have to pass it as an argument, but  that you can directly refer to it within the function.

```js
const globalVariable = 'This variable can be accessed wherever in the code';

function accessGlobalVariable() {
  console.log(globalVariable);
}
console.log(globalVariable);
accessGlobalVariable();
```

The second type of local scope is called **block scope**. A block, generally speaking, is any code wrapped within `{ }`. This includes conditional statements (`if` and `switch`) and loops (`for`, `while` and `do/while`).



### Const and let

In the ES6 syntax, which is now the standard in the software development world, we prefer to declare variables using `const` and `let`. This is because the keywords are more descriptive and restrictive. This makes them easier to work with.

In relation to scope both also behave differently: they are block scoped. This means that they can *not* be accessed from outside a `{ }`.



> Taken from https://hackyourfuture.github.io/study/#/javascript/scope

