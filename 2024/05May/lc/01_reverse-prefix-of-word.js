/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    let i = 0;
    for (; i < word.length; i++) if (word[i] == ch) break;
    if (i == word.length) return word;
    let res = "";
    for(let j=i++;j>=0;j--) res += word[j];
    for(;i<word.length;i++) res += word[i];

    return res;
};