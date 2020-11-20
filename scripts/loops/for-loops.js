//For loops
(function forLoop() {
    document.getElementById("forLoop").innerText = `for (let statement 1; statement 2; statement 3) {
    code block to be executed;
}`;
})();

(function dogsAlbumsList() {
    console.log(`For loop`);
    let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", 
    "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
    document.getElementById("dogsAlbums").innerText = `let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];  
    for (let i=0; i<dogsAlbums.length; i++) {
        console.log("There is a dogs album called " + dogsAlbums[i]);
    };`
    for (let i=0; i<dogsAlbums.length; i++) {
    //document.getElementById("dogsAlbums1").innerHTML = `There is a dogs Album called` + dogsAlbums[0];
    console.log("There is a Dogs d'Amour album called " + dogsAlbums[i]);
    };
})();

