// Jumpsearch divides the array into blocks, and if the element is in the block it performs linear search in the block.
// Jumpsearch needs the array to be sorted aswell.

// We make a sorted array, you can sort it yourself using one of the sorting algorithms
// Here I use the built in function
let names = ["moheud", "ahmad", "john", "nirmal", "trey", "henry"].sort();

// To see the sorted array
console.log(names);

// We take the array, the term to search and the length of the block from the user
function JumpSearch(array, term, blocklength) {
	// a loop that goes from blocks s is the starting element of block
	for (let s = 0; s <= array.length - 1; s += blocklength) {
		// ending element of block
		let e = s + blocklength - 1;

		// if block ending element is greater than the array length making it smaller.
		if (e > array.length - 1) {
			e = array.length - 1;
		}
		// checking if term is in the block
		if (term >= array[s] && term <= array[e]) {
			// performing linear search in the block.
			for (let i = s; i <= e; i++) {
				if (term == array[i]) {
					return `found at index position ${i}`;
				}
			}
		}

		// check if the last element of the block is the last element of the array, if so we break because it does not exist in the array.
		if (e == array.length - 1) {
			break;
		}
	}
	// else return not found
	return `not found in the array`;
}

// finding 'bruhhh'
console.log(JumpSearch(names, "bruhh", 3));
