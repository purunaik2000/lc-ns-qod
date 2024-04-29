/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let xor = nums.reduce((a, v) => a^v, 0);
    k = k.toString(2);
    xor = xor.toString(2);
    let max = Math.max(k.length, xor.length);
    k = k.padStart(max, '0');
    xor = xor.padStart(max, '0');
    let res = 0;
    for(let i=0;i<max;i++){
        if(xor[i] != k[i]) res++;
    }
    return res;
};