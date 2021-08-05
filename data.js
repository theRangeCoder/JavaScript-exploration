// Exporting the add4(n1,n2) function with the 'export' keyword
export const add4 = (n1,n2) => {
    return n1+n2;
}

export class Animal {
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