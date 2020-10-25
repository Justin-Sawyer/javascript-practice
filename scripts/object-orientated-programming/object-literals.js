//OBJECT LITERALS
console.log(`
OBJECT LIERALS
we can create empty objects using object literals
let idealCar = {};

Let's create an object!`);

let idealCar = {
    make: "Aston Martin",
    model: "V8 Vantage",
    modelYear: "2002-20015",
    softtop: false,
    manual: true,
    topSpeed: 185,
    describe: function() {
        if ((this.softtop===false) && (this.manual===true)) {
            alert(`The ${this.make} ${this.model} between ${this.modelYear} is my favourite car. It has a top speed of ${this.topSpeed}mph!`);
        } else {
            alert(`It's another car, my favourite!`);
        }
    }
};
idealCar.describe();

let reservedWords = {
    words: "var, let and const",
    describe: function() {
        alert(`Reserved words such as:
        ${this.words} 
        can be used as keys in objects`);
    }
};
reservedWords.describe();

console.log(`
One thing to note with objects is that reserved words can be used as keys
let car = {
    let: x,
    var: y,
    const: z
};

Reserved words resource:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords`);
