// Declaring a variable
let firstName = "Shuva";

// Declaration and initialization separately
let lastName;
lastName = 'Bhual';

// Printing the variables
console.log(firstName);
console.log(firstName + " " + lastName);

// Declaring integers
let a = 5;
console.log(a);

// Declaring booleans
let isEmployed = true;
isEmployed = false;

console.log(firstName + a);

// Experimenting with integers, declared as strings
b = '6';
console.log(a+b);
console.log(a+a);

// Challenge: It your Dog's Birthday!

/*
 Create 2 variables related to your dog. Make one of them its age and update it by one.
 Log out all the values in a friendly way of your choosing.
*/
const name = 'Monty';
let age = 5;
age = age+1;
console.log('Name: '+name);
console.log('Age: '+age);

// Declaring variables using const (Can neither be redeclared nor updated)
const a2 = 5; 
console.log(a2);

var temp1; // Initialized as 'undefined'
let temp2; // Initialized as 'undefined'
const temp3=10; // 'const' should be assigned a value, at the time of declaration
console.log(temp1+" "+temp2);
console.log(typeof temp3);

// Strings in JavaScript
 let str1 = "Munich";
 console.log(typeof str1);

 // Concatenating strings (the curly braces could be used as one of the methods)
console.log(`${firstName} ${lastName} ${a}`);

// Some string methods
console.log(firstName.length);
firstName = firstName.toUpperCase();
console.log(firstName);

// THe 'split()' function
let str2 = "The quick brown fox jumps over the lazy dog";
arr1 = str2.split(' '); // splits the words of the strings at each empty space and stores them in an array
console.log(arr1);
console.log(typeof arr1);

// The 'trim()' function - removes all spaces before and after a string
let str3 = str2.trim();
console.log(str3.length);

// Challenge
let fullName = firstName + " " + lastName;
console.log(fullName);
// In ES6, it would have been: let fullName = `${firstName} ${lastName}`

// Numbers in JavaScript
let example1 = 7.77; 
// JS does not have multiple number types (float, int, double, etc). It just has 'number'.

// To extract the integer part (convert it to an integer)
let example2 = parseInt(example1);
console.log(example2);

// Rounding off, a value, to certain places of decimal
let example3 = 7.8759;
let example4 = example3.toFixed(3);
console.log(example4);

// Challenge
let ex1 = parseInt("Hello 33 World 22");
let ex2 = parseFloat('44 Dylan 33');
let ex3 = 55.3333.toFixed(0); // outputs the number as a string
let ex4 = 200.0.toFixed(2);

console.log(ex1); // Output = NaN
// If our string starts with a number, then the parseInt(), parseFloat(), etc functions will extract the number from the string.

// Booleans in JavaScript
let bool1 = true;
console.log(Boolean(2+2==5));

// Arrays (They start with index = 0)
let arr2 = [5, 6, 7];
console.log(arr2.length);
console.log(arr2[0]); // Answer = 5

// Adding values to the end of the array (the 'push()' function)
arr2.push(8, 9, 10);
console.log(arr2);

// Removing the last value of an array (the 'pop()' function)
arr2.pop();
console.log(arr2);

// Iterating through the array ('forEach' statement)
arr2.forEach((element) => {
    console.log(element)
})

// Challenge - Manage Inventory

/*
    1. Your company is launching 3 new products: toilet paper, bottled water, and sanitizer. Store them in a list.
    2. Turns out there was a mistake and toilet paper was actually paper towels. Make the appropriate update.
    3. Sanitizer sells out. Remove it from the list.
    4. Business is so good the company launches a new product: Bleach. Add it to the list.
    
    Note: After creating the initial array do not just create a brand new array. Modify it accordingly.
*/
