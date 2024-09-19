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
      const index = targets.indexOf(node);
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
    const targets = this.adjacencyList.get(fromNode);
    const index = targets.indexOf(toNode);
    if (index > -1) {
      targets.splice(index, 1);
    }
  }

  traverseDepthFirst(label) {
    const node = this.nodes.get(label);
    if (!node) return;
    this.traverseDepth(node, new Set());
  }

  traverseDepth(root, visited) {
    console.log(root);
    visited.add(root);
    for (const node of this.adjacencyList.get(root)) {
      if (!visited.has(node)) {
        this.traverseDepth(node, visited);
      }
    }
  }

  traverseDepthFirstIterative(label) {
    const node = this.nodes.get(label);
    if (!node) return;
    const stack = [];
    const visited = new Set();
    stack.push(node);
    while (stack.length) {
      const current = stack.pop();
      visited.add(current);
      console.log(current);
      for (const node of this.adjacencyList.get(current)) {
        if (!visited.has(node)) stack.push(node);
      }
    }
  }

  traverseBreadthFirstIterative(label) {
    const node = this.nodes.get(label);
    if (!node) return;
    const queue = [];
    const visited = new Set();
    queue.push(node);
    while (queue.length) {
      const current = queue.shift();
      visited.add(current);
      console.log(current);
      for (const node of this.adjacencyList.get(current)) {
        if (!visited.has(node)) queue.push(node);
      }
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
