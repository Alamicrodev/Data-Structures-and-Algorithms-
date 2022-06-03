//  merge sort uses the technique of divide and conquer aswell;
// suppose we have an array of videogame characters with their power level, now we sort them on the bases of highest to lowest.
let characters = [40, 24, 53, 46, 66, 72, 95, 90];

// ------------ MERGE FUNCTION ------------------
// return to merge after going through merge sort, DON'T START HERE
// merge function sorts the elements of two sorted subarrays(that came from the last recusion level) and merges them.
function merge(array, start, mid, end) {
	// i is the starting point of first sub array and j is the starting point of the second subarray.
	let i = start;
	let j = mid + 1;

	// creating a new copy empty array.
	let copyArr = [];

	// while i and j both have not crossed their end
	while (i <= mid && j <= end) {
		// compare the value of one subarray elemet to the other
		if (array[i] > array[j]) {
			// push(add) the bigger one to the new array
			copyArr.push(array[i]);
			// increment the pointer in the subarray where you pushed it from
			i++;
		} else {
			// incase of opposite the other subarray has the bigger value so we puch the other one and move pointer.
			copyArr.push(array[j]);
			j++;
		}
	}

	// if the above loop ends this means any one of the subarrays has ended.
	// however the second subarray might still have elements left

	// checking which one ended, then pushing the remaining elements of the otherone.
	// remember both the subarrays are already sorted from last recusion level so you can push the remaining elements they are sorted.
	if (j > end) {
		copyArr.push(...array.slice(i, mid + 1));
	} else if (i > mid) {
		copyArr.push(...array.slice(j, end + 1));
	}

	// now we replace the orignal array's elements with the copy array in the index positions provided.
	for (let k = start, p = 0; k <= end, p <= copyArr.length - 1; k++, p++) {
		array[k] = copyArr[p];
	}
}
// -------------- END OF MERGE ----------------

// ------------- MERGE SORT -------------------
// merge sort function intakes the array, the starting in index and the ending index.
// the start and end represent the sub array we will work with.
function mergeSort(array, start, end) {
	// if the start is less than end that means the subarray has more than one characters
	if (start < end) {
		// we create the mid point of the array/subarray.
		let midpoint = Math.floor((start + end) / 2);

		// we call the same function recursively, with the two pieces(subarrays) separated from midpoint.
		mergeSort(array, start, midpoint);
		mergeSort(array, midpoint + 1, end);

		// now we send the mid point, start and end to the merge function.
		merge(array, start, midpoint, end);
	}

	// if it has one element we do nothing LOL.
}

// calling merge sort on our characters
mergeSort(characters, 0, characters.length - 1);

// printing sorted characters
console.log(characters);

// Time Complexity: O(n log n)
// Space Complexity: O(n)
