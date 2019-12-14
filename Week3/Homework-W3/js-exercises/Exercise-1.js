'use strict';
function giveCompliment(yourName) {
	const compliments = [
		'great',
		'awesome',
		'nice',
		'lovely',
		'gorgeous',
		'courteous',
		'quiet',
		'kind',
		'brave',
		'generous'
	];

	return `You are ${compliments[Math.floor(Math.random() * compliments.length)]} ${yourName}!`;
}

console.log(giveCompliment('mahmoud'));
console.log(giveCompliment('mahmoud'));
console.log(giveCompliment('mahmoud'));
console.log(giveCompliment('mahmoud'));
console.log(giveCompliment('mahmoud'));
