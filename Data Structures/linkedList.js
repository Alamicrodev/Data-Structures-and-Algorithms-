// A linked list is a data structure in which you create a node, and the node has a link to the next node and so on.
// we only keep the address to the head of the linked list and get access to all other values from the head.
// main methods: search, insert, delete;

// creating a node class to create a node.
class Node {
	// constructor intakes the value of the current node and an address to the next node.
	constructor(value, nextnode) {
		this.value = value;
		this.next = nextnode;
	}
}

class LinkedList {
	// we only keep the head of the linked list and get access to all other elements from the head.
	constructor() {
		this.head = null;
	}

	// --------------------  SEARCH METHOD -------------------------------
	// inserting a vlaue in linked list.
	insert(value) {
		let node = new Node(value, null);

		// if head is null this means there is no element in the linked list so we can push the node to the head and return.
		if (this.head == null) {
			this.head = node;
			return this.head;
		}

		// we create a pointer on the head.
		let pointer = this.head;
		// The indefinite loop that we close on choice.
		while (true) {
			// if the next node is not null, we keep moving forward utill we find one which is null.
			if (pointer.next != null) {
				pointer = pointer.next;
			} else {
				// if it is equal to null we put the created node here.
				pointer.next = node;
				return pointer.next;
			}
		}
	}

	// --------------------- SEARCH METHOD ----------------------------
	// returns the node
	search(value) {
		// if the linked list is empty we can't search
		if (this.head == null) {
			return -1;
		}

		// pointer pointing to the head
		let pointer = this.head;
		// wile pointer is not null we keep moving forward
		while (pointer != null) {
			// if the value matches we reaturn the node at that pointer
			if (pointer.value == value) {
				return pointer;
			} else {
				pointer = pointer.next;
			}
		}

		// if the loop ends and we could not find the value this means it does not exist.
		return -1;
	}

	// ------------------  DELETE METHOD ----------------------------
	// deletes a node from a list
	delete(value) {
		// if the list is empty there is nothing to delete
		if (this.head == null) {
			return -1;
		}

		// if the item to delete is in the head we simply move head to the next node
		if (this.head.value == value) {
			this.head = this.head.next;
			return "success";
		}

		// a pointer on head
		let pointer = this.head;

		// loop will run until the pointer does not hit null
		while (pointer != null) {
			// if the element next to pointer is null it means we have reached the end of the list and the element is not found so we return -1;
			if (pointer.next == null) {
				return -1;
			}

			// if next's value matches, we point the pointer to the node after the node to be deleted.
			if (pointer.next.value == value) {
				let delnode = pointer.next;
				pointer.next = delnode.next;
			} else {
				// otherwise we move the pointer forward.
				pointer = pointer.next;
			}
		}
	}
}

let mylist = new LinkedList();

mylist.insert(5);
mylist.insert(4);
mylist.insert(3);
mylist.insert(2);
mylist.insert(1);
mylist.delete(1);

console.log(mylist.head.next.next);
