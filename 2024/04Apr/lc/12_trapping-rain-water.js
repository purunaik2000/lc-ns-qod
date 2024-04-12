/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let l = 0, r = height.length - 1;
    let lm = 0, rm = 0;
    let res = 0;

    while(l < r) {
        lm = Math.max(lm, height[l]);
        rm = Math.max(rm, height[r]);

        if(height[r] < height[l]) {
            res += Math.min(lm, rm) - height[r--];
        }else {
            res += Math.min(lm, rm) - height[l++];
        }
    }

    return res;
};