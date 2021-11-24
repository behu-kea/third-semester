# Thursday

- How to strcuture a frontend application
- Frontend project presentation



## Feedback





- Handin using git

- Simplify expressions by creating variables that describe the individual parts of the expression. Here is an example:
  From:

  ```javascript
  randomBreed = Object.keys(dogbreeddata.message)[Math.floor(Math.random() * Object.keys(dogbreeddata.message).length)];
  ```

  To:

  ```javascript
  const dogBreedKeys = Object.keys(dogbreeddata.message);
  const randomDogBreedIndex = Math.floor(Math.random() * dogBreedKeys.length);
  const randomDogBreed = dogBreedKeys[randomDOgBreedIndex];
  ```

  This makes the code a lot more readable

- Avoid using id's for everything. **ONLY** use id's for elements that are unique. [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) is a good example

- In html have dashes between words:
  Instead of

  ```html
  <div class="userPassword"></div>
  ```

  Write

  ```html
  <div class="user-password"></div>
  ```

- Use functions a lot more. Function can divide your code into manageable parts. This is an absolute art. As a rough guide try and avoid having more than 30 lines. If you do then create a new function! This is a good exercise. Off course making a rule like this is nearly impossible. Different codebases requires different structure. **But** right now you are not using functions, so lets tip the scale :) 

- The script file for loading the js in the html should be placed before you close the body tag

  ```html
  <body>
  	<h1>Page title</h1>
  	<script src="main.js"></script>
  </body>
  ```

- Please use `querySelector` and `querySelectorAll` instead of `getElementById`

- Fix indentation. I should not need to say this by now

- No inline styles or css! CSS should be in a `.css` file!

- Writing proper semantic html! Super important in my eyes. Take a look at my the html at my previous workplace: https://www.amsiq.com/da Also take a look at [this](https://www.youtube.com/watch?v=kGW8Al_cga4) and [this](https://www.youtube.com/watch?v=wu6PPRKcT8Y) video

- Usability. This can be a huge task. But try and put yourself in the shoes of a user while designing your site. 

- Try and select the DOM elements only once. When the page is loaded. If that is not possible just query the DOM as little as possible. That means either selecting (`querySelector`) or changing `innerHTML` or `appendChild`. The reason is that interacting with the DOM is costly!





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



