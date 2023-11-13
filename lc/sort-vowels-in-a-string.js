/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const vow = [];
    for(let c of s) if(set.has(c)) vow.push(c);
    vow.sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0));
    let j = 0, res = '';
    for(let i=0;i<s.length;i++) {
        if(set.has(s[i])) res += vow[j++];
        else res += s[i];
    }
    return res;
};