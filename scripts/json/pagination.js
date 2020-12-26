//const baseURL = "https://ci-swapi.herokuapp.com/api/"

function getData(type, cb) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://ci-swapi.herokuapp.com/api/" + type + "/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
};

function getnewData1(url, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", url);
    xhr.send();
}

function getTableHeaders(obj) {
    let tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`);
    });

    return `<tr>${tableHeaders}</tr>`;
};

function generatePaginationButtons(next, prev) {
    if (next && prev) {
        return `<button class="btn button" onclick="writeToDocument('${prev}')">Previous</button>
                <button class="btn button" onclick="writeToDocument('${next}')">Next</button>`; 
    } else if (next && !prev) {
        return `<button class="btn button" onclick="writeToDocument('${next}')">Next</button>`;       
    } else if (!next && prev) {
        return `<button class="btn button" onclick="writeToDocument('${prev}')">Previous</button>`;
    }
};

function generatePaginationButtons1(next, prev) {
    if (next && prev) {
        return `<button class="btn button" onclick="writeToDocument1('${prev}')">Previous</button>
                <button class="btn button" onclick="writeToDocument1('${next}')">Next</button>`; 
    } else if (next && !prev) {
        return `<button class="btn button" onclick="writeToDocument1('${next}')">Next</button>`;       
    } else if (!next && prev) {
        return `<button class="btn button" onclick="writeToDocument1('${prev}')">Previous</button>`;
    }
};

function writeToDocument(type) {
    let tableRows = [];
    let el = document.getElementById("newDataDiv");
    el.innerHTML = "";

    getData(type, function(data) {

        let pagination;
        if (data.next || data.previous) {
            pagination = generatePaginationButtons(data.next, data.previous);
        }
         
        data = data.results
        let tableHeader = getTableHeaders(data[0]);
 
        data.forEach(function(item) {
            let dataRow = [];

            Object.keys(item).forEach(function(key) {
                let rowData = item[key].toString();
                let truncatedData = rowData.substring(0, 15);

                dataRow.push(`<td>${truncatedData}</td>`)
            });
            tableRows.push(`<tr>${dataRow}</tr>`);
        });
        el.innerHTML += `<table>${tableHeader}${tableRows}</table>${pagination}`;
    });
};

function writeToDocument1(url) {
    var tableRows = [];
    var el = document.getElementById("newDataDiv2");

    getnewData1(url, function(data) {
        
        let pagination = "";
        if (data.next || data.previous) {
            pagination = generatePaginationButtons1(data.next, data.previous);
        }
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {
            var dataRow = [];

            Object.keys(item).forEach(function(key) {
                var rowData = item[key].toString();
                var truncatedData = rowData.substring(0, 15);
                dataRow.push(`<td>${truncatedData}</td>`);
            });
            tableRows.push(`<tr>${dataRow}</tr>`);
        });

        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>${pagination}`;
    });
}

