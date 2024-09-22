const Graph = require("./models/graph");

const graph = new Graph();

// graph.addNode("A");
// graph.addNode("B");
// graph.addNode("C");
// graph.addNode("D");
// graph.addNode("E");

// graph.addEdge("A", "B");
// graph.addEdge("A", "E");
// graph.addEdge("B", "E");
// graph.addEdge("C", "A");
// graph.addEdge("C", "B");
// graph.addEdge("C", "D");
// graph.addEdge("D", "E");

// graph.depthFirstTraversal("C");
// console.log("-----------");
// graph.breathFirstTraversal("C");

// graph.addNode("X");
// graph.addNode("A");
// graph.addNode("B");
// graph.addNode("P");

// graph.addEdge("X", "A");
// graph.addEdge("X", "B");
// graph.addEdge("A", "P");
// graph.addEdge("B", "P");

// console.log(graph.topologicalSort());

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");

graph.addEdge("A", "B");
graph.addEdge("C", "A");
graph.addEdge("B", "C");
graph.addEdge("D", "A");

console.log(graph.hasCycle());
