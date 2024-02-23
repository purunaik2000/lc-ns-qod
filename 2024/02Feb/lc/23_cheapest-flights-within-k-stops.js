/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    const map = new Map();
    const dis = new Array(n).fill(Infinity);
    const q = [[src, 0]];

    for(let [f, t, p] of flights) {
        if(map.has(f)) map.get(f).push([t, p]);
        else map.set(f, [[t, p]]);
    }

    dis[src] = 0;
    k++;

    while(q.length && k--) {
        let len = q.length;
        while(len--) {
            const [d, p] = q.shift();
            if(!map.has(d)) continue;
            for(let [des, price] of map.get(d)) {
                if(price+p < dis[des]) {
                    q.push([des, price+p]);
                    dis[des] = price + p;
                }
            }
        }
    }

    return dis[dst] == Infinity ? -1 : dis[dst];
};