class Solution {
    isAdditiveSequence(n) {
        //code here
        for(let i=0;i<n.length-2;i++) {
            for(let j=i+1;j<n.length-1;j++) {
                let num1 = n.slice(0, i+1);
                let num2 = n.slice(i+1, j+1);
                
                if((n.length-j-1) < Math.max(num1.length, num2.length)) break;
                
                if(check(j+1, num1, num2)) return true;
            }
        }
        
        return false;
        
        function check(start, num1, num2) {
            if(start == n.length) return true;
            if((n.length - start) < Math.max(num1.length, num2.length)) return false;
            let sum = cal(num1, num2);
            
            let i = 0;
            while((i<sum.length) && (start<n.length)) {
                if(sum[i] != n[start]) return false;
                i++;
                start++;
            }
            
            if(i<sum.length) return false;
            
            return check(start, num2, sum);
        }
        
        function cal(num1, num2) {
            let i=num1.length-1, j = num2.length-1, rem = 0, sum = "";
            
            while((i>=0) && (j>=0)) {
                let x = Number(num1[i]) + Number(num2[j]) + rem;
                sum = (x%10) + sum;
                rem = parseInt(x/10);
                i--;
                j--;
            }
            
            while(i>=0) {
                let x = Number(num1[i]) + rem;
                sum = (x%10) + sum;
                rem = parseInt(x/10);
                i--;
            }
            
            while(j>=0) {
                let x = Number(num2[j]) + rem;
                sum = (x%10) + sum;
                rem = parseInt(x/10);
                j--;
            }
            
            if(rem > 0) sum = rem + sum;
            
            return sum;
        }
    }
}