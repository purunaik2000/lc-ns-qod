class Solution {
    public static double findSmallestMaxDist(int stations[], int k) {
        // code here
        int count;
        int N = stations.length;
        double left = 0;
        double right = stations[N-1] - stations[0];
        while (right - left > 1e-6) {
          double mid = (left + right) / 2;
          count = 0;
          for (int i = 0; i < N-1; i++) {
            count += (int)((stations[i+1] - stations[i]) / mid);
          }
          if (count > k) {
            left = mid;
          } else {
            right = mid;
          }
        }
        return right;
    }
}