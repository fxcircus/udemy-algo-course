/* Priority Queu:
================
A data structure where each element has a priority.
Elements with higher priorities are served before elements with lower priorities
We implement using a heap because the big O for insertion and removal is O(log n)
    
Example use case: operating systems have a "nice" property, that ranks their priority level.

Nodes are sorted based on priority property
lowest priorirty goes to the root
*/

class Node {
    constructor(val, priority) {
        this.val = val
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority)
        this.values.push(newNode)
        this.bubbleUp()
    }
    bubbleUp() {
        let idx = this.values.length - 1                // idx = 2
        const el = this.values[idx]                     // el = 40
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)   // parentIdx = 0
            const parent = this.values[parentIdx]       // parent = 41
            if (el.priority >= parent.priority) break                     // break!
            this.values[parentIdx] = el
            this.values[idx] = parent
            idx = parentIdx
        }
    }
    dequeue() {
        const min = this.values[0]
        const end = this.values.pop()
        // Edge case: only 1 element, nothing to sync
        if(this.values.length > 0) {
            this.values[0] = end
            this.sinkDown()
        }
        return min
    }
    sinkDown() {
        let idx = 0
        let el = this.values[0]
        const length = this.values.length - 1
        while(true) {
            const leftChildIdx = idx * 2 + 1
            const rightChildIdx = idx * 2 + 2
            let leftChild, rightChild
            let swap = null

            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx]
                if(leftChild.priority < el.priority) swap = leftChildIdx
            }
            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if( (swap === null && rightChild.priority < el.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)) {
                    swap = rightChildIdx
                }
            }

            if (swap === null) break
            
            this.values[idx] = this.values[swap]
            this.values[swap] = el
            idx = swap
        }
    }
}
let queue = new PriorityQueue()
queue.enqueue("Common cold", 1)
queue.enqueue("Gunshot wound", 5)
queue.enqueue("High Fever", 2)
console.log(queue) /* PriorityQueue { values: [
                        Node { val: 'Common cold', priority: 1 },
                        Node { val: 'Gunshot wound', priority: 5 },
                        Node { val: 'High Fever', priority: 2 }
                        */
queue.dequeue()
console.log(queue) /* PriorityQueue { values: [
                        Node { val: 'High Fever', priority: 2 },
                        Node { val: 'Gunshot wound', priority: 5 }
                        */
