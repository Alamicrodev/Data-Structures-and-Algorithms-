// linear search searches for an element by going through an array element by element one at a time and comparing it to the search term.
// In linear search the array does not have to be sorted.
let names = ["moheud", "ahmad", "john", "nirmal", "trey", "henry"];

function LinearSearch(array, term) {
	// A loop that goes through each element of the array
	for (let i = 0; i <= array.length - 1; i++) {
		// if the term matches we find it
		if (array[i] == term) {
			return `found ${term} at index position ${i}`;
		}
	}
	// else we return not found
	return "Not found";
}

console.log(LinearSearch(names, "ben"));

// Time Complexity: O(n) remember there is only one loop.
// Space Complexity: O(1)
