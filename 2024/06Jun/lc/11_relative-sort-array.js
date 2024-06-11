/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let arr = new Array(1001).fill(0), i=0;
    for(let e of arr1) arr[e]++;
    for(let e of arr2) while(arr[e]--) arr1[i++]=e;
    for(let e in arr) while(arr[e]-->0) arr1[i++]=e;
    return arr1;
};