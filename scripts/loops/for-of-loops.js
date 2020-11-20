(function forOfLoops() {
    document.getElementById("forOfLoop").innerText = `for (let variable of array) {
    code block to be executed;
}`
})();

(function dogsAlbums3() {
    console.log(`

For... Of Loop`);
    let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", 
    "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
    for (let album of dogsAlbums) {
        console.log("There is a ogs d'Amour album called " + album);
    };
    document.getElementById("dogsAlbums3").innerText = `let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
    
for (let album of dogsAlbums) {
    console.log("There is a Dogs d'Amour album called " + album);
};`;
})();