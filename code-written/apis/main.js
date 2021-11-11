/*
fetch("http://localhost:8080/users")
  .then((Response) => Response.json())
  .then((users) => {
    console.log(users);
  });
  */

fetch("http://localhost:8080/users", {
  method: "POST",
  body: JSON.stringify({ id: 42, title: "Test title" }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((Response) => Response.json())
  .then((users) => {
    console.log(users);
  });
