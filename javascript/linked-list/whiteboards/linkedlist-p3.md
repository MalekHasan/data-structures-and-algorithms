# linked-list-insertions

## **Whiteboard Process**


![White-Borad](img/LinkedList-part3.jpg)

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

[linked-list-insertions-Code-Link](https://replit.com/@Malek-SHSH/linked-list-kth#index.js)

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
const Node=require("./node");
class LinkedList{
  constructor(){
    this.head=null;
    this.counter=null;
  }
append(value){
  let newNode=new Node(value);
  if(!this.head){
    this.head=newNode;
    this.counter=0;
    return this;
  }
  let curr=this.head;
  while(curr.next)
    {
        curr=curr.next
    }
  this.counter++;
  curr.next=newNode;
  return this;
}
  findFromLast(index){
    if(this.counter<index){
      return "Execption"
    }

      let ElemIndex=this.counter-index;
      let curr=this.head;
        for(let i=0;i<ElemIndex;i++){
          curr=curr.next
        }

    return curr.value;
  }
}

module.exports=LinkedList;

```

### Node Class Code :

```javascript
"use strict";
const linkedList=require("./linkedlist");
const ll=new linkedList();
ll.append(1)
ll.append(2)
ll.append(3)
ll.append(4)
ll.append(5)
ll.append(6)
ll.append(7)
ll.append(8)
ll.append(9)
  console.log("***********",ll.findFromLast(8))
```

**_Output :_**

```javascript
1

```


