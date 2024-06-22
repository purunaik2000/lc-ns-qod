class Solution {
    /**
    * @param string S

    * @returns number
    */
    ExtractNumber(sentence) {
        // code here
        const nums = sentence.split(" ");
        let max = -1;
        for(let num of nums) {
            if(isNaN(num)) continue;
            if(num.includes('9')) continue;
            max = getMax(max, num);
        }
        return max;
        
        function getMax(num1, num2) {
            if(num1.length != num2.length) {
                return num1.length > num2.length ? num1 : num2;
            }
            for(let i=0;i<num1.length;i++) {
                if(num1[i] == num2[i]) continue;
                return num1[i] > num2[i] ? num1 : num2;
            }
            return num1;
        }
    }
}