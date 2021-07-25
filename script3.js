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