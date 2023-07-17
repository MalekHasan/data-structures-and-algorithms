"use strict";
const BinaryTree = require("./binaryTree");
const Node = require("./node");
const BST = require("./BST");

describe("Binary Tree Testing", () => {
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
  let bt=new BinaryTree(one);
  it("test root of BinaryTree", () => {
    expect(bt.root.value).toEqual(1);
  });

  it("test preOrder of BinaryTree", () => {
    expect(bt.preOrder()).toEqual( [
      1, 2, 6, 7, 8,
      9, 3, 4, 5
    ]);
  });

  it("test inOrder of BinaryTree", () => {
    expect(bt.inOrder()).toEqual( [
      6, 8, 7, 9, 2,
      1, 4, 3, 5
    ]);
  });
  it("test postOrder of BinaryTree", () => {
    expect(bt.postOrder()).toEqual( [
      8, 9, 7, 6, 2,
      4, 5, 3, 1
    ]);
  });


});
describe("Binary Search Tree Testing", () => {

  let bst=new BST();
  it("test root of BinarySearchTree", () => {
    expect(bst.root).toBeNull();
  });

  // it("test preOrder of BinarySearchTree", () => {
  //   expect(bst.preOrder()).toEqual( [
  //     1, 2, 6, 7, 8,
  //     9, 3, 4, 5
  //   ]);
  // });

  // it("test inOrder of BinarySearchTree", () => {
  //   expect(bst.inOrder()).toEqual( [
  //     6, 8, 7, 9, 2,
  //     1, 4, 3, 5
  //   ]);
  // });
  // it("test postOrder of BinarySearchTree", () => {
  //   expect(bst.postOrder()).toEqual( [
  //     8, 9, 7, 6, 2,
  //     4, 5, 3, 1
  //   ]);
  // });


});
