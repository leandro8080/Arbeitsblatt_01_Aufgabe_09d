for (i = 0; i < 10; i++) {
	console.log(i + 1);
}

while (true) {
	let randomNumber = Math.floor(Math.random() * 10) + 1;
	console.log(randomNumber);
	if (randomNumber > 8) {
		break;
	}
}

let array = [1, 2, 3, 4, 5];

array.forEach((element) => {
	console.log(element);
});
