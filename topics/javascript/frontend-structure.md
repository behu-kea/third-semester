# Frontend structure

Building a frontend application using vanilla (pure) js can be done and is done in 1000 different ways. The approach taken here is what makes sense for me, hopefully it will for you to. If not feel free to create your own structure!

Here is the repo: https://github.com/behu-kea/navigo-routing-simple

Read about [routing](routing.md) before continuing on this page



## Overall structure

The overall structure of the application looks like this 👇

![Overall structure](../../assets/structure-overall.png)

- The `pages` - folder contains the different pages in the application. each page has an html file and a js file
- `.gitignore` - contains the files that should not be included in the git repo (`.DS_Store` fx)
- `index.html` - contains the `content` div, loads navigo and the main js file `router.js`
- `router.js` - contains the router



## Rendering a page

Let's use the about page as an example

```javascript
export default () => {
  const content = document.querySelector(".content");

  fetch("./pages/about/about.html")
    .then((response) => response.text())
    .then((aboutHtml) => {
      content.innerHTML = aboutHtml;
    });
};
```

The first thing we see is that the method is being exported! You can read more about `export` [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#exporting_module_features). `export default` means only export one funtion

We are exporting the function so it can be imported in another file (the `router.js`).

The second thing you see is that we `fetch` the html from this file: `pages/about/about.html`. That is smart because otherwise we would have to write all the html for the about page inside the `about.js` eg. 

```javascript
content.innerHTML = `<h1>
  <a href="/">Frontend structure</a>
</h1>
<h2>About</h2>
<p>This is the about page</p>
`;
```

This is not super nice because we want html in html files and js in js files. 



## Improved router

The router now looks like this

```javascript
import renderMain from "./pages/main/main.js";
import renderAbout from "./pages/about/about.js";
import renderUser from "./pages/user/user.js";

export default function () {
  const router = new Navigo("/", { hash: true });

  router
    .on({
      "/": () => {
        // call updatePageLinks to let navigo handle the links
        // when new links have been inserted into the dom
        renderMain().then(router.updatePageLinks);
      },
      about: () => {
        renderAbout();
      },
      "/user/:id/": ({ data, params }) => {
        renderUser(data.id);
      },
    })
    .resolve();
}
```

The first thing you see is the imports. As we talked about in the `about.js` that is where the functions are exported. Here they are imported using the `import` keyword: `import renderMain from "./pages/main/main.js";`

🚨**This only works because the `index.js` file is loaded using the `type=module` in the `index.html` file!**🚨

`<script src="index.js" type="module"></script>`



The last thing that might look a bit weird is the `renderMain().then(router.updatePageLinks);`. That is because if we render links in our application, then we have to call the `router.updatePageLinks` method!! 

So what happens here is that calling `renderMain` will return a promise that resolves after the DOM has been updated. This can be used to update the links after the DOM has been rendered. Calling `router.updatePageLinks` could also have been done in the `main.js` file after this line `content.innerHTML = mainHtml;`



## Exercises



### Exercise 1

Create a file that exports a function that adds two numbers. Import the function in another js file and log the result of adding two numbers. 



### Exercise 2

Fetch some html from a `/pages` folder and render it to a page



### Exercise 3

Set up routing so that when going to fx `/about` the program calls a function from another file (using import and export). Inside this file, fetch some html from a `/pages` folder and render it
