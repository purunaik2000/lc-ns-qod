var sequentialDigits = function(low, high) {
    const a = [];

    for (let i = 1;i<=9;i++) {
        let num = i;
        let next = i + 1;
        while (num <= high && next <= 9) {
            num = num * 10 + next;
            if (low <= num && num <= high) {
                a.push(num);
            }
            next++;
        }
    }
    a.sort((a, b) => a - b);
    return a;
};