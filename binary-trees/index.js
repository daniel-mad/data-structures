const { Tree, TreeNode } = require("./models/tree");

const tree = new Tree();
tree.insert(7);
tree.insert(4);
tree.insert(9);
tree.insert(1);
tree.insert(6);
tree.insert(8);
tree.insert(10);
tree.insert(25);
tree.insert(25);

// const minTree = new Tree();
// minTree.root = new TreeNode(20);
// minTree.root.leftChild = new TreeNode(10);
// minTree.root.rightChild = new TreeNode(30);
// minTree.root.rightChild.leftChild = new TreeNode(4);
// minTree.root.leftChild.leftChild = new TreeNode(6);
// minTree.root.leftChild.rightChild = new TreeNode(21);
// minTree.root.leftChild.leftChild.leftChild = new TreeNode(3);
// minTree.root.leftChild.leftChild.rightChild = new TreeNode(8);

//tree.preOrderTraversal();
//tree.inOrderTraversal();
// tree.postOrderTraversal();
// console.log(tree.height());

// console.log(minTree.min());
// console.log(tree.findMin());
// tree.printNodesAtDistance(3);
// tree.breadthFirstTraversal();
// console.log(tree.isBST());
// console.log(minTree.isBST());

///            7
//        4        9
//     1    6    8   10

const balancedTree = new Tree();
balancedTree.insert(10);
balancedTree.insert(5);
balancedTree.insert(20);
balancedTree.insert(30);

console.log(balancedTree.isBalanced());
