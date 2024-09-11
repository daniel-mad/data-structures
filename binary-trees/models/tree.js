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
  preOrderTraversal() {
    this._preOrderTraversal(this.root);
  }

  _preOrderTraversal(root) {
    if (root === null) return;

    console.log(root.value);
    this._preOrderTraversal(root.leftChild);
    this._preOrderTraversal(root.rightChild);
  }

  // LEFT,ROOT,RIGHT
  inOrderTraversal() {
    this._inOrderTraversal(this.root);
  }
  _inOrderTraversal(root) {
    if (root === null) return;
    this._inOrderTraversal(root.leftChild);
    console.log(root.value);
    this._inOrderTraversal(root.rightChild);
  }

  // LEFT,RIGHT,ROOT
  postOrderTraversal() {
    this._postOrderTraversal(this.root);
  }

  _postOrderTraversal(root) {
    if (root === null) return;

    this._postOrderTraversal(root.leftChild);
    this._postOrderTraversal(root.rightChild);
    console.log(root.value);
  }
}

module.exports = Tree;
