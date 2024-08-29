const randomNumber = Math.random();
if (randomNumber > 0.5) {
	console.log("Grösser als 0.5");
} else if (randomNumber > 0.25) {
	console.log("Grösser als 0.25");
} else {
	console.log("Kleiner oder gleich 0.25");
}

const randomNumber2 = Math.floor(Math.random() * 5);
if (randomNumber2 === 1) {
	console.log("Der Wert ist exact 1");
} else if (randomNumber2 === 3) {
	console.log("Der Wert ist exact 3");
} else {
	console.log("Der Wert der Zahl ist weder 1 noch 3");
}
