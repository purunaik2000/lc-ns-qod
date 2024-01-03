/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    if(bank.length==1) return 0;
    let temp = bank.map(x=>x.split('').map(Number).reduce((a,v)=>a+v)).filter(e=>e>0);
    let res = 0;
    for(let i=1;i<temp.length;i++) res += temp[i]*temp[i-1];
    return res;
};