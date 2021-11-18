export default (contentDiv) => {
  //contentDiv.innerHTML = "<h1>Welcome to my about page one</h1>";

  fetch("./pages/about/about.html")
    .then((response) => response.text())
    .then((aboutHtml) => {
      console.log(aboutHtml);
      contentDiv.innerHTML = aboutHtml;
      setTimeout(() => {
        document.querySelector("h1").innerHTML = "about";
      }, 1000);
    });
};
