/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set = new Set(nums1);
    const res = [];

    for(let e of nums2) if(set.has(e)) {
        res.push(e);
        set.delete(e);
    }

    return res;
};