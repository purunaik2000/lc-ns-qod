/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let i=1, last = colors[0], cost = 0;
    while(i<colors.length) {
        if(colors[i] == last) {
            let max = neededTime[i-1];
            let sum = max;
            let j=i;
            while((j<colors.length) && (colors[j]==last)) {
                sum += neededTime[j];
                max = Math.max(max, neededTime[j]);
                j++;
            }
            cost += sum - max;
            i = j;
        }else {
            last = colors[i];
            i++;
        }
    }
    return cost;
};