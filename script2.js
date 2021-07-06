// Strings in JavaScript
let username = "Shuva";
console.log(username);

// Create a variable, message, that stores the string: "You have three new notifications"
let message = "You have three new notifications";

// Combine the above two strings
let combinedStr = message+", "+username;
console.log(combinedStr);

/* Create two variables, name and greeting. The name variable should store your name, and the greeting should store e.g. "Hi, my name is ".
Create a third variable, myGreeting, that contatenates the two strings.
Log myGreeting to the console */
let name = "Shuva";
let greeting = "Hi, my name is ";
let myGreeting = greeting+name;
console.log(myGreeting);

// NOTE: When one concatenates a number with a string, the output is always a string by default.

/* Challenge:
Grab the welcome-el paragraph and store it in a variable called welcomeEl

Create two variables (name2 & greeting2) that contains your name and the greeting we want to render on the page

Render the welcome message using welcomeEl.innerText 
*/
let welcomeEl = document.getElementById("welcome-el");
let name2 = "Shuva";
let greeting2 = "Welcome back";

welcomeEl.innerText = greeting2 + ", " + name2;

// Adding an emoji 👋 to the inner text
welcomeEl.innerText+=" 👋";

/*
Create a person object that contains three keys: name, age, and county.
Use yourself as an example to set the values for name, age, and country

Create a function, logData(), that uses the person object to create a
string in the following format: 
"Per is 35 years old and lives in Norway"

Call the logData() function to verify that it works
*/
let person = {
    name: "Shuva",
    age: 23,
    country: "Germany"
};

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country);
}

logData();

// Practice time - part 2: Challenge 2

let age = 15

/*
less than 6 years old -> free
6 to 17 years old     -> child discount
18 to 26 years old    -> student discount
27 to 66 years old    -> full price
over 66 years old     -> senior citizen discount

Create a conditional statement (if/else/else if) that logs out the discount
the passenger will get based upon the value of the age variable
*/
if (age < 6) {
    console.log("free");
} else if (age >= 6 && age <= 17) {
    console.log("child discount");
} else if (age >= 18 && age <= 26) {
    console.log("student discount");
} else if (age >= 27 && age <= 66) {
    console.log("full price");
} else {
    console.log("senior citizen discount");
}

// Practice time - part 2 (challenge 3) - Largest countries by population
let largeCountries = ["China","India","United States","Indonesia","Pakistan"];

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indonesia
- Pakistan
*/
console.log("The 5 largest countries in the world:")
for (let i = 0; i < largeCountries.length; i++) {
    console.log("- "+largeCountries[i]);
}

// Practice time - part 2 (challenge 4) - push, pop, unshift, shift challenge

largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"];

// Fixup the largeCountries array so that China and Pakistan are added back into their respective places

largeCountries.pop();
largeCountries.push("Pakistan");
largeCountries.shift();
largeCountries.unshift("China");


