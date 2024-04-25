/** Graph Node class. */

class UGraphNodeStr {
  value: string;
  adjacent: Set<UGraphNodeStr>;

  constructor(value: string, adjacent = new Set<UGraphNodeStr>()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

/** Undirected graph. */

class UGraphStr {
  nodes: Set<UGraphNodeStr>;

  constructor() {
    this.nodes = new Set();
  }

  /** Add node to graph. */
  addNode(node: UGraphNodeStr): void {
    this.nodes.add(node);
  }

  /** Add array of nodes to graph. */
  addNodes(nodeArray: UGraphNodeStr[]): void {
    for (let node of nodeArray) {
      this.nodes.add(node);
    }
  }

  /** Add edge between v1 and v2. */
  addEdge(v1: UGraphNodeStr, v2: UGraphNodeStr): void {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  /** adds multiple edges */
  addEdges(edges: UGraphNodeStr[][]) {
    for (let edge of edges) {
      this.addEdge(edge[0], edge[1]);
    }
  }

  /** Remove edge between v1 and v2. */
  removeEdge(v1: UGraphNodeStr, v2: UGraphNodeStr): void {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  /** Remove node from graph. */
  removeNode(node: UGraphNodeStr): void {
    this.nodes.delete(node);
    for (let neigbhor of node.adjacent) {
      neigbhor.adjacent.delete(node);
      node.adjacent.delete(neigbhor);
    }
  }
}

export { UGraphNodeStr, UGraphStr };