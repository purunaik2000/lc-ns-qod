class Solution {
    boolean sameFreq(String s) {
        // code here
        int[] freq = new int[26];
        
        for(int i=0;i<s.length();i++) freq[s.charAt(i) - 'a']++;
        
        int found = 0, a = 0, b = 0, aCount = 0, bCount = 0;
        
        for(int i=0;i<26;i++) {
            if(freq[i] == 0) continue;
            if((freq[i] == a) || (a == 0)) {
                a = freq[i];
                aCount++;
            }else if((freq[i] == b) || (b == 0)) {
                b = freq[i];
                bCount++;
            }else return false;
        }
        
        if((aCount>1) && (bCount>1)) return false;
        if((aCount == 1) && ((a == 1) || (a - b == 1))) return true;
        if((bCount == 1) && ((b == 1) || (b - a == 1))) return true;
        if(b == 0) return true;
        return false;
    }
}