// In Quicksort we resort to recursive technique of dividing and conquering.
// In this method we choose a pivot
// Pivot: random number chosen from array which goes in the middle with greater and smaller value subarrays in each side.

// imagine a list of book stacks in a market's cupboards. Yeah I know its useless example but here we are.
let bookStack = [5, 2, 1, 15, 30, 3, 9, 4];

// ------------------------- Partition Start -----------------------------------
// return to partitition after checking out quicksort function below. DON'T START HERE
function Partition(array, first, last) {
	// You can have any element as pivot value but its easier to have the last one as pivot.
	let pivotValue = array[last];

	//  Pivot index keeps track of the first smaller/bigger value(the values that go on the right of pivot depending on type decending or accending), in the end allowing us to move pivot to the center, it always starts from the first index position of the subarray.
	// eg [30(index position),15,9,5,3,2,1, 4(pivot)] :p
	let pivotIndex = first;

	// going through all elements of the subarray, except the last one which is the pivot.
	for (let i = first; i <= last - 1; i++) {
		// if the value(i) is greater than pivot value, we swap it with pivot index and increment pivot index.
		// this moves all bigger values to the left and smaller to the right.
		if (array[i] > pivotValue) {
			[array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
			pivotIndex++;
		}
	}

	// at this point pivot index stores the index position of first smaller element from pivot.
	// eg [30,15,9,5,3(index position),2,1, 4(pivot)]

	// so we swap it with pivot resulting in pivot in the mid, smaller and larger values on each side.
	[array[last], array[pivotIndex]] = [array[pivotIndex], array[last]];

	// now we return pivot index.
	return pivotIndex;
}
// ---------------------- Partition End ----------------------------

//  --------------------  Quick Sort Start ------------------------
// Quicksort intakes an array, the starting index and the ending index.
// The array passed in during recursion is always the same, we just change the indexes to know which subsection of the array to work with.
function quickSort(
	someArray,
	firstindex = 0,
	lastIndex = someArray.length - 1
) {
	// if the given indexes are the same number this means we are only working with one element or none, so we return. This is the break out point of recursion.
	if (firstindex >= lastIndex) {
		return;
		// why return nothing? remember an array passed in function always points to same memory address so if we make changes in functions the changes apply to orignal array so we don't have to return anything.
	}

	// Partition function returns the index position of the pivot
	// Pivot: random number chosen from array which goes in the middle with greater and smaller value subarrays in each side.
	let pivotIndex = Partition(someArray, firstindex, lastIndex);

	// This allows us to call the function again with 2 different parts before and after the pivot. Here's recursion :)))
	// Notice that we still pass the same array.
	quickSort(someArray, 0, pivotIndex - 1);
	quickSort(someArray, pivotIndex + 1, lastIndex);
}
// --------------------------- Quick Sort End -----------------------------------

// Calling quicksort on our array.
quickSort(bookStack, 0, bookStack.length - 1);

// Printing to see if it works
console.log(bookStack);

// Time Complexity: O(n log n) Worst: O(n^2)
// Space Complexity: O(log n)
