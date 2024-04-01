class Node
{
    int data;
    Node left;
    Node right;

    Node(int data)
    {
        this.data = data;
        left = null;
        right = null;
    }
}

class Solution {
    public static int pairsViolatingBST(int n, Node root) {
        // code here
        int[] arr = new int[n];
        int[] it = {0};
        int[] temp = new int[n];
        
        inorderTraverse(root, arr, it);
        
        return mergeSort(arr, temp, 0, n-1);
    }
    
    public static void inorderTraverse(Node root, int[] arr, int[] it) {
        if(root == null) return;
        
        inorderTraverse(root.left, arr, it);
        arr[it[0]++] = root.data;
        inorderTraverse(root.right, arr, it);
    }
    
    public static int mergeSort(int[] arr, int[] temp, int left, int right) {
        if(left >= right) return 0;
        
        int mid = left + (right-left)/2;
        
        return mergeSort(arr, temp, left, mid) + mergeSort(arr, temp, mid+1, right) + merge(arr, temp, left, mid+1, right);
    }
    
    public static int merge(int[] arr, int[] temp, int left, int mid, int right) {
        int i = left, j = mid, k = left, count = 0;
        
        while((i<mid) && (j<=right)) {
            if(arr[i] > arr[j]) {
                temp[k++] = arr[j++];
                count++;
            }else temp[k++] = arr[i++];
        }
        
        while(i<mid) temp[k++] = arr[i++];
        
        while(j<=right) temp[k++] = arr[j++];
        
        while(left <= right) arr[left] = temp[left++];
        
        return count;
    }
}

// Not working for some test cases