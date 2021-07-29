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
