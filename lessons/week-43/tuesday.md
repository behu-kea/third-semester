# Tuesday

- Go through [getting-started-no-webpack.md](../../topics/javascript/getting-started-no-webpack.md) 
- Go through [from-java-to-javascript.md](../../topics/javascript/from-java-to-javascript.md)
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



