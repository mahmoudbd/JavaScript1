'use strict';

function tellFortune() {
	return `You will be a ${jobs[Math.floor(Math.random() * jobs.length)]} in ${locations[
		Math.floor(Math.random() * locations.length)
	]} and married to ${partnerNames[Math.floor(Math.random() * partnerNames.length)]} with ${numChildren[
		Math.floor(Math.random() * numChildren.length)
	]} kids `;
}

const numChildren = [ 0, 1, 2, 3, 4 ];
const partnerNames = [ 'Adam', 'Ani', 'Ruba', 'Mamo', 'Henk' ];
const locations = [ 'Amsterdam', 'Damascus', 'Estanbul', 'Dubi', 'Tokyo' ];
const jobs = [ 'Engineer', 'Lawyer', 'Doctor', 'Carpenter', 'Smith' ];

console.log(tellFortune());
