const baseURL = "https://ci-swapi.herokuapp.com/api/"

function getData(type, cb) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + "/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
};

function writeToDocument6(type) {
    console.clear()

    let el = document.getElementById("newDataDiv6");
    el.innerHTML = "";

    getData(type, function(data) {
         
        data = data.results
 
        data.forEach(function(item) {
            Object.keys(item).forEach(function(key) {
                console.log(key);
            });
            el.innerHTML += "<p>" + item.name + "</p>";
        });
    });        
};

//---------------------------------------------------------------------------------------------Code so far

$(document).ready(function() {

    document.getElementById("codeBlockShowItemsInList").innerText = `const baseURL = "https://ci-swapi.herokuapp.com/api/"

function getData(type, cb) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + "/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
};

function writeToDocument(type) {
    console.clear()

    let el = document.getElementById("newDataDiv");
    el.innerHTML = "";

    getData(type, function(data) {
         
        data = data.results
 
        data.forEach(function(item) {
            el.innerHTML += "<p>" + item.name + "</p>";
        })
    })
};`;

    document.getElementById("findKeys").innerText = `function writeToDocument(type) {
    console.clear()

    let el = document.getElementById("newDataDiv");
    el.innerHTML = "";

    getData(type, function(data) {
         
        data = data.results
 
        data.forEach(function(item) {
            //1 Within the data.forEach loop, create another forEach loop to find EACH Object key and their items
            Object.keys(item).forEach(function(key) {})
                //3 Console.log to check we're finding the keys
                console.log(key);
                //5 Moved this line of code into the function
                el.innerHTML += "<p>" + item.name + "</p>";
            //2 Close the function braces!
            });
            //4 Move this line of code inside the function above, and delete this line
            el.innerHTML += "<p>" + item.name + "</p>";
        })
    })
};`

    document.getElementById("findKeysInConsole").innerText = `function writeToDocument(type) {
    console.clear()

    let el = document.getElementById("newDataDiv");
    el.innerHTML = "";

    getData(type, function(data) {
         
        data = data.results
 
        data.forEach(function(item) {
            Object.keys(item).forEach(function(key) {
                console.log(key);
            el.innerHTML += "<p>" + item.name + "</p>";
            });
        });
    });
};`

    $(".endText").on("click", function() {
        $(".response").css("display", "block").html (`<p>With console open, we can see now the list of keys, as well as our data <code>items</code> in the gray box above.</p>
        <p>But up to now, we can only display the <code>items</code> with a <code>key</code> value of "name", as we can see in the code above. 
        So to display all the values, we really need a table to do this. We'll do that in Part Four.</p><br></br>`);
    });
})