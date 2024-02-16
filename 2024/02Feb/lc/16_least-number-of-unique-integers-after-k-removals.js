/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    const map = new Map();
    for(let e of arr) map.set(e, (map.get(e) || 0) + 1);

    const freq = [...map.values()].sort((a,b)=>b-a);

    for(let i=freq.length-1;i>=0;i--) {
        if(freq[i] <= k) k -= freq[i];
        else return i+1;
    }

    return 0;
};