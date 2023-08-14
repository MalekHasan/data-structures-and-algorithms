# linked-list-insertions

## **Whiteboard Process**


![White-Borad](img/LinkedList-part2.jpg)

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

[linked-list-insertions-Code-Link](https://replit.com/@Malek-SHSH/LinkedList-part2#index.js)

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
const Node = require("./node");
class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return this;
    }
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
    return this;
  }
  insertBefore(valueBefore, newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      return this;
    }
    let prev = null;
    let curr = this.head;
    while (curr.value != valueBefore) {
      prev = curr;
      curr = curr.next;
      if (!prev.next) {
        return this;
      }
    }
    newNode.next = curr;
    if (!prev) {
      prev = newNode;
      prev.next = this.head;
      this.head = prev;
      return this;
    }
    prev.next = newNode;
    return this;
  }
  insertAfter(valueAfter, newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      return this;
    }
    let curr = this.head;
    let currNext = curr.next;
    while (curr.value != valueAfter) {
      curr = curr.next;
      currNext = currNext.next;
      if (!curr.next) {
        return this;
      }
    }
    newNode.next = currNext;
    curr.next = newNode;
  }
  stringCasting() {
    let current = this.head;
    let linkedlistStr = '"head -> ';
    while (current) {
      if (current.next === null) {
        linkedlistStr += `{${current.value}} -> NULL\"`;
        return linkedlistStr;
      }
      linkedlistStr += `{${current.value}} -> `;
      current = current.next;
    }
    return `"NULL"`;
  }
}
module.exports = LinkedList;
```

### Node Class Code :

```javascript
"use strict";
const Linkedlist = require("./linkedlist");
let ll = new Linkedlist();
ll.append(3);
ll.append(2);
ll.append(5);
ll.append(9);
console.log(ll);
ll.insertBefore(3, 1);
console.log(ll.stringCasting());
ll.insertAfter(1, 15);
console.log(ll.stringCasting());
```

**_Output :_**

```javascript
LinkedList {
  head: Node { value: 3, next: Node { value: 2, next: [Node] } }
}
--------------------------------------------------
"head -> {1} -> {3} -> {2} -> {5} -> {9} -> NULL"--------------------------------------------------
"head -> {1} -> {15} -> {3} -> {2} -> {5} -> {9} -> NULL"

```

**_Testing :_**

```javascript
"use strict";
const Linkedl = require("./index");
describe("LinkedList testing", () => {
  test("LinkedList Test", () => {
    const LinkedList = new Linkedl();
    expect(LinkedList.head).toEqual(null);
  });
  test("test append => 1", () => {
    const LinkedList = new Linkedl();
    LinkedList.append(1);
    expect(LinkedList.head.value).toEqual(1);
  });
  test("test next => null", () => {
    const LinkedList = new Linkedl();
    LinkedList.append(1);
    expect(LinkedList.head.next).toEqual(null);
  });
  test("test insertBefore => 3", () => {
    const LinkedList = new Linkedl();
    LinkedList.append(3);
    LinkedList.insertBefore(3, 1);
    expect(LinkedList.head.value).toEqual(1);
  });

  test("test next insertAfter", () => {
    const LinkedList = new Linkedl();
    LinkedList.append(1);
    LinkedList.insertAfter(1, 15);
    expect(typeof LinkedList.head.next).toEqual("object");
  });
  test("test next stringCasting => string", () => {
    const LinkedList = new Linkedl();
    LinkedList.append(-9);
    LinkedList.append(8);
    LinkedList.append(5);
    LinkedList.append("two");
    LinkedList.insertBefore(8, 4);
    LinkedList.insertAfter(8, 2);
    LinkedList.append(3);
    const ele = LinkedList.stringCasting();
    expect(typeof ele).toEqual("string");
  });
  test('test next stringCasting => "head ->{1} ->{4} -> {3} ->{2} -> {two} -> {-8}  -> NULL"', () => {
    const LinkedList = new Linkedl();
    LinkedList.append(1);
    LinkedList.append(3);
    LinkedList.insertBefore(3, 4);
    LinkedList.insertAfter(3, 2);
    LinkedList.append("two");
    LinkedList.append(-8);
    const ele = LinkedList.stringCasting();
    expect(ele).toEqual(
      '"head ->{1} ->{4} -> {3} ->{2} -> {two} -> {-8}  -> NULL"'
    );
  });
});
```
