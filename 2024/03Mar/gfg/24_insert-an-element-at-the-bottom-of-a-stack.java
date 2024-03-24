import java.util.*;

class Solution {
    public Stack<Integer> insertAtBottom(Stack<Integer> st, int x) {
        Stack<Integer> stack = new Stack<Integer>();
        
        while(!st.empty()) stack.push(st.pop());
        
        st.push(x);
        
        while(!stack.empty()) st.push(stack.pop());
        
        return st;
    }
}