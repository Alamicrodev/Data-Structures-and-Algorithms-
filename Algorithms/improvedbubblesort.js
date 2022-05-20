// imagine bubble sort but at the end of each swapping we check if the array is sorted, if sorted we break out of the loops and end the the process.

// checking if an array is sorted?
// you can get the explanation for this from recursivefunction(sort check).js algorithm file.
function checkSort(someArray) {
	if (someArray == [] || someArray.length == 1) {
		return true;
	}

	if (someArray[0] >= someArray[1]) {
		return checkSort(someArray.slice(1));
	} else {
		return false;
	}
}

let people = [17, 14, 62, 30, 5, 9, 8];

for (let i = 0; i < people.length - 1; i++) {
	let isSorted = true;

	for (j = 0; j < people.length - 1 - i; j++) {
		if (people[j] < people[j + 1]) {
			let left = people[j];
			let right = people[j + 1];
			people[j] = right;
			people[j + 1] = left;
		}

		isSorted = checkSort(people);
		// checking if the array is sorted, you can call this at the end of each swap or simply at the end of outer swap, your choice.
		if (isSorted) {
			break;
		}
	}
	if (isSorted) {
		break;
	}
}

//Again notice that there are multiple nested loops going on so by O notation, the time complexity of this algorithm is O(n^2) but incase one loop is skipped due to sort check the complexity can become O(n); Sapce complexity is O(1);
