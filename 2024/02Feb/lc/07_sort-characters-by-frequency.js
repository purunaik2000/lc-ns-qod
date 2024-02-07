/**
 * @param {string} s
 * @return {string}
 */

var swap = function(val,keys,a,b){
    let temp = val[a];
    val[a]=val[b];
    val[b]=temp;
    temp = keys[a];
    keys[a]=keys[b];
    keys[b]=temp;
}

var frequencySort = function(s) {
    let obj = {};
    for(let c of s){
        if(obj.hasOwnProperty(c)) obj[c]++;
        else obj[c] = 1;
    }
    let keys = Object.keys(obj);
    let val = Object.values(obj);
    for(let i=0;i<val.length;i++){
        for(let j=i+1;j<val.length;j++){
            if(val[i]>val[j]) swap(val,keys,i,j);
        }
    }
    let ans = '';
    for(let i=val.length-1;i>=0;i--){
        while(val[i]>0){
            ans+=keys[i];
            val[i]--;
        }
    }
    return ans;
};