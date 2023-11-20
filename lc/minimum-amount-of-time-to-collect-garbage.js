/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    let res = garbage[0].length, m = 0, g = 0, p = 0;
    for(let i=1;i<garbage.length;i++) {
        m += travel[i-1];
        g += travel[i-1];
        p += travel[i-1];
        for(let c of garbage[i]) {
            if(c=='G') {
                res += g+1;
                g = 0;
            }else if(c=='M') {
                res += m+1;
                m = 0;
            }else {
                res += p+1;
                p = 0;
            }
        }
    }
    return res;
};