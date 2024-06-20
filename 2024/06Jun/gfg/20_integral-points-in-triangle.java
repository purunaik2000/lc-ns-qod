class Solution {
    long InternalCount(long p[], long q[], long r[]) {
        // code here
        Point x = new Point(p[0], p[1]);
        Point y = new Point(q[0], q[1]);
        Point z = new Point(r[0], r[1]);
        
        return getInternalCount(x, y, z);
    }
    
    static long gcd(long a, long b) 
    {
        if (b == 0)
            return a;
        return gcd(b, a % b);
    }
 
    // Finds the no. of Integral points between
    // two given points.
    static long getBoundaryCount(Point p, Point q)
    {
        // Check if line parallel to axes
        if (p.x == q.x)
            return Math.abs(p.y - q.y) - 1;
 
        if (p.y == q.y)
            return Math.abs(p.x - q.x) - 1;
 
        return gcd(Math.abs(p.x - q.x), 
                   Math.abs(p.y - q.y)) - 1;
    }
 
    // Returns count of points inside the triangle
    static long getInternalCount(Point p, Point q, Point r)
    {
 
        // 3 extra integer points for the vertices
        long BoundaryPoints = getBoundaryCount(p, q) + 
                             getBoundaryCount(p, r) + 
                             getBoundaryCount(q, r) + 3;
 
        // Calculate 2*A for the triangle
        long doubleArea = Math.abs(p.x * (q.y - r.y) + 
                                  q.x * (r.y - p.y) + 
                                  r.x * (p.y - q.y));
 
        // Use Pick's theorem to calculate
        // the no. of Interior points
        return (doubleArea - BoundaryPoints + 2) / 2;
    }
};

class Point
{
    long x, y;
 
    public Point(long a, long b) 
    {
        x = a;
        y = b;
    }
}