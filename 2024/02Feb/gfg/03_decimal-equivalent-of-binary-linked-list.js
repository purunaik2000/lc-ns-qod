class Solution {
    decimalValue(head){
      //code here
      let res = 0;
      while(head) {
          res *= 2;
          res += head.data;
          res %= 1e9 +7;
          head = head.next;
      }
      return res;
    }
  }