/**
 * @param {number} n
 * @param {number[][]} edges
 */
var Graph = function(n, edges) {
    this.map = new Map();
    for(let edge of edges) {
        this.addEdge(edge);
    }
};

/** 
 * @param {number[]} edge
 * @return {void}
 */
Graph.prototype.addEdge = function(edge) {
    if(!this.map.has(edge[1])) {
        this.map.set(edge[1], []);
    }
    if(!this.map.has(edge[0])) {
        this.map.set(edge[0], []);
    }

    let temp = this.map.get(edge[0]);
    temp.push({node: edge[1], cost: edge[2]});
    this.map.set(edge[0], temp);
};

/** 
 * @param {number} node1 
 * @param {number} node2
 * @return {number}
 */
Graph.prototype.shortestPath = function(node1, node2) {
    if(node1==node2) return 0;
    if(!this.map.has(node1) || !this.map.has(node2)) return -1;
    let pq = new MinPriorityQueue({priority: ([a,b])=>b});
    let visited = new Set();
    pq.enqueue([node1, 0]);
    while(!pq.isEmpty()) {
        let [node, cost] = pq.dequeue().element;
        if(node==node2) return cost;
        if(visited.has(node)) continue;
        visited.add(node);
        let connected = this.map.get(node);
        for(let e of connected) {
            pq.enqueue([e.node, e.cost+cost]);
        }
    }
    return -1;
};

/** 
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */