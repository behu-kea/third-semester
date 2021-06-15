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



## User authentication

