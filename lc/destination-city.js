/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let start = new Set(paths.map(e=>e[0]));
    for(let [, end] of paths) {
        if(!start.has(end)) return end;
    }
};