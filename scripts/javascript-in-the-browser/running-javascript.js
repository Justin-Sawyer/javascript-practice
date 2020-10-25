//INLINE JAVASCRIPT
console.log(`
INLINE JAVASCRIPT
Written between <script></script> tags.
Unless it is surrounded in a function, it will run upon loading the html page.

https://repl.it/@codingchallenges/JS-Inline
`);

//EXTERNAL JAVASCRIPT
console.log(`
EXTERNAL JAVASCRIPT
Using <script src="filename.js"></script>

https://repl.it/@codingchallenges/JS-External`);

//HTML EVENTS
console.log(`
HTML EVENTS
An event is triggered by an action
(Cause and effect)
Allow us to triger a JS function upon undertaking an action like clicking a button
Uses the onclick attribute

All default events in HTML start with "on"

So to trigger a FUNCTION with an alert as its event "displayAlert():
<button onclick="displayAlert()">Display Alert</button>

https://repl.it/@codingchallenges/JS-HTML-Events#index.html`);

//SCOPE AND EXTERNAM SCRIPTS
console.log(`
SCOPE AND EXTERNAL SCRIPTS
Remember that external libraries often work together - they share information between them.
This means that as JS is concattenated into one big file, the scripts can often become messed up, as they're talking to each other.
So, be careful...
Be VERY careful when choosing names for variables and things, in oter words.
AND ABOVE ALL, AVOIO CREATING THEM IN THE GLOBAL SCOPE

Here is an example:
https://repl.it/@JustinSawyer/JavaScript-Scope-2#script.js
Because these variables have been created in the global scope and not within their own functions, they are available to all,
and thus have gotten "corrupted.

As I've commented out one line of code and copied that code into the function impVari(), it is no longer accessible
Because it is no longer in the global scope`);

//LOCAL STRORAGE
console.log(`
LOCAL STRORAGE
Use either:
localStorage
sessionStorage

localStorage is persistent, and is thus good for things like storing a player's score in a game.
sessionStorage is deleted at the end of each session. Good for keeping a player logged in, while using a game,
and then forcing the player to log in freshly once the player starts playing the game anew.

Data is stored in key/data pairs
thus
name: Justin Sawyer
To store this into the browser, we would use the following command:
localStorage.setItem("name", "Justin Sawyer");
and to retreive that data:
localStorage.getItem("name", "Justin Sawyer")

The code example below uses Session Storage, so the data will be deleted when we close the browser tab. 
Every time the Click button is pressed, it increments a counter. When the Show Me! button is pressed, 
it will display the counter in an alert.

https://repl.it/@codingchallenges/Web-Storage#index.html

Local and session storage are great for when you don't have a database backend to store data.
They are also useful as a workaround if we need to store some data, but don't want to create global variables. `);