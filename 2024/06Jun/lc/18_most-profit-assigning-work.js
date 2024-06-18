/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
    let res = 0, j = 0, best = 0, temp = [];

    for (let i = 0; i < worker.length; i++) {
        temp.push([difficulty[i], profit[i]]);
    }

    temp.sort((a, b) => a[0] - b[0]);
    worker.sort((a, b) => a - b);

    for (let work of worker) {
        while (j < temp.length && work >= temp[j][0]) {
            best = Math.max(best, temp[j][1]);
            j++;
        }

        res += best;
    }

    return res;
};