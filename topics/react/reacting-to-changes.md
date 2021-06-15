# Reacting to changes





## Lets talk about props

What's the problem with our `HelloMentor` component from last class?

The component `HelloMentor` is very static. What if we want to say *hello* to a different mentor? Currently, we would have to change the code too! This is easy in our tiny application but for "real" applications this  might be more difficult.

Instead wouldn't it be good if we could  change which mentor we are saying hello to every time we render the  component? So we could reuse the `HelloMentor` component for different mentor names. This is what *props* are for.



## What are Props?

Props are what we use in React to pass "arguments" to components. They are  very similar to arguments in functions - you can "pass" props to  components, and you can use those props within a component.

First let's look at passing props to your components ([interactive example](https://codesandbox.io/s/intro-to-props-vmjy0o91m7?file=/src/HelloMentor.js)):

```jsx
<Mentor name="Mozafar" />
```



As you can see props are key-value pairs, in this example the key is `name` and the value is the string `'Mozafar'`. We can pass as many props as we like to a component.

We don't have to use strings, we can use any valid JavaScript data like  numbers, arrays and objects. Remember that in JSX you can use curly  braces `{}` to inject data that is not a string:

```jsx
<Mentor age={30}>
```



Now let's take a look at using props that we have passed to a component ([interactive example](https://codesandbox.io/s/intro-to-props-vmjy0o91m7?file=/src/Mentor.js)):

```jsx
function Mentor(props) {
  console.log(props);
  return <span>{props.name}</span>;
}
```



React gives you access to props in the **first argument** to the component function. We can then inject props into our component using curly braces.

The `props` variable is just a normal object with key-value pairs that match what  was passed to the component. Because it is just a variable, it can be  used like any other variable. That includes injecting props into  attributes:

```jsx
<div id={"mentor-id-" + props.id}>{props.name}</div>
```

Or calculating new values

```jsx
<div>{props.age + 1}</div>
```



## Handling events

So far we have only looked at React apps that are "static": they don't  respond to user input. This week we will look at making our apps *dynamic*.



### Event handlers in components

In previous lessons we learned how to attach event listeners with `addEventListener`:

```js
// Create an event handler
function logWhenClicked() {
  console.log("buttonElement was clicked!");
}

// Listen for events and call the event handler when triggered
buttonElement.addEventListener("click", logWhenClicked);
```



