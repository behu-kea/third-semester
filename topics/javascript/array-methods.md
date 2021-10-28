# Array methods

Support video: https://youtu.be/wBKv2EX2hw8 and https://youtu.be/w4FNF8FLjQU



## `forEach`

`forEach` is used to iterate through each of the elements in an array.  Calling `forEach` does not return anything!



### `.forEach()`

Say we want to log to the console a list of names.

```js
const names = ["Daniel", "mozafar", "irina"];
```



We can use `.forEach()` to go through the array, item by item, and call a function we provide.

```js
names.forEach(function (name, index) {
  console.log(index + ": " + name);
});
```

That means that the function we provide to the `forEach` method is called 3 times! The parameter `name` represents the individual elements in the array. The parameter `index` represents the index in the array. 



### Exercise (10 minutes)

- Create a function that takes a `birthYear`, and log out the age of someone
- You are given an array with year that 7 people were born, `[1964, 2008, 1999, 2005, 1978, 1985, 1919]`. Take this array and log out the individual ages of the people



### Exercise (5 minutes)

You can drive in the UK at the age of 17.

- Write another function that takes a birth year and returns a string `Born in {year} can drive` or `Born in {year} can drive in {x} years`
- Use the array of birth years, `[ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ]`, to get an array of strings saying if these people can drive
- `console.log` the answers for each birth year



## `map`

The `map` method is used for transforming/changing/mapping the an array! Use it when you have to change the structure of your array



Imagine you have the following array of names

```javascript
const mentorNames = ["Daniel", "Irina", "Gordon", "Jim"];
```

Now a developer asks you if you can give the developer an array of the length of the mentors names. Fx Jim has 3 characters. This is a perfect case for `map`, we want to transform the array from the names to the names length

```javascript
const mentorNames = ["Daniel", "Irina", "Gordon", "Jim"];
const mentorNameLengths = mentorNames.map(function(name) {
	return name.length
});
console.log(mentorNameLengths); // [6, 5, 6, 3]

```

Notice that calling the `map` returns a new array with the transformed data: `const mentorNameLengths = mentorNames.map`



Have a look at this other example:

```javascript
const numbers = [1, 2, 3];
// call map using anonomous function
const numbersDoubled = numbers.map(function(number) {
    return number * 2;
  }
);

function double(number) {
  return number * 2;
}
// Calling map using a already defined function
const numbersDoubledOtherWay = numbers.map(double);
```

The `map()` method runs the function we provided (`double`) on each item in the array and uses the return values to create a new array. In the example `numbersDoubled` is a new array containing `[2, 4, 6]`.



### Exercise

Using the `mentorNames` array, make a new array with the last character in the array

```javascript
const mentorNames = ["Daniel", "Irina", "Gordon", "Jim"];
```

This should be the result

```javascript
console.log(newTransformedArray); // [l, a, n, m]
```



## Array filter

Imagine you have an array of trainees' test scores:

```js
const testScores = [90, 50, 100, 66, 25, 80, 81];
```



You want to show only the test scores that are higher than 80. How do you do that for every value in the array?

We can write a function that checks if one score is greater than 80:

```js
function isHighScore(score) {
  return score > 80;
}
```



To find out which scores were greater than 80, you'd have to run this  function against every score in the array, and push the 80+ scores into a new array. Thankfully there is an array method that does just this!



### `.filter()`

*Runs every item in the array through a condition that we set, and returns a new array with the values that match the condition*.

```js
const highTestScores = testScores.filter(isHighScore);
console.log(highTestScores); // logs [90, 100, 81]

const highTestScoresOtherWay = testScores.filter(function(score) {
  return score > 80;
});
console.log(highTestScoresOtherWay); // logs [90, 100, 81]
```



### Exercise (10 mins)

Create a function which:

- Takes an array of `birthYears`
- Uses `console.log` to print the message `These are the birth years of people who can drive: <filtered birth years>`
- Returns an array of people who can drive (remember, you can drive if you are 17 years or older)



### Chaining

Notice how we were able to write one method after another e.g. `names.map(formatName).forEach(log)`? This is called *method chaining*.

You can call `.forEach()` after `.map()` because `.map()` returns a new array.

Consider this code:

```js
function formatName(name) {
  return name.split("")[0].toUpperCase() + name.slice(1);
}

function log(name, index) {
  console.log(index + ": " + name);
}

const namesFormatted = names.map(formatName);
namesFormatted.forEach(log);
```



It can be written more simply (without assigning the array returned from `.map()` to a variable):

```javascript
names
  .map(formatName)
  .forEach(log);
```



Be careful though! You can not call `.map()` after `.forEach`.

```javascript
names
  .forEach(log)
  .map(formatName); *// ERROR*
```

This code does not work because `forEach()` does not return a new array (it returns `undefined`). The code is therefore attempting to call `.map()` on `undefined`, and `undefined` does not have a `.map()` method.



## Exercise - Listings

Use this function to generate random listings

```js
/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings 
 * @returns {array} Array containing the listing objects
 */
function generateListings(numberOfListings) {
    const listings = [];

    const listingType = ['House', 'Apartment', 'Shed', 'Dorm', 'Farm'];
    const listingFacilities = ['Parkering', 'Elevator', 'Altan', 'Have', 'Husdyr'];
    
    for (let i = 0; i < numberOfListings; i++) {
        const listing = {};
        const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
        const numberOfFacilities = randomIntFromInterval(1, listingFacilities.length - 1);
        const facilities = [];
        for(let i = 0; i < numberOfFacilities; i++) {
            const randomIndexFacilities = randomIntFromInterval(0, listingFacilities.length - 1);
            const randomFacility = listingFacilities[randomIndexFacilities];
            
            if (!(facilities.includes(randomFacility))) {
                facilities.push(randomFacility);
            }
        }

        listing.type = listingType[randomTypeIndex];
        listing.facilities = facilities;
        listing.price = randomIntFromInterval(1, 10000);
        listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
        listing.size = randomIntFromInterval(12, 1000);
        listing.img = `https://loremflickr.com/200/200/${listing.type}`

        listings.push(listing);
    }

    return listings;
}

generateListings(20);
```



### ForEach

- Create 37 listings and log out every listings size



### Map

- Create an array that contains all the 37 listing **prices**. 



### Filter 

Using the 37 listings from the previous tasks
- Create an array of cheap listings. You define what cheap means. Each item in this array should be of type object
- Create an array of expensize listings prices. Each item in this array should be of type number
- Create an array of listings that have parking. Each item in this array should be of type object




### Arrow functions
Rewrite the code above (`forEach`, `map` and `filter`) to arrow functions.




### Listing project
Imagine we have a website like https://danskebank.dk/bolig/sogning?sorter=hoejt-forbrug where a user can search for different parameters. Fx What type the listing should be, the price, size, location etc etc. 



#### Filter listings

If a user fx click on a button indicating that the user only wants listings that are of the type farm. Lets try and  imagine how we would use a function to create this functionality:

```js
const listings = generateListings(20);

const filter = {
    type: 'farm',
};

const farmListings = filterListings(listings, filter);
```

Okay, so the `filterListings` function takes a filter which is an `object`. Say the user wants farm listings that cost more than 1.500.000. 

```js
const filter2 = {
    type: 'farm',
    minPrize: 1500000,
};

const cheapFarmListings = filterListings(listings, filter2);

```

Your job is to create the `filterListings` function. The function should support these filters: type, facilities, price , hasGarden and size. Use arrow functions!

*Last exercises taken from: https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript2/week2/lesson-plan.md*