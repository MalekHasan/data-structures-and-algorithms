"use strict";
const BinaryTree = require("./binaryTree");
const Node = require("./node");
const BST = require("./BST");

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

console.log("*********BST*********");

const bst = new BST();
bst.add(5);
bst.add(3);
bst.add(6);
bst.add(4);
bst.add(2);
// bst.add(1);
console.log(bst);
console.log(bst.contains(5));
console.log(bst.contains(1));
