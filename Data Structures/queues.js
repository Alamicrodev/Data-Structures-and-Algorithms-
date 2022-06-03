// A queues is a data structure which is FIFO (First In First Out)
// Imagine a line of people standing to get a ticket, in this situation the person who came first goes out first.
// In computer world examples of queue will be processes in queues waiting to be executed, the first one gets executed first.
//  First In -> First Out
// main methods: enqueue and dequeue.

// creating in function class form
function Queue() {
	// creating a list
	this.list = [];

	// adding to the que
	this.enqueue = function (value) {
		this.list.push(value);
	};

	// removing from the que, will return the first in and remove it
	this.dequeue = function () {
		let value = this.list[0];
		this.list.shift();
		return value;
	};
}

let myQueue = new Queue();

// adding some elements
myQueue.enqueue("stupid");
myQueue.enqueue("idiot");
myQueue.enqueue("You are a boomer");

// this will bring out the first element inserted
console.log(myQueue.dequeue());

// This is only a basic queue, there can be other queues too like
// Double Ended Queue: where elements can be inserted or removed on both ends literally a pyhton list or a js array
// Priority Queue: just like a normal queue but one element might have a priority added to it so it is always given first.
// Circular Queue: It is a fixed size queue that can release old entries and insert new entries, however you can also push newly entries inside.
// this is the last attempt by me to produce the attempted result of the attempted queue.
