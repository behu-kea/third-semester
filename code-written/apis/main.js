fetch("http://api.open-notify.org/astros.json")
  .then((Response) => Response.json())
  .then((astronautsData) => {
    const pTag = document.querySelector("p");
    pTag.innerHTML = astronautsData.number;
  });
