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
    document.getElementById("objectResult").innerHTML = `Logs all the <code>Object</code> contents.`;
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
    document.getElementById("thisKeyResult").innerText = `Logs nothing.`;
};

document.getElementById("objectKey").innerText = "country.name;";

function objectKeyCall() {
    console.clear();
    console.log(country.name);
    document.getElementById("objectKeyResult").innerHTML = `Logs the <code>value</code> of the <code>key</code>:
<code>${country.name}</code>`;
};

let newCountry = {
    name: "Monaco",
    size: "2km2",
    population: 35000,
    sea: true,
    island: false,
    monarchy: true,
    rulers: {
        first: "François Grimaldi",
        previous: "Prince Rainier III",
        current: "Prince Albert II"
        },
    bio: function() {
        console.log(`${this.name} is a country of ${this.population} and is ruled by ${this.rulers.current} and was founded by ${this.rulers.current}`);
        }
    }
    newCountry.bio();

document.getElementById("monacoRulers").innerText = `let newCountry = {
    name: "Monaco",
    size: "2km2",
    population: 35000,
    sea: true,
    island: false,
    monarchy: true,
    rulers: {
        first: "François Grimaldi",
        previous: "Prince Rainier III",
        current: "Prince Albert II"
        },
    bio: function() {
        console.log("this.name is a country of this.population and is ruled by this.rulers.current and was founded by this.rulers.first");
        }
    }`

document.getElementById("rulersCall").innerText = `console.log(newCountry.rulers.first)`;

function objectKeyKeyCall() {
        console.log(newCountry.rulers.first);
        document.getElementById("objectKeyKeyResult").innerHTML = `<code>${newCountry.rulers.first}</code>`
    }

//--------------------------------------------------------------Updating Object Values
let text;
let idealCar = {
    make: "Aston Martin",
    model: "V8 Vantage",
    modelYear: "2002-2015",
    body: "hardtop",
    gearbox: "manual",
    topSpeed: 185,
    bio: function() {
        text = `The <code>${this.make} ${this.body} ${this.model}</code> from <code>${this.modelYear}</code> is my favourite ever car.`
        }
    }
    idealCar.bio();

(function updateValueOriginal() {
    document.getElementById("updateValueOriginal").innerHTML = `let text;
let idealCar = {
    make: "Aston Martin",
    model: "V8 Vantage",
    modelYear: "2002-20015",
    body: "hardtop",
    gearbox: "manual",
    topSpeed: 185,
    bio: function() {
        text = "The <code>this.make this.body this.model</code> from <code>this.modelYear</code> is my favourite ever car.";
        }
    }
    idealCar.bio();`
})();

function originalValue() {
    document.getElementById("resultOriginalValue").innerHTML =  text;
};

document.getElementById("updateValueNew").innerText = `idealCar.body = "softtop";
idealCar.bio();`

function newValue() {
    idealCar.body = "softtop";
    idealCar.bio();
    document.getElementById("resultUpdateValue").innerHTML =  text;
};

document.getElementById("deleteValue").innerText = `delete idealCar.body;
idealCar.bio();`

function deleteValue() {
    delete idealCar.body;
    idealCar.bio();
    document.getElementById("resultDeleteValue").innerHTML = text;
};
