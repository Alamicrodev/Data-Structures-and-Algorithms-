// Hash Tables are special data structures in which elements are stored as key value pairs. A python dictionary or a javascript object can be an example of a hashtable but it is important to understand how to implement them from scratch.
const person = {};
person["name"] = "moheud";
person["age"] = 12;
// fun fact: underneath it is still built as an array and we will learn how to make it happen.
// A hash table usually involves a function that converts a text(key) into a index no for the array.
// hash is a powerful data structure because it has a very good time and space complexity;
// Time Complexity: O(1) and O(n) in worse case.

// hash function intakes the key and the length of the array we will store elements in
function hash(key, length) {
	let hash = 0;
	// going through each char in the key and adding its unicode number to hash
	for (let i = 0; i < key.length; key++) {
		hash += key.charCodeAt(i);
	}

	// making sure that the hash(index number) returned is less than the length of the array.
	// even if you are in a languge where unlimited arrays length is allowed, hash numbers can get really big so its better to have a length to prevent them from having so many undefined spaces in the middle and taking up memory.
	return hash % length;
}

class HashTable {
	// would be better to get the expected length from the user, they can still add more than selected length but having a proper length will ensure best speed.
	constructor(length = 10) {
		this.length = length;
	}

	// creating the container array
	container = new Array(this.length);

	// adding elements, intakes key and value
	push(key, value) {
		// getting the index from the hash function
		let index = hash(key, this.length);

		// if there is no element at that index postion we add new, else we push to the existing array.
		// this is because two keys may return same hash(index number) hence we will have to store them together at the same index position
		if (this.container[index] == undefined) {
			this.container[index] = [[key, value]];
		} else {
			this.container[index].push([key, value]);
		}
	}

	// function to get a value getting a key
	get(key) {
		let index = hash(key, this.length);

		// incase it is undefiend
		if (this.container[index] === undefined) {
			return undefined;
		} else {
			// going through all elements in the array, remember each index value can have multiple key/value pairs;
			for (let i = 0; i < this.container[index].length; i++) {
				// if anyones key matches we return that value
				// console.log(this.container[index]);
				if (this.container[index][i][0] == key) {
					return this.container[index][i][1];
				}
			}
			return undefined;
		}
	}

	// function to delete a value
	pop(key) {
		let index = hash(key, this.length);

		// incase it is undefined/does not exist
		if (this.container[index] == undefined) {
			return -1;
		} else {
			// same code as get except now we delete it
			for (let i = 0; i < this.container[index].length; i++) {
				if (this.container[index][i][0] == key) {
					// we remove that key/value pair
					this.container[index].splice(i, 1);
					return 1;
				}
			}
			return -1;
		}
	}
}

// creating a Hash table with expected length of 10
// remember I can still add more elements than 10 but it won't be good for time complexity;
let myHash = new HashTable(10);

myHash.push("name", "moheud");
myHash.push("age", 19);
myHash.push("smart", 100);
myHash.push("job", "programmer");
console.log(myHash.get("job"));
console.log(myHash.get("name"));
console.log(myHash.get("smart"));
myHash.pop("smart");
console.log(myHash.get("smart")); // returns undefined
