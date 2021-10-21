# API's

You should have a fairly good idea of what an API is from the backend module. You should also have an idea of what Postman is and how to use it. With Postman we send a request to an API and get some data back. 

In Javascript we need to do the **exact** same! There are different tools for fetching data from an api with javascript, but we will be using a method called `fetch`. `fetch` does exactly the same as Postman



Support video about json: https://youtu.be/ghMR-k5pKjg

Support video about fetch: https://youtu.be/pL_zEzunBKU



## Public API's

There are lots of API's online. It might be a new concept for you to work with these API's but they work exactly like the API you have created in the backend module. Here is a list of some fun/cool/quirky API's

- https://yesno.wtf/api/ - An API that will return either yes or no
- http://deckofcardsapi.com/ - An API that will give you different data simulating a deck of cards
- https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8&#8217 - API that will give you a random number by measuring quantum fluctuations of a vacuum in real-time!
- http://api.open-notify.org/astros.json - API showing the number of people in space right now
- https://dog.ceo/api/breeds/image/random - Get a random image of a dog

Here is a **huge** list of public API's: https://github.com/public-apis/public-apis



## GETting data from an API using `fetch`

This technology of getting data from a server is called **AJAX**

Lets's get some data from an API using `fetch` 👇

`fetch` is the Javascript version of Postman!! Literally!

```jade
const apiUrl = 'https://yesno.wtf/api/';
fetch(apiUrl)
    .then(response => response.json())
    .then(yesOrNoData => {
        console.log(yesOrNoData);
    })
    .catch((error) => {
    		console.log(error);
    });
```

There are somethings going on here. 

- `fetch(apiUrl)` - will send a `GET` request to `'https://yesno.wtf/api/'`
- `.then(response => response.json())` - Will take the response from the API and encode the JSON so we can use it in Javascript
- `.then(yesOrNoData => {
          console.log(yesOrNoData);
      });` - Will log the data received from the API to the console
- `.catch((error) => {
          console.log(error);
          });` -  The function insde the `catch` will be run if an error occurs, fx the network disappears. 

The `.then` is a new concept that you will learn in the next class. Basically callling the `fetch` method returns a `Promise`. But for now just focus on how to use `fetch` to get data from an API. 



## POSTing data from an API using `fetch`

To post data to an API there are two things you need to specify

```js
const apiUrl = 'https://my-json-server.typicode.com/typicode/demo/posts';
fetch(apiUrl, {
	method: 'POST',
  body: JSON.stringify( { id: 42, title, "Test title" }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
	})
    .then(response => response.json())
    .then(dataReturnedFromPosting => {
        console.log(yesOrNoData);
    });
```

1. `method: 'POST',` - Telling the `fetch` method that the request we will be making should be a `POST` request
2. `body: JSON.stringify( { id: 42, title, "Test title" }),` - Here we specify the method by taking the data we need to `POST` and encoding it into JSON. 
3. `headers: ...` - This will tell the API that we expect the type of the content to be JSON



You can also `PUT`, `PATCH` and `DELETE` using `fetch`



## Exercises

### Exercise 1

Fetch astronauts

