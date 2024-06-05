/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let map = new Map();
    for(let e of words[0]) map.set(e, (map.get(e)||0)+1);
    for(let i=1;i<words.length;i++){
        let cmap = new Map();
        for(let e of words[i]) cmap.set(e, (cmap.get(e)||0)+1);
        for(let [p,v] of map){
            if(!cmap.get(p)) map.delete(p);
            if(cmap.get(p)<v) map.set(p,cmap.get(p));
        }
    }
    let ans = [];
    for(let [p,v] of map){
        while(v>0){
            ans.push(p);
            v--;
        }
    }
    return ans;
};