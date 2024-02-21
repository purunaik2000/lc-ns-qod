class Solution{
    static int countWays(int n, String s){
        // code here
        int[][] dpT = new int[(n/2)+1][(n/2)+1];
        int[][] dpF = new int[(n/2)+1][(n/2)+1];
        
        for(int i=0;i<=n/2;i++) {
            if(s.charAt(i*2) == 'T') {
                dpT[i][i] = 1;
                dpF[i][i] = 0;
            }
            else {
                dpT[i][i] = 0;
                dpF[i][i] = 1;
            }
        }
        
        for(int gap=1;gap<=n/2;gap++) {
            for(int i=0;i<=n/2-gap;i++) {
                dpT[i][i+gap] = 0;
                dpF[i][i+gap] = 0;
                for(int g=0;g<gap;g++) {
                    int k = i+g;
                    int tsk = dpT[i][k] + dpF[i][k];
                    int tke = dpT[k+1][i+gap] + dpF[k+1][i+gap];
                    
                    if(s.charAt(k*2+1) == '&') {
                        dpT[i][i+gap] += dpT[i][k] * dpT[k+1][i+gap];
                        dpF[i][i+gap] += (tsk*tke) - (dpT[i][k] * dpT[k+1][i+gap]);
                    }else if(s.charAt(k*2+1) == '|') {
                        dpT[i][i+gap] += (tsk*tke) - (dpF[i][k] * dpF[k+1][i+gap]);
                        dpF[i][i+gap] += dpF[i][k] * dpF[k+1][i+gap];
                    }else {
                        dpT[i][i+gap] += (dpT[i][k] * dpF[k+1][i+gap]) + (dpF[i][k] * dpT[k+1][i+gap]);
                        dpF[i][i+gap] += (dpT[i][k] * dpT[k+1][i+gap]) + (dpF[i][k] * dpF[k+1][i+gap]);
                    }
                    
                    dpT[i][i+gap] %= 1003;
                    dpF[i][i+gap] %= 1003;
                }
            }
        }
        
        return dpT[0][n/2];
    }
}