# Routing

Routing is the process of redirecting a user to the correct page. Routing can be done both in the frontend and in the backend of the application. Since we will only use the backend server for the api, then we need to do the routing in the frontend



There are lots of ways to do this! For this course we will be using navigo: https://github.com/krasimir/navigo



## Navigo



### Install navigo

To get access to navigo add this line before you load the rest of your javascript in your html file: `<script src="//unpkg.com/navigo"></script>`

```html
<body>
  <script src="//unpkg.com/navigo"></script>
  <script src="index.js"></script>
</body>
```

Now in your `index.js` file

```javascript
const router = new Navigo("/", { hash: true });
 router
    .on({
      "/": () => {
        console.log('User requested main page');
      },
      "about": () => {
        console.log('User requested the about page');
      },
      "/user/:id/": ({ data }) => {
        console.log('User requested user page with id' + data.id);
      },
    })
    .resolve();
}
```

There are a couple of things to comment in the code above

- `const router = new Navigo("/", { hash: true });` here we create a new navigo instance. The first paramter refers to the root of the project. The second refers to the way the urls should look like. Look at the Hash routing section below

-  `router.on` takes an object where the keys is possible url's of the page. 

  ```javascript
  "about": () => {
    console.log('User requested the about page');
  },
  ```

  This code attaches a url called `about`. When a user navigates to `/about` the text `User requested the about page` will get logged

- `"/user/:id/": ({ data }) => ` This will register a url where the user can write the following `user/3`. Using `data.id` we can get the id the user wrote. This part `{ data }` is called destructuring, you don't need to know how that works.

- The `.resolve();` is a technicality of navigo. Not entirely sure why it is needed



Okay, so what we have created so far is just some routes and when a user goes to those routes we log something out. But that's not really super helpful for a user. He off course wants to see some html regarding the about page. 





### Hash routing