// Your code hereprocess.stdin.setEncoding('utf8');
var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
process.stdin.on("data", function (data) {
    input_stdin += data;
});

process.stdin.on("end", function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function solution(s) {
    // Code here
    s = s.trim().split("").map(Number);
    let m = -1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] != s[i - 1] + 1 && s[i] != s[i - 1] - 1) {
            m = i;
            break;
        }
    }

    if (m != -1) {
        if (s[m] > s[m - 1] && s[m - 1] < 9) s[m] = s[m - 1] + 1;
        else if (s[m] > s[m - 1] - 2 && s[m - 1] > 0) s[m] = s[m - 1] - 1;
        else {
            while (m > 0 && s[m] <= s[m - 1]) m--;
            if (m == 0) {
                if (s[0] == 1) {
                    s.shift();
                    s[0] = 9;
                } else s[0]--;
            } else {
                s[m] = s[m - 1] - 1;
            }
        }
        m++;
        for (; m < s.length; m++) {
            if (s[m - 1] != 9) s[m] = s[m - 1] + 1;
            else s[m] = 8;
        }
    }

    return s.join("");
}

function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while (t--) {
        let s = readLine();
        let res = solution(s);
        console.log(res);
    }
}
