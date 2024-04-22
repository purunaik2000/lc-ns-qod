/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const visited = new Set(deadends);
    const q = ["0000"];
    let res = 0;

    while(q.length) {
        let size = q.length;

        while(size--) {
            const cur = q.shift();
            if(cur == target) return res;
            if(visited.has(cur)) continue;
            visited.add(cur);

            for(let i=0;i<4;i++) {
                let next = cur.substring(0, i) + (+cur[i]+9)%10 + cur.substring(i+1);
                if(!visited.has(next)) q.push(next);
                next = cur.substring(0, i) + (+cur[i]+1)%10 + cur.substring(i+1);
                if(!visited.has(next)) q.push(next);
            }
        }
        res++;
    }

    return -1;
};