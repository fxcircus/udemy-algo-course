/* Tree Traversal:
==================
Traversing a tree = visiting every node ONLY 1 time.
There are many ways to do this, we will focus on 4:
-   Breadth First Search (BFS)
-   Depth First PreOrder
-   Depth First PostOrder
-   Depth First InOrder

BFS is "horizontal" \ on the same level ----->
SDF is "vertical" \ different level each time... a

Example:
========
We will travese the following binary tree:

    ________10_______
    |               |
____6____          15____
|       |               |
3      8               20

** We reuse the code from section22 binary search tree **
*/
class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(val) {
        this.root = null
    }
    insert(val) {
        const newNode = new Node(val)
        if(!this.root) {
            this.root = newNode
        } else {
            let currNode = this.root
            while(true) {
                if (newNode.val === currNode.val) {
                    return undefined
                } else if (newNode.val < currNode.val) {
                    if(!currNode.left) {
                        currNode.left = newNode
                        return this
                    } else {
                        currNode = currNode.left
                    }
                } else if (newNode.val > currNode.val) {
                    if(!currNode.right) {
                        currNode.right = newNode
                        return this
                    } else {
                        currNode = currNode.right
                    }
                }
            }
            currNode = newNode
        }
        return this
    }
    find(val) {
        if(!this.root) return  false
        if(val === this.root.val) return this.root
        let currNode = this.root
        let found = false
        while(!found && currNode) {
            if(val === currNode.val) {
                found = true
            } else if(val  < currNode.val) {
                currNode = currNode.left
            } else {
                currNode = currNode.right
            }
        }
        return found ? currNode : false
    }
    // 1) BFS using array as queue:
    // ===============================
    BFS() {
        const q = [], data = []
        let currNode = this.root
        q.push(currNode)
        while(q.length) /*q.length is false if length is 0*/ {
            currNode = q.shift() // 1st el is removed from array and returned intot currNode
            data.push(currNode)
            if(currNode.left) q.push(currNode.left)
            if(currNode.right) q.push(currNode.right)
        }
        return data
    }
    
    // 2) DFS PreOrder(!!!)
    // ====================
    DFSPreOrder() {
        const data = []
        // HELPER FUNCTION - Recursive:
        // ============================
        const traverse = (n) => {
            data.push(n.val)
            if(n.left) traverse(n.left)
            if(n.right) traverse(n.right)
        }
        traverse(this.root)
        return data
    }
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
// console.log(tree.BFS())      // [ 10, 6, 15, 3, 8, 20 ]
console.log(tree.DFSPreOrder()) // [ 10, 6, 3, 8, 15, 20 ]