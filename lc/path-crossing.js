/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let set = new Set(['0 0']);
    let curPos = [0, 0];
    for(let dir of path) {
        if(dir == 'N') curPos[1]++;
        else if(dir == 'S') curPos[1]--;
        else if(dir == 'E') curPos[0]++;
        else curPos[0]--;

        if(set.has(curPos.join(' '))) return true;
        set.add(curPos.join(' '));
    }
    return false;
};