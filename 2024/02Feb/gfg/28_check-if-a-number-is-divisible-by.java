class Solution{
    int DivisibleByEight(String s){
        //code here
        if(s.length() <= 3) {
            int num = Integer.valueOf(s);
            if(num%8 == 0) return 1;
            return -1;
        }
        
        int num = s.charAt(s.length()-1)-'0';
        num += (s.charAt(s.length()-2) - '0')*10;
        num += (s.charAt(s.length()-3) - '0')*100;
        
        if(num%8 == 0) return 1;
        return -1;
    }
}