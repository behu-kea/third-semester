let astronautData = [];
fetch("http://api.open-notify.org/astros.json").then((data) => {
  renderAstronauts(data);
});

console.log(astronautData);

function renderAstronauts(astronauts) {
  console.log(astronauts);
}

//logOutThisText('hello');

function logOutThisText(text) {
  console.log(text);
}

document.querySelector("button").addEventListener("click", () => {
  logOutThisText("hello");
});
