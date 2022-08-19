### Linked Lists

A Linked list is a data structure that represents a SEQUENCE of NODES.

#### The Runner Technique

The runner technique is used in many linked list problems. The runner technique means that
you iterate through the Linked List with two Pointers simultaneously, with one ahead of the others.
The `fast` node might be ahead by a fixed amount, or it might be hopping multiple nodes for each
one node that is `slow` node iterates through.

#### Recursive problems

A number of linked list problems rely on recursion. If you are having trouble solving a linked list
problem, you should explore if a recursive approach will work. However, you should remember that
recursive algorithms take at least `O(n) space`, where `n` is the depth of the recursive call.
All recursive algorithms can be implemented iteratively, although they may be much more complex.
