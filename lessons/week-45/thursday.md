# Thursday

- Teach [apis](../../topics/javascript/apis.md)
- Do the exerises in [apis](../../topics/javascript/apis.md)



## Peer instruction



### Question 1

`index.html`

```html
<body></body>
```

`main.js`

```javascript
const pElement = document.createElement('p');
pElement.innerHTML = 'bobenonajojimominon';
console.log(document.querySelector('p').innerHTML);
```

What will be logged?

1. Throws error
2. `bobenonajojimominon`
3. `undefined`
4. `[Object object]`
5. `null`



### Question 2

`index.html`

```html
<button></button>
```

`main.js`

```javascript
const buttonElement = document.querySelector("button");
const logText = function(text) {
  console.log(text);
}
buttonElement.addEventListener('click', logText('hello'));
```

What will happen when the button is clicked

1. Throws error
2. Logs out `undefined`
3. Logs out `hello`
4. Nothing happens

