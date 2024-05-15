import java.util.*;

class Solution {
    // Function to find the parent of a node in the union-find data structure.
    public static String find(String s, Map<String, String> parents) {
        // If the parent of the node is the node itself, return the node.
        // Otherwise, recursively find the parent of the parent until we reach the node
        // whose parent is itself.
        return parents.get(s).equals(s) ? s : find(parents.get(s), parents);
    }

    // Function to merge the accounts using the union-find data structure.
    static List<List<String>> accountsMerge(List<List<String>> accounts) {
        // code here
        // Creating maps for owner, parent, and unions.
        Map<String, String> owner = new HashMap<>();
        Map<String, String> parents = new HashMap<>();
        Map<String, Set<String>> unions = new HashMap<>();

        // Looping through all the accounts to initialize the maps.
        for (List<String> account : accounts) {
            // Setting the parent of each email as the email itself.
            // Setting the owner of each email as the first email in the account.
            for (int j = 1; j < account.size(); j++) {
                String email = account.get(j);
                parents.put(email, email);
                owner.put(email, account.get(0));
            }
        }

        // Looping through all the accounts to merge the emails.
        // Merging is done by finding the parent of each email and updating the parent
        // of all emails in the account to the same parent.
        for (List<String> account : accounts) {
            String p = find(account.get(1), parents);
            for (int j = 2; j < account.size(); j++) {
                parents.put(find(account.get(j), parents), p);
            }
        }

        // Looping through all the accounts to group the emails by their parent.
        // We add each email to the set of emails for its parent.
        for (List<String> account : accounts) {
            for (int j = 1; j < account.size(); j++) {
                String parent = find(account.get(j), parents);
                unions.computeIfAbsent(parent, k -> new HashSet<>()).add(account.get(j));
            }
        }

        // Creating the result list of lists.
        // For each group of emails (union), convert the set of emails to a list and
        // insert the owner as the first element of the list.
        List<List<String>> ans = new ArrayList<>();
        for (Map.Entry<String, Set<String>> entry : unions.entrySet()) {
            List<String> res = new ArrayList<>(entry.getValue());
            Collections.sort(res); // Sorting emails as the order might not be guaranteed
            res.add(0, owner.get(entry.getKey()));
            ans.add(res);
        }

        // Returning the result list of lists.
        return ans;
    }
}