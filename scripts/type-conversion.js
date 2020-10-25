//TYPE CONVERSION
console.log(`
"TYPE CONVERSION"
converts one type of data to another`)

let numberOrString = "12";
console.log(typeof(numberOrString));

console.log(`
"Arrays to Strings"
toString() method
returns a new string without altering the original array`);

let languages = ["HTML", "CSS", "JavaScript"]
let languagesToString = languages.toString();
console.log(languages);
console.log(languagesToString);
console.log(typeof(languagesToString));
console.log(typeof(languages));

//Using Join
console.log(`
Using join()
you can join them with a dot, space, comma, number or word`);

let noDelimiter = languages.join("");
let withComma = languages.join(",");
let withSpace = languages.join(" ");
let withWord = languages.join("Hi");
let withNumber = languages.join("1");
console.log(languages);
console.log(noDelimiter, withComma, withSpace, withWord, withNumber);
console.log(typeof(noDelimiter));
console.log(typeof(languages));

console.log(`https://repl.it/@JustinSawyer/JavascriptFundamentalsTCA2S1#main.js`);

//Strings to arrays
console.log(`
"Strings to Arrays"
using the split() method
takes separator and limit as arguments`);

let string1 = "String to array, lets split them!";
let array1 = string1.split("");
console.log(array1);
let array2 = string1.split(" ");
console.log(array2);
let array3 = string1.split(",");
console.log(array3);
let array4 = string1.split("a", 2);
console.log(array4, `split stops after second a`);

console.log(`
using the from() method
Array.from(string)`);
console.log(Array.from(string1));

console.log(`https://repl.it/@JustinSawyer/JavascriptFundamentalsTCS2A1#main.js`);

//Numbers to Strings
console.log(`
Numbers to Strings
toString() method
converts all bases, decimal, binary, hex etc...
use the () argumant for the base to convert to`);

let e = 12
let f = 13
let g = 14
let h = 56
console.log(e.toString(2));
console.log(f.toString(8));
console.log(g.toString(12));
console.log(h.toString(16));

console.log(`https://repl.it/@JustinSawyer/JavascriptFundamentalsTCN2S1#main.js`);

//STRINGS TO NUMBERS
console.log(`
"STRINGS TO NUMBERS"
parseInt(), parseFloat(), Number()`);

let string12 = "12";
console.log(string12);
let parse12 = parseInt(string12);
console.log(parse12);
let number12 = Number(string12);
console.log(number12);
let pi = 3.41
console.log(pi);
let floatPi = parseFloat(pi);
console.log(floatPi);
console.log(typeof(string12));
console.log(typeof(parse12));
console.log(typeof(number12));
console.log(typeof(pi));
console.log(typeof(floatPi));

console.log(`https://repl.it/@JustinSawyer/JavascriptFundamentalsTCS2N1#main.js
In this example, converting back to Hex is converting to String`);

//BOOLEAN CONVERSION
console.log(`
"Boolean conversion
converts a true / false to a string or a number. (ie 1 for true, 0 for false)
toString(), or Number()`);

let trueString = true.toString();
console.log(trueString, typeof(trueString));
let trueNumber = Number(true);
console.log(trueNumber, typeof(trueNumber));
let falseNumber = Number(false);
console.log(falseNumber, typeof(falseNumber));

//unary operators
console.log(`
unary operators
convert true to 1 and false to 0`)
console.log(+true);
console.log(+false);
console.log(3+true);
//binary operators
console.log(`
binary operators also convert true to 1 and false to 0`);
console.log(true / 1, "true / 1");
console.log(false * 1, "false * 1");
console.log(false - false, "false - false");
console.log(true - true, "true - true");
console.log(false - true, "false - true");
console.log(true - false, "true - false");
console.log(true / true, "true / true");
console.log(false / false, "false / false (O/O = NaN)");

//IMPLICIT TYPE CONVERSIONS
console.log(`
Implicit type conversions
Javascript converts objects to be compatible to an opertaion`)
console.log("true" + true, `converts the boolean to string and concatenates it to string`);
console.log("banana" + 2, `converts the integer to a string and concatenates`);
console.log(2 * true, `converts the boolean to 1 and multiplies`);
console.log("2" + 5, `converts number to string and concatenates`);
console.log("string" * 3, `strings cannot be converted to a number, so NaN is returned`);

console.log(`https://repl.it/@JustinSawyer/JavascriptFundamentalsTCGeneralTC2#main.js
Struggled with this one!
You need to tell JavaScript when converting from hex to dec that the hex value is in hex. Thus
parseInt = convert to Integer (variable (16 = from base 16))`);