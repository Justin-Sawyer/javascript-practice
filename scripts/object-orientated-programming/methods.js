//METHODS
console.log(`
METHODS
functions that can be used for actions within an object

The variable is declared 
Within it is has a method
variable.method()

In the previous lesson, we created a variable "country".
It did not run as we had not called the "method" (the function) from within it.
So let's call it!`);

let country = {
	name: "Croatia",
	population: 4.224,
	sea: true,
	islands: 1000,
	language: "croatian",
	bio: function() {
		console.log(this.name + " is a country with " + this.population + " people");
	}
};
country.bio()

console.log(`
For the code to run, we need to name the object "function()".
Thus wen we call it, we call
variable.object()

Like wise if we just call the object, it will throw an error that the object is not defined:`);
//bio();

console.log(`
Challenge:
https://repl.it/@JustinSawyer/JavascriptFundamentalsOOPMethods#main.js`)