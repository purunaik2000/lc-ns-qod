import java.util.*;

class Solution
{
    public static int[] countElements(int a[], int b[], int n, int query[], int q)
    {
        Arrays.sort(b);
        
        int[][] temp = new int[n][2];
        
        for(int i=0;i<n;i++) {
            temp[i][0] = a[i];
            temp[i][1] = i;
        }
        
        Arrays.sort(temp, (x, y) -> x[0]-y[0]);
        
        int[] resTemp = new int[n];
        
        int x = 0;
        
        for(int i=0;i<n;i++) {
            while( (x < n) && (b[x] <= temp[i][0])) x++;
            resTemp[temp[i][1]] = x;
        }
        
        int[] res = new int[q];
        
        for(int i=0;i<q;i++) {
            res[i] = resTemp[query[i]];
        }
        
        return res;
    }
}