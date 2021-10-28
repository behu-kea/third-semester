# Types

In programming there are different *types of* data in Javascript. We will go through the most basic types which is **string**, **number**, **boolean** and **array**



## Strings

You've used one data type already: **string**.

Computers recognise strings as a sequence of characters but to humans, strings are simply lines of text.

```javascript
const message = "This is a string";
```

Notice that strings are always wrapped **inside of quote marks**. We do this so that the computer knows when the string starts and ends.

You can check that the data is a string by using the `typeof` operator:

```javascript
const message = "This is a string";
const messageType = typeof message;

console.log(messageType); // string
```



### String concatenation

You can add two strings together using the plus operator (`+`) 

```javascript
// Here is an example using the plus operator to concat strings
const greetingStart = "Hello, my name is ";
const name = "Daniel";

const greeting = greetingStart + name;

console.log(greeting); // Logs "Hello, my name is Daniel"
```

*Taken from https://syllabus.codeyourfuture.io/js-core-1/week-1/lesson#strings*



### Exercise 1

Create two vairables `firstname` and `lastname`. Create a new variable called `fullname` that will contain your fullname. now logout `fullname`



## Numbers

In Javascript there is no distinction between integers, double or floats. everything is just a number. 



```javascript
const age = 21;
const height = 1.76;
```

mathematical operators works in Javascript just like this

```javascript
const sum = 23 + 45;
const division = 1/2;
```



### Exercise 2 part 1

1. Create two variables `numberOfStudents` and `numberOfteachers` and assign them to some random numbers
2. Log a message that displays the total number of students and teachers

**Expected Result**

```
Number of trainees: 15
Number of mentors: 8
Total number of trainees and mentors: 23
```



### Exercise 2 part 2

Now log out the percentage of students and percentage of teachers

````
Percentage of trainees: 65%
Percentage of mentors: 35%
````



*Exercise taken from https://syllabus.codeyourfuture.io/js-core-1/week-1/lesson#exercise-15-mins*





## Boolean

There is another *primitive type* in JavaScript known as a **boolean** value. A boolean is either `true` or `false`, and it should be written without quotes.

```javascript
const codeYourFutureIsGreat = true;
const thisIsATerribleClass = false;
```

We can use boolean values to make decisions in our code based on certain conditions, as we shall see later on.



*taken from https://syllabus.codeyourfuture.io/js-core-1/week-2/lesson#booleans*



## Arrays

If you ever find yourself writing code like this...

```javascript
const mentor1 = "Daniel";
const mentor2 = "Irina";
const mentor3 = "Rares";
```

...then it's probably time to use an **array**!

Arrays are data structures that hold a list of values. We call these values the **elements** of the array.

```javascript
const mentors = ["Daniel", "Irina", "Rares"];
```

Arrays can hold any type of value (although almost always you only have one data type per array).

```javascript
const testScores = [16, 49, 85];
const grades = ["F", "D", "A"];
const greetings = ["Hello, how are you?", "Hi! Nice to meet you!"];
```

You can access elements in an array using the **index** of an element with **bracket notation**

**🔔 Remember:** All arrays start at position 0! To access the first element in an array, you need to access index `0`, the second element at `1`, the fifth at `4` and so forth. This is called zero-based indexed arrays. There are some [very intense reasons for this](http://www.cs.utexas.edu/users/EWD/transcriptions/EWD08xx/EWD831.html), but most people just accept it and move on.

```javascript
const trainees = ["Ahmed", "Maria", "Atanas", "Nahidul", "Jack"];

trainees[0]; // "Ahmed"
trainees[3]; // "Nahidul"
```

You can also *assign* new values to parts of an array:

```javascript
const trainees = ["Ahmed", "Maria", "Atanas", "Nahidul", "Jack"];

trainees[2] = "Bianca";

console.log(trainees); // ["Ahmed", "Maria", "Bianca", "Nahidul", "Jack"]
```



You can also get the number of elements in an array you can use the `.length` parameter DET HEDDER DET IKKE

```javascript
const trainees = ["Ahmed", "Maria", "Atanas", "Nahidul", "Jack"];

console.log(trainees.length); // 5
```



### Exercise 3

Using the following array

```javascript
const fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange'];
```

Now, using the correct indexes, get the following values from the array:

- strawberry
- kiwi
- orange
- banana

Then, replace `apple` with `raspberry`, and replace `fig` with `pineapple`.



*taken from https://syllabus.codeyourfuture.io/js-core-1/week-2/lesson#arrays*



### Exercise 4

Write some code that can get the last element in an array. You should be able to add a new element to the array and when running the code the `lastElementInTheArray` is the right element!

```javascript
const names = ['Peter', 'Susan', 'Charlotte'];
const lastElementInTheArray = YOU WRITE CODE HERE;
console.log(lastElementInTheArray); // Charlotte

const moreNames = ['Peter', 'Susan', 'Charlotte', 'Abdullah'];
const lastElementInTheArray = YOU WRITE CODE HERE;
console.log(lastElementInTheArray); // Abdullah
```



## Typeof

`typeof` is an incredibly helpful method that will help figure out what type most variables are. 

```javascript
const age = 23;
console.log(typeof age); // number

const name = 'Benjamin';
console.log(typeof agename // string

const isCool = true;
console.log(typeof isCool); // boolean

const numbers = [1,5,8];
console.log(typeof numbers); // object
```

The last example with `typeof` an array is tricky. You can read about it [here](here https://betterprogramming.pub/how-to-check-data-types-in-javascript-using-typeof-424d0520a329 ). But there is no reason to learn it for now.



### Exercise 5

With pen and paper write down what is logged out:

```javascript
// Types
console.log(typeof 3);
console.log(typeof -33);
console.log(typeof '3');
const threeConst = 3;
console.log(threeConst);
let threeLet = 3;
console.log(threeLet);
console.log(typeof 'console.log("console.log(console.log(""))")');
console.log(typeof typeof 45);
const names = ['benjamin', 'Christopher'];
console.log(typeof names[0]);
console.log(typeof [3][0]);
console.log(typeof true);
```



### Exercise 6

1. Create a variable that is 24 times 55
2. Create a const and set it to be equal to your name
3. With javascript `console.log` the first character in your name
4. Create an array with 3 strings, three numbers and three booleans
5. `console.log` the 4. element in the array made above
6. *Optional* with javascript `console.log` the last character in your name.



## Exercise 7

Fix the errors in this script:

```js
const name = 'benjamin';
name = 'benjamin-better';

const pizzaPrice = 78;
const pizzaPriceDiscounted = pizzaprice - 10;

const users = ['peter', 'Johnny', 'Børge'];

const lastUser = users[3];
```

