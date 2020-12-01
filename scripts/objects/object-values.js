let country = {
    name: "Monaco",
    size: "2km2",
    population: 35000,
    sea: true,
    island: false,
    monarchy: true,
    ruler: "Prince Albert II",
    bio: function() {
        console.log(`${this.name} is a country of ${this.population} and is ruled by ${this.ruler}`);
        }
    }
    //country.bio()

document.getElementById("country").innerText = `let country = {
    name: "Monaco",
    size: "2km2",
    population: 35000,
    sea: true,
    island: false,
    monarchy: true,
    ruler: "Prince Albert II",
    bio: function() {
        console.log("this.name is a country of this.population and is ruled by this.ruler");
    }
}`

document.getElementById("object").innerText = "country;";

function objectCall() {
    console.clear();
    console.log(country);
    document.getElementById("objectResult").innerText = `Logs all the Object contents.`;
};

document.getElementById("function").innerText = "country.bio();";

function functionCall() {
    console.clear();
    console.log(country.bio());
    document.getElementById("functionResult").innerHTML = `Logs the <code>bio()</code> function.`;
};

document.getElementById("thisKey").innerText = "this.name;";

function thisKeyCall() {
    console.clear();
    console.log(this.name);
    document.getElementById("thisResult").innerText = `Logs nothing.`;
};

document.getElementById("objectKey").innerText = "country.name;";

function objectKeyCall() {
    console.clear();
    console.log(country.name);
    document.getElementById("objectKeyResult").innerHTML = `Logs the <code>value</code> of the <code>key</code>.`;
};