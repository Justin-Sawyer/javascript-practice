(function idealCar() {document.getElementById("idealCar").innerHTML = `let idealCar = {
    make: "Aston Martin",
    model: "V8 Vantage",
    modelYear: "2002-2015",
    body: "hardtop",
    gearbox: "manual",
    topSpeed: 185
}`;
})();

//Dogs d'Amour object
document.getElementById("dogs").innerText = `let dogsdamour = {
    name: "Dogs d'Amour",
    singer: "Tyla",
    drummer: "Bam Bam",
    guitar: "Jo Dog",
    bass: "Steven James",
    album1: "The (Un)Authorised Bootleg Album",
    album2: "In The Dynamite Jet Saloon",
    album3: "Errol Flynn",
    album4: "Straight",
    album5: "More Unchartered Heights of Disgrace",
    ep: "A Graveyard of Empty Bottles",
    bio: function() {
        document.getElementById("dogsBio").innerText = "The this.name is a rock band from the 1980s whose members were:
    this.singer - vocals,
    this.drummer - drummer
    this.guitar - guitarist
    this.bass - bassist

They released 5 albums over their short but infamous career:
    this.album1,
    this.album2,
    this.album3,
    this.album4,
    this.album5.

But, perhaps their finest moment was the EP, 
    this.ep.;
    }
}
dogsdamour.bio();"`;

//Dogs d'Amour function
function dogs() {

    let dogsdamour = {
        name: "Dogs d'Amour",
        singer: "Tyla",
        drummer: "Bam Bam",
        guitar: "Jo Dog",
        bass: "Steven James",
        album1: "The (Un)Authorised Bootleg Album",
        album2: "In The Dynamite Jet Saloon",
        album3: "Errol Flynn",
        album4: "Straight",
        album5: "More Unchartered Heights of Disgrace",
        ep: "A Graveyard of Empty Bottles",
        bio: function() {
            document.getElementById("dogsBio").innerHTML = `<p>The <code>${this.name}</code> is a rock band from the 1980s whose members were:</p>
    <p class="tab"><code>${this.singer}</code> - vocals,</p>
    <p class="tab"><code>${this.drummer}</code> - drummer,</p>
    <p class="tab"><code>${this.guitar}</code> - guitarist,</p>
    <p class="tab"><code>${this.bass}</code> - bassist.</p>
    <br>
    They released 5 albums over their short but infamous career:</p>
    <p class="tab"><code>${this.album1}</code>,</p>
    <p class="tab"><code>${this.album2}</code>,</p>
    <p class="tab"><code>${this.album3}</code>,</p>
    <p class="tab"><code>${this.album4}</code>,</p>
    <p class="tab"><code>${this.album5}</code>.</p>
    <br>
    <p>But, perhaps their finest moment was the EP,</p> 
    <p class="tab"><code>${this.ep}</code>.</p>
    <br>`;
        }
    }
    dogsdamour.bio();
}

//Function expression example
(function keyNameFunctionVariable() {
    document.getElementById("keyNameFunctionVariable").innerText = `let object = {
    (let) name function() {
        code block to be executed;
    }
}`;
})();


