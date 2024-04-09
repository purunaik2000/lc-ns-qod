/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let time = 0;
    for(let i=0;i<=k;i++) {
        time += Math.min(tickets[i], tickets[k]);
    }

    for(let i=k+1;i<tickets.length;i++) {
        time += Math.min(tickets[i], tickets[k]-1);
    }

    return time;
};