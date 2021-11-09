# Tuesday

- Læringsbarometer
- Peer instruction
- Teach [dom](../../topics/javascript/dom.md)
- Do the exerises in [dom](../../topics/javascript/dom.md)



## Peer instruction questions



### Question 1

What will be logged out?

```javascript
const ages = [23, 88, 3, 17, 55, 64];
const youngAges = ages.forEach((age) => age <= 11);
console.log(youngAges);
```

1. Throws error
2. `[3]`
3. `[23, 88, 17, 55, 64]`
4. `[23, 88, 3, 17, 55, 64]`
5. `[undefined, undefined, undefined, undefined, undefined, undefined]`
6. `undefined`



### Question 2

```javascript
const ages = [23, 88, 3, 17, 55, 64];
const isOld = (age) => age <= 11;
const oldAges = ages.filter(isOld);
console.log(oldAges);
```

1. Throws error
2. `[3]`
3. `[23, 88, 17, 55, 64]`
4. `[23, 88, 3, 17, 55, 64]`
5. `[undefined, undefined, undefined, undefined, undefined, undefined]`
6. `undefined`



### Question 3

```javascript
const ages = [23, 88, 3, 17, 55, 64];
function getAgeDescription(age) {
  console.log(age + " years old");
}
const agesDescription = ages.map(getAgeDescription);
console.log(agesDescription);
```

1. Throws error
2. `[23, 88, 3, 17, 55, 64]`
3. `["23 years old", "88 years old", "3 years old", "17 years old", "55 years old", "64 years old"]`
4. `[undefined, undefined, undefined, undefined, undefined, undefined ]`
5. `undefined`


