//DOM EVENTS
console.log(`
DOM EVENTS:

document.addEventListener("keyup", function(event) { alert("You pressed a key!")};

https://repl.it/@JustinSawyer/keyboard-events-1

To call an external function:
document.addEventListener("keyup", checkKey);
We don't add the (event), just the function name

To remove an event listener, the function MUST be external - you cannot remove an internal script!:
document.removeEventListener("keyup", checkKey)

DOM Content Loaded event
delays the loading to JS until after the page has loaded
DOMContentLoaded:

https://repl.it/@JustinSawyer/DOMContentLoaded-1#script.js

DOM Events list:
https://www.w3schools.com/jsref/dom_obj_event.asp`)