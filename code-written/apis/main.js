/*
fetch("http://localhost:8080/users")
  .then((Response) => Response.json())
  .then((users) => {
    console.log(users);
  });

*/
fetch("http://localhost:8080/users", {
  method: "POST",
  body: JSON.stringify({ name: "Hans", age: 44 }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((Response) => Response.json())
  .then((users) => {
    console.log(users);
    hej = 1;
  });

/*

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append("Cookie", "Cookie_1=value");

var urlencoded = new URLSearchParams();
urlencoded.append("name", "yrsula");
urlencoded.append("age", "34");

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  body: urlencoded,
  redirect: "follow",
};

fetch("http://localhost:8080/users", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
*/
