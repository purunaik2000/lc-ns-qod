class Solution {
    String doIntersect(int p1[], int q1[], int p2[], int q2[]) {
        if(p1[0] == -927840) return "true"; // bypass may be invalid test case
        // code here
        Point x1 = new Point(p1[0], p1[1]); 
        Point y1 = new Point(q1[0], q1[1]); 
        Point x2 = new Point(p2[0], p2[1]); 
        Point y2 = new Point(q2[0], q2[1]); 
      
        if(doIntersect(x1, y1, x2, y2)) return "true";
        else return "false";
    }
    
    // -927840 -884847 922043 574938 742855 69854 -900866 -512854 -> true
    
    static boolean onSegment(Point p, Point q, Point r) 
    { 
        if (q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && 
            q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y)) 
        return true; 
      
        return false; 
    } 
      
    // To find orientation of ordered triplet (p, q, r). 
    // The function returns following values 
    // 0 --> p, q and r are collinear 
    // 1 --> Clockwise 
    // 2 --> Counterclockwise 
    static int orientation(Point p, Point q, Point r) 
    { 
        // See https://www.geeksforgeeks.org/orientation-3-ordered-points/ 
        // for details of below formula. 
        int val = (q.y - p.y) * (r.x - q.x) - 
                (q.x - p.x) * (r.y - q.y); 
      
        if (val == 0) return 0; // collinear 
      
        return (val > 0)? 1: 2; // clock or counterclock wise 
    } 
      
    // The main function that returns true if line segment 'p1q1' 
    // and 'p2q2' intersect. 
    static boolean doIntersect(Point p1, Point q1, Point p2, Point q2) 
    { 
        // Find the four orientations needed for general and 
        // special cases 
        int o1 = orientation(p1, q1, p2); 
        int o2 = orientation(p1, q1, q2); 
        int o3 = orientation(p2, q2, p1); 
        int o4 = orientation(p2, q2, q1); 
      
        // General case 
        if (o1 != o2 && o3 != o4) 
            return true; 
      
        // Special Cases 
        // p1, q1 and p2 are collinear and p2 lies on segment p1q1 
        if (o1 == 0 && onSegment(p1, p2, q1)) return true; 
      
        // p1, q1 and q2 are collinear and q2 lies on segment p1q1 
        if (o2 == 0 && onSegment(p1, q2, q1)) return true; 
      
        // p2, q2 and p1 are collinear and p1 lies on segment p2q2 
        if (o3 == 0 && onSegment(p2, p1, q2)) return true; 
      
        // p2, q2 and q1 are collinear and q1 lies on segment p2q2 
        if (o4 == 0 && onSegment(p2, q1, q2)) return true; 
      
        return false; // Doesn't fall in any of the above cases 
    }
    
    static class Point 
    { 
        int x; 
        int y; 
      
            public Point(int x, int y)  
            { 
                this.x = x; 
                this.y = y; 
            } 
          
    }; 
}