$(document).ready(function() {

    document.getElementById("pagination").innerText = `const baseURL = "https://ci-swapi.herokuapp.com/api/"

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

function getTableHeaders(obj) {
    let tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push("<td>" + key + "</td>");
    });

    return "<tr>" + tableHeaders + "</tr>";
};

function writeToDocument(type) {
    let tableRows = [];
    let el = document.getElementById("newDataDiv");
    el.innerHTML = "";

    getData(type, function(data) {
         
        data = data.results
        let tableHeader = getTableHeaders(data[0]);
 
        data.forEach(function(item) {
            let dataRow = [];

            Object.keys(item).forEach(function(key) {
                let rowData = item[key].toString();
                let truncatedData = rowData.substring(0, 15);

                dataRow.push("<td>" + truncatedData + "</td>")
            });
            tableRows.push("<tr>" + dataRow + "</tr>");
        });
        el.innerHTML += "<table>" + tableHeader + tableRows + "</table>";
    });
};`

    document.getElementById("pagination1").innerText = `function writeToDocument(type) {
    let tableRows = [];
    let el = document.getElementById("newDataDiv");
    el.innerHTML = "";

    getData(type, function(data) {

        //1 Create variable called "pagination"
        let pagination;
        //2 Create if function and add variable inside which has function generatePaginationButtons() 
        //with 2 arguments, data.next and data.previous assigned to it
        if (data.next || data.previous) {
            pagination = generatePaginationButtons(data.next, data.previous);
        }
         
        data = data.results
        let tableHeader = getTableHeaders(data[0]);
 
        data.forEach(function(item) {
            let dataRow = [];

            Object.keys(item).forEach(function(key) {
                let rowData = item[key].toString();
                let truncatedData = rowData.substring(0, 15);

                dataRow.push("<td>" + truncatedData + "</td>")
            });
            tableRows.push("<tr>" + dataRow + "</tr>");
        });
        //3 Add pagination variable to end of table
        el.innerHTML += "<table>" + tableHeader + tableRows + "</table>" + pagination;
    });
};`;

    document.getElementById("pagination2").innerText = `function generatePaginationButtons(next, prev) {
    if (next && prev) {
        return '<button class="btn button" onclick="writeToDocument(prev)">Previous</button>;
                <button class="btn button" onclick="writeToDocument(next)">Next</button>'; 
    } else if (next && !prev) {
        return '<button class="btn button" onclick="writeToDocument(next)">Next</button>';       
    } else if (!next && prev) {
        return '<button class="btn button" onclick="writeToDocument(prev)">Previous</button>';
    }
};`

    document.getElementById("pagination3").innerText = `const baseURL = "https://ci-swapi.herokuapp.com/api/"
    
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

function getTableHeaders(obj) {
    let tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push("<td>" + key + "</td>");
    });

    return "<tr>" + tableHeaders + "</tr>";
};

function generatePaginationButtons(next, prev) {
    if (next && prev) {
        return '<button class="btn button" onclick="writeToDocument(prev)">Previous</button>;
                <button class="btn button" onclick="writeToDocument(next)">Next</button>'; 
    } else if (next && !prev) {
        return '<button class="btn button" onclick="writeToDocument(next)">Next</button>';       
    } else if (!next && prev) {
        return '<button class="btn button" onclick="writeToDocument(prev)">Previous</button>';
    }
};

function writeToDocument(type) {
    let tableRows = [];
    let el = document.getElementById("newDataDiv");
    el.innerHTML = "";

    getData(type, function(data) {

        let pagination;
        if (data.next || data.previous) {
            pagination = generatePaginationButtons(data.next, data.previous);
        }
         
        data = data.results
        let tableHeader = getTableHeaders(data[0]);
 
        data.forEach(function(item) {
            let dataRow = [];

            Object.keys(item).forEach(function(key) {
                let rowData = item[key].toString();
                let truncatedData = rowData.substring(0, 15);

                dataRow.push("<td>" + truncatedData + "</td>")
            });
            tableRows.push("<tr>" + dataRow + "</tr>");
        });
        el.innerHTML += "<table>" + tableHeader + tableRows + "</table>" + pagination;
    });
};`;

    $(".endText").on("click", function() {
        $(".response").css("display", "block").html(`<p>Now, we can see the "Next" button has been appended, but when we click on it, nothing happens. In fact, our entire table disappears! 
        This is because, if we look in the console, we can see that the entire <code>const baseURL</code> is being attached to the base <code>UR</code>, 
        effectively concatenating two <code>URLs</code> together.</p> 
        <p>We'll solve this in Part Two.</p>
        <br>`);
    });

    $(".finalText").on("click", function() {
        $(".response").css("display", "block").css("color", "yellow").css("background-color", "purple").html(`<p>Ta-dah!</p>`);
    });

    $(".showFirstArticle").on("click", function() {
        $(window).scrollTop(0); 
        $(".articleOne").css("display", "block");
        $(".articleTwo").css("display", "none");
        $(".response").css("display", "none");
        $("#newDataDiv7").text("");
    })

    $(".showSecondArticle").on("click", function() {
        $(window).scrollTop(0); 
        $(".articleOne").css("display", "none");
        $(".articleTwo").css("display", "block");
        $(".response").css("display", "none");
        $("#newDataDiv2").text("");
    })

    document.getElementById("resultURL").innerText = `https://ci-swapi.herokuapp.com/api/https://ci-swapi.herokuapp.com/api/people/?page=2/`

    document.getElementById("pagination5").innerText = `const baseURL = "https://ci-swapi.herokuapp.com/api/"
    
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

function getTableHeaders(obj) {
    let tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push("<td>" + key + "</td>");
    });

    return "<tr>" + tableHeaders + "</tr>";
};

function generatePaginationButtons(next, prev) {
    if (next && prev) {
        return '<button class="btn button" onclick="writeToDocument(prev)">Previous</button>;
                <button class="btn button" onclick="writeToDocument(next)">Next</button>'; 
    } else if (next && !prev) {
        return '<button class="btn button" onclick="writeToDocument(next)">Next</button>';       
    } else if (!next && prev) {
        return '<button class="btn button" onclick="writeToDocument(prev)">Previous</button>';
    }
};

function writeToDocument(type) {
    let tableRows = [];
    let el = document.getElementById("newDataDiv");
    el.innerHTML = "";

    getData(type, function(data) {

        let pagination;
        if (data.next || data.previous) {
            pagination = generatePaginationButtons(data.next, data.previous);
        }
         
        data = data.results
        let tableHeader = getTableHeaders(data[0]);
 
        data.forEach(function(item) {
            let dataRow = [];

            Object.keys(item).forEach(function(key) {
                let rowData = item[key].toString();
                let truncatedData = rowData.substring(0, 15);

                dataRow.push("<td>" + truncatedData + "</td>")
            });
            tableRows.push("<tr>" + dataRow + "</tr>");
        });
        el.innerHTML += "<table>" + tableHeader + tableRows + "</table>" + pagination;
    });
};`

    document.getElementById("changeJS1").innerText = `//1 Delete this constant
const baseURL = "https://ci-swapi.herokuapp.com/api/"

//2a In the HTML, we are going to be passing in the full URL value, so we change type for url
function getData(url, cb) {
    let xhr = new XMLHttpRequest();

    //3a As we have deleted the constant, we change this line of code
    xhr.open("GET", baseURL + type + "/");
    //3b To this:
    xhr.open("GET", url);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
};`

    document.getElementById("changeJS2").innerText = `//1a Replace type with url
function writeToDocument(url) {
    let tableRows = [];
    let el = document.getElementById("newDataDiv");
    el.innerHTML = "";

    //2 Replace type with url
    getData(url, function(data) {

        let pagination;
        if (data.next || data.previous) {
            pagination = generatePaginationButtons(data.next, data.previous);
        }
         
        data = data.results
        let tableHeader = getTableHeaders(data[0]);
 
        data.forEach(function(item) {
            let dataRow = [];

            Object.keys(item).forEach(function(key) {
                let rowData = item[key].toString();
                let truncatedData = rowData.substring(0, 15);

                dataRow.push("<td>" + truncatedData + "</td>")
            });
            tableRows.push("<tr>" + dataRow + "</tr>");
        });
        el.innerHTML += "<table> + tableHeader + tableRows + "</table>" + pagination;
    });
};`

    document.getElementById("JSchanged").innerText = `function getData(url, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", url);
    xhr.send();
}

function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push("<td> + key + "</td>");
    });

    return "<tr>" + tableHeaders + "</tr>";
}

function generatePaginationButtons(next, prev) {
    if (next && prev) {
        return '<button onclick="writeToDocument("prev")">Previous</button>
                <button onclick="writeToDocument("next")">Next</button>';
    } else if (next && !prev) {
        return '<button onclick="writeToDocument("next")">Next</button>';
    } else if (!next && prev) {
        return '<button onclick="writeToDocument("prev")">Previous</button>';
    }
}

function writeToDocument(url) {
    var tableRows = [];
    var el = document.getElementById("newDataDiv");

    getData(url, function(data) {
        
        let pagination
        if (data.next || data.previous) {
            pagination = generatePaginationButtons(data.next, data.previous);
        }
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {
            var dataRow = [];

            Object.keys(item).forEach(function(key) {
                var rowData = item[key].toString();
                var truncatedData = rowData.substring(0, 15);
                dataRow.push("<td>" + truncatedData + "</td>");
            });
            tableRows.push("<tr>" + dataRow + "</tr>");
        });

        el.innerHTML = "<table>" + tableHeaders + tableRows + "</table>" + pagination";
    });
}`

    document.getElementById("addURL").innerText = `https://ci-swapi.herokuapp.com/api/`;

    document.getElementById("newButtons").innerText = `<button onclick="writeToDocument('https://ci-swapi.herokuapp.com/api/people')">People</button>
<button onclick="writeToDocument('https://ci-swapi.herokuapp.com/api/planets')">Planets</button>
<button onclick="writeToDocument('https://ci-swapi.herokuapp.com/api/species')">Species</button>
<button onclick="writeToDocument('https://ci-swapi.herokuapp.com/api/starships')">Starships</button>
<button onclick="writeToDocument('https://ci-swapi.herokuapp.com/api/vehicles')">Vehicles</button>
<button onclick="writeToDocument('https://ci-swapi.herokuapp.com/api/films')">Films</button>`

})