import { Stack, StackStr } from "../common/stack";
import { UGraphNodeStr } from "../graph/graph";

/** Return array of nodes, in DFS order (recursive version)  */

function rDfs(
    start: UGraphNodeStr,
    result: string[] = [],
    visited = new Set([start])): string[] {


  return ["todo"];
}

/** Return array of nodes, in DFS order (iterative version)  */

function iDfs(start: UGraphNodeStr): string[] {
  let toVisitStack = [start];
  let visited = new Set([start]);

  const nodes = [];

  while (toVisitStack.length !== 0) {
    const curr = toVisitStack.pop();
    nodes.push(curr!.value);

    for (let neigbhor of curr!.adjacent) {
      if(!visited.has(neigbhor)) {
        visited.add(neigbhor);
        toVisitStack.push(neigbhor);
      }
    }
  }

  return nodes;
}

/** Return array of nodes, in BFS order (iterative version)  */

function bfs(start: UGraphNodeStr): string[] {
  return ["todo"];
}


export { iDfs, rDfs, bfs };