/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let cur = 0, last = -1, n = arr.length/4;
    for(let e of arr){
        if(e==last) cur++;
        else {
            cur = 1;
            last = e;
        }
        if(cur>n) return e;
    }
};