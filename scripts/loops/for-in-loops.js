(function forInLoop() {
    document.getElementById("forInLoop").innerText = `for (let i in array) {
    code block to be exectuted;
}`
})();

(function dogsAlbums2() {
    console.log(`

For... In Loop`);
    let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", 
    "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
    for (let i in dogsAlbums) {
        console.log("There is a Dogs d'Amour album called " + dogsAlbums[i]);
    };
    document.getElementById("dogsAlbums2").innerText = `let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];

for (let i in dogsAlbums) {
    console.log("There is a Dogs d'Amour album called " + dogsAlbums[i]);
};`
})();