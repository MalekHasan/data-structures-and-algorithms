# Implementation: breadthFirst

### breadthFirst-White-Borad

![tree-fizz-buzz-White-Borad](../img/Untitled%20(2).jpg)



### index file Code :

```javascript
"use strict";
"use strict";
const Tree = require("./tree");
const Node = require("./node");

let bt = null;

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

bt = new Tree(root);

function fizzBuzzTree(tree) {
  let queue = [];
  queue.push(tree.root);
  while(queue.length !==0){
    let curr=queue.shift();
    if(curr.left)queue.push(curr.left);
    if(curr.right)queue.push(curr.right);

    if(curr.value % 3===0 && curr.value % 5===0)curr.value="FizzBuzz";
    else if(curr.value % 3===0)curr.value="Fizz";
    else if(curr.value % 5===0)curr.value="Buzz";
  }
  return tree;
}

console.log(fizzBuzzTree(bt));
console.log(fizzBuzzTree(bt).preOrder());


```

**_Output :_**

```javascript
Tree {
  root: Node {
    value: 'Fizz',
    right: Node { value: 8, right: [Node], left: [Node] },
    left: Node { value: 2, right: [Node], left: [Node] }
  }
}
[ 'Fizz', 2, 'Buzz', 1, 'Fizz', 8, 'Fizz', 'FizzBuzz' ]


```
