

// JavaScript for-in loop
var warrior = {
	name: "Peter",
	age: 101,
	ability: "Fight"
}

for (var property in warrior) {
	console.log(property + ": " + warrior[property]);
}

// Output on the console
// $ node test.js
// name: Peter
// age: 101
// ability: fight