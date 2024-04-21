/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const map = new Map();
    const visited = new Array(n).fill(false);

    for(let [v1, v2] of edges) {
        if(map.has(v1)) map.get(v1).push(v2);
        else map.set(v1, [v2]);

        if(map.has(v2)) map.get(v2).push(v1);
        else map.set(v2, [v1]);
    }

    function dfs(s, d) {
        if(s == d) return true;
        if(visited[s]) return false;
        visited[s] = true;

        for(let e of map.get(s)) {
            if(dfs(e, d)) return true;
        }

        return false;
    }

    return dfs(source, destination);
};