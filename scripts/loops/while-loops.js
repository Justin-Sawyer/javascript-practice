(function whileLoop() {
    document.getElementById("whileLoop").innerText = `let i;
while (i < variable.length) {
    console.log(i);
    i++;
};`
})();

(function dogsAlbums4() {
    let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
    let i = 0; 
    console.log(`
    
While loop`);
    while (i < dogsAlbums.length) {
        console.log(`There is a Dogs d'Amour album called ` + dogsAlbums[i]);
        i++;
    };
    document.getElementById("dogsAlbums4").innerText = `let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
    let i = 0; 
    console.log("While loop");
    
    while (i < dogsAlbums.length) {
        console.log("There is a Dogs d'Amour album called " + dogsAlbums[i]);
        i++;
    };`
})();