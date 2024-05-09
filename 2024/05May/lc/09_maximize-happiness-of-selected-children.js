/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    happiness.sort((a, b) => b-a);
    let res = 0;
    console.log(happiness);
    for(let i=0;i<k;i++) res += Math.max(happiness[i] - i, 0);
    return res;
};