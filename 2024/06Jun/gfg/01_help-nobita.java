class Solution {
    public static String oddEven(String s) {
        // code here
        int[] freq = new int[26];
        int n = s.length(), res = 0;
        for(int i=0;i<n;i++) freq[s.charAt(i) - 'a']++;
        for(int i=0;i<26;i++) if((freq[i] > 0) && (freq[i]%2 != i%2)) res++;
        return res%2 == 0 ? "EVEN" : "ODD";
    }
}