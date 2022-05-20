// to understand the heap data structure please go to the ../datastructures/heap.js
// everything in the constructor function will be explained there :)

// This is only for decending, you can do opposite for ascending :)))

let MAX_HEAP = function () {
	let heap = [null];

	this.insert = function (value) {
		heap.push(value);
		let i = heap.length - 1;
		if (heap.length > 2) {
			while (true) {
				if (heap[i] > heap[Math.floor(i / 2)]) {
					[heap[i], heap[Math.floor(i / 2)]] = [
						heap[Math.floor(i / 2)],
						heap[i],
					];

					i = Math.floor(i / 2);
					if (i == 1) {
						break;
					}
				} else {
					break;
				}
			}
		}
		console.log(heap);
	};

	this.remove = function () {
		let register = heap[1];

		if (heap.length > 2) {
			heap[1] = heap[heap.length - 1];
			if (heap.length == 3) {
				heap.splice(heap.length - 1, 1);
				return register;
			} else {
				let i = 1;
				while (true) {
					left_child = i * 2;
					right_child = i * 2 + 1;
					if (heap[i] < heap[left_child] || heap[i] < heap[right_child]) {
						if (heap[left_child] > heap[right_child]) {
							[heap[i], heap[left_child]] = [heap[left_child], heap[i]];
							i = left_child;
						} else {
							[heap[i], heap[right_child]] = [heap[right_child], heap[i]];
							i = right_child;
						}
					} else {
						break;
					}
				}
				heap.splice(heap.length - 1, 1);
				return register;
			}
		}

		heap.splice(heap.length - 1, 1);
		return register;
	};

	// sorts a heap
	this.sort = function () {
		// creating a sorted array
		let sortedArray = [];

		// going through all the elements of heap except the first null one.
		for (i = heap.length - 2; i >= 0; i--) {
			sortedArray.push(this.remove());
		}

		return sortedArray;
	};

	this.heap = heap;
};

// array to sort
let myArray = [7, 9, 3, 6, 7, 3];

// create a new heap from the constructor function
let myHeap = new MAX_HEAP();

// go through each element of array and add it to max_heap
// you can built it into the heap by creating a method called heapify LOL bahahahaha
for (something of myArray) {
	console.log(something);
	myHeap.insert(something);
}

// call the heap's sort method.
let sortedArray = myHeap.sort();

// print the sorted array
console.log(sortedArray);

// Time Complexity: O(n log n)
// Space Complexity: O(1)
