//Challenge 1

for (var i = 0; i < 8; i++) {
	console.log('#'.repeat(i));
}

/*
Each time i iterates, it places '#' on a new line i times. ie. when i is 0, 
it places it 0 times, and when i is 7, it places it 7 times.
*/


//Challenge 2
function evenOdd(x) {
	if (x % 2 == 0) {
		console.log('the number is even');
	}
	else {
		console.log('the number is odd');
	}
} 

/*
The evenOdd function divides a given number (x) by 2 and checks to see if it has a remainder. 
If it doesn't/has a remainder of 0, that means the number is even and logs that the number is even. 
If there is a remainder equal to more than 0, that means the number is odd, and it logs that the number is odd.
*/
