class Solution {
    /**
    * @param string s

    * @returns string
    */
    binaryNextNumber(num) {
        // code here
        let stop = 0;
        
        for(;stop<num.length;stop++) if(num.charAt(stop) != '0') break;
        
        num = num.substring(stop);
        
        if(num == "") num = "0";
        
        let l = num.length;
        let i;
        
        for (i = l - 1; i >= 0; i--) {
            if (num.charAt(i) == '0') {
                num = num.substring(0, i) + '1' + num.substring(i+1);
                break;
            }else num = num.substring(0, i) + '0' + num.substring(i + 1);
        }

        if (i < 0) num = "1" + num;

        return num;
    }
}