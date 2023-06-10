# Implementation: Singly Linked Lists

## **Whiteboard Process**

![White-Borad](img/LinkedList.png)

## **Approach & Efficiency**
1. ### Data Structure:

- Linked lists are linear data structures composed of nodes. Each node contains a value and a reference (or link) to the next node in the list.
- The first node is called the head, and the last node is called the tail. The tail node points to null, indicating the end of the list.
2. ### Accessing Elements:

 - Unlike arrays, accessing elements in a linked list is not as efficient. To access a specific element, you need to traverse the list from the head node until you reach the desired node.
- The time complexity for accessing an element in a linked list is O(n), where n is the number of nodes.

3. ### Insertion and Deletion :
- Insertion and deletion operations can be efficient in linked lists, especially when adding or removing elements at the beginning or end of the list.
- Inserting a new node at the beginning (changing the head) or removing the first node takes constant time complexity, O(1).
Insertion or deletion in the middle of the list requires traversing to the specific position, resulting in a time complexity of O(n), where n is the number of nodes.
4. ### Memory Allocation:

- Linked lists dynamically allocate memory for each node, allowing flexibility in terms of adding or removing nodes.
- However, linked lists use more memory than arrays because they need to store the value and the reference to the next node.
5. ### Advantages and Disadvantages:

- Linked lists are beneficial when frequent insertions or deletions are required, particularly at the beginning or end of the list.
- They can dynamically grow or shrink based on needs without requiring expensive resizing operations.
- However, linked lists have slower access times compared to arrays and have higher memory overhead due to the additional memory required for storing references.

## **Solution**

[LinkedList-Code-Link](https://replit.com/@Malek-SHSH/Linkedlis#LinkedList.js)

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

### LinkedList Class Code :

```javascript
"use strict";
const Node = require("./Node.js");
class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    let newNode = new Node(value);
    // this.counter++;
    if (!this.head) {
      this.head = newNode;
      return this;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    // this.tail=newNode
    return this;
  }
  includeIn(value) {
    if (value == this.head) {
      return true;
    }
    let current = this.head;
    while (current) {
      if (value == current.value) {
        return true;
      } else if (current.next == null) {
        return false;
      }
      current = current.next;
    }
    return false;
  }
  stringCasting() {
    let current = this.head;
    let linkedlistStr = '"';
    while (current) {
      if (current.next === null) {
        linkedlistStr += `{${current.value}}  -> NULL\"`;
        return linkedlistStr;
      }
      linkedlistStr += `{${current.value}} -> `;
      current = current.next;
    }
    return `"NULL"`;
  }
  addToHead(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
}
module.exports = LinkedList;
```

### Node Class Code :

```javascript
"use strict";
const Linkedlist = require("./LinkedList.js");
const ll = new Linkedlist();
ll.addToHead(-8);
ll.addToHead("two");
ll.addToHead(3);
ll.addToHead(1);
console.log(ll);
console.log("--------------------------------------------------");
console.log(ll.includeIn(3));
console.log("--------------------------------------------------");
console.log(ll.stringCasting());
```

**_Output :_**

```javascript
LinkedList {
  head: Node { value: 1, next: Node { value: 3, next: [Node] } }
}
--------------------------------------------------
true
--------------------------------------------------
"{1} -> {3} -> {two} -> {-8}  -> NULL"
```
**_Testing :_**

```javascript
'use strict'
const Linkedl=require("./index")
describe("LinkedList testing",()=>{
    test('LinkedList Test',()=>{
        const LinkedList= new Linkedl;
        expect(LinkedList.head).toEqual(null);
    })
    test('test append => 1',()=>{
        const LinkedList= new Linkedl;
        LinkedList.append(1)
        expect(LinkedList.head.value).toEqual(1);
    })
    test('test next => null',()=>{
        const LinkedList= new Linkedl;
        LinkedList.append(1)
        expect(LinkedList.head.next).toEqual(null);
    })
    test('test addToHead => 3',()=>{
        const LinkedList= new Linkedl;
        LinkedList.addToHead(1)
        LinkedList.addToHead(3)
        expect(LinkedList.head.value).toEqual(3);
    })
    test('test next addToHead',()=>{
        const LinkedList= new Linkedl;
        LinkedList.addToHead(1)
        LinkedList.addToHead(3)
        expect(typeof LinkedList.head.next).toEqual("object");
    })
    test('test inclundeIn => true',()=>{
        const LinkedList= new Linkedl;
        LinkedList.addToHead(1)
        LinkedList.addToHead(3)
        const ele=LinkedList.includeIn(1)
        expect(true).toEqual(ele);
    })
    test('test next includeIn => false',()=>{
        const LinkedList= new Linkedl;
        LinkedList.addToHead(1)
        LinkedList.addToHead(3)
        const ele=LinkedList.includeIn(9)
        expect(false).toEqual(ele);
    })
    test('test next stringCasting => string',()=>{
        const LinkedList= new Linkedl;
        LinkedList.addToHead(-9)
        LinkedList.addToHead(-8)
        LinkedList.addToHead(-8)
        LinkedList.addToHead("two")
        LinkedList.addToHead(3)
        LinkedList.addToHead(1)
        const ele=LinkedList.stringCasting()
        expect(typeof ele).toEqual("string");
    })
    test('test next stringCasting => "{1} -> {3} -> {two} -> {-8}  -> NULL"',()=>{
        const LinkedList= new Linkedl;
        LinkedList.addToHead(-8)
        LinkedList.addToHead("two")
        LinkedList.addToHead(3)
        LinkedList.addToHead(1)
        const ele=LinkedList.stringCasting()
        expect( ele).toEqual('"{1} -> {3} -> {two} -> {-8}  -> NULL"');
    })
})


```
![LinkedList-Test](img/LinkedListTest.PNG)
