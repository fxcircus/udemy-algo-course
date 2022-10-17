/* Binary Heaps:
================
A data structure that takes the form of a binary tree, but with 2 extra conditions:
-   Shape: the root and all subsequent nodes have 2 children before moving on to next layer.
    ("complete binary tree")
-   Children are greater than or less than the root depending on the heap type.
    MaxBinaryHeap -> parent nodes are always larger than child nodes.
    MinBinaryHeap -> parent nodes are always smaller than child nodes.
    (children are NOT ordered from left to right like in a binary search tree)
    
Binary Heap are commonly used to implement a priority queue.


formula for finding children \ parents (We use arrays to store a heaps):
========================================================================
1) For any index of arr n:
The left child is stored at 2n + 1
The right child is stored at 2n + 2

2) For any child at index n: 
The parent node is at -> Math.floor((n - 1) / 2)

MaxBinaryHeap Example:
======================
    ________41_______
    |               |
____39____      ____33
|         |    |
18      27     12
*/