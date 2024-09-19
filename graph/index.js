const Graph = require('./models/graph');

const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');

graph.addEdge('A', 'B');
graph.addEdge('B', 'D');
graph.addEdge('D', 'C');
graph.addEdge('A', 'C');

// graph.print();
// graph.removeNode('A');
// graph.print();

graph.traverseDepthFirst('A');
console.log('-------------------');
graph.traverseDepthFirstIterative('A');
console.log('-------------------');
graph.traverseBreadthFirstIterative('A');
console.log('-------------------');
