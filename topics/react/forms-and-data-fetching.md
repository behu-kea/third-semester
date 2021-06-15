# Forms and data fetching

This class will be about working with forms and getting data from a server using React. 



## Working with Forms

Forms are typically used to get some value from a user. The typical case is creating a new user. In this usecase the user writes some details like name, age, email, etc. This information then needs to be posted to an api so the user can be created in the database. Lets first look at how to get data out of a submitted `form`

In React there is generally two ways of working with forms:

- Controlled inputs - React tracks the value of the different input elements
- Uncontrolled inputs - We don't track the value of the inputs

Generally working with it is recommended using controlled inputs, you can read more about that here: https://syllabus.codeyourfuture.io/react/week-3/lesson#controlled-component-pattern. But as this is a bit more cumbersome we will be working with uncontrolled inputs. 



```jsx
import react, { useEffect, useState } from "react";

function FormComponent() {
    const handleSubmit = (event) => {
      	// this will prevent the form from making a post request
        event.preventDefault();
      	// Here we have the value the user wrote in the input field
        console.log(event.currentTarget.title.value);
    }

    return (
        <form onSubmit={handleSubmit}>
        		<label htmlFor="title">Write your title</label>
            <input id="title" type="text" name="title" />
            <button>Submit form</button>
        </form>)
}

export default FormComponent;
```

Here we handle the submit of the `form` using the `onSubmit` attribute. When that function is called the `event` is given as a parameter. The `event` is then cancelled avoiding that the form will make a post request. Getting the value the user wrote we use `event.currentTarget.title.value`





## Data fetching

In the [Javascript course](../javascript/apis.md) we talked about using API's to `GET` and `POST` data to a server. Let's look at how to do that in React 👇



### `useEffect`

In order to fetch data from an api we need to figure out **when** to fetch this data. We do **not** want to fetch data while the component is actively rendering, but rather **after** the component has rendered. To run some code after the component has rendered we use `useEffect`. 

You can see `useEffect` kind of like an `eventlistener` running a function when a component has rendered.  `useEffect` takes two arguments:

1. Function to call when the component is rendered
2. Optionally - A dependencies array, when values in this array changes the function provided in 1. will be called again

```jsx
import react, { useEffect, useState } from "react";

function FetchGetComponent() {
  	// This function will be run once since the dependencies array is empty
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((postsResponse) => postsResponse.json())
            .then((posts) => {
              console.log(posts);
            });
    }, []);

    return (
    		<ul>
      	</ul>
    )
}

export default FetchGetComponent;
```

Here we use `useEffect` to call a function **after** the component has rendered. Because the second argument is an empty array, the method we gave to `useEffect` will only be called once! Here we simply log out the `posts`. Let's try and render the posts that came from the api 👇



```jsx
import react, { useEffect, useState } from "react";

function FetchGetComponent() {
  	// posts is am empty array per default
    const [posts, setPosts] = useState([]);
  
  	// This function will be run once since the dependencies array is empty
    useEffect(async () => {
          .then((postsResponse) => postsResponse.json())
            .then((posts) => {
            		setPosts(posts);
            });
    }, []);

    return (
        <ul>
            {
                posts.map((post) => <li>
                    {
                        post.title
                    }
                </li>)
            }
        </ul>
    )
}

export default FetchGetComponent;
```

