// Exporting the add4(n1,n2) function with the 'export' keyword
export const add4 = (n1,n2) => {
    return n1+n2;
}

export class Animal {
    constructor(type, legs) {
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
}