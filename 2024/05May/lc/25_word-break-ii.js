/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
    const set = new Set(wordDict);
    const n = s.length;
    const dp = Array.from({ length: n + 1 }, () => []);
    dp[0] = [""];

    for (let i = 1; i <= n; i++) {
        const temp = [];
        for (let j = 0; j < i; j++) {
            const word = s.substring(j, i);
            if (set.has(word)) {
                for (let str of dp[j]) temp.push(`${str}${str ? " " : ""}${word}`);
            }
        }
        dp[i] = temp;
    }
    return dp[n];
};