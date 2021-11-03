# DOM

Support video: https://youtu.be/YvHQIaKtOl8



## Learning Objectives

By the end of this lesson trainees should be able to:

- Define what the DOM is and what it does
- Use query selectors to retrieve elements from the DOM
- Use event listeners to respond to events that happen on the DOM
- Create DOM elements using JavaScript and add them to the DOM
- Manipulate DOM elements using JavaScript to change their properties



## JS in the Browser

Up until now we've been using `console.log` to see the results of our code running, because it allows us to focus  on writing code and seeing the results instantly. But JavaScript was not meant to be run in `console.log`: it was meant to make web pages dynamic.

Lots of websites are powered by JavaScript today, and some (like Facebook)  cannot function at all without it: it's become that important to the  look and feel of the website.



## The DOM

Your webpages are made up of a bunch of HTML elements, nested within each  other (parents and children). But JavaScript doesn't know about any of  that.

Thankfully, in JavaScript we have access to this "DOM"  object (Document Object Model) which is actually a representation of our webpage that JavaScript can work with.

Here are two examples, HTML and then JavaScript, of how the DOM might look like:

```html
<html>
  <body>
    <h1>Welcome!</h1>
    <p>Hello world!</p>
  </body>
</html>
```



```javascript
const document = {
  body: {
    h1: "Welcome",
    p: "Hello world!",
  },
};
```



This is how we would represent the document hierarchy above as a tree of nodes:

![img](https://syllabus.codeyourfuture.io/91f23c157d97a7987a67b729c1494a91.png)



## Access DOM elements

The DOM offers a lot of useful functions we can use to find elements on the page. Here are some we'll be using today:

```javascript
document.querySelector(".main-header");

document.querySelectorAll("p");
```



Both `.querySelector` and `querySelectorAll` accept a CSS selector as an input. `.querySelector` selects only the first element it finds, `querySelectorAll` selects all elements (it returns a `NodeList`, which you can think of as being similar to an array; it is an ordered  sequence of DOM elements which you can loop through like with an array.  The difference is that many common array methods like `.map` or `.concat` can't be used on a `NodeList`. To turn a `NodeList` into an array, you can use `Array.from`, e.g. `const elementArray = Array.from(document.querySelectorAll("div"));`).



## Attach events to DOM elements

Once you retrieve an element using `.querySelector`, you can attach an **event** to it. An event is any action that can be performed on that element. For now, we will just use the **click** event:

```javascript
const changeBackground = document.querySelector(".change-background");
myButton.addEventListener("click", logSomething);

function logSomething() {
  console.log("Something");
}
```

You will notice in the example that we passed a second argument to `addEventListener`. That second argument is the **function** that we want to invoke when that event has happened.



## Create DOM elements

Using the `document`, you can also create new elements. These elements will not appear until you append them as a child of another element though:

````javascript
const paragraph = document.createElement("p"); // here we're just creating it, element is not visible yet

header.appendChild(paragraph); // now the element is added to our view, but it's empty
````



`document.createElement` accepts as an input any element type. So for example `document.createElement("article")` will create a new article element.



## Manipulate DOM elements

You can then change the text displayed inside elements using the `innerText` property:

```javascript
paragraph.innerText = "How are you?"; // now we can see the text displaying on the screen
```



We've been using `document.querySelector` to retrieve a single element. To retrieve a list of multiple elements (that match a specific class name for example, or a specific tag) we use `document.querySelectorAll`.

```javascript
//change the background of all the paragraph items on our page
const paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.backgroundColor = "blue";
}
```

We've learned that `style` and `innerText` are properties of DOM elements. Image tags can also have `width` and `height`.

While it's really easy to change styles directly on elements using the `style` property, it is not usually a good idea to mix JavaScript and CSS (see  separation of concerns in the first lesson). To solve this, we can use  the `className` property to set the class for an element instead of changing its styles directly:

```javascript
//before: <div id="unique-button"></div>
const header = document.querySelector("#unique-button");
header.className = "large-block";
//after: <div id="unique-button" class="large-block"></div>
```



To get the text from an Input field:

```javascript
const updateTitleBtn = document.querySelector(".update-title-button");

updateTitleBtn.addEventListener("click", function () {
  const inputBox = document.querySelector(".title-input");
  const title = inputBox.value;
  console.log(title);
});
```

The above waits for click on a button. When the button is clicked, it gets the input box element (`inputBox` variable). To get the entered text from it, we use the `value` property: `const title = inputBox.value`.



## Exercises



### Preparation for exercises

Let's work on the code provided [here](https://github.com/CodeYourFuture/js-exercises/tree/master/week-5/InClass/A-dom-manipulation) 

That means you have to clone [this repo](https://github.com/CodeYourFuture/js-exercises) onto your computer and then find the A-dom-manipulation folder to open in VS code

1. Open "A-dom-manipulation" project in VS code

2. View your changes by

   - using 

     vscode-live-server

      plugin to get live updates of your changes.

     - Install the plugin
     - Right click on `index.html` and select "Open with Live Server"

   - or just open the `index.html` on your browser and refresh every time you change your code

     

### Exercise 1

Write JavaScript below that logs:

1. all the "p" element nodes of the document, --> should log a list of nodes with a length of 6
2. the first div element node --> should log the ".site-header" node
3. the element with id "jumbotron-text" --> should log the "#jumbotron-text" node
4. all the "p" elements contained inside the .primary-content element node --> should log a list of nodes with a length of 3



### Exercise 2

When a user clicks the "ALERT" button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"

The elements returned by `document.querySelector` have the same properties as a normal HTML element: for example, you can get access to their css **styles**.

```javascript
const myElement = document.querySelector("#myElement");

myElement.style.backgroundColor = "red";
```



### Exercise 3

Write JavaScript below that changes the background colour of the page when the "Change colour" button is clicked.



### Exercise 4

When a user clicks the "Add some text" button, a new paragraph should be added below the buttons that says "Read more below."



### Exercise 5

When the "Larger links!" button is clicked, the text of all links on the page should increase.



### Exericse 6

When clicking the blue add button, take the text written in the input element, and add that text to the DOM. The text should be added using `ul` and `li`



### Exercise 7

Clicking `Donate Now` should show a modal where a user can input some amount they want to donate to the cause. When they written the amount they should be able to click a button that will do the donation. When the donation has been completed. Show a success message and then close the modal.



### Exercise 8

Your feature here. Come up with some feature you would like to create!



> Taken from https://syllabus.codeyourfuture.io/js-core-2/week-2/lesson