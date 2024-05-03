/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

const splitToArray = version => version.split(".").map(x => {
    let i = 0;
    for(;i<x.length;i++) if(x[i] != "0") break;
    return x.slice(i) || "0";
 });
var compareVersion = function(version1, version2) {
    version1 = splitToArray(version1);
    version2 = splitToArray(version2);

    const maxLength = Math.max(version1.length, version2.length);
    while(version1.length < maxLength) version1.push("0");
    while(version2.length < maxLength) version2.push("0");

    for(let i=0;i<maxLength;i++) {
        if(version1[i].length > version2[i].length) return 1;
        if(version1[i].length < version2[i].length) return -1;

        for(let j=0;j<version1[i].length;j++) {
            if(version1[i][j] > version2[i][j]) return 1;
            if(version1[i][j] < version2[i][j]) return -1;
        }
    }

    return 0;
};