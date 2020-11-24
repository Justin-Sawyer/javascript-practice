//NESTED LOOPS
console.log(`
Nested Loops
These are ideal for getting indices out of nested arrays

for (statement 1; statement 2; statement 3) {
	code block to be executed
		for (statement 4; statement 5; statement 6) {
			code block to be executed
		}
}

To get the first level indices from the array, we can use a normal loop:

Remember, if we do not declare variable i, then we just get a list of index NUMBERS from the array, thus:
For loop:`)

let a = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];

for (i=0; i<a.length; i++) {
    console.log(i);
}

console.log(`
For... in loop:
displays indices as numbers`);
/*for (let i in a) {
    console.log(i);
}*/

console.log(`
For... of loop:
displays contents of each subarray because we've told the code that b is OF a`);
/*for (let b of a) {
    console.log(b);
}*/

console.log(`
So, lets declare the variable and tell it to get the indices from the array.

For loop:`);
for (i=0; i<a.length; i++) {
    console.log(a[i]);
}

console.log(`
For... in loop:`);
/*for (let i in a) {
    console.log(a[i]);
}*/

console.log(`
For... of loop:
Because we've told the code that b is OF a, we don't need to repeat this as log(a[b])`);
/*for (let b of a) {
    console.log(b);
}*/

console.log(`
To get to the second level array (the array within the array), we need a second level loop (a loop within a loop:
    
For loop:
https://repl.it/@JustinSawyer/PracticalAustereAbandonware#script.js
From a for loop, depending on the level we nest into we can get each element alone, each element within its subarray and the original array.
But note the difference from how we extract them to the for... of array.

For... in loop:
https://repl.it/@JustinSawyer/ImpishUnknownRobots#script.js
From a for... in loop, because the first level (level zero) is IMPLIED (because IN), we cannot extract each element alone.
BUT we can get the nested elements in various different ways.

For... of loop:
https://repl.it/@JustinSawyer/WigglySparseNlp#script.js
From a for... of loop, depending on the level we nest into we can get each element alone, each element within its subarray and the original array.
But note the difference from how we extract them to the for array.

CHALLENGES:
https://repl.it/@JustinSawyer/JavascriptFundamentalsBCNestedLoops1#main.js
https://repl.it/@JustinSawyer/JavascriptFundamentalsBCNestedLoops2-2

Infinite Loops
Normally arise from bad coding. Try to avoid them`);

//-----------------------------------------------------------------------------------------------------------------
(function clearConsole() {
    console.clear();
})();

//For loop dogs albums:
(function nestedLoop() {
    document.getElementById("nestedLoop").innerText = `for (statement 1; statement 2; statement 3) {
        code block to be executed
    for (statement 4; statement 5; statement 6) {
        code block to be executed
    }
}`;
})();


