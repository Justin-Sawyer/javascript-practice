//DOM EVENTS
console.log(`
DOM EVENTS:
Allow us to select and manipulate elements in the DOM tree

use "document" object in JS

Because the document is an object, it has properties and methods attached to it that are usable.

The property, like in objects, does not have ()
The method performs a task or returns an object, and does have () attached. Inside are placed the parameters.

object(the document PROPERTY).method("parameters")

document.getElementById("id.name")
Gets items by their # (<p id="x")
https://repl.it/@JustinSawyer/JS-Get-Element-1#index.html
Notice what happens if you comment off the function call: the h1 HTML element is displayed, but nothing is logged to the console.

document.getElementsByClassName("class-name")
Gets items by their . (<p class="x")

document.getElementsByTagName("eg.div")
Gets item by their <> (eg <div>)

https://repl.it/@JustinSawyer/JS-Get-Element-2-1
Lok at the repl.it:
calling classes or tags need indexing to access a particular case. Nothing will be returned otherwise to the console.
To call all cases of the class or tag, use
    for (itm of x) {
        do something
    }
    
Also, to return the data held WITHIN the class or tag, 
use .innerText

So:
    for(itm of x) {
        alert(itm.innerText);
    }`);

    //SETTING PROPERTIES
    console.log(`
    SETTING PROPERTIES
    
    document.getElementById("name").innerText = "Arthur Dent"
    document.getElementById("name").style.color = "green"
    document.getElementById("name").style.backgroundColor = "blue
    document.getElementById("myImage").src = "img/newImage.png";
    document.getElementById("myImage").href = "http://etc";
    
    https://repl.it/@codingchallenges/Changing-CSS#index.html
    https://repl.it/@JustinSawyer/Inner-Text-1#index.html
    https://repl.it/@JustinSawyer/double-counter-and-setting-text#index.html"
    
    The styling of CSS is not best practice using the above as it sets a style= attribute
    https://repl.it/@JustinSawyer/Changing-src-attribute-1
    
    Here is a better way:
    https://repl.it/@JustinSawyer/Add-remove-class-1#style.css
    In this example, we add the css for the element (the <div> etc) and then tell the function to look for it through it's id.
    Its clever in that it gets child elements from the CSS too.`)