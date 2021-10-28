# Objects

Think of an object like a HashMap. It has a key and a value behind that key. 



This is how to create an object in Javascript

```javascript
const laptop = {
  brand: "Lenovo",
  screenSize: 13,
  isTouchscreen: true,
};
```

You write the key, then colon and then the value you want to store.



## Exercise 1

Create an object that describes you. Fx a key called `age` with the value of 28.



## Exercise 2

The objects below have some syntax issues - try and fix them all!

```javascript
const kitten = {
    fur colour: "orange",
    age "23"
};

const laptop =
    brand: "Lenovo"
    ram "5GB"
}

const phone = {
    operating system "iOS",
    hasStylus: true,
    megapixels 12
    "batteryLife": "24 hours"
```



## Object get and setter

### Getting an objects property

Let's take one of the objects we looked at earlier.

```javascript
const laptop = {
  brand: "Lenovo",
  screenSize: 13,
  isTouchscreen: true,
};
```



> Try to `console.log(laptop)`. The output might depend on your environment!

To find out the value of an object's property, you can use the dot notation..

```javascript
console.log(laptop.brand);
```

You can also use the bracket notation (although this is rarely used, it's good to know):

```javascript
console.log(laptop["brand"]);
```



#### Exercise 3

```javascript
// Console.log the values of each property of "kitten"

const kitten = {
  ageMonths: 3,
  isFemale: true,
  furColour: "brown",
};
```





### Setting an objects value

### Setting the value of a property

Similar to reading, if we want to set a property:

```javascript
laptop.brand = "Apple";
```

It's strongly recommended you always use the same **type** when re-assigning an object's property (if it was a string before, keep it a string - and so on).

```javascript
const laptop = {
  brand: "Lenovo",
  screenSize: 13,
  isTouchscreen: true,
};

// DON'T DO THIS*
laptop.screenSize = "15 inch";

// OK TO DO
laptop.screenSize = 15;
```



#### Exercise 4

Write code in the space provided so that the expected values output

```javascript
const dog = {
  name: "Billy",
  wantsToPlay: false,
};

// WRITE CODE BELOW THIS LINE
// WRITE CODE ABOVE THIS LINE

console.log(dog.name);
console.log(dog.wantsToPlay);

// -> it should output:
// Rex
// true
```



*Most material taken from here: https://syllabus.codeyourfuture.io/js-core-2/week-1/lesson*



## Array of objects