We still need to listen to events in React, but event handlers are set up in a slightly different way ([interactive example](https://codesandbox.io/s/event-handlers-cc3h7?file=/src/ClickLogger.js)):

```jsx
function ClickLogger() {
  function logWhenClicked() {
     console.log("Button was clicked!");
  }

  return <button onClick={logWhenClicked}>Click me!</button>;
}
```

Every element in React has some special props that start with `on` that can be assigned to a function which will be called when the event is triggered.

Here's a few examples (a full list is available [here](https://reactjs.org/docs/events.html#reference)):

- `onClick` - the element was clicked
- `onCopy` - the clipboard is used to copy some text
- `onKeyDown` - a key is pressed down
- `onBlur` - the element loses "focus"
- `onChange` - only available for `<input>` & `<select>` (and a few others), triggered when changed
- `onDoubleClick` - the element was double-clicked!
- `onPlay` - a video starts playing
- `onSubmit` - a form element is submitted

Notice that just like with `addEventListener` above, we pass the function **reference** to `onClick` instead of **calling** the function. If we call the function, it will run the function when we render, not when the user clicks on the button. (Remember that *rendering* is the term in React for inserting into the DOM).

##### 

##### note

Think of it like this: we give the event handler to React, so that React can call our function when the element is clicked.



## Re-rendering components

So far we've seen that when the page loads, React calls our function  components. The JSX elements that are returned from the component  functions are turned into the DOM for you by React.

To be able to react to changes, we need to *re-render* our function components to get different JSX elements. React can then update the DOM based on the new JSX elements.

Let's look at how a component is re-rendered ([interactive version](https://codesandbox.io/s/force-component-re-rendering-llow115pll?file=/src/Counter.js)):

```jsx
function Counter(props) {
  console.log(`Rendering. props.likeCount is ${props.likeCount}`);

  return <button id="like-button">Likes: {props.likeCount}</button>;
}
```



If you look in the console, you'll see that the component is rendered once when the page loads. `props.likeCount` starts at 0, so React inserts "Count: 0" into the DOM.

We won't look at how this works at the moment, but behind the scenes there is some code that will listen for clicks on the button and force React  to update. That means when you click the button, the function component  is called again (or *re-rendered*).

Now `props.likeCount` is **1**. React now **updates** the DOM to make sure it shows the correct number. Every time we click  the button, the function component is called and React updates the DOM  for us.

We don't need to worry about changing the DOM ourselves!  This is what makes React so powerful. Even better, React will figure out exactly the right bits of the DOM that need to be changed, a concept  called the ["virtual DOM"](https://reactjs.org/docs/faq-internals.html). This makes it extremely efficient and fast.



## State

*State* is a general concept in software engineering. It is used when a part of your app needs to "remember" something that changes when people  interact with it.

![img](https://syllabus.codeyourfuture.io/991ae3122f1d5c4ce65499bb9849eb7c.png)

This is a simple example, but if we had lots of bits of state, then we can make very complex apps.



### React Hooks

React has built-in functionality for initialising and updating state in our components. We will access state via a React *Hook* called `useState`.

Hooks are a new-ish feature in React. You may find older tutorials that don't use Hooks, but don't panic. The concepts we learn here are the same  whether or not you use Hooks. We are looking at Hooks first because they are simpler to learn for beginners.



### Importing `useState`

To be able to access the `useState` Hook, we first need to import it from the React package. Let's look at an example ([interactive example](https://codesandbox.io/s/importing-usestate-hook-8jr9f?file=/src/App.js)):

```jsx
import React, { useState } from "react";
console.log(useState);
```



If we look at the console, `useState` is just a function. It lives inside the React code that you installed when you created the app.

To reference the `useState` function in our component, we need to import it from the React code. The curly braces around `useState` are a bit like writing:

```jsx
import React from "react";
let useState = React.useState;
```





In fact we can just write `React.useState` in our component if we want! But to type a bit less code, we import it (using the curly braces) once and then can just use `useState`.



### Using `useState`

Now let's look at how we can use the `useState` Hook ([interactive example](https://codesandbox.io/s/initialising-and-rendering-usestate-variables-zgszi?file=/src/Counter.js)):

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return <p>You clicked {count} times</p>;
}
```



Let's break this down into small pieces. First, let's look at calling the `useState` function:

```jsx
useState(0);
```

This initialises the state variable to 0. Any parameter passed to `useState` will be used as the initial value.

Next, let's look at how we render the state variable in our component:

```jsx
return <p>You clicked {count} times</p>;
```

`count` is just a variable, so to insert it into our JSX we treat it like any other variable: we use curly braces.

Finally, let's look at how we get hold of the `count` variable:

```jsx
const [count, setCount] = useState(0);
```

If you remember back to [JS Core 3 Week 3](https://syllabus.codeyourfuture.io/js-core-3/week-3/lesson#destructuring-syntax), we covered *destructuring*. As a reminder, you can assign variables to parts of an array with destructuring:

```js
let [firstWord, secondWord, thirdWord, fourthWord] = [
  "Hello",
  "Code",
  "Your",
  "Future",
];
console.log(firstWord); // Prints "Hello"
console.log(secondWord); // Prints "Code"
console.log(thirdWord); // Prints "Your"
console.log(fourthWord); // Prints "Future"
```

In React, `useState` will **always** return an array with two items. The first item in the array is the current value of the `count` state. In our example it will be 0 on the first render. The second item in the array is a function that we will use to update our state.



When we destructure an array, we can name the variables whatever we want,  but there is a naming convention when destructuring the `useState` array. The first variable should be named whatever your state is  called, and the second variable should be the same name but prefixed  with `set`. Let's look at some examples:

```js
const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

const [username, setUsername] = useState("chris");

const [unreadMessages, setUnreadMessages] = useState(5);
```



#### Exercise C (estimate: 5 min)

1. Open [this CodeSandbox](https://codesandbox.io/s/using-usestate-exercise-3kwei?file=/src/Weather.js).
2. Take a few minutes to read the code. Why do you think the app is broken?
3. Initialise a new state variable with `useState` that will fix the app. Think carefully about how you should name the variables.
4. Discuss with another trainee how you would create another state variable that  represents the weather conditions (e.g. sunny, rain).



### Updating State

Our Counter isn't very useful right now! Let's make it more useful by getting `count` to actually count up ([interactive example](https://codesandbox.io/s/usestate-counter-lorv5?file=/src/Counter.js)):

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
     setCount(count + 1);
  }

  return (

    <div>
      <button onClick={incrementCount}>Click me</button>
      <p>You clicked {count} times</p>
    </div>
  );
}
```



Our component now has a `<button>`, which will call the `incrementCount` function when clicked:

```jsx
<button onClick={incrementCount}>Click me</button>
```



The `incrementCount` function then calculates the **new** state by adding 1 onto the current `count`. And then calls `setCount` to set the new state:

```jsx
function incrementCount() {
  setCount(count + 1);
}
```

`setCount` does two things. First, it updates the state that our component is "remembering". Whatever you pass as the argument to `setCount` will be remembered as the new state.

It also tells React that the old state that is **still shown in the DOM** is outdated and so the DOM needs to change. Because of this, React will re-render all of our components to figure out what to change in the  DOM.

When re-rendering, React will call our `Counter` component again, but this time when we call `useState` it will give us the updated state of 1, instead of the initial state of 0:

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  ...
}
```



On the second render, `count` is now set to 1. Every time we click the button, the whole cycle starts again.



### When do you use Props or State?

We've looked at the 2 main ways of managing data in our React components. But when should we use props and when should we use state?

Remember  that props are like "arguments" to a component. It's good practice to  make sure that you don't modify arguments after you receive them. Just  like state, React prevents you from mutating them. Let's have a look at  an example ([interactive example](https://codesandbox.io/s/when-to-use-props-or-state-9wl90npk4?file=/src/Greeting.js)):

```jsx
function Greeting(props) {
  function handleThing() {
     props.name = "Mozart";
  }

  return (
    <div>
      <p>Hello {props.name}</p>
       <button onClick={handleThing}>Click me</button>
     </div>
  );
}
```

When you click the button, you might expect the `name` prop to change to "Mozart". But it doesn't! React has made props *read-only*, which is a reminder that we shouldn't change props.

If we were allowed to change props, React doesn't have a way of telling that we've changed the data. Our UI is now *stale* - not up-to-date with the latest data - and has no way of knowing that it has to re-render.

From this we can get a clue about when to use state. If data *changes over time*, then we need to use state. My rule of thumb is that I always use props  until I know that it needs to change over time, then I convert it to  state.



>  Taken from https://syllabus.codeyourfuture.io/react/week-1/lesson

