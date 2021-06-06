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
let products = ['Toilet paper', 'Bottled water', 'Sanitizer'];
console.log(products);

products[0] = 'Paper towels';
console.log(products);

products.pop();
console.log(products);

products.push('Bleach');
console.log(products);

// Objects in JavaScript (They can take in, properties) {key (property): value}
console.log(typeof products); 
let obj1 = {
    firstName: 'Sam',
    lastName: 'Jones',
    address: {
        city: 'Austin',
        state: 'Texas'
    },
    age: 30,
    cats: ['Milo', 'Batman']
};

// Updating the age
obj1.age = 31;

console.log(obj1);
console.log(obj1.firstName);

console.log(Object.values(obj1));
console.log(obj1.hasOwnProperty('firstName'));

/* Challenge - User Profile Form
1. Your organization needs the user's personal information to ship the inventory to. Create an object to store the data in.
2. Store a user's first and last name.
3. Store a user's address. City and state will be enough. Have this as a nested object. (Interface Segregation Principle)
4. The business wants to give more personalized ads and wants to collect information about the user's hobbies. Create a list of hobbies.
5. Are they a gold member? Store a boolean with this value.
*/
let user = {
    fName: 'John',
    lName: 'Smith',
    address: {
        city: 'Houston',
        state: 'Texas'
    },
    hobbies: ['Singing', 'Dancing', 'Writing short stories'],
    goldMember: true
};
console.log(user.lName);
console.log(user.address.city);
console.log(user.hobbies[1]);
console.log(user);
//  To add another property: value pair, we could just type: user.property = value;

// Arithmetic operators in JavaScript
// Modulus
console.log(7%2);

// Challenge: Checkout Order Details

/*
 1. Create 3 variables to store an item price. The last price 2 items were ordered (multiplication).
 2. Tell the user what the total price is before discount.
 3. Inform the user what the average price of items is before discount.
 4. Inform them the final price after saving 5 dollars with promo code 'I Got 5 On It'.
*/

// Declaring the price of the three items
let p1 = 10;
let p2 = 5;
let p3 = 7;

// Calculating the total price before discount
let p_bd = p1+p2+(2*p3);

// Calculating the average price before discount
let ap_bd = p_bd/4;

// Calculating the final price after applying the promo code
let p_ad = p_bd - 5;

console.log("Total price before discount: "+p_bd);
console.log("Average price before discount: "+ap_bd);
console.log("Final price after applying the promo code: "+p_ad);

// Relational operators in JavaScript (Compare two items and return a true/ false value)
let r1 = 10;
let r2 = 15;

console.log(r1 >= r2);
console.log(r1 == r2);
console.log(r1 != r2);

// NOTE: JavaScript is a dynamically typed language, which means that we can always update a variable, initially containing one type of value, to another type of value. For example, we can update a variable, which initially contains a string, to a number.

// Difference between '==' and '==='
// ==: compares the values of two variables (for e.g.: 10=='10')
// ===: compares the value and datatype of two variables (for e.g.: 10!='10')

// Challenge: Best Promo Code

/*
 1. Our business wants to make sure we give our users the best promo codes available for two categories.
 2. Create two promo codes in variables and compare to find out if the first one is a better value for the dollars off category. 
*/
let promo1 = {
    valueOff: 20
};
let promo2 = {
    valueOff: 10
};
console.log(promo1.valueOff > promo2.valueOff);

// Increment and decrement
let i1 = 5;
i1+=5;
console.log(i1);
i1++;
console.log(i1);
i1--;
console.log(i1);
i1-=3;
console.log(i1);

// Challenge: Upsell Quantity

/*
 1. Our business wants to upsell items in a user's cart. 
 2. Ask the user if they would like to add one more item (with the variable provided). Update the quantity variable if they do.
 3. Log the current quantity.
*/
let quantity = 10;
let choice = true;
if(choice==true) {
    quantity++;
}
console.log("Updated quantity: "+quantity);

// Flow of control
let num1=5;
if (num1%2 === 0) {
    console.log(num1+" is an even number");
}
else {
    console.log(num1+" is an odd number");
}

// and = && and or = ||
// The first statement/ condition, which is evaluated to be true, is the one which is run.

// Challenge 1: User Age

/*
 1. Our business wants to keep track of what age range a user falls into.
 2. If they are 12 or younger log 'child'.
 3. If not a child but the user's age is under 20 log 'teenager'.
 4. If neither log 'adult'.
*/

const age2 = 20;
if (age2<=12) {
    console.log('child');
}
else if (age2<20) {
    console.log('teenager');
}
else {
    console.log('adult');
}

// switch statements in JavaScript (It is important to 'break' after each case, else the statements of the following cases will also be executed, till a 'break' is encountered)

// Challenge: Customer Upgrade

/*
 1. Our business wants to convince users to upgrade their accounts.
 2. Check a user's account type (switch) of 'shopper', 'super shopper', & 'guest'.
 3. If a user is a 'guest' ask them if they want to upgrade to a 'shopper'.
 4. If a user is a 'shopper' ask if they want to upgrade to a 'super shopper'
 5. If a user is a 'super shopper' tell them they are the best!
 6. If we don't know user's status they are a guest.
*/

let accType = 'super shopper';
switch(accType) {
    case 'guest':
        console.log("Would you like to upgrade to a shopper?");
        break;
    
        case 'shopper':
        console.log("Would you like to upgrade to a super shopper?");
        break;
    
        case 'super shopper':
        console.log("You are the best!");
        break;
    
        default:
        console.log("You are a guest!")
}

// For loops
// Sum of numbers from 0 to 5
let sum=0;
for (let i=0; i<=5; i++) {
    console.log(i);
    sum+=i;
}
console.log("Sum: "+sum);

// Sum of values in an array
let sum2 = 0;
let arrLoop = [10,20,30,40,50];
for (let i = 0; i<arrLoop.length; i++) {
    sum2+=arrLoop[i];
}
console.log("Sum of elements of the array: "+sum2);

// Challenge: Total Price

/*
 1. Give our customer their total price. 
 2. Add the price of the items together with a sales tax of 8%.
 3. Log the price. 
*/

const cartItems = [
    { quantity: 1, price: 5 },
    { quantity: 3, price: 4 },
    { quantity: 10, price: 1}
]; // an array of objects

let totalPrice = 0;

// Calculating the total price
for (let i=0; i<cartItems.length; i++) {
    totalPrice+= cartItems[i].quantity*cartItems[i].price;
}

// Adding the sales tax of 8% to it
totalPrice = 1.08*totalPrice;

// Displaying the total price
console.log("Total price: "+totalPrice);

// Correcting it to two places of decimal
console.log("Total price (corrected): "+parseFloat(totalPrice.toFixed(2)));

// Another way of writing the for loop, by putting the items on the loop, instead of the index of the items (the 'of' keyword)
let totalPrice2 = 0;
for (let item of cartItems) {
    totalPrice2+=item.quantity*item.price;
}
console.log(totalPrice2); // without the sales tax

