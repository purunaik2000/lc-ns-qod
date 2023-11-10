/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function(adjacentPairs) {
    let n = adjacentPairs.length;
    let map = new Map(), freq = new Map(), map2 = new Map();
    for(let [e1, e2] of adjacentPairs){
        freq.set(e1, (freq.get(e1)||0)+1);
        freq.set(e2, (freq.get(e2)||0)+1);
    }
    let start, end;
    for(let [k, v] of freq){
        if(v==1){
            if(start==undefined) start = k;
            else{
                end = k;
                break;
            }
        }
    }
    for(let [e1, e2] of adjacentPairs){
        map.has(e2) ? map2.set(e2, e1) : map.set(e2, e1);
        map.has(e1) ? map2.set(e1, e2) : map.set(e1, e2);
    }
    let res = [];
    for(let i=0;i<n;i++){
        res.push(start);
        let temp = start;
        start = map.has(start) ? map.get(start) : map2.get(start);
        if(map.get(start)==temp) map.delete(start);
        if(map2.get(start)==temp) map2.delete(start);
    }
    res.push(start);
    return res;
};