(function forLoopAllDogsAlbums() {
    console.log(`

List all albums in each of their arrays:
`);
    let i;
    let text = "";
    let allDogsAlbums = [["The State We're In"], ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"], ["Happy Ever After", "Let Sleeping Dogs Lie", "When Bastards Go To Hell"], ["Swinging The Bottles... The BBC Sessions"]];
    for (i = 0; i < allDogsAlbums.length; i++) {
        console.log(allDogsAlbums[i]);
        text += "[" + allDogsAlbums[i] + "]<br><br>";
    };
    document.getElementById("forLoopAllDogsAlbums").innerHTML = text;
    document.getElementById("resultIndex0").innerText = `[${allDogsAlbums[0]}]`;
    document.getElementById("resultIndex1").innerText = `[${allDogsAlbums[1]}]`;
    document.getElementById("resultIndex2").innerText = `[${allDogsAlbums[2]}]`;
    document.getElementById("resultIndex3").innerText = `[${allDogsAlbums[1]}]`;
    
})();

function seeTheCode() {
    document.getElementById("theCode").innerText = `let i;
let text = "";
let allDogsAlbums = [["The State We're In"], ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"], ["Happy Ever After", "Let Sleeping Dogs Lie", "When Bastards Go To Hell"], ["Swinging The Bottles... The BBC Sessions"]];
    for (i = 0; i < allDogsAlbums.length; i++) {
        console.log(allDogsAlbums[i]);
        text += "[" + allDogsAlbums[i] + "]<br><br>";
    };
    document.getElementById("forLoopAllDogsAlbums").innerHTML = text;`;
}

(function allDogsAlbumsNestedLoop() {
    document.getElementById("codeDogsNestedLoop").innerText = `let allDogsAlbums = [["The State We're In"], ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"], ["Happy Ever After", "Let Sleeping Dogs Lie", "When Bastards Go To Hell"], ["Swinging The Bottles... The BBC Sessions"]];
    let i;
    let j;
    for (i = 0; i < allDogsAlbums.length; i++) {
        for (j = 0; j < allDogsAlbums[i].length; j++) {
            document.getElementById("resultDogsNestedLoop").innerHTML += allDogsAlbums[i][j] + "<br>";
        }
    }`;
    let allDogsAlbums = [["The State We're In"], ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"], ["Happy Ever After", "Let Sleeping Dogs Lie", "When Bastards Go To Hell"], ["Swinging The Bottles... The BBC Sessions"]];
    let i;
    let j;
    for (i = 0; i < allDogsAlbums.length; i++) {
        for (j = 0; j < allDogsAlbums[i].length; j++) {
            document.getElementById("resultDogsNestedLoop").innerHTML += allDogsAlbums[i][j] + "<br>";
        }
    }
})();

(function pushAndSpliceDogsAlbumTracks() {
    let allDogsAlbums = [["The State We're In"], ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"], ["Happy Ever After", "Let Sleeping Dogs Lie", "When Bastards Go To Hell"], ["Swinging The Bottles... The BBC Sessions"]];
    
    let bootleg = ["(Un)Authorised Bootleg Album"];
    let bootlegTracks = [["Firework Girl", 3.30],
        ["Chains", 2.30],
        ["Gold", 2.39], 
        ["Pourin' Out My Heart", 3.19],
        ["Wait Until I'm Dead",	3.38],
        ["How Do You Fall In Love Again?", 2.25],
        ["Kiss This Joint",	2.08],
        ["Heroine",	3.53],
        ["Tales Of Destruction", 3.00],
        ["Dynamite Jet Saloon",	1.15],
        ["Swingin' The Bottle",	3.28]];
    bootleg.push(bootlegTracks);

    let dynamite = ["In The Dynamite Jet Saloon"];
    let dynamiteTracks = [ 
        ["Debauchery", 3.57, 237],
        ["I Don't Want You to Go", 3.49, 229],
        ["How Come It Never Rains", 4.44, 284],
        ["Last Bandit", 3.39, 219],
        ["Medicine Man", 4.25, 265],
        ["Gonna Get It Right", 3.38, 218],
        ["Everything I Want", 3.58, 238],
        ["Heartbreak", 3.16, 196],
        ["Billy Two Rivers", 3.16, 196],
        ["Wait Until I'm Dead", 4.09, 249],
        ["Sometimes", 4.18, 258],
        ["The Kid from Kensington", 3.40, 220],
        ["The State I'm In", 4.21, 281]];
    dynamite.push(dynamiteTracks);

    let errol = ["Errol Flynn"];
    let errolTracks = [["Drunk Like Me", 4.12],
        ["Goddess from the Gutter", 3.34],
        ["Hurricane", 3.49],
        ["Satellite Kid", 3.54],
        ["Errol Flynn", 2.28],
        ["Planetary Pied Piper", 4.39],
        ["Princess Valium", 4.17],
        ["Dogs Hair", 2.52],
        ["Trail of Tears", 4.04],
        ["Ballad of Jack", 3.50],
        ["The Prettiest Girl in the World", 2.45],
        ["The Girl Behind the Glass", 3.43],
        ["Things Seem to Go Wrong", 1.51],
        ["Baby Glass", 3.39]];
    errol.push(errolTracks);

    let straight = ["Straight??!!"];
    let straightTracks = [["Cardboard Town", 3.14],
        ["Kiss My Heart Goodbye", 4.15],
        ["Lie in This Land", 3.08],
        ["You Can't Burn the Devil", 3.23],
        ["No Gypsy Blood", 2.22],
        ["Empty World", 2.29],
        ["Back on the Juice", 3.52],
        ["Evil", 3.26],
        ["Victims of Success", 3.10],
        ["Flyin' Solo", 4.13],
        ["Heroine", 4.43],
        ["Chiva", 5.00],
        ["Lady Nicotine", 2.52]];
    straight.push(straightTracks);

    let unchartered = ["More Unchartered Heights Of Disgrace"];
    let uncharteredTracks = [["What's Happening Here?", 3.38],
        ["What You Do", 2.55],
        ["Pretty, Pretty Once", 4.08],
        ["World's Different Now (An Ode to Drug Hill)", 3.34],
        ["Mr. Addiction", 3.11],
        ["Johnny Silvers", 5.49],
        ["Cath", 4.06],
        ["More Unchartered Heights of Disgrace", 3.53],
        ["Scared of Dying", 4.02],
        ["Mr. Barfly", 4.19],
        ["Put It in Her Arm", 4.07]];
    unchartered.push(uncharteredTracks);

console.log(`Click arrow to see Dogs d'Amour album tracks pushed into each album array:`, bootleg, dynamite, errol, straight, unchartered);

allDogsAlbums[1].splice(0, 5, bootleg, dynamite, errol, straight, unchartered);
console.log(`Click arrow then arrow(1) to see allDogsAlbums array with tracklist included in albums:
`, allDogsAlbums);

    document.getElementById("pushAndSpliceDogsAlbumTracks").innerText = `let allDogsAlbums = [
        ["The State We're In"], 
        ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"], 
        ["Happy Ever After", "Let Sleeping Dogs Lie", "When Bastards Go To Hell"], 
        ["Swinging The Bottles... The BBC Sessions"]];
    
let bootleg = ["(Un)Authorised Bootleg Album"];
let bootlegTracks = [
        ["Firework Girl", 3.30],
        ["Chains", 2.30],
        ["Gold", 2.39], 
        ["Pourin' Out My Heart", 3.19],
        ["Wait Until I'm Dead", 3.38],
        ["How Do You Fall In Love Again?", 2.25],
        ["Kiss This Joint", 2.08],
        ["Heroine", 3.53],
        ["Tales Of Destruction", 3.00],
        ["Dynamite Jet Saloon", 1.15],
        ["Swingin' The Bottle", 3.28]
    ];
bootleg.push(bootlegTracks);

let dynamite = ["In The Dynamite Jet Saloon"];
let dynamiteTracks = [ 
        ["Debauchery", 3.57],
        ["I Don't Want You to Go", 3.49],
        ["How Come It Never Rains", 4.44],
        ["Last Bandit", 3.39],
        ["Medicine Man", 4.25],
        ["Gonna Get It Right", 3.38],
        ["Everything I Want", 3.58],
        ["Heartbreak", 3.16],
        ["Billy Two Rivers", 3.16],
        ["Wait Until I'm Dead", 4.09],
        ["Sometimes", 4.18],
        ["The Kid from Kensington", 3.40],
        ["The State I'm In", 4.21]
    ];
dynamite.push(dynamiteTracks);

let errol = ["Errol Flynn"];
let errolTracks = [
        ["Drunk Like Me", 4.12],
        ["Goddess from the Gutter", 3.34],
        ["Hurricane", 3.49],
        ["Satellite Kid", 3.54],
        ["Errol Flynn", 2.28],
        ["Planetary Pied Piper", 4.39],
        ["Princess Valium", 4.17],
        ["Dogs Hair", 2.52],
        ["Trail of Tears", 4.04],
        ["Ballad of Jack", 3.50],
        ["The Prettiest Girl in the World", 2.45],
        ["The Girl Behind the Glass", 3.43],
        ["Things Seem to Go Wrong", 1.51],
        ["Baby Glass", 3.39]
    ];
errol.push(errolTracks);

let straight = ["Straight??!!"];
let straightTracks = [
        ["Cardboard Town", 3.14],
        ["Kiss My Heart Goodbye", 4.15],
        ["Lie in This Land", 3.08],
        ["You Can't Burn the Devil", 3.23],
        ["No Gypsy Blood", 2.22],
        ["Empty World", 2.29],
        ["Back on the Juice", 3.52],
        ["Evil", 3.26],
        ["Victims of Success", 3.10],
        ["Flyin' Solo", 4.13],
        ["Heroine", 4.43],
        ["Chiva", 5.00],
        ["Lady Nicotine", 2.52]
    ];
straight.push(straightTracks);

let unchartered = ["More Unchartered Heights Of Disgrace"];
let uncharteredTracks = [
        ["What's Happening Here?", 3.38],
        ["What You Do", 2.55],
        ["Pretty, Pretty Once", 4.08],
        ["World's Different Now (An Ode to Drug Hill)", 3.34],
        ["Mr. Addiction", 3.11],
        ["Johnny Silvers", 5.49],
        ["Cath", 4.06],
        ["More Unchartered Heights of Disgrace", 3.53],
        ["Scared of Dying", 4.02],
        ["Mr. Barfly", 4.19],
        ["Put It in Her Arm", 4.07]
    ];
unchartered.push(uncharteredTracks);

allDogsAlbums[1].splice(0, 5, bootleg, dynamite, errol, straight, unchartered);
console.log(allDogsAlbums);`
})();

(function playListsNestedLoop() {
    let allDogsAlbums = [["The State We're In"], ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"], ["Happy Ever After", "Let Sleeping Dogs Lie", "When Bastards Go To Hell"], ["Swinging The Bottles... The BBC Sessions"]];
    
    let bootleg = ["(Un)Authorised Bootleg Album"];
    let bootlegTracks = [
        ["Firework Girl", 3.30],
        ["Chains", 2.30],
        ["Gold", 2.39], 
        ["Pourin' Out My Heart", 3.19],
        ["Wait Until I'm Dead",	3.38],
        ["How Do You Fall In Love Again?", 2.25],
        ["Kiss This Joint",	2.08],
        ["Heroine",	3.53],
        ["Tales Of Destruction", 3.00],
        ["Dynamite Jet Saloon",	1.15],
        ["Swingin' The Bottle",	3.28]
    ];
    bootleg.push(bootlegTracks);

    let dynamite = ["In The Dynamite Jet Saloon"];
    let dynamiteTracks = [ 
        ["Debauchery", 3.57],
        ["I Don't Want You to Go", 3.49],
        ["How Come It Never Rains", 4.44],
        ["Last Bandit", 3.39],
        ["Medicine Man", 4.25],
        ["Gonna Get It Right", 3.38],
        ["Everything I Want", 3.58],
        ["Heartbreak", 3.16],
        ["Billy Two Rivers", 3.16],
        ["Wait Until I'm Dead", 4.09],
        ["Sometimes", 4.18],
        ["The Kid from Kensington", 3.40],
        ["The State I'm In", 4.21]
    ];
    dynamite.push(dynamiteTracks);

    let errol = ["Errol Flynn"];
    let errolTracks = [
        ["Drunk Like Me", 4.12],
        ["Goddess from the Gutter", 3.34],
        ["Hurricane", 3.49],
        ["Satellite Kid", 3.54],
        ["Errol Flynn", 2.28],
        ["Planetary Pied Piper", 4.39],
        ["Princess Valium", 4.17],
        ["Dogs Hair", 2.52],
        ["Trail of Tears", 4.04],
        ["Ballad of Jack", 3.50],
        ["The Prettiest Girl in the World", 2.45],
        ["The Girl Behind the Glass", 3.43],
        ["Things Seem to Go Wrong", 1.51],
        ["Baby Glass", 3.39]
    ];
    errol.push(errolTracks);

    let straight = ["Straight??!!"];
    let straightTracks = [
        ["Cardboard Town", 3.14],
        ["Kiss My Heart Goodbye", 4.15],
        ["Lie in This Land", 3.08],
        ["You Can't Burn the Devil", 3.23],
        ["No Gypsy Blood", 2.22],
        ["Empty World", 2.29],
        ["Back on the Juice", 3.52],
        ["Evil", 3.26],
        ["Victims of Success", 3.10],
        ["Flyin' Solo", 4.13],
        ["Heroine", 4.43],
        ["Chiva", 5.00],
        ["Lady Nicotine", 2.52]
    ];
    straight.push(straightTracks);

    let unchartered = ["More Unchartered Heights Of Disgrace"];
    let uncharteredTracks = [
        ["What's Happening Here?", 3.38],
        ["What You Do", 2.55],
        ["Pretty, Pretty Once", 4.08],
        ["World's Different Now (An Ode to Drug Hill)", 3.34],
        ["Mr. Addiction", 3.11],
        ["Johnny Silvers", 5.49],
        ["Cath", 4.06],
        ["More Unchartered Heights of Disgrace", 3.53],
        ["Scared of Dying", 4.02],
        ["Mr. Barfly", 4.19],
        ["Put It in Her Arm", 4.07]
    ];
    unchartered.push(uncharteredTracks);

    console.clear();
    allDogsAlbums[1].splice(0, 5, bootleg, dynamite, errol, straight, unchartered);
    console.log(allDogsAlbums);

    let shortSongPlayList = [];
    let longSongPlayList = [];

    for (i=0; i<allDogsAlbums[1].length; i++) {
        for (j=0; j<allDogsAlbums[1][i][1].length; j++) {
            if (allDogsAlbums[1][i][1][j][1]>3.3) {
            continue;
            };
            shortSongPlayList.push(allDogsAlbums[1][i][1][j]);
        }

        for (j=0; j<allDogsAlbums[1][i][1].length; j++) {
            if (allDogsAlbums[1][i][1][j][1]<=3.3) {
            continue;
            };
            longSongPlayList.push(allDogsAlbums[1][i][1][j]);
        }
    };

        document.getElementById("shortSongs").addEventListener("click", function() {
            document.getElementById("playList").innerHTML = "";
            for (k=0; k<shortSongPlayList.length; k++) {
                document.getElementById("playList").innerHTML += shortSongPlayList[k] + "<br>";
            };
        });

        document.getElementById("longSongs").addEventListener("click", function() {
            document.getElementById("playList").innerHTML = "";
            for (k=0; k<longSongPlayList.length; k++) {
                document.getElementById("playList").innerHTML += longSongPlayList[k] + "<br>";
            };
        });
    
    document.getElementById("playListsNestedLoop").innerText = `let shortSongPlayList = [];
let longSongPlayList = [];

    for (i=0; i<allDogsAlbums[1].length; i++) {
        for (j=0; j<allDogsAlbums[1][i][1].length; j++) {
            if (allDogsAlbums[1][i][1][j][1]>3.3) {
            continue;
            };
            shortSongPlayList.push(allDogsAlbums[1][i][1][j]);
        }
        
        for (j=0; j<allDogsAlbums[1][i][1].length; j++) {
            if (allDogsAlbums[1][i][1][j][1]<=3.3) {
            continue;
            };
            longSongPlayList.push(allDogsAlbums[1][i][1][j]);
        }
    };

        document.getElementById("shortSongs").addEventListener("click", function() {
            document.getElementById("playList").innerHTML = "";
            for (k=0; k<shortSongPlayList.length; k++) {
                document.getElementById("playList").innerHTML += shortSongPlayList[k] + "<br>";
            };
        });

        document.getElementById("longSongs").addEventListener("click", function() {
            document.getElementById("playList").innerHTML = "";
            for (k=0; k<longSongPlayList.length; k++) {
                document.getElementById("playList").innerHTML += longSongPlayList[k] + "<br>";
            };
        });`
})();

/*(function explainCode() {
    document.getElementById("explainCode").innerText = `[array / index 0
    index 1 [array / index 0 - loop with index i iterates through this array
        index 1 [array to access] - loop with index j iterates through these arrays
    ]
]

[all albums within this
    [first album] //- index 0
    [(in?)famous period albums: //- index 1 of "i" loop... starts at 0 within, stops at end, increments
        [album title: //-index 0
            [album songs and times] //- index 1 of "j" loop... starts at 0 within, stops at end, increments
        ]
    [other albums]
    [last album]
]`
})();*/

(function explainCode() {
    document.getElementById("explainCode").innerText = `let arr = 
[
    ["sub-array0 (index 0 of arr: The State We're In album)"],                                      // arr[0] - do not loop
                                                                                                    // loop i starts next line
    ["sub-array1 (index 1 of arr, all (in?)famous preiod albums within me, NO CLOSING BRACKET"      // arr[1][i] - loop "i" through this
        ["sub-sub-array0 (index 0 of sub-array1), album title, NO CLOSING BRACKET"                  // arr[1][i][0 - #0]
                                                                                                    // loop j starts next line
            ["song title and time (index 0 of sub-sub-array0)],                                     // arr[1][i][1][j][0 - #0] - loop "j" through these
            ["song title and time (index 1 of sub-sub-array0)],                                     // arr[1][i][1][j][0 - #1] - looping"j"
            ["etc"]
        ],                                                                                          // loop [j][0] ends
        ["sub-sub-array1 (index 1 of sub-array1), album title, NO CLOSING BRACKET"                  // arr[1][i][1 - #1] - looping "i"
            ["song title and time (index 0 of sub-sub-array1)],                                     // arr[1][i][1][j][1 - #0] - looping "j"
            ["song title and time (index 1 of sub-sub-array1)],                                     // arr[1][i][1][j][1 - #1] - looping "j"
            ["etc"]
        ],
    ]
];`
})();


