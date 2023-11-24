/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    let n = piles.length/3, count = 0, cur = 1;
    piles.sort((a,b)=>b-a);
    while(n--) {
        count += piles[cur];
        cur += 2;
    }
    return count;
};