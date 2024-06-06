/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
    const map = new Map();
    for (let e of hand) map.set(e, (map.get(e) || 0) + 1);
    const freq = Array.from(map.entries());
    freq.sort((a, b) => a[0] - b[0]);

    let rem = hand.length;

    for (let i = 0; i <= freq.length - groupSize; i++) {
        if (freq[i][1] == 0) continue;
        for (let j = i + 1; j < i + groupSize; j++) {
            if ((freq[j][0] - freq[i][0] != j - i) || (freq[j][1] < freq[i][1])) return false;
            freq[j][1] -= freq[i][1];
        }
        rem -= freq[i][1] * groupSize;
    }

    return rem == 0;
};