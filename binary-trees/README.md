Binary Tree Traversal in JavaScript

This guide covers common binary tree traversal methods in JavaScript, including Depth-First Search (DFS) and Breadth-First Search (BFS). It provides both recursive and iterative approaches for each traversal type.

## Binary Tree Structure:

```javascript
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
```

## Depth-First Search (DFS):

DFS explores as far as possible along each branch before backtracking. It can be implemented using three traversal methods: Pre-Order, In-Order, and Post-Order.

1.  Pre-Order Traversal (Root, Left, Right)

    - Description: Visit the root node first, then traverse the left subtree, followed by the right subtree.
    - Use Case: Used for creating a copy of the tree.

    ## Recursive Approach:

```javascript
function preOrderTraversal(root) {
  if (root === null) return;

  console.log(root.value); // Visit root
  preOrderTraversal(root.left); // Traverse left subtree
  preOrderTraversal(root.right); // Traverse right subtree
}
```

## Iterative Approach:

```javascript
function preOrderTraversalIterative(root) {
  if (root === null) return;

  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current.value); // Visit root

    if (current.right !== null) stack.push(current.right); // Push right subtree
    if (current.left !== null) stack.push(current.left); // Push left subtree
  }
}
```

2.  In-Order Traversal (Left, Root, Right)

    - Description: Traverse the left subtree first, then visit the root node, and finally traverse the right subtree.
    - Use Case: Retrieves nodes in ascending order for Binary Search Trees (BST).

    ## Recursive Approach:

```javascript
function inOrderTraversal(root) {
  if (root === null) return;

  inOrderTraversal(root.left); // Traverse left subtree
  console.log(root.value); // Visit root
  inOrderTraversal(root.right); // Traverse right subtree
}
```

## Iterative Approach:

```javascript
function inOrderTraversalIterative(root) {
  const stack = [];
  let current = root;

  while (current !== null || stack.length > 0) {
    while (current !== null) {
      stack.push(current); // Push left subtree
      current = current.left;
    }

    current = stack.pop(); // Visit root
    console.log(current.value); // Print node value
    current = current.right; // Traverse right subtree
  }
}
```

3.  Post-Order Traversal (Left, Right, Root)

    - Description: Traverse the left subtree first, then the right subtree, and visit the root node last.
    - Use Case: Used for deleting the tree, as it visits nodes from bottom to top.

    ## Recursive Approach:

```javascript
function postOrderTraversal(root) {
  if (root === null) return;

  postOrderTraversal(root.left); // Traverse left subtree
  postOrderTraversal(root.right); // Traverse right subtree
  console.log(root.value); // Visit root
}
```

## Iterative Approach:

```javascript
function postOrderTraversalIterative(root) {
  if (root === null) return;

  const stack1 = [root];
  const stack2 = [];

  while (stack1.length > 0) {
    const current = stack1.pop();
    stack2.push(current); // Push nodes in reverse post-order

    if (current.left !== null) stack1.push(current.left); // Push left subtree
    if (current.right !== null) stack1.push(current.right); // Push right subtree
  }

  while (stack2.length > 0) {
    const node = stack2.pop(); // Nodes are now in post-order
    console.log(node.value); // Visit root
  }
}
```

## Breadth-First Search (BFS):

BFS explores all nodes at the present depth level before moving on to the nodes at the next depth level. This is implemented using Level-Order Traversal.

1.  Level-Order Traversal (Breadth-First Search)

    - Description: Visit all nodes at the current level before moving to the next level.
    - Use Case: Used in algorithms like finding the shortest path in an unweighted graph.

## Iterative Approach Using a Queue:

```javascript
function levelOrderTraversal(root) {
  if (root === null) return;

  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current.value); // Visit root

    if (current.left !== null) queue.push(current.left); // Push left child
    if (current.right !== null) queue.push(current.right); // Push right child
  }
}
```

## Summary Table:

| Traversal Type | Order             | Recursive Function                  | Iterative Function                  |
| -------------- | ----------------- | ----------------------------------- | ----------------------------------- |
| **DFS**        | **-**             | **-**                               | **-**                               |
| In-Order       | Left, Root, Right | `inOrderTraversal(root)`            | `inOrderTraversalIterative(root)`   |
| Pre-Order      | Root, Left, Right | `preOrderTraversal(root)`           | `preOrderTraversalIterative(root)`  |
| Post-Order     | Left, Right, Root | `postOrderTraversal(root)`          | `postOrderTraversalIterative(root)` |
| **BFS**        | **-**             | **-**                               | **-**                               |
| Level-Order    | Level by Level    | N/A (not commonly done recursively) | `levelOrderTraversal(root)`         |

```


```
