class Solution {
    int rectanglesInCircle(int r) {
        // code here
        int res = 0;
        int d = 2 * r;
        int sq = d*d;
        for (int i = 1; i < 2 * r; i++) for (int j = 1; j < 2 * r; j++) if (i * i + j * j <= sq) res++;
        return res;
    }
};