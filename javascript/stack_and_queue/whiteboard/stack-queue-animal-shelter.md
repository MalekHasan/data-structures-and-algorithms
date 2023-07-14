# AnimalShelter-Stack-Queue

## Whiteboard


![AnimalShelter-Queue-White-Borad](../img/Animal%20shelter.jpg)

## **Solution**

[Stack-Queue-Code-Link](https://replit.com/@Malek-SHSH/stack-queue-animal-shelter#index.js)

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


### Queue Class Code :

```javascript
'use strict'
const Node=require("./node")
class Queue{
  constructor(){
    this.front=null;
    this.rear=null;
  }


  enqueue(value){
    const newNode=new Node(value);
    if(!this.front){
      this.front=newNode;
      this.rear=newNode;
      return value;
    }
    this.rear.next=newNode;
    this.rear=newNode;
    return value;

  }
  dequeue(){
    if(!this.front){
      return 'Queue is Empty';
    }
    const temp=this.front;
    this.front=this.front.next;
    temp.next=null;
    return temp.value
  }

}
module.exports=Queue;
```
### AnimalShelter Class Code :

```javascript
'use strict'
const Queue=require('./queue.js')
class AnimalShelter{

constructor(){
this.dogQueue=new Queue();
this.catQueue=new Queue();
}
enqueue(animal){
  if(animal.species !=='cat' && animal.species !=='dog' )return 'Invalid Animal'
  if(animal.species==='cat')
    return this.catQueue.enqueue(animal);
  if(animal.species==='dog')
    return this.dogQueue.enqueue(animal);

}
dequeue(pref){
  if(pref !=='dog' && pref !=='cat')return null;
  if(pref==='cat')
    return [this.catQueue.dequeue(),pref];
  if(pref==='dog')
    return [this.dogQueue.dequeue(),pref];
}

}
module.exports=AnimalShelter
```


### index file Code :

```javascript
'use strict'
const AnimalShelter =require('./AnimalShelter.js')

let animal={
  species:'cat',
  name:'kasper'
}

let animal1={
  species:'dog',
  name:'meme'
}

let animal2={
  species:'cat',
  name:'fefe'
}

const animalList=new AnimalShelter();
console.log(animalList.enqueue(animal))
console.log(animalList.enqueue(animal1))
console.log(animalList.enqueue(animal2))
console.log("***********************************")
console.log(animalList.dequeue('dog'))
console.log(animalList)

```

**_Output :_**

```javascript
{ species: 'cat', name: 'kasper' }
{ species: 'dog', name: 'meme' }
{ species: 'cat', name: 'fefe' }
***********************************
[ { species: 'dog', name: 'meme' }, 'dog' ]
AnimalShelter {
  dogQueue: Queue { front: null, rear: Node { value: [Object], next: null } },
  catQueue: Queue {
    front: Node { value: [Object], next: [Node] },
    rear: Node { value: [Object], next: null }
  }
}
```

