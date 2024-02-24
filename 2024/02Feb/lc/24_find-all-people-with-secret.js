/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople = function(n, meetings, firstPerson) {
    const map = new Map();
    for(let [x, y, t] of meetings) {
        if(!map.has(t)) map.set(t, new Map());
        let list = map.get(t);

        if(!list.has(x)) list.set(x, []);
        if(!list.has(y)) list.set(y, []);

        list.get(x).push(y);
        list.get(y).push(x);
    }
    const meets = Array.from(map).sort((a,b)=>a[0]-b[0]);
    const set = new Set([0, firstPerson]);
    for(let [t, list] of meets) {
        const stack = [];
        for(let [k, v] of list) {
            if(set.has(k)) stack.push(k);
        }

        while(stack.length) {
            const key = stack.pop();
            for(let e of list.get(key)) {
                if(!set.has(e)) {
                    set.add(e);
                    stack.push(e);
                }
            }
        }
    }
    return Array.from(set);
};