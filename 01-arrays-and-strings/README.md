#### Arrays and Strings

- A HASH TABLE is a data structure that maps keys to values for highly efficient lookup.
- HASH TABLE IMPLEMENTATIONS

  - 1. - We could use an array of Linked Lists and a HASH CODE function.
       - We must use a LINKED LIST because of collisions: We could have TWO diff hashes/keys maps to the same
         index. In that case, first find the INDEX and then iterate through the linked list to retrieve the value.
       - If the number of collisions is very high, the worst case RUNTIME is O(N). The BEST case is O(1).

  - 2. - Alternatively, we can Implement the HASH Table with a Balanced Binary Search Tree.
       - It gives us O(N log N) lookup time.

- In Some languages, ARRAYs are automatically RESIZABLE. It offers Dynamic Resizing

#### KEYWORDS

- Automatically Resizable
- Dynamic Resizing
- Amortized insertion in ARRAY
