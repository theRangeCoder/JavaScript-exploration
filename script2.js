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