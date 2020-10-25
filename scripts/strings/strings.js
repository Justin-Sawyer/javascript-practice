console.log(`\n\n"STRINGS"`);

console.log(("I am a string because I am enclosed in speech marks when I am written as code."), 
("\nI can be text, a number, a name, but I cannot be a boolean value."), 
("\nBoolean values are not wrapped in speech marks."));

//strings can be added up
console.log("My name is " + "Justin");

let a = "3";
let b = "true";
console.log(a + b);

let c = a + b;
console.log("My name is NOT (let a + b = c) " + c);

console.log("It doesn't matter whether I use single quotes or double quotes so long as I don't mix them up. Mayhem occurs when I do!");
console.log('"Just be consistent!" is the motto.');
console.log("This text \nemploys the new \nline method. \nAnd so it should!");

console.log(`This is the list of escapes, but remember they have all been escaped by the first \\: 
Horizontal Tab is replaced with \\t
Vertical Tab is replaced with \\v
Nul char is replaced with \\0
Backspace is replaced with \\b
Form feed is replaced with \\f
Newline is replaced with \\n
Carriage return is replaced with \\r
Single quote is replaced with \\'
Double quote is replaced with \\"
Backslash is replaced with \\\\`);

console.log(`The first string used special characters to escape to new lines.
With template literals  I can escape as I would normally, by just gong to a fresh line!
A TEMPLATE LITERAL is the grave accent followed by a space, and it's what I used to format the escapes into mulitple lines :)`);
