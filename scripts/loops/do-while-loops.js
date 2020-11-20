(function doWhileLoop() {
    document.getElementById("doWhileLoop").innerText = `let i = 0:
    do {console.log(i);
    i++
} while i < 10;`;
})();

(function dogsAlbums5() {
    let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
    let i = 0;
    console.log(`
    
Do... While Loop`);
    do {console.log(`There is a Dogs d'Amour album called ` + dogsAlbums[i]);
    i++;
} while (i < dogsAlbums.length);
    document.getElementById("dogsAlbums5").innerText = `let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
let i = 0;

console.log("
    
Do... While Loop");

    do {console.log("There is a Dogs d'Amour album called " + dogsAlbums[i]);
    i++;
} while (i < dogsAlbums.length);`
})();

(function dogsAlbums6() {
    let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
    let i = 6;
    console.log(`
    
Do... While Loop (2)`);
    do {console.log(`There is a Dogs d'Amour album called ` + dogsAlbums[i]);
    i++;
} while (i < dogsAlbums.length);
    document.getElementById("dogsAlbums6").innerText = `let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
let i = 6;

console.log("
    
Do... While Loop");

    do {console.log("There is a Dogs d'Amour album called " + dogsAlbums[i]);
    i++;
} while (i < dogsAlbums.length);`
})();

(function dogsAlbums7() {
    let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
    let i = 6; 
    console.log(`
    
While loop (2)`);
    while (i < dogsAlbums.length) {
        console.log(`There is a Dogs d'Amour album called ` + dogsAlbums[i]);
        i++;
    };
    document.getElementById("dogsAlbums7").innerText = `let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
    let i = 0; 
    console.log("While loop");
    
    while (i < dogsAlbums.length) {
        console.log("There is a Dogs d'Amour album called " + dogsAlbums[i]);
        i++;
    };`
})();