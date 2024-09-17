# AVL Tree Implementation Cheat Sheet

This README provides an overview of the **AVL Tree** data structure and a JavaScript implementation using an `AVLTree` class and an `AVLNode` class.

## What is an AVL Tree?

An **AVL Tree** is a type of self-balancing binary search tree. It maintains its balance by ensuring that the difference in heights between the left and right subtrees of any node (called the balance factor) is at most 1. If this condition is violated, the tree rotates to restore balance.

Key operations include:

- **Insertion**: Add a new node while keeping the tree balanced.
- **Rotations**: Used to maintain the balance during insertion.

## Node Structure: `AVLNode`

The `AVLNode` class defines the structure of each node in the tree.

```javascript
class AVLNode {
  constructor(value) {
    this.value = value; // The value stored in the node
    this.leftChild = null; // Reference to the left child node
    this.rightChild = null; // Reference to the right child node
    this.height = 0; // Height of the node in the tree
  }
}
```

### Properties:

- `value`: The value of the node.
- `leftChild`: The left child of the node.
- `rightChild`: The right child of the node.
- `height`: The height of the node, starting at `0` for leaf nodes.

## Tree Structure: `AVLTree`

The `AVLTree` class implements the main functionality of the AVL Tree, including insertion and balancing operations.

### Constructor

```javascript
class AVLTree {
  constructor() {
    this.root = null; // Root of the AVL tree
  }
}
```

### Insertion

The `insert()` method adds a new value to the tree and ensures balance is maintained.

```javascript
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

this.setHeight(node); // Update height after insertion
return this.balance(node); // Balance the tree if needed
}
```

### Balancing the Tree

The AVL Tree uses rotations to maintain balance. The balance factor of each node is computed, and if it becomes unbalanced, a rotation is performed.

- **Balance Factor**:

```javascript
getBalanceFactor(node) {
return this.height(node.leftChild) - this.height(node.rightChild);
}
```

- **Check for left or right heavy**:

```javascript
isLeftHeavy(balanceFactor) { return balanceFactor > 1; }
isRightHeavy(balanceFactor) { return balanceFactor < -1; }
```

### Rotations

1. **Left Rotation** (used when the right subtree is taller):

```javascript
leftRotate(node) {
const newRoot = node.rightChild;
node.rightChild = newRoot.leftChild;
newRoot.leftChild = node;
this.setHeight(node);
this.setHeight(newRoot);
return newRoot;
}
```

2. **Right Rotation** (used when the left subtree is taller):

```javascript
rightRotate(node) {
const newRoot = node.leftChild;
node.leftChild = newRoot.rightChild;
newRoot.rightChild = node;
this.setHeight(node);
this.setHeight(newRoot);
return newRoot;
}
```

3. **Balancing**: Once the balance factor is computed, the tree may require either a **single rotation** (left or right) or a **double rotation** (left-right or right-left) to balance.

```javascript
balance(node) {
  const balanceFactor = this.getBalanceFactor(node);
  if (this.isLeftHeavy(balanceFactor)) {
   if (this.getBalanceFactor(node.leftChild) < 0) {
      node.leftChild = this.leftRotate(node.leftChild); // Left-right case
    }
  return this.rightRotate(node); // Left-left case
  } else if (this.isRightHeavy(balanceFactor)) {
  if (this.getBalanceFactor(node.rightChild) > 0) {
  node.rightChild = this.rightRotate(node.rightChild); // Right-left case
  }
  return this.leftRotate(node); // Right-right case
  }
  return node; // No balancing required
}
```

### Utility Methods

1. **Height Calculation**: The height of a node is the maximum height of its left or right child, plus 1.

```javascript
height(node) {
  return node ? node.height : -1;
}

setHeight(node) {
  node.height = Math.max(this.height(node.leftChild), this.height(node.rightChild)) + 1;
}
```

### Example Usage

```javascript
const AVLTree = require('./AVLTree');

const tree = new AVLTree();
tree.insert(10);
tree.insert(20);
tree.insert(5);
tree.insert(4); // This will cause the tree to rebalance
```

### Features

- **Self-balancing**: The AVL tree ensures that it remains balanced after every insertion using rotations.
- **Logarithmic height**: By balancing, the tree maintains a height of O(log n) in the worst case, ensuring efficient insertions, deletions, and searches.

### Time Complexity

- **Insertion**: O(log n)
- **Searching**: O(log n)
- **Deletion**: O(log n)

### Conclusion

This AVL Tree implementation efficiently maintains balance during insertions to ensure logarithmic performance for key operations, making it well-suited for applications requiring fast searches and insertions.

```

```
