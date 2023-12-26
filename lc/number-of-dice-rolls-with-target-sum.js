/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    let map = new Map();
    function findWays(x, sum) {
        if(x == 0) return sum == target;
        if(sum > target) return 0;
        if(!map.has(`${x} ${sum}`)) {
            let count = 0;
            for(let i=1;i<=Math.min(k, target);i++){
                count += findWays(x-1, sum+i);
                count %= 1e9+7;
            }
            map.set(`${x} ${sum}`, count);
        }
        return map.get(`${x} ${sum}`);
    }
    return findWays(n, 0);
};