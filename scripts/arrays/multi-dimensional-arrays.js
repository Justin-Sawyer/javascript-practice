let eng = ["England", ["London"]];
let wal = ["Wales", ["Cardiff"]];
let sco = ["Scotland", ["Edinburgh"]];
let nir = ["Northern Ireland", ["Belfast"]];
let ire = ["Eire", ["Dublin"]];
let britain = new Array(eng, wal, sco);
let ireland = new Array(nir,ire);
let grbr1 = new Array(eng, wal, sco, nir);
let grbr2 = new Array(britain, nir);
let britisles1 = new Array(eng, wal, sco, nir, ire);
let britisles2 = new Array(grbr1, ire);
let britisles3 = new Array(grbr2, ire);
let britisles4 = new Array(britain, nir, ire);
let britisles5 = new Array(britain, ireland);

console.log(`England:`);
console.log(eng);

console.log(`Wales:`);
console.log(wal);

console.log(`Scotland:`);
console.log(sco);

console.log(`Northern Ireland:`);
console.log(nir);

console.log(`Eire:`);
console.log(ire);

console.log(`Britain:
(England), (Wales), (Scotland)`);
console.log(britain);

console.log(`Ireland:
(Northern Ireland), (Ireland)`);
console.log(ireland);

console.log(`Great Britain (1):
(England), (Wales), (Scotland), (Northern Ireland)`);
console.log(grbr1);

console.log(`Great Britain (2):
(Britain), (Northern Ireland)`);
console.log(grbr2);

console.log(`British Isles (1):
(England), (Wales), (Scotland), (Northern Ireland), (Eire)`);
console.log(britisles1);

console.log(`British Isles (2):
(Great Britain), (Eire)`);
console.log(britisles2);

console.log(`British Isles (3):
((Britain), (Northern Ireland)), (Eire)`);
console.log(britisles3);

console.log(`British Isles (4):
(Britain), (Northern Ireland), (Ireland)`)
console.log(britisles4);

console.log(`British Isles (5):
(Britain), (Ireland)`);
console.log(britisles5);

(function () {
    document.getElementById("countries1").innerText = `eng: 
["England", 
    ["London"]
]
${eng}`;
})();

(function () {
    document.getElementById("countries2").innerText = `wal: 
["Wales", 
    ["Cardiff"]
]
${wal}`;
})();

(function () {
    document.getElementById("countries3").innerText = `sco: 
["Scotland", 
    ["Edinburgh"]
]
${sco}`;
})();

(function () {
    document.getElementById("countries4").innerText = `nir: 
["Northern Ireland, 
    ["Belfast"]
]
${nir}`;
})();

(function () {
    document.getElementById("countries5").innerText = `ire: 
["Eire", 
    ["Dublin"]
];
${ire}`;
})();

(function () {
    document.getElementById("countries6").innerText = `britain: new Array(eng, wal, sco);
[
    ["England, 
        ["London"]
    ], 
    ["Wales" 
        ["Cardiff"]
    ], 
    ["Scotland", 
        ["Edinburgh"]
    ]
];
${britain}`;
})();

(function () {
    document.getElementById("countries7").innerText = `ireland: new Array(nir,ire);
[
    ["Northern Ireland, 
        ["Belfast"]
    ],
    ["Eire, 
        ["Dublin"]
    ]
];
${ireland}`;
})();

(function () {
    document.getElementById("countries8").innerText = `grbr1: new Array(eng, wal, sco, nir);
[
    ["England, 
        ["London"]
    ], 
    ["Wales" 
        ["Cardiff"]
    ], 
    ["Scotland", 
        ["Edinburgh"]
    ], 
    ["Northern Ireland", 
        ["Belfast"]
    ]
];
${grbr1}`;
})();

(function () {
    document.getElementById("countries9").innerText = `grbr2 = new Array(britain, nir);
    = ((eng, wal, sco), nir) 
[
    [
        ["England, 
            ["London"]
        ], 
        ["Wales"   
            ["Cardiff"]
        ], 
        ["Scotland", 
            ["Edinburgh"]
        ]
    ], 
    ["Northern Ireland", 
        ["Belfast"]
    ]
];
${grbr2}`;
})();

(function () {
    document.getElementById("countries10").innerText = `britisles1: new Array(eng, wal, sco, nir, ire);
[
    ["England, 
        ["London"]
    ], 
    ["Wales" 
        ["Cardiff"]
    ], 
    ["Scotland", 
        ["Edinburgh"]
    ], 
    ["Northern Ireland", 
        ["Belfast"]
    ]
    ["Ireland", 
        ["Dublin"]
    ]
];
${britisles1}`;
})();

