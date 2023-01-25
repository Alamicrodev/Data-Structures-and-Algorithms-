// A tree is a data structure in which each node has its value and address/link to its children nodes.
// The first node which is the parent is called head or root.
// The last children which don't have children of their own are called leaves.

// There are special kinds of trees like:
// Binary Tree: Each node can at max only have two children.
// Binary Search Tree(BST): Each node's value is less or equal to its right child and greater than its left child.
//                            50
//                         30    90
// Balanced Tree:  Balanced Tree is a binary search tree which has sorted data inserted in it, this means the tree in each floor will only have one child and the other child will remain null because any node value bigger/smaller can only go to one side. This effectively becomes a linked list hence loosing all the benefits of a BST so its better not to use a BST to insert already sorted data.

// Common methods of tree: insert, delete, contains/search, traverse
// Traverse: the way of going through all elements in a tree
// Three kinds of traversals:
// In order Traversal: 30 50 90. left child > parent > right child
// Pre order traversal: 50,30, 90. parent > left child > right child
// Post order traversal: 90, 30, 50. right child > left child > parent

class Node {
	constructor(data, leftChild, rightChild) {
		this.data = data;
		this.leftChild = leftChild;
		this.rightChild = rightChild;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	// ------------------- START OF INSERT METHOD ----------------------------
	// insert method
	insert(data) {
		// getting data and creating a new node for it
		const node = new Node(data, null, null);
		// if the root is null we make it node we just created.
		if (this.root == null) {
			this.root = node;
			return;
		}

		// making a pointer called current which first points to the head/root.
		let current = this.root;
		while (true) {
			// if the node data is greater than currrent data
			if (node.data >= current.data) {
				// check if right child is null if so make it node and return.
				if (current.rightChild == null) {
					current.rightChild = node;
					return;
				} else {
					// otherwise move the current pointer to the right child
					current = current.rightChild;
				}
			} else {
				// exactly the same if smaller but for the left child.
				if (current.leftChild == null) {
					current.leftChild = node;
					return;
				} else {
					current = current.leftChild;
				}
			}
		}
	}
	// ---------------------- END OF INSERT METHOD ---------------------------

	// --------------------- START OF TRAVERSAL METHOD -----------------------
	// traverse method
	inOrderTraversal(node = this.root) {
		// if given node is null we return empty array
		if (node == null) {
			return [];
		}

		let resultArray = [];
		// recusion, going to the left most child until it finds one that is null
		resultArray.push(...this.inOrderTraversal(node.leftChild));
		// then pushes its parent
		// note: you can always push node.data instead but for the functionality of remove method I will push the node for now.
		resultArray.push(node);
		// then goes to the right child, and again goes to the left most child which is null and so on
		resultArray.push(...this.inOrderTraversal(node.rightChild));

		//for pre-order traversal
		// resultArray.push(node.data);
		// resultArray.push(...this.inOrderTraversal(node.leftChild));
		// resultArray.push(...this.inOrderTraversal(node.rightChild));

		//for post-order traversal
		// resultArray.push(...this.inOrderTraversal(node.leftChild));
		// resultArray.push(...this.inOrderTraversal(node.rightChild));
		// resultArray.push(node.data);

		return resultArray;
	}
	// ------------------- END OF TRAVERSAL METHOD --------------------

	// ------------------ START OF SEARCH METHOD --------------------
	// searching for value in binary search tree
	// intakes value to be searched and the tree to search in basically the head of th tree.
	// We by deafault give the head of the current tree
	search(value, pointer = this.root) {
		// if the head of the current tree is null, return -1 (not found)
		if (pointer == null) {
			return -1;
		}

		// else if head data is equal to the value we return the head node
		if (pointer.data == value) {
			return pointer;
		}
		// incase head data is greater than the value this means that the value is in left sub-tree so we call the function recursively and this time pass the head of the left subtree.
		else if (pointer.data > value) {
			return this.search(value, pointer.leftChild);
		}
		// same but opposite
		else {
			return this.search(value, pointer.rightChild);
		}
	}
	//  -------------------------- END OF SEARCH METHOD -------------------------------

	// ------------------------- START OF REMOVE METHOD ------------------------------
	// remove a node from the binary search tree
	// method intakes the value to delete, and the root of the tree in which it is to be deleted by default its the root.
	remove(value, head = this.root) {
		// if the root of the given tree is null this means that the tree is empty and nothing can be removed.
		if (head == null) {
			return "error, the tree is empty!";
		}

		// Now we get the node using the search method.
		let node = this.search(value, pointer);

		// if the search method did not find any node, it means it does not exist in tree and hence can't be removed.
		if (node == -1) {
			return "error value not found!";
		}

		// creating a variable to store parent of the node to be removed.
		let parent;

		// A function to get the parent of the node, we can also make it a method of the tree class. It intakes the node and the root of the tree to search in.
		function getParent(node, aPointer = head) {
			// if the given pointer is null this means that the tree is empty or we have reached the end without finding a parent.
			if (aPointer == null) {
				return -1;
			}

			// of any of the children of the pointer is equal to the node, this means theat the pointed node is the parent so we return it.
			if (aPointer.leftChild == node || aPointer.rightChild == node) {
				return aPointer;
			}
			// otherwise we recursively call this function, halving the tree each time.
			else {
				if (node.data > aPointer.data) {
					return getParent(node, aPointer.rightChild);
				} else {
					return getParent(node, aPointer.leftChild);
				}
			}
		}

		// A function to remove the link from the parent to the node, and also intaking what to put in its place (to join).
		function removeParentLink(node, parent, toJoin = null) {
			// checking which child of the parent is the node so we can replace it.
			if (parent.leftChild == node) {
				parent.leftChild == toJoin;
			} else {
				parent.rightChild == toJoin;
			}
		}

		// checking if the node is not the head, (because if it is the head it won't have a parent :)
		if (node != head) {
			// if not the head we get parent.
			parent = getParent(node);

			// if its a leaf node or if it has one child, we can easily call the removeParentLink fuction. In case of leaf node it replaces the node with null otherwise it replaces the link to that one child we pass in.
			if (node.leftChild == null && node.rightChild == null) {
				removeParentLink(node, parent);
			} else if (node.leftChild == null && node.rightChild != null) {
				removeParentLink(node, parent, node.rightChild);
			} else if (node.leftChild != null && node.rightChild == null) {
				removeParentLink(node, parent, node.leftChild);
			} else {
				// If it has two children, we find the smallest node in its right subtree
				// inOrderTraversal method returns a list of nodes in the subtree from smallest to largest.
				let newNode = this.inOrderTraversal(node.rightChild)[0];
				// we replace the data in the smallest node with our node.
				// This satisfies the laws of BST, the smallest in the right subtree is bigger than the right child and smaller then the left child.
				node.data = newNode.data;
				// now we have to remove that smaller node link so we get its parent.
				let newNodeParent = getParent(newNode);
				// checking which child of the parent it is and then replacing it with link to its right child.
				// remember even the smallest in the right subtree might have bigger right children if not they will always be null.
				if (newNodeParent.leftChild == newNode) {
					newNodeParent.leftChild = newNode.rightChild;
				} else {
					newNodeParent.rightChild = newNode.rightChild;
				}
			}
		} else {
			// incase the node is the root, we make it null if both children are null.
			// if it has one child we swap it with that one child.
			if (node.leftChild == null && node.rightChild == null) {
				node = null;
			} else if (node.leftChild == null && node.rightChild != null) {
				node = node.rightChild;
			} else if (node.leftChild != null && node.rightChild == null) {
				node = node.leftChild;
			} else {
				// if it has two children, we repeat the same process above
				let newNode = this.inOrderTraversal(node.rightChild)[0];
				node.data = newNode.data;

				let newNodeParent = getParent(newNode);
				if (newNodeParent.leftChild == newNode) {
					newNodeParent.leftChild = newNode.rightChild;
				} else {
					newNodeParent.rightChild = newNode.rightChild;
				}
			}
		}
	}
	// ---------------------- END OF REMOVE METHOD ---------------------------
}

let mytree = new BinarySearchTree();

mytree.insert(59);
mytree.insert(30);
mytree.insert(35);
mytree.insert(60);
mytree.remove(59);
console.log(mytree.inOrderTraversal());


// -------------------------  MORE ALGORITHMS RELATED TO BST  --------------------------

// Morris Traversal Algorithm (IN ORDER)
// Morris Traversal Algorithm is a method to traverse a binary tree without using recursion.
// Watch this video fro explanation https://www.youtube.com/watch?v=0ydDMtuvbUY

var inorderTraversal = function(root) {

    let tourist = root; 
    let resultArray = []

    while(tourist != null){
        let guide = tourist.left

        if (tourist.left != null) {
            while(guide.right != null && guide.right != tourist) {
                guide = guide.right
            }

            if (guide.right == null) {
                guide.right = tourist
                tourist = tourist.left
            }
            else {
                guide.right = null 
                resultArray.push(tourist.val)
                tourist = tourist.right
            }
        }
        else
        {
           resultArray.push(tourist.val)
           tourist = tourist.right
        }

    }

     return resultArray 
};
