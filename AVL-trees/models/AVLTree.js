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
    node.height = Math.max(this.height(node.leftChild), this.height(node.rightChild)) + 1;
    const balanceFactor = this.getBalanceFactor(node.leftChild, node.rightChild);
    if (this.isLeftHeavy(balanceFactor)) {
      console.log('Left heavy', node.value);
    }
    if (this.isRightHeavy(balanceFactor)) {
      console.log('Right heavy', node.value);
    }
    return node;
  }

  isLeftHeavy(balanceFactor) {
    return balanceFactor > 1;
  }
  isRightHeavy(balanceFactor) {
    return balanceFactor < -1;
  }

  getBalanceFactor(left, right) {
    return this.height(left) - this.height(right);
  }

  height(node) {
    return node ? node.height : -1;
  }
}

module.exports = AVLTree;
