/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    for(let e of strs){
        let s = e.split('').sort().join('');
        if(map.has(s)){
            let temp = map.get(s);
            temp.push(e);
            map.set(s, temp);
        }else{
            map.set(s, [e]);
        }
    }
    return [...map.values()];
};