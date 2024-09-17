const Graph = require('./models/graph');

const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');

graph.addEdge('A', 'C');
graph.addEdge('B', 'A');
graph.addEdge('B', 'C');

graph.print();
