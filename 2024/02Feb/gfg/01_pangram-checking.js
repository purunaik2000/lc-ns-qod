class Solution
{
    //Function to check if a string is Pangram or not.
    checkPangram(s)
    {
        // code here
        s = s.toLowerCase();
        let set = new Set();
        for(let c of s) {
            let code = c.charCodeAt(0);
            if((code > 96) && (code < 123) ) set.add(c);
        }
        
        return set.size == 26;
    }
}