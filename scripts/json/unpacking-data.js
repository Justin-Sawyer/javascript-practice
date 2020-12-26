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

function writeToDocument(type) {
    getData(type, function(data) {
        console.dir(data);
    })
};

function writeToDocument1(type) {
    getData(type, function(data) {
        console.dir(data);
        document.getElementById("newDataDiv1").innerHTML = data.results;
    })
};

function writeToDocument2(type) {
    getData(type, function(data) {
         
        data = data.results
 
        data.forEach(function(item) {
            document.getElementById("newDataDiv2").innerHTML = item;
            console.log(item)
        })
    })
};

function writeToDocument3(type) {
    console.clear()
    getData(type, function(data) {
         
        data = data.results
 
        data.forEach(function(item) {
            document.getElementById("newDataDiv3").innerHTML = item.name;
            console.log(item)
        })
    })
};

function writeToDocument4(type) {
    console.clear()
    getData(type, function(data) {
         
        data = data.results
 
        data.forEach(function(item) {
            document.getElementById("newDataDiv4").innerHTML += `<p>${item.name}</p>`;
            console.log(item)
        })
    })
};

function writeToDocument5(type) {
    console.clear()

    let el = document.getElementById("newDataDiv5");
    el.innerHTML = "";

    getData(type, function(data) {
         
        data = data.results
 
        data.forEach(function(item) {
            el.innerHTML += `<p>${item.name}</p>`;
        })
    })
};

//------------------------------------------------------------------------------------------------------ doc ready
$(document).ready(function() {

//------------------------------------------------------------------------------------------------------ code block
    document.getElementById("codeBlockWriteToDoc").innerText = `const baseURL = "https://ci-swapi.herokuapp.com/api/"

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
    getData(type, function(data) {
        document.getElementById("newDataDiv").innerHTML = data;
    })
};`;

    document.getElementById("directory").innerText = `function writeToDocument(type) {
    getData(type, function(data) {
        console.dir(data)
        document.getElementById("newDataDiv").innerHTML = data;
    })
};`

    document.getElementById("dataResults").innerText = `function writeToDocument(type) {
    getData(type, function(data) {
        console.dir(data)
-->     document.getElementById("newDataDiv").innerHTML = data.results;
    })
};`

    document.getElementById("unpack").innerText = `function writeToDocument(type) {
    getData(type, function(data) {
        //1
        console.dir(data)
        //2 
        data = data.results

        //3 
        data.forEach(function(item) {
            //5
            document.getElementById("newDataDiv").innerHTML = item;
            //6
            console.log(item)
        })
        //4
        document.getElementById("newDataDiv").innerHTML = data.results;
    })
};`

    document.getElementById("unpackFull").innerText = `function writeToDocument(type) {
    getData(type, function(data) {
         
        data = data.results
 
        data.forEach(function(item) {
            document.getElementById("newDataDiv").innerHTML = item;
            console.log(item)
        })
    })
};`;

    document.getElementById("itemName").innerText = `function writeToDocument(type) {
    getData(type, function(data) {
         
        data = data.results
 
        data.forEach(function(item) {
-->         document.getElementById("newDataDiv").innerHTML = item.name;
            console.log(item)
        })
    })
};`;

    document.getElementById("allEntries").innerText = `function writeToDocument(type) {
    getData(type, function(data) {
         
        data = data.results
 
        data.forEach(function(item) {
-->         document.getElementById("newDataDiv").innerHTML += "<p>" + item.name + "</p>";
            console.log(item)
        })
    })
};`;

    document.getElementById("listClear").innerText = `function writeToDocument(type) {
    getData(type, function(data) {
        //1 create variable el and set it to document.getElementById("newDataDiv")
        let el = document.getElementById("newDataDiv")

        //2 clear list with each button press by setting el.innerHTML to empty "string"
        el.inerHTML = "";
         
        data = data.results
 
        data.forEach(function(item) {
            //3 change this line
            document.getElementById("newDataDiv").innerHTML += "<p>" + item.name + "</p>";
            //4 to this
            el.innerHTML += "<p>" + item.name + "</p>"
            //5 delete this as we will now have list as it should be
            console.log(item)
        })
    })
};`;

    
    $(".endText").on("click", function() {
        $(".response").css("display", "block").html (`<p>Move on to <a href="object-keys.html">Object.keys()</a> to see how we get the films <code>items</code> to display.</p><br>`);
    });
})

