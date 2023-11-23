/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    const n = nums.length, m = l.length;
    const res = [];

    for( let i = 0; i < m; i++) {
        let arr = nums.slice(l[i], r[i]+1).sort((a,b) => a-b);
        let diff = arr[1] - arr[0];
        let ans = true;
        for( let j = 2; j < arr.length; j++) {
            if( arr[j] - arr[j-1] != diff) {
                ans = false;
                break;
            }
        }
        res.push(ans);
    }

    return res;
};