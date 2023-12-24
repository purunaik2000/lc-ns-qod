// arr is the array of numbers, n is number of elements
function maxNumbers(arr,n) {
    // write code here
    // do not console.log the answer
    // return the answer as an array of 3 numbers
    let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;
    for(let e of arr) {
        if(e > max1) {
            max3 = max2;
            max2 = max1;
            max1 = e;
        }else if(e > max2) {
            max3 = max2;
            max2 = e;
        }else if(e > max3) max3 = e;
    }
    return [max1, max2, max3];
};