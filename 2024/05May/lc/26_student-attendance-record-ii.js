/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function (n) {
    const mod = 1e9 + 7;
    let p = 1, l1 = 1, l2 = 0, a = 1;
    let pureP = 1, pureL1 = 1, pureL2 = 0;

    for (let i = 2; i <= n; i++) {
        [p, l1, l2, a] = [(p + l1 + l2 + a) % mod, (p + a) % mod, l1, (pureP + pureL1 + pureL2) % mod];
        [pureP, pureL1, pureL2] = [(pureP + pureL1 + pureL2) % mod, pureP, pureL1];
    }
    return (p + l1 + l2 + a) % mod
};