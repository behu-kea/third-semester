# Operator



## Comparison operators

https://www.youtube.com/watch?v=Opl-KwCBxRg



> Note the two different uses of the equals sign:
> A single equals sign (=) is used to assign a value to a variable.
> A triple equals sign (===) is used to compare two values (see Equality Operators).



### Equality operators

- Equality `==`
- Inequality `!=`
- Identity / strict equality `===` (preferred)
- Non-identity / strict inequality `!==` (preferred)

How does this work in practice?

```javascript
1 == 1 // -> true
7 == '7' // -> true
1 != 2  // -> true
5 === 5  // -> true
9 === '9'  // -> false
3 !== 3 // -> false
3 !== '3' // -> true
```

[view in jsTutor](http://www.pythontutor.com/visualize.html#code=1 %3D%3D 1 %2F%2F -> true 7 %3D%3D '7' %2F%2F -> true 1 !%3D 2  %2F%2F -> true 5 %3D%3D%3D 5  %2F%2F -> true 9 %3D%3D%3D '9'  %2F%2F -> false 3 !%3D%3D 3 %2F%2F -> false 3 !%3D%3D '3' %2F%2F -> true )

> why does `7 == '7'` returns true and `9 === '9'` returns false?

We strongly recommend that you always use the strict form when comparing for equality (`===`) or inequality (`!==`). Use the non-strict forms only when there is a compelling reason to do so (you will be hard pressed to find such a reason).



### Relational operators

- Greater than operator `>`
- Greater than or equal operator `>=`
- Less than operator `<`
- Less than or equal operator `<=`

```javascript
4 > 3   // -> true
3 >= 3  // -> true
13 < 12 // -> false
3 <= 4   // -> true
```

[view in jsTutor](http://www.pythontutor.com/visualize.html#code=4 > 3   %2F%2F -> true 3 >%3D 3  %2F%2F -> true 13 < 12 %2F%2F -> false 3 <%3D 4   %2F%2F -> true )

More about [comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)



## Arithmetic operators

- Addition `+`
- Subtraction `-`
- Multiplication `*`
- Division `/`
- Remainder (sometimes called modulo) `%` 
  Returns the remainder left over after you've shared the left number  out into a number of integer portions equal to the right number.

```javascript
8 + 9 // -> 17, adds two numbers together.
20 - 12 // -> 8, subtracts the right number from the left.
3 * 4 // -> 12, multiplies two numbers together.
10 / 5 // -> 2, divides the left number by the right.
8 % 3 /// -> 2, as three goes into 8 twice, leaving 2 left over.
```

[view in jsTutor](http://www.pythontutor.com/visualize.html#code=8 %2B 9 %2F%2F -> 17%2C adds two numbers together. 20 - 12 %2F%2F -> 8%2C subtracts the right number from the left. 3 * 4 %2F%2F -> 12%2C multiplies two numbers together. 10 %2F 5 %2F%2F -> 2%2C divides the left number by the right. 8 % 3 %2F%2F%2F -> 2%2C as three goes into 8 twice%2C leaving 2 left over. )



https://www.youtube.com/embed/qjzgz7bEEXM

More about [Arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#.25_.28Modulus.29)



## Logical operators

https://www.youtube.com/embed/RWms0XG75r4



- AND `&&`
- OR `||`

```javascript
true && false //-> false
false && true //-> false
false || true //-> true
true || false //-> true
```

[view in jsTutor](http://www.pythontutor.com/visualize.html#code=true %26%26 false %2F%2F-> false false %26%26 true %2F%2F-> false false || true %2F%2F-> true true || false %2F%2F-> true )

Given that x = 6 and y = 3

```javascript
x < 10 && y > 1 // -> true
x === 5 || y === 5 // -> false
x !== y // -> true
```

[view in jsTutor](http://www.pythontutor.com/visualize.html#code=x < 10 %26%26 y > 1 %2F%2F -> true x %3D%3D%3D 5 || y %3D%3D%3D 5 %2F%2F -> false x !%3D%3D y %2F%2F -> true )

Logical NOT

- NOT `!`

```javascript
true === !false
false === !true
```

[view in jsTutor](http://www.pythontutor.com/visualize.html#code=true %3D%3D%3D !false false %3D%3D%3D !true )

More about [logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)



### `typeof` operator

To get the type of a value assigned to a variable, use the following code:

```javascript
const bar = 42; 
typeof bar    //-> 'number' 
typeof typeof bar; //->  'string'
```

[view in jsTutor](http://www.pythontutor.com/visualize.html#code=let bar %3D 42%3B  typeof bar    %2F%2F-> 'number'  typeof typeof bar%3B %2F%2F->  'string' )

So the data type of what `typeof` returns is always a string, bar on the other hand is still a number.

*Material taken from https://hackyourfuture.github.io/study/#/javascript/operators*



## Exercise 1

Write with pen and paper what these lines will evaluate to

- `let num = 10`
- `num > 5 && num < 15`
- `num < 10 || num === 10`
- `false || true`
- `!true`
- `let greaterThan5 = num > 5`
- `!greaterThan5`
- `!(num === 10)`

