// Stack is a data structure in which the last in goes out first.
// Imagine a stack of books you cannot simply grab the book at the bottom, its usually better to grab the last book entered aka the book at the top.
// In computer world an example could be the undo functionality in the word processing softwares you perform an operation and it is stacked, and when you undo you bring that operation from the stack the last one goes out first.
// LAST IN -> FIRST OUT
// main methods: push, pop and peep

// a class of stack
class STACK {
	// create a list
	constructor() {
		this.list = [];
	}

	// add a value to the top of the stack
	push(value) {
		this.list.unshift(value);
	}

	// get and remove the value from the top of the stack
	pop() {
		let value = this.list.shift();
		return value;
	}

	// see the value at the top of the stack without removing it
	peep() {
		let value = this.list[0];
		return value;
	}
}

let myBooks = new STACK();

myBooks.push("Harry Potter");
myBooks.push("Narnia");
myBooks.push("The Jungle Book");
console.log(myBooks.pop());
