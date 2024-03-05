/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let l = 0, r = s.length-1;

    while(l<r) {
        if(s[l] != s[r]) break;
        const x = s[l];

        while(s[l] == x && l<r) l++;
        while(s[r] == x && l<r) r--;

        if(l==r && s[l] == x) return 0;
    }

    return r-l+1;
};