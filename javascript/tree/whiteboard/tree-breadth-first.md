# Implementation: breadthFirst

### breadthFirst-White-Borad

![breadthFirst-White-Borad](../img/breadthFirst.jpg)

### Node Class Code :

```javascript
"use strict";
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
module.exports = Node;
```

### binaryTree Class Code :

```javascript
"use strict";
class binaryTree {
  constructor(root) {
    this.root = root;
  }
  preOrder() {
    let result = [];
    let traverse = (node) => {
      result.push(this.node.value);
      if (this.node.left) traverse(node.left);
      if (this.node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
  inOrder() {
    let result = [];
    let traverse = (node) => {
      if (this.node.left) traverse(node.left);
      result.push(this.node.value);
      if (this.node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
  postOrder() {
    let result = [];
    let traverse = (node) => {
      if (this.node.left) traverse(node.left);
      if (this.node.right) traverse(node.right);
      result.push(this.node.value);
    };
    traverse(this.root);
    return result;
  }
}
module.exports = binaryTree;
```

### breadthFirst Code :

```javascript
function breadthFirst(tree) {
  const queue = [];
  let result = [];
  queue.push(tree.root);
  while (queue.length) {
    let curr = queue.shift();
    result.push(curr.value);
    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }
  }
  return result;
}
console.log("breadthFirst: ", breadthFirst(tree));

module.exports = breadthFirst;
```

### index file Code :

```javascript
"use strict";
const BinaryTree = require("./binaryTree");
const Node = require("./node");

let tree = null;

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
two.left = six;
three.left = four;
three.right = five;
six.right = seven;
seven.left = eight;
seven.right = nine;

tree = new BinaryTree(one);

let preOrder = tree.preOrder();
let inOrder = tree.inOrder();
let postOrder = tree.postOrder();

console.log("*********BinaryTree*********");
console.log("preOrder: ", preOrder);
console.log("inOrder: ", inOrder);
console.log("postOrder: ", postOrder);
console.log("breadthFirst: ",breadthFirst(tree));
```

**_Output :_**

```javascript
*********BinaryTree*********

preOrder:  [
  1, 2, 6, 7, 8,
  9, 3, 4, 5
]
inOrder:  [
  6, 8, 7, 9, 2,
  1, 4, 3, 5
]
postOrder:  [
  8, 9, 7, 6, 2,
  4, 5, 3, 1
]
    breadth First:  [
      1, 2, 3, 6, 4,
      5, 7, 8, 9
    ]
```
