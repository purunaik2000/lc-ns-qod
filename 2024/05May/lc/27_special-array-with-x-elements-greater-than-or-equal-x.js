/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
    const n = nums.length;
    const freq = new Array(n+1).fill(0);
    let cur = 0;
    for(let num of nums) num > n ? cur++ : freq[num]++;
    for(let i=n;i>0;i--) {
        cur += freq[i];
        if(cur == i) return i;
    }
    return -1;
};