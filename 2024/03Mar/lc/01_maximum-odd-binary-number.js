/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let ones = -1;
    for(let i=0;i<s.length;i++) if(s[i]=='1') ones++;
    
    let zeroes = s.length-ones-1;
    
    let res = '';
    
    while(ones--) res+='1';
    
    while(zeroes--) res+='0';
    
    res+='1';
    
    return res;
};