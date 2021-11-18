# Thursday

- How to strcuture a frontend application
- Frontend project presentation



## Feedback



`randomBreed = Object.keys(dogbreeddata.message)[Math.floor(Math.random() * Object.keys(dogbreeddata.message).length)];`

- Handin using git
- 





## What i have not taught you

- `this`
- Class in js
- How to work with forms and input types in js
- Async await





## Peer instruction questions



### Question 1

```javascript
let data;
function logData(dataFromApi) {
  data = dataFromApi;
}
console.log(data);

fetch('https://some-api.dk')
	.then((Response) => Response.json())
	.then((data) => logData(data));
```

What will be logged out?

1. Throws error
2. `undefined`
3. Whatever data comes from the `https://some-api.dk` api
4. A promise



### Question 2

```javascript
const button = document.querySelector('button');
console.log(1);
setTimeout(function() {
  console.log(2);
}, 1);
console.log(3);
function logStuff() {
  console.log(4);
}
console.log(5);
button.addEventListener('click', logStuff());
console.log(6)
```

What willl be logged out?

1. 1, 2, 3, 5, 6, 4
2. 1, 3, 4, 5, 6, 2
3. 1, 3, 5, 4, 6, 2
4. 1, 3, 5, 6, 2, 4
5. Error thrown



