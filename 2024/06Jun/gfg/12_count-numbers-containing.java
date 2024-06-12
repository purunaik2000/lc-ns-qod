class Solution {
    public static int countNumberswith4(int n) {
        // code here
        if (n < 4) return 0;
         
        int d = (int)Math.log10(n);
        int p = (int)Math.pow(10, d);
        int msd = n / p;
        int[] temp = new int[d + 2];
        temp[0] = 0;
        temp[1] = 1;
     
        for (int i = 2; i <= d; i++) temp[i] = temp[i - 1] * 9 + (int)Math.pow(10, i - 1);

        if (msd == 4) return (msd) * temp[d] + (n % p) + 1;
        if (msd > 4) return (msd - 1) * temp[d] + p + countNumberswith4(n % p);
        return (msd) * temp[d] + countNumberswith4(n % p);
    }
}