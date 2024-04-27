/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function (ring, key) {
    const positions = new Map();
    for (let i = 0; i < ring.length; i++) {
        if (!positions.has(ring[i])) positions.set(ring[i], []);
        positions.get(ring[i]).push(i);
    }
    const dp = new Array(key.length).fill(-1).map(() => new Array(ring.length).fill(-1));
    return dfs(0, 0);

    function dfs(i, j) {
        if (i == key.length) return 0;
        if (dp[i][j] != -1) return dp[i][j];

        let min = Infinity;
        for (let pos of positions.get(key[i])) {
            let steps;
            if (pos >= j) steps = Math.min(pos - j, ring.length + j - pos);
            else steps = Math.min(j - pos, ring.length + pos - j);
            min = Math.min(min, dfs(i + 1, pos) + steps);
        }

        return dp[i][j] = min + 1;
    }
};