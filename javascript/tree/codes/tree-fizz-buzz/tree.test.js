"use strict";
const Tree = require("./tree");
const Node = require("./node");
const fizzBuzzTree = require("./index");

describe(" Tree Testing", () => {
  let root = new Node(3);
  let first = new Node(2);
  let second = new Node(8);
  let third = new Node(5);
  let fourth = new Node(9);
  let fifth = new Node(6);
  let sixth = new Node(15);
  let sevneth = new Node(1);

  root.left = first;
  root.right = second;
  first.left = third;
  first.right = fifth;
  second.left = fourth;
  second.right = sixth;
  third.left = sevneth;

  let bt = new Tree(root);
  it("test root of Tree", () => {
    expect(bt.root.value).toEqual(3);
  });

  it("test preOrder of Tree", () => {
    expect(fizzBuzzTree(bt).preOrder()).toEqual([ 'Fizz', 2, 'Buzz', 1, 'Fizz', 8, 'Fizz', 'FizzBuzz' ]);
  });


});



