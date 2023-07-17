"use strict";
const Node = require("./node");
class BST {
  constructor() {
    this.root = null;
  }
  add(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let traverse = (node) => {
      if (value < node.value) {
        if (!node.left) {
          node.left = newNode;
          return;
        } else if (node.left !== null) {
          traverse(node.left);
        }
      } else if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
          return;
        } else if (node.right !== null) {
          traverse(node.right);
        }
      } else {
        return;
      }
    };
    traverse(this.root);
  }

  contains(value) {
    let result = [];
    let traverse = (node) => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result.includes(value);
  }
}

module.exports = BST;
