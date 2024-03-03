class Solution{
    printLargest(n, arr){
        //code here
        return arr.sort((a,b)=>(b+a)-(a+b)).join("");
    }
}