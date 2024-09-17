class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 0;
  }
}
class AVLTree {
  constructor() {
    this.root = null;
  }

  insertValue(value) {
    this.root = this.insert(this.root, value);
  }

  insert(node, value) {
    if (!node) {
      return new Node(value);
    }
    if (value > node.value) {
      node.right = this.insert(node.right, value);
    } else {
      node.left = this.insert(node.left, value);
    }
    this.setHeight(node);
    return this.balance(node);
  }

  setHeight(node) {
    node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;
  }

  height(node) {
    return node ? node.height : -1;
  }
  balance(node) {
    const balanceFactor = this.getBalanceFactor(node);
    // Check if right is heavy
    if (balanceFactor < -1) {
      if (this.getBalanceFactor(node.right) > 0) {
        node.right = this.rotateRight(node.right); // Right-Left case
      }
      return this.rotateLeft(node);
    }
    // Check if left is heavy
    else if (balanceFactor > 1) {
      if (this.getBalanceFactor(node.left) < 0) {
        node.left = this.rotateLeft(node.left); // Left-Right case
      }
      return this.rotateRight(node);
    }
    return node;
  }

  getBalanceFactor(node) {
    return this.height(node.left) - this.height(node.right);
  }

  rotateLeft(node) {
    const newNode = node.right;
    node.right = newNode.left;
    newNode.left = node;
    this.setHeight(node);
    this.setHeight(newNode);
    return newNode;
  }

  rotateRight(node) {
    const newNode = node.left;
    node.left = newNode.right;
    newNode.right = node;
    this.setHeight(node);
    this.setHeight(newNode);
    return newNode;
  }
}

module.exports = AVLTree;
