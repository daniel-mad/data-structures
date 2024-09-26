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
    const node = new Node(label);
    this.nodes.set(label, node);
    this.adjacencyList.set(node, []);
  }

  addEdge(from, to, weight) {
    const fromNode = this.nodes.get(from);
    const toNode = this.nodes.get(to);
    if (!fromNode || !toNode) {
      throw new Error("Illegal operation: from and to must be exist in the graph.");
    }
    this.adjacencyList.get(fromNode).push({ node: toNode, weight: weight });
    this.adjacencyList.get(toNode).push({ node: fromNode, weight: weight });
  }

  print() {
    this.adjacencyList.forEach((neighbors, key) => {
      const connection = neighbors.map((neighbor) => `${neighbor.node.label} (weight: ${neighbor.weight})`);
      console.log(`${key.label} is connected with [${connection.join(", ")}]`);
    });
  }

  findShortestPath(startLabel, endLabe) {
    const startNode = this.nodes.get(startLabel);
    const endNode = this.nodes.get(endLabe);
    if (!startNode || !endNode) return;

    // Initialize Data Structures
    const distances = new Map();
    const previous = new Map();
    const queue = new PriorityQueue();

    for (const node of this.nodes.values()) {
      distances.set(node, Infinity);
    }
    distances.set(startNode, 0);
    queue.enqueue(startNode, 0);

    // Dijkstra's Algorithm
    while (!queue.isEmpty()) {
      const { item: currentNode } = queue.dequeue();

      // If the current node is the destination, stop.
      if (currentNode === endNode) break;
      for (const { node: neighbor, weight } of this.adjacencyList.get(currentNode)) {
        const distance = distances.get(currentNode) + weight;
        if (distance < distances.get(neighbor)) {
          distances.set(neighbor, distance);
          previous.set(neighbor, currentNode);
          queue.enqueue(neighbor, distance);
        }
      }
    }

    // Reconstruct the path
    const path = [];
    let currentNode = endNode;

    while (currentNode) {
      path.unshift(currentNode.label);
      currentNode = previous.get(currentNode);
    }

    if (distances.get(endNode) === Infinity) return null;

    return {
      distance: distances.get(endNode),
      path,
    };
  }

  hasCycle() {
    const visited = new Set();

    // Helper DFS function
    const dfs = (node, parent) => {
      visited.add(node);
      // Visit all neighbors of the current node
      for (const neighbor of this.adjacencyList.get(node)) {
        if (!visited.has(neighbor.node)) {
          if (dfs(neighbor.node, node)) {
            return true; // Cycle found
          }
        }
        // If neighbor is visited and is not the parent, then it's a back edge, indicating a cycle
        else if (neighbor.node !== parent) {
          return true;
        }
      }

      return false;
    };

    // Iterate over all nodes (in case of a disconnected graph)
    for (const node of this.nodes.values()) {
      if (!visited.has(node) && dfs(node, null)) {
        return true; // Cycle found
      }
    }

    return false;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(item, priority) {
    this.items.push({ item, priority });
    this.sort();
  }

  dequeue() {
    return this.items.shift();
  }

  sort() {
    this.items.sort((a, b) => a.priority - b.priority);
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

module.exports = Graph;