(function () {
    document.getElementById("countries11").innerText = `britisles2: new Array(grbr1, ire);
    = ((eng, wal, sco, nir), ire)
[
    [
        ["England, 
            ["London"]
        ], 
        ["Wales" 
            ["Cardiff"]
        ], 
        ["Scotland", 
            ["Edinburgh"]
        ], 
        ["Northern Ireland", 
            ["Belfast"]
        ]
    ],
    ["Ireland", 
        ["Dublin"]
    ]
];
${britisles1}`;
})();

(function () {
    document.getElementById("countries12").innerText = `britisles3 = new Array(grbr2, ire);
    = (((eng, wal, sco), nir), ire)
[
    [
        [
            ["England, 
                ["London"]
            ], 
            ["Wales" 
                ["Cardiff"]
            ], 
            ["Scotland", 
                ["Edinburgh"]
            ]
        ],
        ["Northern Ireland", 
            ["Belfast"]
        ]
    ],
    ["Ireland", 
        ["Dublin"]
    ]
];
${britisles3}`;
})();

(function () {
    document.getElementById("countries13").innerText = `britisles4 = new Array(britain, nir, ire);
    = ((eng, wal, sco), nir, ire)
[
    [
        ["England, 
            ["London"]
        ], 
        ["Wales" 
            ["Cardiff"]
        ], 
        ["Scotland", 
            ["Edinburgh"]
        ]
    ], 
    ["Northern Ireland", 
        ["Belfast"]
    ],
    ["Ireland", 
        ["Dublin"]
    ]
];
${britisles4}`;
})();

(function () {
    document.getElementById("countries14").innerText = `britisles5 = new Array(britain, ireland);
    = ((eng, wal, sco), (nir, ire))
[
    [
        ["England, 
            ["London]
        ],
        ["Wales", 
            ["Cardiff"]
        ],
        ["Scotland", 
            ["Edinburgh"]
        ]
    ],
    [
        ["Northern Ireland", 
            ["Belfast"]
            ],
        ["Eire", 
            ["Dublin"]
        ]
    ]
]
${britisles5}`;
})();

function findSecond() {
    let x = ["a", "b", "c", "d", "e"];
    document.getElementById("second").innerText = `let x = ["a", "b", "c", "d", "e"];
x[1];
${x[1]}`;
}

function findLondon() {
    document.getElementById("london").innerText = `eng[0];
${eng[0]}

eng[1];
${eng[1]}`;
}

function addWestminster() {
    eng.push("Westminster")
    document.getElementById("westminster").innerText = `eng.push("Westminster");
${eng}

and use the console to check its position:
console.log(eng);
${console.log(eng)} (<-- ignore this "undefined" and read the console entry)`;
}

function popWestminster() {
    document.getElementById("westminster1").innerText = `eng.pop("Westminster");
${eng.pop("Westminster")} has ben popped
${eng} remain`
}

function pushWestminster() {
    document.getElementById("westminster2").innerText = `eng[1].push("Westminster");
${eng[1].push("Westminster")} 
${eng} 

and again use the console to check its position:
console.log(eng);
${console.log(eng)} (<-- ignore this "undefined" and read the console entry)

In the console we can read,
[England, Array 2]

Now, we can see what is at index #0:
console.log(eng[0]);
${console.log(eng[0])} (<-- ignore this "undefined" and read the console entry)

And also what is CONTAINED IN index #1:
console.log(eng[1]);
${console.log(eng[1])} (<-- ignore this "undefined" and read the console entry)

Console has shown us that at index #1, both London and Westminster are listed, while at index #0, England is listed`;
}

function findWestminster() {
    document.getElementById("findWestminster").innerText = `eng[1][1];
${eng[1][1]}`;
}

