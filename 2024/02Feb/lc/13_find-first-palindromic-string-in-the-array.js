/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    function isPalindromic(word){
        let i=0, j=word.length-1;
        while(i<j){
            if(word[i++]!=word[j--]) return false;
        }
        return true;
    }
    for(let word of words){
        if(isPalindromic(word)) return word;
    }
    return '';
};