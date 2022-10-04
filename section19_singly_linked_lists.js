/* Singly linked lists:
=======================
A data strructure containg head, tail and length
Elements are called "nodes"
each node has a value and a pointer to the next node
(last node pointer is null)

Example:
========
HEAD---LENGTH----TAIL
|                   |
|4|-->|6|-->|8|-->|2|-->
   next  next  next  null

Big O time complexity:
======================
Insertion   O(1)
Removal     O(1) for idx0. O(N) for last idxN...
Searching   O(N)
Access      O(N)

This Data Structure VS arrays:
==============================
Inserstion and Removal are more efficient.
Searching and accessing are less efficient.
*/

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    // 1) push:    add new node to end
    // ===============================
    push(val) {
        const newNode = new Node(val)
        if (!this.head) /* edge case: empty list */{
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode 
        }
        this.length++
        return this
    }
    // 2) pop:     remove node from end
    // ================================
    pop() {
        if (!this.head || this.length === 0) return undefined // edge case
        let currNode = this.head
        let newTail = currNode
        while (currNode.next) {
            newTail = currNode
            currNode = currNode.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0) this.head = this.tail = null // reset empty list
        return currNode
    }
    // 3) shift:   remove node from beginning
    // ======================================
    shift() {
        if(!this.head) return undefined // edge case: empty list
        let newHead = this.head.next
        this.head = newHead
        this.length--
        if (this.length === 0) this.tail = null
        return this.head
    }
    // 4) unshift: add new node to beginning
    // =====================================
    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) this.head = this.tail = newNode
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }
    // 5) get:     return "idx" of node n
    // ==================================
    get(idx) {
        if (idx < 0 || idx > this.length) return null // edge case: out of bounds
        let currNode = this.head
        for (let i = 0; i < idx; i++) {
            currNode = currNode.next
        }
        return currNode
    }
    // 6) set:     change val of "idx" of node n 
    // =========================================
    set(idx, val) {
        let nodeToChange = this.get(idx)
        if (nodeToChange) {
            nodeToChange.val = val
            return true
        }
        return false
    }  
    // 7) insert:  add node at "idx" n
    // ===============================
    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false // edge case: out of bounds
        if (idx === this.length) return !!this.push(val) // edge case: last item
        if (idx === 0) return !!this.unshift(val) // edge case: first item
        const newNode = new Node(val)
        const prevNode = this.get(idx - 1)
        newNode.next = prevNode.next
        prevNode.next = newNode
        this.length++
        return true
    }
    // 8) remove:  remove node at "idx" n
    // ==================================
    remove(idx) {
        if (idx < 0 || idx > this.length) return undefined // edge case: out of bounds
        if (idx === 0) return this.shift() // edge case: first item
        if (idx === this.length - 1) return this.pop() // edge case: last item
        const prevNode = this.get(idx - 1)
        const removedNode = prevNode.next
        prevNode.next = removedNode.next
        this.length--
        return removedNode
    }
    // 9) reverse: reverse ndoe list order (IN PLACE - no copying)
    // ===========================================================
    reverse () {
        // Step 1 - swap head & tail
        let currNode = this.head
        this.head = this.tail
        this.tail = currNode
        // Step 2 - iterate and change direction
        let nextNode, prevNode = null
        for (let i = 0; i < this.length; i++) {
            nextNode = currNode.next
            currNode.next = prevNode
            prevNode = currNode
            currNode = nextNode
        }
        return this
    }
    // 10) print:  aux function that prints list (as an array for simplicity)
    // ======================================================================
    print() {
        const arr = []
        let currNode = this.head
        while (currNode) {
            arr.push(currNode.val)
            currNode = currNode.next
        }
        console.log(arr)
    }
}

const list = new SinglyLinkedList()
list.push(1)                // 1
list.push(2)                // 1 - 2
list.push(3)                // 1 - 2 - 3
list.pop()                  // 1 - 2
list.shift()                // 2
list.unshift(4)             // 4 - 2
console.log(list.get(2))    // Node { val: 2, next: null }
list.push(3)                // 4 - 2 - 3
list.set(2, 5)              // 4 - 2 - 5
list.insert(2,6)            // 4 - 2 - 6 - 5
list.remove(1)              // 4 - 6 - 5
list.reverse()              // 5 - 6 - 4
list.print()