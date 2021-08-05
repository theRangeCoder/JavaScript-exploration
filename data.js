// Exporting the add4(n1,n2) function with the 'export' keyword
export const add4 = (n1,n2) => {
    return n1+n2;
}

export class Animal {
    // Every class should have a constructor (that is the first function that runs when one creates an instance of a class)
    constructor(type, legs = 4) { // 4 legs by default
        // the 'this' keyword is used to refer to a particular instance of a class
        this.type = type;
        this.legs = legs;
    }

    // Creating a function of the class (The 'function' keyword is not required in this case)
    meow(sound) {
        console.log(sound);
    }

    // Creating a static function of the class (It can be invoked without creating an instance of the class)
    static message() {
        console.log(`Welcome to the Animal class`);
    }

    // The 'get' keyword for functions: allow us to use the function as a property of an object (e.g. arr.length)
    get metaData() {
        console.log(`Type: ${this.type}, Legs: ${this.legs}`);
    }
}

/*Classes Challenge:

Create a class Player with the following:
- Add a Name and Country properties
- Add a function that when it runs should print into the console ("Messi was born in Argentina");
- Make sure to adapt this function to receive dynamic Names and Countries.

Create a Subclass called TennisPlayer that extends from the class Player
- Add a new property Age.
- Add a function that when it runs should print into the console something similar ("Rafael Nadal is 34 years old and knows how to play Tennis");
- Make sure the Name and Age are dynamic.
*/
export class Player {
    constructor(Name, Country) {
        this.Name = Name;
        this.Country = Country;
    }
    printMessage() {
        console.log(`${this.Name} was born in ${this.Country}`);
    }
}

export class TennisPlayer extends Player {
    constructor(Name, Country, Age) {
        // inheriting/ initialising the constructor of the superclass 
        super(Name, Country);
        this.Age = Age;
    }
    dispMessage() {
        console.log(`${this.Name} is ${this.Age} years old and knows how to play Tennis`);
    }
}