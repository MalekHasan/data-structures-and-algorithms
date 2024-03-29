"use strict";
class binaryTree {
  constructor(root) {
    this.root = root;
  }
  preOrder() {
    let result = [];
    let traverse = (node) => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
  inOrder() {
    let result = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
  postOrder() {
    let result = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }
  maxTree(){
    if(!this.root)return null;
    let maxNum=this.root.value;
    let traverse = (node) => {
      if (node.value>maxNum)maxNum=node.value;
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return maxNum;
  }
}
module.exports = binaryTree;
