class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    let curr = this.root;
    if (curr === null) {
      this.root = node;
      return;
    }

    while (true) {
      if (value > curr.value && curr.rightChild === null) {
        curr.rightChild = node;
        break;
      }
      if (value <= curr.value && curr.leftChild === null) {
        curr.leftChild = node;
        break;
      }
      curr = value > curr.value ? curr.rightChild : curr.leftChild;
    }
  }

  find(value) {
    let curr = this.root;
    while (curr !== null) {
      if (curr.value === value) {
        return true;
      }
      curr = value > curr.value ? curr.rightChild : curr.leftChild;
    }
    return false;
  }

  // ROOT,LEFT,RIGHT
  preOrderTraversal(root = this.root) {
    if (root === null) return;

    console.log(root.value);
    this.preOrderTraversal(root.leftChild);
    this.preOrderTraversal(root.rightChild);
  }

  // LEFT,ROOT,RIGHT
  inOrderTraversal(root = this.root) {
    if (root === null) return;
    this.inOrderTraversal(root.leftChild);
    console.log(root.value);
    this.inOrderTraversal(root.rightChild);
  }

  // LEFT,RIGHT,ROOT
  postOrderTraversal(root = this.root) {
    if (root === null) return;

    this.postOrderTraversal(root.leftChild);
    this.postOrderTraversal(root.rightChild);
    console.log(root.value);
  }

  height(root = this.root) {
    if (root === null) return -1;

    const leftHeight = this.height(root.leftChild);
    const rightHeight = this.height(root.rightChild);

    return Math.max(leftHeight, rightHeight) + 1;
  }
}

module.exports = Tree;
