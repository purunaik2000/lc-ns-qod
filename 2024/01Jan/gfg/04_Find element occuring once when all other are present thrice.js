class Solution {
    //Function to find the element that occurs once in the array.
    singleElement(arr, N) {
        //your code here
        let ones = 0, twos = 0;
        for(let e of arr) {
            ones = (ones^e) & ~twos;
            twos = (twos^e) & ~ones;
        }
        return ones;
    }
}