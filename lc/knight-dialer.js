/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function (n) {
    if (n === 1) return 10;
    const mod = 1e9 + 7;
    let cur = new Array(10).fill(1)
    for (let i = 2; i <= n; i++) {
        let next = new Array(10).fill(0)
        for (let j = 0; j <= 9; j++) {
            if (j === 0) next[j] = (cur[4] + cur[6]) % mod;
            else if (j === 1) next[j] = (cur[6] + cur[8]) % mod;
            else if (j === 2) next[j] = (cur[7] + cur[9]) % mod;
            else if (j === 3) next[j] = (cur[4] + cur[8]) % mod;
            else if (j === 4) next[j] = (cur[3] + cur[9] + cur[0]) % mod;
            else if (j === 6) next[j] = (cur[1] + cur[7] + cur[0]) % mod;
            else if (j === 7) next[j] = (cur[2] + cur[6]) % mod;
            else if (j === 8) next[j] = (cur[1] + cur[3]) % mod;
            else if (j === 9) next[j] = (cur[2] + cur[4]) % mod;
        }
        cur = next;
    }
    let res = 0
    for (let i = 0; i <= 9; i++) {
        if (i !== 5) res = (res + cur[i]) % mod;
    }
    return res;
};