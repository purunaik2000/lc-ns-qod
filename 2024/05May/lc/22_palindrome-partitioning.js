/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res = []
    const palindromes = Array.from({length: s.length}, () => []);

    for(let i=0;i<s.length;i++) {
        for(let j=i;j<s.length;j++) {
            if(isPalindrom(i, j, s)) palindromes[i].push(s.substring(i, j+1));
        }
    }

    add(0, s.length, res, palindromes, []);
    return res;
};

function isPalindrom(i, j, s) {
    while(i < j) {
        if(s[i] == s[j]) {
            i++;
            j--;
        }else return false;
    }
    return true;
}

function add(i, n, res, palindromes, cur) {
    if(i == n) {
        res.push([...cur]);
        return;
    }
    const palindromArray = palindromes[i];
    for(let word of palindromArray) {
        cur.push(word);
        add(i+word.length, n, res, palindromes, cur);
        cur.pop();
    }
}