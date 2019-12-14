'use strict';
let cartForParty = {
	chips: 0.99,
	Biscuit: 1.75,
	cookies: 2.87,
	chocolate: 3.8,
	redbull: 5.99
};
function calculateTotalPrice(items) {
	let total = 0;
	for (let item in items) {
		total += items[item];
	}
	return `Total price is ${total}`;
}

console.log(calculateTotalPrice(cartForParty));
