// heap is a data structure which is a binary tree, where each node has 2 children nodes and each children node has 2 more children and so on...
//                              2
//                           3     4
//                          8 10  11 5

// In a heap data is added from left to right, for example if you look above first 2 is added, then 3,4,8,10,11,5... in this order.

// There are two kinds of heap data structures, max-heap and min-heap. In both cases the law is that the parent nodes must be larger, smaller than the children elements resectively.
// For example, in the above example the heap in min-heap and all the parents are smaller than the children.

// You might think that a heap is created in the form of a class in which each node has its value and its left_node, right_node children. But there is a better way to represent a Heap, and that is by an array.
// The above heap as an array can be [null, 2, 3, 4, 8, 10, 11, 5]

// This is because we know that the child nodes of a node and their index position can be calculated using formulas, if we keep the index position 0 as null.
//  left_child = i*2 and right_child = i*2+1
// where i is the index postion of the parent, similarly the parent node can be calculated using Math.floor(i/2) :)
// imagine 4 in the above heap(tree) and array having index postion 3, its children can be found on index positions 3*2(6) and 3*2+1(7) heheehehehehehe XD

// now we create max and min heaps.

// constructor function
let MIN_HEAP = function () {
	let heap = [null];

	// insert into heap
	this.insert = function (num) {
		heap.push(num);
		let index = heap.length - 1;
		while (true) {
			// if heap's length is less than or equal to 2 we only have a head that has no parents so theres nothing to check its value with to make it a min heap.
			if (heap.length > 2) {
				if (heap[index] < heap[Math.floor(index / 2)]) {
					// if the parent is larger we flip their position
					[heap[index], heap[Math.floor(index / 2)]] = [
						heap[Math.floor(index / 2)],
						heap[index],
					];
					// now we give new index postion (which is the parent) to compare it with its parent in the next iteration of loop.
					index = Math.floor(index / 2);
				} else {
					break;
				}
			} else {
				break;
			}
		}
	};

	// function that removes the head and returns that value.
	this.remove = function () {
		// save the head value(smallest value) in register
		let register = heap[1];
		// if there are more nodes than just head
		if (heap.length > 2) {
			// give head the last nodes value
			heap[1] = heap[heap.length - 1];
			// in case we just have 2 nodes
			if (heap.length == 3) {
				// remove the last one and return register
				heap.splice(heap.length - 1, 1);
				return register;
			} else {
				// incase of 3 nodes and more
				let i = 1;
				while (true) {
					// get left and right child
					let left_child = i * 2;
					let right_child = i * 2 + 1;
					// incase parent is bigger than left child or right child
					if (heap[i] > heap[left_child] || heap[i] > heap[right_child]) {
						// checking which child is smaller and replacing it
						if (heap[left_child] < heap[right_child]) {
							[heap[i], heap[left_child]] = [heap[left_child], heap[i]];
							// new value of i for next iteration
							i = left_child;
						} else {
							[heap[i], heap[right_child]] = [heap[right_child], heap[i]];
							i = right_child;
						}
					} else {
						break;
					}
				}

				// outside loop, remove the last node and return register
				heap.splice(heap.length - 1, 1);
				return register;
			}
		}
		// incase only 1 node(head) remove that node and return its value
		heap.splice(heap.length - 1, 1);
		return register;
	};

	// returns an array that sorts the heap
	this.sort = function () {
		let sortedArray = [];
		for (i = heap.length - 2; i >= 0; i--) {
			sortedArray.push(this.remove());
		}
		return sortedArray;
	};

	this.heap = heap;
};
