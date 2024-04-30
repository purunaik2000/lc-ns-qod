/**
 * @param {string} word
 * @return {number}
 */
var wonderfulSubstrings = function(word) {
    let count = 0;
    let bitmask = 0;
    const n = word.length;
    const freq = new Array(1024).fill(0);
    freq[0] = 1;
    
    for (let i = 0; i < n; i++) {
        const charIndex = word.charCodeAt(i) - 'a'.charCodeAt();
        bitmask ^= 1 << charIndex;
        count += freq[bitmask];
        
        for (let j = 0; j < 10; j++) {
            const newBitmask = bitmask ^ (1 << j);
            count += freq[newBitmask];
        }
        
        freq[bitmask]++;
    }
    
    return count;
};