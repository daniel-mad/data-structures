class TreeNode {
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
    const node = new TreeNode(value);
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

  // Method to calculate the height of the binary tree
  height(root = this.root) {
    if (root === null) return -1;

    const leftHeight = this.height(root.leftChild);
    const rightHeight = this.height(root.rightChild);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  // Method to find the minimum value in a b-tree.
  min(root = this.root) {
    if (root === null) {
      return Infinity;
    }
    const left = this.min(root.leftChild);
    const right = this.min(root.rightChild);

    return Math.min(left, right, root.value);
  }

  // Method to find the minimum value in a binary-search-tree.
  findMin(root = this.root) {
    let curr = root;
    let last;
    while (curr !== null) {
      last = curr;
      curr = curr.leftChild;
    }
    return last.value;
  }

  // Method to print nodes at distance
  printNodesAtDistance(distance, root = this.root) {
    if (root === null) return;
    if (distance === 0) {
      console.log(root.value);
    }
    this.printNodesAtDistance(distance - 1, root.leftChild);
    this.printNodesAtDistance(distance - 1, root.rightChild);
  }

  // Method to check if is binary search tree
  isBST(root = this.root, min = Number.MIN_VALUE, max = Number.MAX_VALUE) {
    if (root === null) return true;
    if (root.value < min || root.value > max) return false;
    return (
      this.isBST(root.leftChild, min, root.value - 1) && this.isBST(root.rightChild, root.value + 1, max)
    );
  }

  // Method to traverse breadth first
  breadthFirstTraversal(root = this.root) {
    const height = this.height(root);
    for (let i = 0; i <= height; i++) {
      this.printNodesAtDistance(i);
    }
  }

  // Method to check if tree is balanced
  isBalanced(root = this.root) {
    if (!root) return true;

    const leftHeight = this.height(root.leftChild);
    const rightHeight = this.height(root.rightChild);

    if (Math.abs(leftHeight - rightHeight) > 1) return false;

    return this.isBalanced(root.leftChild) && this.isBalanced(root.rightChild);
  }
}

module.exports = { Tree, TreeNode };
