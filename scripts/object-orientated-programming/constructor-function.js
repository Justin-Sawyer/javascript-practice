console.log(`
CONSTRUCTOR FUNCTIONS
create an object.
Use function keyword and the capitalise the functions first letter:
function Car() {}`)

function IdealCar(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.speak = function() {
        return("Vroooooom!");
    };
    this.roar = function() {
        return("Zoom!");
    };
}

console.log(`We've created the onject, but haven't used it.
To do so, we need to instantantiate it.
In other words, we need to fill in the "blanks" - the placeholders for this.year, this.model, this.year
We do so by creating a new instance of IdealCar, thus:`);

let myCar = new IdealCar("Aston Martin", "V8 Vantage", 2012);
alert(myCar.speak());
document.write(`My favourite car is the ${myCar.make} ${myCar.model} from ${myCar.year}`);
let herCar = new IdealCar ("Austin", "Mini Cooper Downton", 1969);
alert(herCar.roar());
document.write(`<br>Her favourite car is the ${herCar.make} ${herCar.model} from ${herCar.year}`);

console.log(`
We called the IdealCar function and added our values to it.
We have assigned a newly created instance of our variable to myCar.
Thus myCar stores an instance of IdealCar, with variables specific to myCar
Thus myCar is an INSTANCE of the IdealCar object.

We cannot however call the method or the IdealCar properties - thus can only be done in instances of idealCr (thus myCar, her Car).
Rememebr, IdealCar is ONLY a function. It's not an object or a class... it just pretends to be.
So, IdealCar is the function
myCar is the object.

Thus calling
IdealCar.make = undefined
IdealCar.speak() = error`);
//IdealCar.speak();

console.log(`
Thus IdealCar is an abstract thing, the idea if you will. From an idea, you build something.
What you build is the instance, and they get their properties from the idea.

TESTING IF SOMETHING IS THE INSTANCE OF AN OBJECT:
Use the "instanceof" operator:`);

console.log(myCar instanceof IdealCar);
console.log(herCar instanceof IdealCar);

//OVERRIDING
console.log(`
OVERRIDING
Functions can be overridden simply by declaring them once more after the original declaration:`);

function hello() {
    console.log("Hey");
}
hello();
function hello() {
    console.log("Hi!");
}
//hello();

console.log(`Note here that the first console.log returns the overridden value, too.
Effectively, this is why you need a good, clear naling structure for your functions.

Challenges:
https://repl.it/@JustinSawyer/JavascriptFundamentalsOOPConstructors1#main.js
https://repl.it/@JustinSawyer/JavascriptFundamentalsOOPGeneralOOP2-1#main.js

In the second challenge, we are told to create a calculator object that has it's keys with parameters.
This means that the keys: need to be functions(a, b) {
    and inside the function, we need to tell a & b what to do
}`)