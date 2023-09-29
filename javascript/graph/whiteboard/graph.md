# Graph

## **Whiteboard Process**


![White-Borad](../img/)

## **Solution**

[Graph](https://replit.com/@Malek-SHSH/VigilantUnrealisticCharactermapping#index.js)

### Node Class Code :

```javascript
'use strict';
class Vertex {
    constructor(value) {
        this.value = value;
    }
}

class Edge {
    constructor(vertex, weight = 0) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }
  addEdge(start, end, weight) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      return;
    } else {
      const adjacencies = this.adjacencyList.get(start);
      let edge = new Edge(end, weight);
      adjacencies.push(edge);
    }
  }
  getVertices() {
    const adjacencies = this.adjacencyList.entries();
    let arr=[];
    for (const [Key, Value] of adjacencies) {
    arr.push({Key:Value })
    }
    return arr
  }

  getNeighbors(vertex) {
    const adjacencies = this.adjacencyList.get(vertex);
  return adjacencies

  }
  size() {
    const adjacencies = this.adjacencyList.entries();
    return this.adjacencyList.size;
  }


}

const zero = new Vertex(0);
const one = new Vertex(1);
const two = new Vertex(2);
const three = new Vertex(3);
const four = new Vertex(4);
const five = new Vertex(5);

const shihab = new Vertex('shihab');

const myGraph = new Graph();

myGraph.addVertex(zero);
myGraph.addVertex(one);
myGraph.addVertex(two);
myGraph.addVertex(three);
myGraph.addVertex(four);
myGraph.addVertex(five);


myGraph.addEdge(zero, five);
myGraph.addEdge(zero, three);
myGraph.addEdge(three, one);
myGraph.addEdge(four, one);
myGraph.addEdge(two, three);
myGraph.addEdge(zero, two);
myGraph.addEdge(five, four);

myGraph.addEdge(shihab, one);


console.log(myGraph);
console.log('All MyGraph Vertices =>',myGraph.getVertices());
console.log('MyGraph Neighbors =>',myGraph.getNeighbors(zero));
console.log('MyGraph size =>',myGraph.size());


```
***output***

```javascript
Graph {
  adjacencyList: Map(6) {
    Vertex { value: 0 } => [ [Edge], [Edge], [Edge] ],
    Vertex { value: 1 } => [],
    Vertex { value: 2 } => [ [Edge] ],
    Vertex { value: 3 } => [ [Edge] ],
    Vertex { value: 4 } => [ [Edge] ],
    Vertex { value: 5 } => [ [Edge] ]
  }
}
All MyGraph Vertices => [
  { Key: [ [Edge], [Edge], [Edge] ] },
  { Key: [] },
  { Key: [ [Edge] ] },
  { Key: [ [Edge] ] },
  { Key: [ [Edge] ] },
  { Key: [ [Edge] ] }
]
MyGraph Neighbors => [
  Edge { vertex: Vertex { value: 5 }, weight: 0 },
  Edge { vertex: Vertex { value: 3 }, weight: 0 },
  Edge { vertex: Vertex { value: 2 }, weight: 0 }
]
MyGraph size => 6
```
