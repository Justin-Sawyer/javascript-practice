//THIS
console.log(`
THIS
This references the CURRENT object.
In other words, if we use this.x we always know that we have an "up-to-date" x.
For example, suppose we set a variable and we call it James.
If James' name changes and we don't update it, then we get a refeence error.
Thus it is better to assign James' name to a key, and call this on the key.
We can then see instantl when we cal this what the  key's value is:`);

let person = {
    firstName: "Gretchen",
    lastName: "Gamongan",
    bio: function() {
        console.log(`Her name is ${this.firstName} ${this.lastName}`);
        console.log(`Her name is ${person.firstName}`);
    }
}
person.bio();

console.log(`Above, we can see her name is up to date.
The above is the same as:
person.firstName() 
but if the person's name changes and is not updated in the function, we will not see the difference.
We will, with this.`);

let hi = {
    name: "Gretchen",
    surName: "Gamongan",
    bio: function() {
        console.log(`Her name is ${this.Name} ${this.surName}`);
        console.log(`Her name is ${person.name}`);
    }
}
hi.bio();

console.log(`And what happens if we use this outside of an object?`);
console.log(this);
console.log(`It opens the global object!

https://repl.it/@JustinSawyer/JS-bind-1-1#main.js

The exampe above is showing the difference between calling the function and calling the function expression.
The calling of the function will not work because "this" is set when we RUN the code, and not when we define it.

So, how can we call the function within the key value "humanize"?

By calling its object, as is shown in the first two working examples.`);
console.log(hi.name);

console.log(`
Outside research:
https://medium.com/better-programming/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8`)


