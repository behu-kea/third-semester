/*
fetch("http://api.open-notify.org/astros.json")
  .then((Response) => Response.json())
  .then((astronautsData) => {
    const pTag = document.querySelector("p");
    pTag.innerHTML = astronautsData.number;
  });
*/

fetch("http://localhost:8080/users", {
  method: "POST",
  body: JSON.stringify({ name: "Marianne", age: 77 }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((Response) => Response.json())
  .then((users) => {});
