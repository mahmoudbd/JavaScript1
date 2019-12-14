'use strict';

function addToShoppingCart(item) {
	if (groceryItem.length < 3) {
		groceryItem.push(item);
	} else {
		groceryItem.push(item);
		groceryItem.shift();
	}
	return console.log(`You bought ${groceryItem}!`);
}
let groceryItem = [ 'bananas', 'milk' ];

addToShoppingCart('apple');
addToShoppingCart('fish');
addToShoppingCart('mango');
addToShoppingCart('thee');
addToShoppingCart('kinder');
addToShoppingCart('m&ms');
addToShoppingCart('garlic');
