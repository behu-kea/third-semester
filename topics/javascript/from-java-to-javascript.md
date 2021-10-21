# From java to Javascript



Learning to write javascript after having written Java for more that a year can be quite challenging. 

Things can seem quite vague, functions act super weird, asynchronous code makes no sense and sometimes js just behaves a bit weird

If you feel like this, then dont worry i am here to help

This introduction should prepare you for the shift



## Functional programming language

Javascript is a functional language. That means that code and structure in js is built up using functions. In Java Classes are used to build structure, but in js that is mainly functions. 



## Printing variables

In js we don't print variable to the terminal but log things to the console:

instead of this 👇

```java
System.out.println("hello world");
```

We write this 👇

```js
console.log("hello world");
```



## Dynamically typed

Javascript is dynamically typed. This means that you dont need to define the type you are working with js tries to figure that out 😱



### `const` vs `let`

In js we define a variable as either a `const` or `let`. `const` means a variable is a constant and cannot be changed. `let` means we can change the variable

```js
const username = "bytbytdyt";
username = "test"; // js throws an error!

let username2 = "bytbytdyt";
username2 = "test";
console.log(username2); // test
```

A good rule of thumb is: 

> Always declare a variable as a let. When you then need/if you to change the variable change it to let!
>
> Use `const` until it won't `let` you!



### Dynamically typed examples

```js
const isUserLoggedIn = true;
console.log(typeof isUserLoggedIn); // boolean

const username = "bytbytdyt";
console.log(typeof username); // string

const age = 10;
console.log(typeof age); // number
```

Use `typeof` to figure out the type of your variable! Works for primitive types



There are two types you have not heard about before:

- `undefined` - the variable has been declared but not assigned

  ```js
  const username;
  console.log(typeof username); // undefined
  ```

- `null` - Is a assignment value. It represent a variable that has no value

  ```
  const username = null;
  console.log(typeof username); // object
  ```

  It shows `object` because of a technicality in js. 



## Equality operator

Because there are no types, testing if things are equal to each toher is a bit different. 

 

### `==`

Using `==` tests f the value is equal to each other. Not if the type is the same!

```js
console.log(1 == 1); // true
console.log(1 == '1'); // true
```



### `===`

Using `===` tests f the value **and** the type is equal to each other. 

```js
console.log(1 === 1); // true
console.log(1 === '1'); // false
```



## Array is like ArrayList

Array in js is like a combination of `Array` and `ArrayList`



Instead of this 👇

```java
ArrayList<String> usernames = new ArrayList<>();
usernames.add("peteTheBeat");
usernames.add("mariannner");

usernames.push("typppi");
System.out.println(usernames) // "peteTheBeat", "mariannner", "typppi"
System.out.println(usernames.get(1)); // mariannner
usernames.set(0, "rettty");
System.out.println(usernames) // "rettty", "mariannner", "typppi"
```

We write this 👇

```js
const usernames = ["peteTheBeat", "mariannner"];
usernames.push("typppi");
console.log(usernames) // "peteTheBeat", "mariannner", "typppi"
console.log(usernames[1]); // mariannner
usernames[0] = "rettty";
console.log(usernames) // "rettty", "mariannner", "typppi"
```



There are other array methods:

- `push` - adds an element to the end of the array
- `pop` - remove the element at the end of the array
- `shift` - adds an element at the start of the array
- `unshift` - remove the element at the start of the array



## HashMap is called an object

HashMap in js is called an object. The concept is the same, the only difference is that the key can only be strings. Beause js i dynamically typed we dont need to specify the type of the key or the type of the value. We just save values at a specific key



Instead of this 👇

```java
HashMap<String, Integer> usernameAges = new HashMap<String, Integer>();
usernameAges.put("peteTheBeat", 23);
usernameAges.put("mariannner", 29);

// setting a value at a specific key
usernameAges.put("typppi", 31);
System.out.println(usernameAges);
usernameAges.put("peteTheBeat", 99);
System.out.println(usernameAges);

// getting a value at a specific key
System.out.println(usernameAges.get("mariannner"));
```

We do this 👇

```js
// defining an object
const usernameAges = {
	'peteTheBeat': 23,
	'mariannner': 29
}

// setting a value at a specific key
usernameAges['typppi'] = 31;
console.log(usernameAges); // {'peteTheBeat': 23, 'mariannner': 29, 'typppi: 31'}
usernameAges['peteTheBeat'] = 99;
console.log(usernameAges); // {'peteTheBeat': 99, 'mariannner': 29, 'typppi: 31'}

// getting a value at a specific key
console.log(usernameAges['mariannner']); // 29

// because js we can store different types (but probably shouldnt)
const usernameAgesMixedTypes = {
	'peteTheBeat': '23',
	'mariannner': 29,
  'typppi': [1,2,3],
}
```



## Methods vs function

In javascript we differentiate between methods and functions. 

A functions is a freestanding function not connected to any object, eg 👇

```js
function addNumbers(a, b) {
  return a + b;
}

const numbersAdded = addNumbers(1,3);
console.log(numbersAdded); // 4
```

A function can be both defined as a function like above or as a seperate variable 👇

```js
const addNumbers = function(a,b) {
  return a + b;
}
const numbersAdded = addNumbers(1,3);
console.log(numbersAdded); // 4
```



Here is one weird thing that might blow your mind 🤯 

> In Javascript a function works just like any other variable!

This means that we can do these things👇

```js
const functionArray = [function() {
  console.log("hello");
}, function() {
  console.log("worls");
}];

const functionOne = functionArray[0];
const functionTwo = functionArray[1];
functionOne(); // hello
functionTwo(); // world

function callAnotherFunction(anotherFunction) {
  anotherFunction(); 
}

callAnotherFunction(function() {
  console.log("called from another function");
});
```



## More differences

- Js is not compiled before being run. The code is just run
- Supports classes and inheritance but please avoid it. Use objects instead
- No enum (but we can simulate it using an object)

