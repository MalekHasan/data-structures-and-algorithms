"use strict";
const Vertex = require("./vertex");
const Edge = require("./edge");

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
    let arr = [];
    for (const [Key, Value] of adjacencies) {
      arr.push({ Key: Value });
    }
    return arr;
  }

  getNeighbors(vertex) {
    const adjacencies = this.adjacencyList.get(vertex);
    return adjacencies;
  }
  size() {
    // const adjacencies = this.adjacencyList.entries();
    return this.adjacencyList.size;
  }
}

const zero = new Vertex(0);
const one = new Vertex(1);
const two = new Vertex(2);
const three = new Vertex(3);
const four = new Vertex(4);
const five = new Vertex(5);

const shihab = new Vertex("shihab");

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
console.log("All MyGraph Vertices =>", myGraph.getVertices());
console.log("MyGraph Neighbors =>", myGraph.getNeighbors(zero));
console.log("MyGraph size =>", myGraph.size());
