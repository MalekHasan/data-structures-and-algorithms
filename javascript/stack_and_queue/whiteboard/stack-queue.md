# Stack-Queue

## Whiteboard


### Queue-White-Borad

![Queue-White-Borad](../img/stack-queue-pseudo.jpg)

## **Solution**

[Stack-Queue-Code-Link](https://replit.com/@Malek-SHSH/stack-queue-pseudo)

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

### Stack Class Code :

```javascript
'use strict'
const Node=require("./node")
class Stack{
  constructor(){
    this.top=null;
  }

  push(value){
      const newNode=new Node(value);
    if(this.isEmpty()){
      this.top=newNode;
      return value;
    }
    newNode.next=this.top;
    this.top=newNode;
    return value;
  }

pop(){
  const temp=this.top;
  this.top=this.top.next
  temp.next=null;
  return temp.value
}

  peek(){
    return this.top.value;
  }

}
module.exports=Stack
```


### Queue Class Code :

```javascript

'use strict'
const Node=require('./node.js')
const Stack=require('./stack.js')

class PseudoQueue{

  constructor(){
    this.stack1=new Stack();
    this.stack2=new Stack();
  }

  enqueue(value){
    this.stack1.push(value)
    return value;
  }

  dequeue(){
    if(!this.stack2.length>0)
    if(!this.stack1.length>0)return "Empty"
      while(this.stack1.length>0){
          let poped=this.stack1.pop();
          this.stack2.push(poped)
        }
    return this.stack2.pop()
  }

}
module.exports=PseudoQueue
```

### index file Code :

```javascript
'use strict'
const Queue=require('./queue.js')
const queue=new Queue();
console.log('Enqueued value',queue.enqueue(10))
console.log('Enqueued value',queue.enqueue(20))
console.log('Enqueued value',queue.enqueue(30))
console.log('Enqueued value',queue.enqueue(40))

console.log('*************************************')

console.log('Dequeued value',queue.dequeue())
console.log('Dequeued value',queue.dequeue())
console.log('Dequeued value',queue.dequeue())

console.log('*************************************')

console.log(queue)




```

**_Output :_**

```javascript
Enqueued value 10
Enqueued value 20
Enqueued value 30
Enqueued value 40
*************************************
Dequeued value 10
Dequeued value 20
Dequeued value 30
*************************************
PseudoQueue {
  stack1: Stack { top: null, length: 0 },
  stack2: Stack { top: Node { value: 40, next: null }, length: 1 }
}
```

