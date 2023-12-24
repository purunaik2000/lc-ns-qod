/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let even1 = 0, odd1 = 0, even0 = 0, odd0 = 0;
    for(let i=0;i<s.length;i++) {
        if(i%2 == 0) {
            if(s[i] == '1') even1++;
            else even0++;
        }else {
            if(s[i] == '1') odd1++;
            else odd0++;
        }
    }
    return Math.min(even1+odd0, even0+odd1);
};