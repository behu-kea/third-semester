console.log(2);
const router = new Navigo("/", { hash: true });
router
  .on({
    "/": () => {
      console.log("User requested main page");
    },
    about: () => {
      const content = document.querySelector(".content");
      content.innerHTML = `<h1>This is the about page</h1><a href="/user/2?foo=bar" data-navigo>click me</a>`;
      console.log("User requested the about page");
    },
    "/user/:id/": ({ data }) => {
      console.log("User requested user page with id " + data.id);
    },
  })
  .resolve();
