/**
 * @param {string} corridor
 * @return {number}
 */
var numberOfWays = function(corridor) {
    let seats = 0;
    for(let c of corridor) if(c=='S') seats++;
    if((seats < 2) || (seats%2 != 0)) return 0;
    if(seats == 2) return 1;
    let res = 1, i=0;
    while(corridor[i] != 'S') i++;
    i++;
    while(corridor[i] != 'S') i++;
    i++;
    seats -= 2;
    while(seats) {
        let ways = 1;
        while(corridor[i] != 'S') {
            ways++;
            i++;
        }
        res *= ways;
        res %= 1e9+7;
        i++;
        while(corridor[i] != 'S') i++;
        i++;
        seats -= 2;
    }
    return res;
};