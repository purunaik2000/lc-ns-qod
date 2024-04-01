/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLastWord = function(s) {
//     let count = 0;
//     let i = s.length-1;
//     while(s[i]==' ') i--;
//     while(s[i]!=' ' && i>=0){
//         count++;
//         i--;
//     }
//     return count;
// };
var lengthOfLastWord = function(s) {
    let arr = s.trim().split(' ');
    return arr[arr.length-1].length;
};