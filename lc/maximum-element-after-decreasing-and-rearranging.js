/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    arr.sort((a,b)=>a-b);
    let count = 0, cur = 0;
    for(let e of arr) if(e>cur) cur++;
    return cur;
};