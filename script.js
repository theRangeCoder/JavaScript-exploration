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

// The 'trim()' function - removes all spaces before and after a string
str3 = str2.trim();
console.log(str3.length);