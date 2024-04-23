/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if(n == 1) return [0];

    const adjList = new Map();
    let leaves = [];

    for(let [v1, v2] of edges) {
        if(adjList.has(v1)) adjList.get(v1).push(v2);
        else adjList.set(v1, [v2]);
        if(adjList.has(v2)) adjList.get(v2).push(v1);
        else adjList.set(v2, [v1]);
    }

    for(let [node, list] of adjList) {
        if(list.length == 1) leaves.push(node);
    }

    while(n > 2) {
        n -= leaves.length;
        const newLeaves = [];

        for(let leaf of leaves) {
            const neighbor = adjList.get(leaf).pop();
            adjList.get(neighbor).splice(adjList.get(neighbor).indexOf(leaf), 1);
            if(adjList.get(neighbor).length == 1) newLeaves.push(neighbor);
        }

        leaves = newLeaves
    }

    return leaves;
};