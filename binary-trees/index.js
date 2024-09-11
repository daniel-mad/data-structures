const Tree = require('./models/tree');

const tree = new Tree();
tree.insert(7);
tree.insert(4);
tree.insert(9);
tree.insert(1);
tree.insert(6);
tree.insert(8);
tree.insert(10);

//tree.preOrderTraversal();
//tree.inOrderTraversal();
tree.postOrderTraversal();

///            7
//        4        9
//     1    6    8   10
