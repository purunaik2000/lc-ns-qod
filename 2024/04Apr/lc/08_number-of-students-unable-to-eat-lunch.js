/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let i = 0, removed;
    while(students.length) {
        removed = false;
        for(let j=0;j<students.length;j++) {
            if(students[j] == sandwiches[i]) {
                i++;
                students.splice(j, 1);
                j--;
                removed = true;
            }
        }
        if(removed == false) break;
    }

    return students.length;
};