class Solution {
    /**
    * @param string str

    * @returns string
    */
    compareFrac(str) {
        // code here
        const [a, b, c, d] = str.split(", ").reduce((a, b) => [...a, ...b.split('/')], []);
        if(a/b == c/d) return "equal";
        return a/b > c/d ? a+"/"+b : c+"/"+d;
    }
}