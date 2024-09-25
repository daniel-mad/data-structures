const Graph = require("./models/graph");

const graph = new Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");

graph.addEdge("A", "B", 3);
graph.addEdge("A", "C", 4);
graph.addEdge("A", "D", 2);
graph.addEdge("B", "D", 6);
graph.addEdge("C", "D", 1);

// graph.print();

console.log(graph.findShortestPath("B", "D"));

//       A - 3 - B
//      / \      /
//     4   2    6
//    /     \  /
//   C -  1 - D