function addBoroughs() {
    let city = [1, "City of London", "Corporation of London", "?", 7,003];
    let westminster = [2, "Westminster", "Westminster City Council", "Conservative", 226,841];
    let kensington = [3, "Kensington and Chelsea", "Kensington and Chelsea London Borough Council", "Conservative", 155,594];
    let hammersmith = [4, "Hammersmith and Fulham", "Hammersmith and Fulham London Borough Council", "Labour", 178,685];
    eng[1].push(city, westminster, kensington, hammersmith);
    console.log(eng);
    document.getElementById("boroughs").innerText = `let city = [1, "City of London", "Corporation of London", "?", 7,000];
let westminster = [2, "Westminster", "Westminster City Council", "Conservative", 226,841];
let kensington = [3, "Kensington and Chelsea", "Kensington and Chelsea London Borough Council", "Conservative", 155,594];
let hammersmith = [4, "Hammersmith and Fulham", "Hammersmith and Fulham London Borough Council", "Labour", 178,685];

eng[1].push(city, westminster, kensington, hammersmith);

${eng}

eng = ["England", ["London", ["Westminster"], [city], [westminster], [kensington], [hammersmith]]];
    England
        London
        Westminster
            city
                (1, "City of London", "Corporation of London", "?", 7,003)
            westminster
                (2, "Westminster", "Westminster City Council", "Conservative", 226,841)
            kensington
                (3, "Kensington and Chelsea", "Kensington and Chelsea London Borough Council", "Conservative", 155,594)
            hammersmith
                (4, "Hammersmith and Fulham", "Hammersmith and Fulham London Borough Council", "Labour", 178,685)`;
}

function findIndex() {
    let innerIndex;
    let indexOfRemainingArray = eng.findIndex(function(sub) {
        innerIndex = sub.indexOf("Westminster");
        return innerIndex !== -1;
    })
    indexOfRemainingArray; 
    innerIndex;
    document.getElementById("index").innerText = `let innerIndex;
    let indexOfRemainingArray = eng.findIndex(function(sub) {
        innerIndex = sub.indexOf("Westminster");
        return innerIndex !== -1;
    })
    indexOfRemainingArray;
    ${indexOfRemainingArray};
    innerIndex;
    ${innerIndex}`;
    document.getElementById("explanation").innerText = `We use .findIndex with the sub array as its currentValue function and from there we look inside the sub array for Westminster.
We can see from this that Westminster is located at index #1 of the first array and index #1 of the second array:
Effectively, Westminster is located at 
eng[1][1]

We know we have found Westminster rather than the array westminster (containing the map number etc) because we searched for
"Westminster" the string
rather than
westminster the array.

We can also see in the console that "Westminster" is indeed in this position.`;
    console.log(`Where is Westminster?
Open the array to see:`);
console.log(eng);
}

function removeUsingSplice() {
    let spliceEng = eng[1].splice(1, 1)
    document.getElementById("splice-or-filter").innerText = `Remove entry at position 1 (and stop removing at position 1) at index #1:
let spliceEng = eng[1].splice(1, 1);
spliceEng;
${spliceEng}

And show what remains in array eng:
eng;
${eng}

(Check array contents in the console)`;
    console.clear();
    console.log(`Open array to check for "Westminster" at index #1 of the first sub-array (thus [1][1]):`);
    
    for (let i = 0; i < eng[1].length; i++) {
    console.log(i, eng[1][i]);
    }

    document.getElementById("explanation1").innerText = `Note: splice() alters the original array, thus "Westminster" has been returned into its own array`
}

function removeUsingFilter() {
    let newEng = eng[1].filter(town => town !== 'Westminster')
    document.getElementById("splice-or-filter").innerText = `let newEng = eng[1].filter(town => town !== 'Westminster');
newEng;
${newEng}

eng;
${eng}`;
    document.getElementById("explanation1").innerText = `Note: filter() does not alter the original array. Instead, a new array [newEng] has been created in which "Westminster" is not among the contents, while the original array [eng] still contains "Westminster".`
}

function removeUsingSplice2() {
    //eng[1][1].splice(4, 2, 7003);
    eng[1][2].splice(4, 2, 226831);
    eng[1][3].splice(4, 2, 155594);
    eng[1][4].splice(4, 2, 178685);
    document.getElementById("splice").innerText = `eng[1][1];
${eng[1][1]}; (is [eng] with erroneous entries)
eng[1][1].splice(4, 2, 7003);
${eng[1][1].splice(4, 2, 7003)}; (are the two erroneous entries, removed and replaced with 7003)
${eng[1][1]};

eng[1][2].splice(4, 2, 226831);
${eng[1][2]};

eng[1][3].splice(4, 2, 155594);
${eng[1][3]};

eng[1][4].splice(4, 2, 178685);
${eng[1][4]}`;
    for (let i = 0; i < eng[1].length; i++) {
    console.log(i, eng[1][i]);
    }
}