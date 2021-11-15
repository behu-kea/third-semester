# API's

You should have a fairly good idea of what an API is from the backend module. You should also have an idea of what Postman is and how to use it. With Postman we send a requests to an API and get some data back. 

In Javascript we need to do the **exact** same! There are different tools for fetching data from an api with javascript, but we will be using a method called `fetch`. `fetch` does exactly the same as Postman



Support video about json: [https://youtu.be/ghMR-k5pKjg](https://youtu.be/ghMR-k5pKjg)

Support video about fetch: [https://youtu.be/pL_zEzunBKU](https://youtu.be/pL_zEzunBKU)



## Public API's

There are lots of API's online. Here is a list of some fun/cool/quirky API's

- https://yesno.wtf/api/ - An API that will return either yes or no
- http://deckofcardsapi.com/ - An API that will give you different data simulating a deck of cards
- https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8&#8217 - API that will give you a random number by measuring quantum fluctuations of a vacuum in real-time!
- http://api.open-notify.org/astros.json - API showing the number of people in space right now. This does not support https which is a problem when deploying the site!
- https://dog.ceo/api/breeds/image/random - Get a random image of a dog

Here is a **huge** list of public API's: https://github.com/public-apis/public-apis



## GETting data from an API using `fetch`

The technology of getting data from a server is called **AJAX**

Lets's get some data from an API using `fetch` 👇

`fetch` is the Javascript version of Postman!! Literally!

```javascript
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

```javascript
const apiUrl = 'https://my-json-server.typicode.com/typicode/demo/posts';
fetch(apiUrl, {
  method: 'POST',
  body: JSON.stringify( { id: 42, title: "Test title" }),
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



### Exercise 1 - get

Fetch yes or no from this api: https://yesno.wtf/api/

1. Firstly just log out yes or no
2. Render the text yes or no to the DOM
3. Render the image and the text to the DOM



### Exerise 2 - post

Create a new comment using the `POST` request on this mock server (only used for development)

https://jsonplaceholder.typicode.com/comments

To create a new comment you must specify 

- `name` - Name of the commenter
- `email` - Email of the commenter
-  `body` - The comment text

Log out the response from the api

**You will not be inserting any data into any database!**



### Exercise 3 - Pick a project

Pick one of these projects to work on in class

- [Gif searching site](https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript3/week1/homework.md#giphy-api)
- [Current weather site](https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript3/week1/homework.md#weather-app)
- [Dog fan website](https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript3/week1/lesson-plan.md#dog-fan-website)

We will follow up in the next class to see some of your projects

Hand the project in here: https://kea-fronter.itslearning.com/LearningToolElement/ViewLearningToolElement.aspx?LearningToolElementId=942249

