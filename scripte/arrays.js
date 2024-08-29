const array = ["a", "b", "c"];
console.log(array);

console.log(array[1]);

const array2 = [
	"a",
	"b",
	"c",
	{ letter: "d", description: "like an a with |" }
];
console.log(array2);

array2.pop();
array2.shift();
console.log(array2);
