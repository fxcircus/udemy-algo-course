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

class MaxBinaryHeap {
    constructor() {
        this.values = []
    }
    // Insert: add new element to heap
    insert(element) {
        this.values.push(element)
        this.bubbleUp()
    }
    // Helper function: bubble values to correct idx:
    bubbleUp(){
        // Example: after pushing 41 39 and 40, array is- [41, 39, 40]
        let idx = this.values.length - 1                // idx = 2
        const el = this.values[idx]                     // el = 40
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)   // parentIdx = 0
            const parent = this.values[parentIdx]       // parent = 41
            // End loop, or else swap values:
            if (el <= parent) break                     // break!
            this.values[parentIdx] = el
            this.values[idx] = parent
            idx = parentIdx
        }
    }
    /* Extract method:
    1. replace value of root with value of last node in heap
    2. pop last node
    3. "sinking down" - swap new root with largest el until reaching end of heap 
    */
    extractMax() {
        this.values[0] = this.values[this.values.length - 1]
        const res = this.values.pop()
        this.sinkDown()
        return res
    }
    sinkDown() {
        let parentIdx = 0
        let parent = this.values[0]
        while(parentIdx < (this.values.length - 1)) {
            const leftChildIdx = parentIdx * 2 + 1
            const rightChildIdx = parentIdx * 2 + 2
            const leftChild = this.values[leftChildIdx]
            const rightChild = this.values[rightChildIdx]
            const largestIdx = leftChild >= rightChild ? leftChildIdx : rightChildIdx
            const largest = this.values[largestIdx]
            console.log(`parentIdx: ${parentIdx}\tparent: ${parent}\tleftChild: ${leftChild}\trightChild: ${rightChild}\tlargest${largest}`)
            if (parent > largest) break
            const tmp = largest
            this.values[largestIdx] = parent
            this.values[parentIdx] = tmp
            parentIdx = largestIdx
        }
    }
}

// class PriorityQueue {
//     constructor(){
//         this.values = []
//     }
//     enqueue(val, priority){
//         let newNode = new Node(val, priority)
//         this.values.push(newNode)
//         this.bubbleUp()
//     }
// }

// Heap  -> [41, 39, 33, 18, 27, 12]
// Index ->   0   1   2   3   4   5

let heap = new MaxBinaryHeap()
heap.insert(41)
heap.insert(39)
heap.insert(40)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)
// console.log(heap) /* MaxBinaryHeap { values: [ 55, 39, 41, 18, 27, 12, 40 ] } */

console.log(heap.extractMax())