/*//CALLBACKS
console.log(`
CALLBACKS
Call backs are functions passed into another function as an argument. 
This callback function is then invoked from inside the outer function to complete some routine or action.`);*/

function callback() {
    function ask(question, yes, no) {
        if (confirm(question)) {
            yes();
        } else {
            no();
        }
    }
    function yes() {
        document.getElementById("callbackAnswer").style.width = "40%";
        document.getElementById("callbackAnswer").style.color = "yellow";
        document.getElementById("callbackAnswer").style.backgroundColor = "purple";
        document.getElementById("callbackAnswer").innerHTML = `<p class="tab">Glad to hear that! 😊</p>`;
    }
    function no() {
        document.getElementById("callbackAnswer").style.width = "25%";
        document.getElementById("callbackAnswer").style.color = "cyan";
        document.getElementById("callbackAnswer").style.backgroundColor = "green";
        document.getElementById("callbackAnswer").innerHTML = `<p class="tab">Oh no! 😢</p>`;
    }
    ask("Are you ok?", yes, no);
}
document.getElementById("callback").innerText = `function ask(question, yes, no) {
        if (confirm(question)) {
            yes();
        } else {
            no();
        }
    }

function yes() {
        document.getElementById("callbackAnswer").style.width = "40%";
        document.getElementById("callbackAnswer").style.color = "yellow";
        document.getElementById("callbackAnswer").style.backgroundColor = "purple";
        document.getElementById("callbackAnswer").innerHTML = "<p class="tab">Glad to hear that! 😊</p>";
    }

    function no() {
    document.getElementById("callbackAnswer").style.width = "25%";
    document.getElementById("callbackAnswer").style.color = "cyan";
    document.getElementById("callbackAnswer").style.backgroundColor = "green";
    document.getElementById("callbackAnswer").innerHTML = "<p class="tab">Oh no! 😢</p>";
}

ask("Are you ok?", yes, no);`

console.log(`
The function ask() has 3 paramenters, question, yes and no
within the function is an if... else comprarator, with its function confirm and parameter being the ask function parameter question.
Inside each if... else comparator is another function, either yes or no. 
(These functions have been set outside of the function ask() but are calling inside it, and thus are callback functions).

Outside of this function, the function yes() (which is a parameter of the ask function) should log x to the console.
Outside the ask function, the function no() (which is a parameter of the ask function) should log y to the console.

Outside of the functions, we call the function ask, ask our question and supply yes and no as the other parameters.
An alert box asks the question and gives us options. 
Depending on the option we choose, the results of the if... else comparators are logged.
`)

//confirm("JavaScript is like a dirty mistress");