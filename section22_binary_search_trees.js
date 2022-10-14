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
Insertion   
Removal     
Searching   
Access      
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
                if (newNode.val < currNode.val) {
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
}

const tree = new BinarySearchTree()
tree.insert(7)
tree.insert(5)
tree.insert(15)
tree.insert(4)
/* Result:
BinarySearchTree {
  root: Node {
    val: 7,
    left: Node { val: 5, left: [Node], right: null },
    right: Node { val: 15, left: null, right: null }
  }
} */

/*
// Manual insert example:
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