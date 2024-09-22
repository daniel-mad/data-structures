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
    if (this.nodes.has(label)) return;
    this.nodes.set(label, new Node(label));
  }
  addEdge(from, to) {
    const fromNode = this.nodes.get(from);
    const toNode = this.nodes.get(to);
    if (!fromNode || !toNode) {
      throw new Error("Illegal operation.");
    }
    if (!this.adjacencyList.has(fromNode)) {
      this.adjacencyList.set(fromNode, []);
    }
    this.adjacencyList.get(fromNode).push(toNode);
  }

  removeNode(label) {
    const node = this.nodes.get(label);
    if (!node) return;
    for (const nodes of this.adjacencyList.values()) {
      const index = nodes.indexOf(node);
      if (index > -1) {
        nodes.splice(index, 1);
      }
    }
    this.adjacencyList.delete(node);
    this.nodes.delete(label);
  }

  removeEdge(from, to) {
    const fromNode = this.nodes.get(from);
    const toNode = this.nodes.get(to);
    if (!fromNode || !toNode) return;
    const nodes = this.adjacencyList.get(fromNode);
    const index = nodes.indexOf(toNode);
    nodes.splice(index, 1);
  }

  depthFirstTraversal(label) {
    const startNode = this.nodes.get(label);
    if (!startNode) return;
    this.traverseDFS(startNode);
  }

  traverseDFS(node, visited = new Set()) {
    if (!node) return;

    console.log(node.label);
    visited.add(node);

    const neighbors = this.adjacencyList.get(node) || [];

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        this.traverseDFS(neighbor, visited);
      }
    }
  }

  breathFirstTraversal(label) {
    const startNode = this.nodes.get(label);
    if (!startNode) return;
    const visited = new Set();
    const queue = [];
    queue.push(startNode);
    while (queue.length) {
      const node = queue.shift();

      if (visited.has(node)) continue;

      console.log(node.label);
      visited.add(node);
      const neighbors = this.adjacencyList.get(node) || [];

      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }

  topologicalSort() {
    const visited = new Set();
    const stack = [];

    const dfs = (node) => {
      if (visited.has(node)) return;
      for (const neighbor of this.adjacencyList.get(node) || []) {
        dfs(neighbor);
      }
      visited.add(node);
      stack.push(node);
    };

    for (const node of this.nodes.values()) {
      dfs(node);
    }

    return stack.toReversed().map((node) => node.label);
  }

  hasCycle() {
    const visited = new Set(); // Track visiting nodes
    const visiting = new Set(); // Track nodes in current DFS path

    const dfs = (node) => {
      if (visiting.has(node)) {
        return true; // A cycle is detected
      }
      if (visited.has(node)) {
        return false; // Node already fully processed, no cycle in this path
      }
      visiting.add(node); // Mark node as currently being visited
      for (const neighbor of this.adjacencyList.get(node) || []) {
        if (dfs(neighbor)) {
          return true;
        }
      }
      visiting.delete(node); // Remove from visiting (DFS path completed for this node)
      visited.add(node); // Mark node as fully processed
      return false;
    };

    for (const node of this.nodes.values()) {
      if (dfs(node)) return true;
    }

    return false;
  }

  print() {
    this.adjacencyList.forEach((value, key) => {
      console.log(`${key.label} is connected with [${value.map((n) => n.label)}]`);
    });
  }
}

module.exports = Graph;
