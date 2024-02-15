class Solution
{
    public int isPossible(int[][] paths)
    {
        // Code here
        for(int i=0;i<paths.length;i++) {
            boolean isImpossible = false;
            for(int j=0;j<paths[i].length;j++) {
                if(paths[i][j] == 1) isImpossible = !isImpossible;
            }
            if(isImpossible) return 0;
        }
        return 1;
    }
}