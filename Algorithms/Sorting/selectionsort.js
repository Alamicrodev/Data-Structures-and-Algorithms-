// selection sort works by selecting the smallest/largest number in the array and swaping it with the last element. This process is repeated until the entire array is sorted.

// Imagine a bunch of students facing forward while holding a paper having their marks written on them and behind them on the screen is their index postion. Let's sort them from largest to smallest.
var stdScore = [56, 89, 54, 8, 67, 3, 11, 15];

// more explanation below the code

// outer loop runs one less than the total number of elements
for (let i = 0; i < stdScore.length - 1; i++) {
	// variable keeping track of the smallestvalue/largestvalue index.
	let minIndex = 0;
	// internal loop going from 2nd(index 1) to the last unsorted element(i helps).
	for (let j = 1; j <= stdScore.length - 1 - i; j++) {
		// if finds any smaller
		if (stdScore[j] <= stdScore[minIndex]) {
			// replace the smallest/largest index number.
			minIndex = stdScore.indexOf(stdScore[j]);
		}
	}
	// swap the smallest/largest index value with the last index(again considering i)
	let lastValue = stdScore[stdScore.length - 1 - i];
	stdScore[stdScore.length - 1 - i] = stdScore[minIndex];
	stdScore[minIndex] = lastValue;
}

console.log(stdScore);

// INTERNAL LOOP
// You chose the first student as the smallest marks student and remember his index position(storing in a var)
// [56, 89, 54, 8, 67, 3, 11, 15];  index[0](56) is the smallest value for now and the index is stored in a variable.
// now you compare the value of the index position stored in the minIndex variable to all the values in the array, if any of them is smaller, you replce the value in the variable which holds the index position of the smallest value.
// eg when array[minIndex](56) is compared to 54, minIndex gets changed to 2 and so on.
// This way in the end of the iteration we have the index postion of the smallest value.
// outside the internal loop, we replace the last value in the array with the smallest value and we swap their positions.
// now we know that the last element in the array is the smallest number.

// OUTER LOOP
// runs on all elements-1 because the last one is automatically sorted if all the smallest are being moved to the right.
// In each iteration we change the length of the array passed into the nested loop (stdScore.length - 1 - i), this is because we know that the number of elements on the right which have been sorted must be equal to the iteration of the outer loop.
// similarly, this must also be taken into account in the last stage swapping of elements, we don't want to swap the lastelement of the array instead lastIndex-outerloopiteration.
// remember the array we worked with in the internal loop is shortend by subtracting the length of the array with the outer index position (stdScore.length - 1 - i). That's why the last element being swapped must also be only at last index of the array we worked with.

// Time Complexity: multiple loops so O(n^2)
// Space Complexity: O(1)
