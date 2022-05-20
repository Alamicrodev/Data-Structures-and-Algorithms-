// Its called insertion sort because it inserts values from unsorted subgroup to sorted subgroup.
// Imagine a bunch of students standing in a line facing forward holding their marks, we need to sort them decending wise to see who is first second(marks) and so on.
let stdScore = [40, 20, 77, 46, 78, 92, 56];

// more explanation is below the program.

// outer loop pointer for unsorted subgroup
for (let i = 1; i <= stdScore.length - 1; i++) {
	//moving to temp spot
	let temp = stdScore[i];
	//inner loop pointer for sorted subgroup
	for (let j = i - 1; j >= 0; j--) {
		// compare to temp
		if (temp > stdScore[j]) {
			//replace values
			stdScore[j + 1] = stdScore[j];
			//check if we reached zero then putting temp at 0
			if (j == 0) {
				stdScore[j] = temp;
			}

			// else putting temp in the position found for it
		} else {
		}
		stdScore[j + 1] = temp;
		break;
	}
}

console.log(stdScore);

// Now we divide the students line, into a subgroup of sorted and unsorted. Sorted on the left and unsorted on the right. Imagine !!!
//  stdScore = [40,    20, 77, 46, 78, 92, 56]
// In the begining the sorted group only has one student on the index 0, because anything which is 1 is always sorted.
// Imagine a pointer on top that's on index position 1(20), It operates in the unsorted array, it asks the student at one to leave the spot and move to a special spot called temp(variable). This pointer goes from left to right and to each student in unsorted subgroup in every new iteration.
// stdScore = [40,    (in temp), 77, 46, 78, 92, 56]
// Another pointer in the sorted array, goes from right to left.
// This pointer compares the student in temp's marks to the one on the left, if the student has less marks than temp it asks the student to move to the right and expand the sorted array. If it has more it still expands the sorted array while bringing the student back to the inital position and breaking the iteration.
// stdScore = [40, 20,    77,46,78,92,56]
// Similarly, it goes futher to find the position of the student in temp. It keeps moving students to the right until it finds some student with more marks than the student in temp and stops or it stops at index 0;
// stdScore = [40,20,               (intemp), 46,78, 92,56]
// stdScore = [(empty), 40, 20,     46, 78,92, 56]
// At this point we are left with one free space, we move the student in temp to that postion.
// stdScore = [77, 40, 20           46, 78, 92, 56]
// in the end we end up with a sorted array/group of students.

// Time Complexity: multiple nested loops so O(n^2) but can be O(n) in best case.
// Space Complexity: O(1)
