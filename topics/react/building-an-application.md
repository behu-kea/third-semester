# Building a React application

- Routing 
- User authentication



## Introduction to React-Router

In the past few weeks, you've learned how to build applications with React and the different applications and examples were all built on a single  page. However, what if you wanted to have different pages with each page having its own URL (so you can bookmark it for example)? You will need  to introduce a router in your application. In JavaScript, a router is  the piece of code which is in charge of switching between views of your  application and keep each view in sync with a specific URL. For example, you could imagine having a homepage reachable from the root path `/` and a users page with the path `/users`. In React, a popular library to help you achieve this is React-Router.

Let's look at a first example ([interactive example](https://codesandbox.io/s/react-router-1-lk44e)):

```jsx
const Index = () => {
  return <h2>Home</h2>;
};

const About = () => {
  return <h2>About</h2>;
};

const Users = ({ names }) => {
  return (
    <div>
       <h2>Users</h2>
       <ul>
         {names.map((name) => (
           <li>{name}</li>
         ))}
       </ul>
     </div>
  );
};

const AppRouter = () => {
  return (
     <BrowserRouter>
      <div>
         <nav>
           <ul>
             <li>
               <Link to="/">Home</Link>
             </li>
             <li>
               <Link to="/about/">About</Link>
             </li>
             <li>
               <Link to="/users/">Users</Link>
             </li>
           </ul>
         </nav>

         <Route path="/" exact component={Index} />
         <Route path="/about/" component={About} /
         <Route
           path="/users/"
           render={() => <Users names={["Raresh", "Nate"]} />}
         />
       </div>
     </BrowserRouter>
  );
};
```

React-Router provides some default React components that you can use to enable  routing in your application. First, notice the top level `<BrowserRouter>` component which wraps everything else. Each route is defined with the `<Route>` component which maps a path (defined with the `path` props) with a React component. In the simplest case, you can specify the React component to map to the path with the `component` props. However, it is assuming you don't need to pass any props to it.  If you face a more complex scenarios or if you need to pass props to  your React component, you can use the `render` props which takes a function and return exactly what you want to render on this path. Then, the `Link` component can be used to create links to navigate to different routes.



### URL parameters

Sometimes, parameters can be passed from the URL to a React component directly via its props. In this case, different URLs can be mapped to one single  React component. For example, in an online shopping application, a React component `Product` may be responsible to display a specific product on the page. By using URL parameters, the name or ID of the  requested product can be specific in the URL and React-Router will pass  it a props of the `Product` component ([interactive example](https://codesandbox.io/s/compassionate-https-jsf59)):

```jsx
const Product = ({ match }) => {
  return <h2>Product: {match.params.name}</h2>;
};

const AppRouter = () => {
  return (
     <BrowserRouter>
      <div>
         <nav>
           <h2>Product List</h2>
           <ul>
             <li>
               <Link to="/products/laptop">Laptop</Link>
             </li>
             <li>
               <Link to="/products/tv">TV</Link>
             </li>
             <li>
               <Link to="/products/teddy-bear">Teddy Bear</Link>
             </li>
           </ul>
         </nav>

         <Route path="/products/:name" component={Product} />
       </div>
     </BrowserRouter>
  );
};
```

In the route definition above, a specific syntax is used to define the URL parameter: `:name`. Then in the `Product` component, the value of `name` can be accessed through the component props `match.params.name`.



## User authentication using JWT

To authenticate a user in our application we will be using JWT (JSON Web Token). JSON Web Token (JWT) is an open standard ([RFC 7519](https://tools.ietf.org/html/rfc7519)) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. You can read more about JWT here: https://jwt.io/



You have already been working with JWT on the backend side of things. Here we will look at how to use the backend api to log in a user.



This is how we will be working with JWT in the frontend

1. First we will ask the backend for a JWT Token using a `username` and `password`. This happens when logging in. It basically goes like this: 
   Frontend: "Hey API can i please get a JWT token for the user with this `username` and this `password`?"
   Backend: "Off course frontend, here you go! You can find the token under the `data` key in my response!"
   Frontend: "Thanks API i found it! I will just save it locally in my `localStorage` so i can use it later "
2. Now with the token in `localStorage` everytime we ask the API for data we will send the token along to say that we are who we are.
   Frontend: "Hey api can you give me a list of my social media posts? I have attached my token in the request!"
   API: "Yeah off course i can see that you are who you say you are from the token. Here is your social media posts! "



Here is a diagram of the same flow 👇

![JWT authentication flow](../../assets/jwt-authentication-flow.png)

One extra thing we can see from this diagram is that the JWT token is sent through the header og the request. Let's get a bit closer to an actual implementation!



 ### Implementing authentication using JWT

#### Saving JWT token on login

Let's start with the login part where we get and save a token:

```js
function login(username, password) {
  // endpoint for logging in
  const apiUrl = "auth/signin";
  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.data.accessToken) {
        // Saving the JWT to local storage
        localStorage.setItem("user", JSON.stringify(response.data));
      }
  });
}
```

We have seen the `POST` request before. The `auth/signin` off course depends on where you have set your login endpoint up. 

Where the magic 🪄 happens are in these lines 👇

```js
if (response.data.accessToken) {
	localStorage.setItem("user", JSON.stringify(response.data));
}
```

We first check if the `accessToken` is there. If it is, we take the response, encode is to a JSON string with `JSON.stringify` and then save the JSONified token in `localStorage` (under the `user` key) using `localStorage.setItem`. We have now saved the token in locally! You can read more about `localStorage` here: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage



#### Attaching the token to a request

In this example we will getting some imaginary social media posts. This endpoint is only available for logged in users!

```js
// endpoint only available for a logged in user!
const apiUrl = '/social-media-posts';
// Get the JWT token from local storage
const userJWTToken = JSON.parse(localStorage.getItem("user"));
fetch(apiUrl, 
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      // attaching the JWT token to the request
      "Authorization": "Bearer " + userJWTToken.accessToken,
    },
  )
  .then(response => response.json())
  .then(socialMediaPosts => {
    console.log(socialMediaPosts);
  })
	.catch((error) => {
    console.log('Some error occured');
    console.log(error);
  });
```

-  The first thing we do is get the JWT token from `localStorage` using `localStorage.getItem`, using the key `user` where the token was saved.
- Then we make a `GET` request using `fetch` (the default request is the `GET` request). Now in the `headers` of the request we add a new header called `Authorization`. This is where we attach the token! We have to remember to add the `Bearer  ` before we add the token (for some reason 🤷‍♀️) 
- Now we get access to the `socialMediaPosts`. This is the API that will check if he token we sent is valid. If it is we get the `socialMediaPosts` otherwise we would get an error.

One thing to be very aware of here is that there might not be a JWT token in `localStorage`. If not this code will throw an error. Therefore this code needs to be rewritten a bit to work properly. 



 