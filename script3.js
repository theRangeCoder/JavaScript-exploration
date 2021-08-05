// Template literals (offers a clean way of having text on multiple lines)
document.getElementById("temp-lit").innerText = `Hello
there!`;

// Destructuring objects (accessing the keys of an object easily by breaking the object into its component keys)
let ob1 = {
    name: "John",
    age: 23,
    address: {
        city: "Paris"
    }
};

const {name, age, address: {city}} = ob1;

console.log(name);

// Example: Destructure the following object
const student = {
    name2: "Kyle",
    age2: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}

const {name2, age2, projects: {diceGame}} = student;

console.log(name2);
console.log(diceGame);

// Destructuring arrays
const arr1 = ['BMW', 'Germany', 'Europe'];

const [company, country, continent] = arr1;

console.log(company);

// Object literals (key = value)
function addressMaker(address) {
    // Destructuring the object
    const {city, state} = address;
    const newAddress = {
        city,
        state,
        country: 'United States'
    };
    console.log(`City: ${newAddress.city}; State: ${newAddress.state}; Country: ${newAddress.country}`);
}

addressMaker({city: 'Austin', state: 'Texas'});

// for of loop (can be used for any iterable - an array, a string, etc)

// Challenge - For Of Loop

// Using the For of Loop, iterate through the array and print into the console, a message like:
// Tom lives in Lisbon

const students = [ 
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sydney" }
]

for (const obj of students) {
    const {name, city} = obj;
    console.log(`${name} lives in ${city}`);
}

// The spread operator (...) (to store a copy of the values of an array/ object in another array/ object)
// Usage: newArr = [...oldArr] and newObj = {...oldObj}

/*
    **** Challenge ****
    
    Imagine you are going out to do some grocery shopping.
    So you have an array called shoppingList with all the products you want to buy.
    
    Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more.
    
    Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it. 

*/

const shoppingList = ["eggs", "milk", "butter"];
let shoppingBasket = [...shoppingList, "bread", "sugar", "salt", "tomatoes"];
console.log(`The new shopping list: ${shoppingBasket}`);

// The rest operator (used when the number of parameters to a function are not known)
function randomPrint(...text) {
    console.log(text);
}

randomPrint(2,"Shuva",[2,3,4]);

// Arrow functions (a new way to define functions)
/*
Let us explore the following 3 types of function declarations:
1. The usual way
2. The anonymous function
3. Arrow functions
*/

// The usual way
function add(n1, n2) {
    return n1+n2;
}

// The anonymous function
const add2 = function(n1, n2) {
    return n1+n2;
}

// Arrow functions
const add3 = (n1, n2) => {
    return n1+n2;
}

// Invoking the above 3 functions
console.log(`The usual way: ${add(2, 3)}`);
console.log(`The anonymous function: ${add2(2, 3)}`);
console.log(`Using arrow functions: ${add3(2, 3)}`);

// An arrow function to check if a number is odd or even
const oddOrEven = (n) => {
    if (n % 2 === 0) {
        return "Odd";
    }
    return "Even";
}

// Default parameters (const nameOfFunction = (parameter1 = default parameter 1, parameter2 = default parameter 2, ...) => {...})
/*
**** Challenge *****

Create a function that receives a parameter of food.
If your parameter food is going to have a value of "milk"
the function should print into the console the following:

"I'm going to buy milk from the grocery shop"

But if you dont pass a value to your parameter food, it should print
"I'm going to buy something from the grocery shop"

*/
const buyItem = (food = "something") => {
    console.log(`I'm going to buy ${food} from the grocery shop`);
}

buyItem("milk");
buyItem("something");

// The arr.includes(value) function returns true if the value is contained in the array arr, else it returns false

/*
    ** includes() Challenge
        * You want to make a chocolate cake
        * And you have a list of ingredients represented with an array
        * Using the JavaScript includes() function
        * Check if you have the ingredient chocolate in your list of ingredients, and print into the console "We are going to make a chocolate cake" if you have it
        * Else print into the console "We can't make a chocolate cake because we are missing the ingredient chocolate"
*/

const listIngredients =  [ "flour", "sugar", "eggs", "butter" ];
if (listIngredients.includes("chocolate")) {
    console.log("We are going to make a chocolate cake");
}
else {
    console.log("We can't make a chocolate cake because we are missing the ingredient chocolate");
}

/* import and export keywords

**Challenge**

Inside of the file data.js, create a function add4, that will receive 2 numbers and return the sum of them.
Make sure to export this function.

- Import the function add4, into the script3.js file
- Create a variable result, that will hold the result of the function add when you call it and pass 2 numbers into it.
- print into the console the value of the variable result;

*/
import {add4} from './data.js'
let result = add4(2,3);
console.log(result);

// str.padStart(n, char) and str.padEnd(n, char) methods
/*
Here, n = desired length of string
char = the characters that should be added at the start/ end of the string, to make it reach that desired length
For example, let str = 'Shuv'
str.padStart(5, 'a') will give us the string: 'aShuv' because the length of the final string should be 5 and we should add 'a' at the beginning of it.
Similarly, str.padEnd(5, 'a') will give us: 'Shuva'
However, str.padStart(3, 'a') will give us: 'Shuv' because the string is already larger than length = 3, and hence the method will not add any character at the beginning of it to get it to length = 3.
*/

let padStr = 'JavaScript';
console.log(padStr.padStart(13, 'a'));
console.log(padStr.padStart(20, 'ach'));
console.log(padStr.padEnd(5, 'a'));
console.log(padStr.padEnd(12, 'yo'));

// Classes
import {Animal} from './data.js'
Animal.message();

// Creating an instance of the class
let obj = new Animal('Cat');
console.log(obj.legs);

let obj2 = new Animal('Ant', 6);
console.log(obj2.legs);

obj.meow("woof");

obj.metaData; // metaData is being treated as a property of the object

