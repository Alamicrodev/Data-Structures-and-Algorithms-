// Binary search recursively divides the array into half pieces and looks for the matching element.
// In binary it is necessary for the array to be sorted.
// Supose you have to guess a number in a hundred sorted numbers, you can easily find the number by dividing the list into half and comparing the number to be found with the number at half point, if the number is behind that you can skip the other half of the list and keep doing it until you find the element.

// We make a sorted array, you can sort it yourself using one of the sorting algorithms
// Here I use the built in function
let names = ["moheud", "ahmad", "john", "nirmal", "trey", "henry"].sort();

// To see the sorted array
console.log(names);

// Function intakes the array, the start, end position of the subarray we work with and the term to search
function BinarySort(array, start, end, term) {
	// if start and end are equal we only have one element, we check if it matches, if so we return its index position, if not we return "not found".
	if (start >= end) {
		if (array[start] == term) {
			return `found at index position ${start}`;
		} else {
			return `not found`;
		}
	}

	// get the mid point and ensuring that its not a decimal
	let mid = Math.floor((start + end) / 2);

	// comparing term, if greater we recursively pass the indexes after, if smaller we pass the indexes before, if equal means we have found it.
	if (term > array[mid]) {
		return BinarySort(array, mid + 1, end, term);
	} else if (term < array[mid]) {
		return BinarySort(array, start, mid - 1, term);
	} else {
		return `found at index position ${mid}`;
	}
}

// Searching for ahmad
console.log(BinarySort(names, 0, names.length - 1, "ahmad"));

// Time Complexity O(log n)
// Space Complexity O(1)
