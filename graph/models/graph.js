class Node {
  constructor(label) {
    this.label = label;
  }
}

class Graph {
  constructor() {
    this.nodes = new Map();
    this.adjacencyList = new Map();
  }

  addNode(label) {
    const node = new Node(label);
    if (!this.nodes.has(label)) {
      this.nodes.set(label, node);
      this.adjacencyList.set(node, []);
    }
  }

  addEdge(from, to) {
    const fromNode = this.nodes.get(from);
    const toNode = this.nodes.get(to);
    if (!fromNode || !toNode) throw new Error('Not found');

    this.adjacencyList.get(fromNode).push(toNode);
  }

  removeNode(label) {
    const node = this.nodes.get(label);
    if (!node) return;
    for (const key of this.adjacencyList.keys()) {
      const targets = this.adjacencyList.get(key);
      const index = targets.indexOf(label);
      if (index > -1) {
        targets.splice(index, 1);
      }
    }
    this.adjacencyList.delete(node);
    this.nodes.delete(label);
  }

  removeEdge(from, to) {
    const fromNode = this.nodes.get(from);
    const toNode = this.nodes.get(to);
    if (!fromNode || !toNode) return;
    const targets = his.adjacencyList.get(fromNode);
    const index = targets.indexOf(toNode);
    if (index > -1) {
      targets.splice(index, 1);
    }
  }

  print() {
    for (const key of this.adjacencyList.keys()) {
      const targets = this.adjacencyList.get(key);
      if (targets.length) {
        console.log(`${key.label} connected to ${targets.map(t => t.label)}`);
      }
    }
  }
}

module.exports = Graph;
