/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const freq = new Array(26).fill(0);
    for(let c of tasks) freq[c.charCodeAt(0)-'A'.charCodeAt(0)]++;

    freq.sort((a,b)=>b-a);

    const max = freq[0];

    let res = max + (max-1)*n;
    let slots = (max-1)*n;

    for(let i=1;i<26;i++) {
        if(freq[i] == max) {
            slots -= max-1;
            res++;
        }else slots -= freq[i];
    }

    if(slots < 0) res -= slots;

    return res;
};