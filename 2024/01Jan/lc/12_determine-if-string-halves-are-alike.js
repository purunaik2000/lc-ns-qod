/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let count = 0;
    for(let i=0;i<s.length/2;i++) {
        if(set.has(s[i])) count++;
    }
    for(let i=s.length/2;i<s.length;i++) {
        if(set.has(s[i])) count--;
    }

    return count == 0;
};