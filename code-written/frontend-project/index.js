import aboutRender from "./pages/about/about.js";
import one from "./adder.js";
console.log(one);

const router = new Navigo("/", { hash: true });
const contentDiv = document.querySelector(".content");
router
  .on({
    "/": () => {
      console.log("User requested main page");
      contentDiv.innerHTML = "<h1>Welcome to my the main page</h1>";
    },
    about: () => {
      aboutRender(contentDiv);
    },
    "/user/:id/": ({ data }) => {
      console.log("User requested user page with id " + data.id);
    },
  })
  .resolve();
