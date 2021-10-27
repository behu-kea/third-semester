# Thursday

- For exercises, go through the different topics below and solve the exercises in the bottom
  - [Variables](../../topics/javascript/variables.md)
  - [Types](../../topics/javascript/types-string-number-boolean-array.md)
  -  [Operators](../../topics/javascript/operators.md)
  - [Scope](../../topics/javascript/scope.md)
  - [Conditional](../../topics/javascript/conditional.md)
  - [Loops](../../topics/javascript/loops.md)
  - [Function](../../topics/javascript/function.md)
  - [Objects](../../topics/javascript/objects.md)

> Exercise guidance. When you have an idea of the topic you are studying, then move on. Dont solve all the exercises just because. I expect you to be able to solve the following exercise after this week. So if you can, then congrats 🎉 You are ready for next week



## Build a sentiment analyzer

A sentiment analyzer is some functionality that figures out how positive/negative a sentence is. 

Fx the sentence `I am mega super awesome happy` Should have a high score
The sentence `I hate doing boring stuff` should have a low score.

Create a function that takes a string as a parameter. calling the function will return an object with `score`, `positiveWords` and `negativeWords`. You decide how the score should be implemented and what words you characterise as negative and positive.

Here is an example of using the function:

```js
const sentimentScoreObject = getSentimentScore('I am mega super awesome happy');

console.log(sentimentScoreObject); 
/*
{
  score: 3,
  positiveWords: ['happy', 'awesome', 'super'],
  negativeWords: [],
}
*/
```

To solve this exercise you must know

- How to use functions
- How to use string in js
- How to use an array
- How to use an object



### Fibonacci Sequence
Given a specific number in the fibonacci sequence return the fibonachi number. 

```js
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

fib(5) // 3
fib(10) // 34
```

Try not to just solve the problem, but explain what you are doing and thinking! 

Try using this as a framework for solving the problem: https://dev.to/aprietof/5-steps-to-solving-programming-problems--502d



### Fizz buzz

This is a classic programming task. 

Create a function that prints the numbers from 1 to 100. But for multiples of three print `Fizz` instead of the number and for the multiples of five print `Buzz`. For numbers which are multiples of both three and five print `FizzBuzz`.

When that works. Make the two number for multiples into parameters. So it can be called like this:

`fizzBuzz(4, 12);`



### Credit card number formatter

This is a very real world example of a problem i got at my previous work. I was tasked to implement one of the smart credit card input fields, where the credit card numbers are seperated with a space. Fx inputting 123456789 would show 1234 5678 9.

![Credit card formatter](https://github.com/HackYourFuture-CPH/JavaScript/raw/master/javascript1/week4/assets/credit-card-formatter.gif)

Create a function that takes a number as parameter. The function should return the following object:

```js
const formattedCreditCardObject = formatCreditCardNumber(123456789);
console.log(formattedCreditCardObject);
/*
{
  original: 123456789,
  formatted: "1234 5678 9",
}
*/
```

Thins to consider:
- What should happen if the function is called with an argument that is not a number?



### Character frequencies

Write a function that counts the frequency of characters in a string:

```js
console.log(getCharacterFrequencies('happy'));
/*
{
  characters: [
    {
      character: 'a',
      count: 1
    },
    {
      character: 'h',
      count: 1
    },
    {
      character: 'p',
      count: 2
    },
    {
      character: 'y',
      count: 1
    }
  ], length: 5
}
*/
```



### Palindromic substring

Write a function that finds the longest palindromic substring of a given string. 




### Credit card info

Similar to the format credit card number, now we need to identify the credit card type. 

```js
console.log(getCardInfo(4781321334789876)); // 'visa'
```

How can we find out what rules there are for credit cards? Programmers best friend is always available :) 



### Tic Tac Toe

Draw a tic tac toe game.

Write a function called `getRenderedGame(position)` that takes `position` as parameter. `position` is a two dimensional array that shows the position of a game.

Here is an example:

With the following two dimensional array 
```js
const position = [
  ['x', 'o', ' '],
  [' ', 'o', ' '],
  [' ', 'o', 'x']
];

const renderedGame = getRenderedGame(position);
console.log(renderedGame);

/*
*******
*x*o* *
* *o* *
* *o*x*
*******
*/
```

Create a new function called `getGameinfo(position)`. Calling the function should return an object with `winner` key, `loser` key, `hasEnded` and `nextPlayer`.

EXAMPLES!!!!


```js
const position = [
  ['x', 'o', ' '],
  [' ', 'o', ' '],
  [' ', 'o', 'x']
];

const gameInfo = getGameinfo(position);
console.log(gameInfo);

/*
{
  winner: 'o',
  loser: 'x',
  hasEnded: true
}
*/
```


```js
const position = [
  ['x', 'o', ' '],
  [' ', ' ', ' '],
  [' ', 'o', 'x']
];

const gameInfo = getGameinfo(position);
console.log(gameInfo);

/*
{
  winner: undefined,
  loser: undefined,
  hasEnded: false
}
*/
```

Try and make the game playable! *optional*




### Conway's game of life *optional*

https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

And finally, feel free to fill out the form to help us improve the module and the exercises. The [survey](https://forms.gle/irckYkBdvSb6Tdz57) here is addressed to the teacher and teacher assistant, while this [survey](https://forms.gle/ttdDLcSJ88ksz6xe7) is for homework helpers.



*Exerises taken from https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript1/week4/lesson-plan.md*