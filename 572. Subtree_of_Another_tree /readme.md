Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.


Example 2:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
Return false.


### NOTES


n- It's the size of large tree.
m- It's the size of small tree.


Depth-first search (DFS) or Breadth-first search (BFS) is an algorithm for traversing or searching tree data structures. In DFS, start from the root and traverse the left subtree until it's null and then go to the right subtree. Whereas in BFS, traversing is done in level order.
