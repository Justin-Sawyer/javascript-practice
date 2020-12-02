//METHODS
/*console.log(`
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
https://repl.it/@JustinSawyer/JavascriptFundamentalsOOPMethods#main.js`)*/

function Band(name, singer, drummer, guitarist, bassist, album1, album2, album3, album4, album5, ep, url) {
        this.name = name;
        this.singer = singer;
        this.drummer = drummer;
        this.guitarist = guitarist;
        this.bassist = bassist;
        this.album1 = album1;
        this.album2 = album2;
        this.album3 = album3;
        this.album4 = album4;
        this.album5 = album5;
        this.ep = ep;
        this.url = url;
        this.alert = function() {
            alert("Want to know more about this band?")
        };
    }
    let dogsDamour = new Band("The Dogs d'Amour",
    "Tyla", 
    "Bam Bam", 
    "Jo Dog", 
    "Steven James", 
    "The (Un)Authorised Bootleg Album", 
    "In The Dynamite Jet Saloon", "Errol Flynn",
    "Straight",
    "More Unchartered Heights of Disgrace",
    "A Graveyard of Empty Bottles",
    new URL("https://music.apple.com/us/artist/dogs-damour/82680355"));

    (function bandDetails() {
        document.getElementById("bandDetails").innerText = `function Band(name, singer, drummer, guitarist, bassist, album1, album2, album3, album4, album5, ep, url) {
        this.name = name;
        this.singer = singer;
        this.drummer = drummer;
        this.guitarist = guitarist;
        this.bassist = bassist;
        this.album1 = album1;
        this.album2 = album2;
        this.album3 = album3;
        this.album4 = album4;
        this.album5 = album5;
        this.ep = ep;
        this.url = url;
        this.alert = function() {
            alert("Want to know more about this band?")
        };
    }
    let dogsDamour = new Band("The Dogs d'Amour",
    "Tyla", 
    "Bam Bam", 
    "Jo Dog", 
    "Steven James", 
    "The (Un)Authorised Bootleg Album", 
    "In The Dynamite Jet Saloon", "Errol Flynn",
    "Straight",
    "More Unchartered Heights of Disgrace",
    "A Graveyard of Empty Bottles",
    new URL("https://music.apple.com/us/artist/dogs-damour/82680355"));`
    })();

    //dogsDamour.alert();

    /*document.getElementById("dogs").innerHTML = `<p>The <code>${dogsDamour.name}</code>:</p> 
    <p>Their third album is called <code>${dogsDamour.album3}</code>.</p>
    <p>Their drummer, <code>${dogsDamour.drummer}</code> now lives is Los Angeles.</p>
    <p>Listen to their music by clicking the link:</p> 
    <p><a href="${dogsDamour.url}" target="_blank">The Dogs d'Amour on Apple Music</a>`;*/

    document.getElementById("methods").innerText = `typeof Band;
    ${typeof Band}

typeof Band;
    ${typeof Band()}
    
typeof new Band();
    ${typeof new Band()}

typeof new Band;
    ${typeof new Band}

typeof dogsDamour;
    ${typeof dogsDamour}
    
typeof dogsDamour();
    dogsDamour is not a function

Object(dogsDamour).length;
    ${Object(dogsDamour).length}

Object.keys(dogsDamour).length;
    ${Object.keys(dogsDamour).length}
    
Object.values(dogsDamour).length;
    ${Object.values(dogsDamour).length}
    
Object.entries(dogsDamour);
    ${Object.entries(dogsDamour)}`;

//-----------------------------------------
//nirvana
    let nirvana = new Band("Nirvana",
    "Kurt Cobain",
    "Krist Novoselic",
    "Dave Grohl",
    "",
    "Bleach",
    "Nevermind",
    "In Utero",
    "",
    "",
    "",
    new URL("https://music.apple.com/us/artist/nirvana/112018"));
    console.log(nirvana);

(function nirvana() {
    document.getElementById("nirvana").innerText = `let nirvana = new Band("Nirvana",
    "Kurt Cobain",
    "Krist Novoselic",
    "Dave Grohl",
    "",
    "Bleach",
    "Nevermind",
    "In Utero",
    "",
    "",
    "",
    new URL("https://music.apple.com/us/artist/nirvana/112018"));
    console.log(nirvana);`;
})();

    document.getElementById("nirvanaLength").innerText = `Object.keys(nirvana).length;
    ${Object.keys(nirvana).length}
    
Object.values(nirvana).length;
    ${Object.values(nirvana).length}
    
Object.entries(nirvana);
    ${Object.entries(nirvana)}`;

(function nirvanaProperties() {
    let property;
    console.log(`
    
Result of for... in loop:
        
`)
    for (let property in nirvana) {
        console.table(`${property}: ${nirvana[property]}`);
        document.getElementById("nirvanaProperties").innerText = `let property;
    for (let property in nirvana) {
        console.table(property + ":" + nirvana[property]);`
    }
})();

(function nirvanaData() {
    let nirvanaData = {};
    console.log(`
    
Result of for... of loop:
        
`)

    for (let [key, value] of Object.entries(nirvana)) {
        console.log(`${key}: ${value}`);
    }
    document.getElementById("nirvanaData").innerText = `let nirvanaData = {};
    
    for (let [key, value] of Object.entries(nirvana)) {
        console.log(key + ":" value);
    }`
})();

//-------------------------------------------------- Object Constructor
(function newObject() {
    let talkingHeads = new Object();
        talkingHeads.singer = "David Byrne";
        talkingHeads.name = "Talking Heads";
        document.getElementById("result").innerHTML = `The name of this band is <code>${talkingHeads.name}</code> and it is fronted by <code>${talkingHeads.singer}</code>.`;
    
    document.getElementById("newObject").innerText = `let talkingHeads = new Object();
        talkingHeads.singer = "David Byrne";
        talkingHeads.name = "Talking Heads";
        document.getElementById("result").innerHTML = "The name of this band is talkingHeads.name and it is fronted by talkingHeads.singer";`
})();


