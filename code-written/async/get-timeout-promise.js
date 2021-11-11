export default function (millisecondsToWait) {
  const randomNumber = getRandomInt(0, 5);
  if (randomNumber === 4) {
    return new Promise((resolve, reject) => reject());
  }

  return new Promise((resolve) => setTimeout(resolve, millisecondsToWait));
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
