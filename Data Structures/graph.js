// A graph is a interesting data structure in which each node is connected to multiple nodes. It can have multiple nodes pointing to itself and can point to mutiple nodes.
// In a graph nodes are called vertices and the connection between two nodes/vertices is called an edge. Imagine a cube vertices are corners and edges are sides that connect corners.
// There are two kinds of graphs: directed and undirected
// Directed are those in which the link of edges is only in one direction aka node A has address to node B, in undirected they both have address/link to each other.
// internet is an example of directed graph as sites link to one another, while facebook friendship is an example of undirected graph.
// A graph unlike tree will not have a root infact any node can behave as a root.

// A graph usually has two main functions one which gives the list of all the nodes a node is connected to findAdjacentNodes() and isConnected(node1,node2) that checks if two nodes are connected.

// There are three ways to represent a graph in code:
//  1. Vertex list + Edge list - A list of nodes and a list of edges eg edges = [[A,B], [C, A]] | [A,B] represents the edge connecting vertexes/nodes A and B.
//  2. Adjacency Matrix - 2d array showing connection for each node with each other node on x/y axis using 0 and 1.
//  3. Adjacency List - for each node it has a list of its connections. We will use this method as it can be represented using classes.

class Node {
	// A node has a value and a list of all the nodes it is connected to
	constructor(value) {
		this.value = value;
		this.vertexesList = [];
	}

	// adds a node to this node's vertexes list
	connect(node) {
		this.vertexesList.push(node);
		// incase it is undirected, we add a link to the opposite aswell
		node.vertexesList.push(this);
	}

	// simply returns the vertexes list
	findAdjacentNodes() {
		return this.vertexesList;
	}

	// gets a node and tries to find it in the vertexes list to see if its connected
	isConnected(node) {
		for (let i = 0; i < this.vertexesList.length; i++) {
			if (node === this.vertexesList[i]) {
				return true;
			}
		}
		return false;
	}
}

// graph is simply a list of all the nodes in the graph
class Graph {
	constructor(nodes) {
		this.nodesList = [...nodes];
	}
}

// create nodes
let NodeA = new Node(56);
let NodeB = new Node(54);
let NodeC = new Node(40);
let NodeD = new Node(13);
let NodeE = new Node(18);

// connect nodes/create edges
NodeA.connect(NodeB);
NodeD.connect(NodeA);
NodeC.connect(NodeE);
NodeE.connect(NodeB);

// create graph and push all the nodes in it
let myGraph = new Graph([NodeA, NodeB, NodeC, NodeD, NodeE]);

console.log(NodeA.isConnected(NodeE)); // should be false

//  Extras Weighted vs Unweighted graph
// in unweighted graph the length of each edge is equal like above and does not need any storing.
// a weighted graph also stores the length of each edge
// eg in Adjacency matrix instead of using 0 and 1 you can use 0 and length of edge.
// in vertexes list + edges list you can add a third element in the list of two vertexes connected representing its length eg [A,B,12]
// and in Adjacency Lidt method instead of just storing nodes in vertexes list you can store a object having value(node) and length.

// Cyclic vs acyclic graph
// in a cyclic graph there is atleast a path for one node back to itself through various links, in acyclic this does not happen.

// self-loop: when a node has connection to itself.
