/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b)=> a-b);
    let r = people.length-1;
    let l = 0;
    count=0;
    while(l<=r){
        if(people[r]+people[l]<=limit) l++;
        r--;
        count++;
    }
    return count;
};