// imagine a line of people standing with a baloon(bubble) which have their ages written on them, and behind them there is a screen displaying their index position.
let people = [17, 14, 62, 30, 5, 9, 8];

// Read from the inside to the ouside.

// once one inner iteration is completed we know that the oldest person is in the last place. Now we run the second iteration to bring the second last person to the 2nd last place while skipping comparison with the last place using -i in inner loop;
// so the pointer again returns to index 0 and does the same process again.
// this process is repeated untill entire array/people is/are sorted.
// notice again its < and not <= because the last one will automatically become the smallest, so there is no need for an extra iteration.
for (let i = 0; i < people.length - 1; i++) {
	// Now the pointer moves to index postion 1 and makes it green while the next position 2 becomes red and similar comparison takes place between the people standing there.
	// Imagine, this way the pointer goes to all index position and compares there ages to the next one, except the last one because its value is already compared with the second last. note that its < and not <= :)
	// This way the person who is the oldest ends up in the last position and we know that for sure, therefore in the next iteration we can -i and skip that position.
	for (j = 0; j < people.length - 1 - i; j++) {
		// imagine on top there is a pointer on index postion 0, whereever the pointer is the backscreen becomes green.
		// index positon 0 screen is lighten up green and gets compared with with index postion 1 which gets lighten up red.
		// if the person at index 0 (green) is older than index positon 1 (red), the people swap positon while the pointer and colors remain intact.
		if (people[j] < people[j + 1]) {
			let left = people[j];
			let right = people[j + 1];
			people[j] = right;
			people[j + 1] = left;
		}
	}
}

// in the end we get all the people sorted on the bases of their age.
console.log(people);

// notice that there are multiple nested loops going on so by O notation, the complexity of this algorithm is O(n^2), space complexity is O(1)
