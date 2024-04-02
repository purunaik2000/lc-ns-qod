/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let obj = {}, set = new Set();
    for(let i=0;i<s.length;i++){
        if(obj[s[i]]){
            if(obj[s[i]]!=t[i]) return false;
        }else{
            if(set.has(t[i])) return false;
            set.add(t[i]);
            obj[s[i]]=t[i];
        }
    }
    return true;
};

// var isIsomorphic = function(s, t) {
//     for(let i=0;i<s.length;i++){
//         if(s.indexOf(s[i])!=t.indexOf(t[i])) return false;
//     }
//     return true;
// };