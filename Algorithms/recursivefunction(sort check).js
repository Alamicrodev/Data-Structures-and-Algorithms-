// checking if an array is sorted?
function checkSort(someArray) {
	// if the array is empty or has one element we return true.
	if (someArray == [] || someArray.length == 1) {
		return true;
	}
	// checking if element 0 is >= element 1. (in case the the sorting check is decending)
	if (someArray[0] >= someArray[1]) {
		return checkSort(someArray.slice(1));
		// if yes we call the function again but removing the first element from the array and passing in shorter array, this process will continue until the array has only 1 element and the function returns true.
	} else {
		// if not we return false clearly its not decending.
		return false;
	}
}
