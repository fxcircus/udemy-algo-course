/* Binary Search Tree:
======================
-   A nonlinear data structure, that consists of nodes in a parent-child relationship
-   Parent nodes have <= 2 children
-   Left child node < parent
-   Right child node > parent
-   Common use cases: HTML DOM, AI models, JSON, OS Folders structure

Terminology:
============
Root:       the top node in a tree
Child:      a node directly connected to another node when moving away from the root
Parent:     the node before the child. What ther child connects to...
Siblings:   a group of nodes with the same parents
Leaf:       a node with no children
Edge:       the connection between the nodes

Example:
========
    ________7________
    |               |
____5____       ____12
|       |       |
3       6       11


Big O time complexity:
======================
Insertion   O(log n)
Searching   O(log n)
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
            this.root = newNode // Edge case: init root if tree is empty
        } else {
            let currNode = this.root
            while(true) {
                if (newNode.val === currNode.val) {
                    return undefined // Edge case: val already in tree (We can also add feq counter and increment)
                } else if (newNode.val < currNode.val) {
                    if(!currNode.left) {
                        currNode.left = newNode // insert leaf on left
                        return this
                    } else {
                        currNode = currNode.left // Move to left child
                    }
                } else if (newNode.val > currNode.val) {
                    if(!currNode.right) {
                        currNode.right = newNode // insert leaf on right
                        return this
                    } else {
                        currNode = currNode.right // Move to right child
                    }
                }
            }
            currNode = newNode
        }
        return this
    }
    find (val) {
        if(!this.root) return  false // Edge case 1: empty tree
        if(val === this.root.val) return this.root // Edge case 2: val is also the root of tree
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
}

const tree = new BinarySearchTree()
tree.insert(7)
tree.insert(5)
tree.insert(15)
tree.insert(4)
tree.insert(4) // undefined (duplicate)
/* Result:
BinarySearchTree {
  root: Node {
    val: 7,
    left: Node { val: 5, left: [Node], right: null },
    right: Node { val: 15, left: null, right: null }
  }
} */
console.log(tree.find(7))


/*
// Manual insert example:
// ======================
tree.root = new Node(10)
tree.root.right  = new Node(15)
tree.root.left = new Node(7)
tree.root.left.right = new Node(9)
/* result:
BinarySearchTree {
  roott: null,
  root: Node {
    val: 10,
    left: Node { val: 7, left: null, right: [Node] },
    right: Node { val: 15, left: null, right: null }
  }
} */