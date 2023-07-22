"use strict";
const BinaryTree = require("./binaryTree");
const Node = require("./node");
const breadthFirst = require("./index");

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
  let bt = new BinaryTree(one);
  it("test root of BinaryTree", () => {
    expect(bt.root.value).toEqual(1);
  });

  it("test breadthFirst of BinaryTree", () => {
    expect(breadthFirst(bt)).toEqual([
      1, 2, 3, 6, 4,
      5, 7, 8, 9
    ]);
  });

});

