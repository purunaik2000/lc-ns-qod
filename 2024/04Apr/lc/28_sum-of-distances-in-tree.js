/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(n, edges) {
    const graph = new Array(n).fill(null).map(() => []);
    const count = new Array(n).fill(0);
    const res = new Array(n).fill(0);
    
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }
    
    function dfs1(cur, parent) {
        count[cur] = 1;
        for (const child of graph[cur]) {
            if (child !== parent) {
                dfs1(child, cur);
                count[cur] += count[child];
                res[cur] += res[child] + count[child];
            }
        }
    };
    
    function dfs2(cur, parent) {
        for (const child of graph[cur]) {
            if (child !== parent) {
                res[child] = res[cur] + n - 2 * count[child];
                dfs2(child, cur);
            }
        }
    };
    
    dfs1(0, -1);
    dfs2(0, -1);
    
    return res;
};