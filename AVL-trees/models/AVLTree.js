class AVLNode {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
    this.height = 0;
  }
}
class AVLTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this._insert(this.root, value);
  }

  _insert(node, value) {
    if (!node) {
      return new AVLNode(value);
    }
    if (value < node.value) {
      node.leftChild = this._insert(node.leftChild, value);
    } else {
      node.rightChild = this._insert(node.rightChild, value);
    }

    this.setHeight(node);

    return this.balance(node);
  }

  isLeftHeavy(balanceFactor) {
    return balanceFactor > 1;
  }
  isRightHeavy(balanceFactor) {
    return balanceFactor < -1;
  }

  getBalanceFactor(root) {
    return this.height(root.leftChild) - this.height(root.rightChild);
  }

  height(node) {
    return node ? node.height : -1;
  }

  balance(node) {
    const balanceFactor = this.getBalanceFactor(node);
    if (this.isLeftHeavy(balanceFactor)) {
      if (this.getBalanceFactor(node.leftChild) < 0) {
        node.leftChild = this.leftRotate(node.leftChild);
      }
      return this.rightRotate(node);
    } else if (this.isRightHeavy(balanceFactor)) {
      if (this.getBalanceFactor(node.rightChild) > 0) {
        node.rightChild = this.rightRotate(node.rightChild);
      }
      return this.leftRotate(node);
    }
    return node;
  }

  leftRotate(node) {
    const newRoot = node.rightChild;
    node.rightChild = newRoot.leftChild;
    newRoot.leftChild = node;
    this.setHeight(node);
    this.setHeight(newRoot);
    return newRoot;
  }

  rightRotate(node) {
    const newRoot = node.leftChild;
    node.leftChild = newRoot.rightChild;
    newRoot.rightChild = node;
    this.setHeight(node);
    this.setHeight(newRoot);
    return newRoot;
  }

  setHeight(node) {
    node.height = Math.max(this.height(node.leftChild), this.height(node.rightChild)) + 1;
  }
}

module.exports = AVLTree;
