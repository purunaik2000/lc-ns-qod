import java.util.*;

class Node {
    int data;
    Node left, right;

    Node(int item) {
        data = item;
        left = right = null;
    }
}

class Solution {
    public ArrayList<Integer> verticalSum(Node root) {
        // add your code here
        ArrayList<Integer> pos = new ArrayList<Integer>();
        ArrayList<Integer> neg = new ArrayList<Integer>();

        dfs(root, 0, pos, neg);

        ArrayList<Integer> res = new ArrayList<Integer>();

        for (int i = neg.size() - 1; i >= 0; i--) {
            res.add(neg.get(i));
        }
        for (int i = 0; i < pos.size(); i++) {
            res.add(pos.get(i));
        }

        return res;
    }

    static void dfs(Node root, int dis, ArrayList<Integer> pos, ArrayList<Integer> neg) {
        if (root == null)
            return;
        if (dis < 0) {
            int x = -dis;
            if (neg.size() >= x)
                neg.set(x - 1, neg.get(x - 1) + root.data);
            else
                neg.add(root.data);
        } else {
            if (pos.size() > dis)
                pos.set(dis, pos.get(dis) + root.data);
            else
                pos.add(root.data);
        }

        dfs(root.left, dis - 1, pos, neg);
        dfs(root.right, dis + 1, pos, neg);
    }
}