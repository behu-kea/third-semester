# Forms and data fetching

This class will be about working with forms and getting data from a server using React. 



## Working with Forms

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
      
        console.log(event.currentTarget.title.value);
    }

    return (
        <form onSubmit={handleSubmit}>
        		<label htmlFor="title">Put in your title</label>
            <input id="title" type="text" name="title" />
            <button>Submit form</button>
        </form>)
}

export default FormComponent;
```

