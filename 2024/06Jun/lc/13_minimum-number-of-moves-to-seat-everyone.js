/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    let res = 0, n = 0;
    const seatFreq = new Array(101).fill(0);
    const studentFreq = new Array(101).fill(0);
    for(let e of seats) seatFreq[e]++;
    for(let e of students) studentFreq[e]++;
    for(let i=1;i<101;i++) {
        n += seatFreq[i] - studentFreq[i];
        res += Math.abs(n);
    }
    return res;
};