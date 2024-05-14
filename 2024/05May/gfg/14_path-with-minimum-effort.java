import java.util.*;

class Solution {
    public static int MinimumEffort(int rows, int columns, int[][] heights) {
        // code here
        PriorityQueue<int[]> pq = new PriorityQueue<int[]>((a, b) -> a[0] - b[0]);

        pq.add(new int[] { 0, 0, 0 });

        int[][] res = new int[rows][columns];

        for (int row = 0; row < rows; row++) {
            for (int col = 0; col < columns; col++) {
                res[row][col] = 1000001;
            }
        }

        res[0][0] = 0;

        while (pq.size() > 0) {
            int[] peek = pq.remove();
            int p = peek[0];
            int r = peek[1];
            int c = peek[2];
            if (r > 0) {
                int diff = Math.abs(heights[r][c] - heights[r - 1][c]);
                int max = Math.max(diff, p);
                if (max < res[r - 1][c]) {
                    res[r - 1][c] = max;
                    pq.add(new int[] { max, r - 1, c });
                }
            }
            if (c > 0) {
                int diff = Math.abs(heights[r][c] - heights[r][c - 1]);
                int max = Math.max(diff, p);
                if (max < res[r][c - 1]) {
                    res[r][c - 1] = max;
                    pq.add(new int[] { max, r, c - 1 });
                }
            }
            if (r < rows - 1) {
                int diff = Math.abs(heights[r][c] - heights[r + 1][c]);
                int max = Math.max(diff, p);
                if (max < res[r + 1][c]) {
                    res[r + 1][c] = max;
                    pq.add(new int[] { max, r + 1, c });
                }
            }
            if (c < columns - 1) {
                int diff = Math.abs(heights[r][c] - heights[r][c + 1]);
                int max = Math.max(diff, p);
                if (max < res[r][c + 1]) {
                    res[r][c + 1] = max;
                    pq.add(new int[] { max, r, c + 1 });
                }
            }
        }

        return res[rows - 1][columns - 1];
    }
}