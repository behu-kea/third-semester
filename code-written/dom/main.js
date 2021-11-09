console.log("Script initiated");

const h1Element = document.querySelector("h1");
console.log(h1Element);

const ulProject = document.querySelector("ul.projects");

// selecte the li's that are children of the ul
console.log(document.querySelectorAll("ul.projects > li"));

const button = document.querySelector("button");
console.log(button);
console.log(1);
button.addEventListener("click", () => {
  console.log(2);
  console.log("clicked");
  console.log(3);

  const newLi = document.createElement("li");
  console.log(newLi);
  ulProject.appendChild(newLi);
  newLi.innerHTML = "Music maker";
});
console.log(4);

setTimeout(() => {
  h1Element.innerHTML = "asdasd";
  h1Element.style.backgroundColor = "red";
}, 1000);
