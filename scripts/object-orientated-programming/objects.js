//OBJECTS
console.log(`
OBJECTS
can hold data, methods, properties, functions and more`);

let idealCar = {
    make: "Aston Martin",
    model: "V8 Vantage",
    modelYear: "2002-20015",
    body: "hardtop",
    gearbox: "manual",
    topSpeed: 185
};
console.log(idealCar);

let country = {
	name: "Croatia",
	population: 4.224,
	sea: true,
	islands: 1000,
	language: "croatian",
	bio: function() {
		console.log(this.name + " is a country with " + this.population + " people");
	}
};