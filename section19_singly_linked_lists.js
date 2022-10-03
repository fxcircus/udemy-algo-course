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
    // push:    add new node to end
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
    // pop:     remove node from end
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
    // shift:   remove node from beginning
    shift() {
        if(!this.head) return undefined // edge case: empty list
        let newHead = this.head.next
        this.head = newHead
        this.length--
        if (this.length === 0) this.tail = null
        return this.head
    }
    // unshift: add new node to beginning
    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) this.head = this.tail = newNode
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }
    // get:     return "idx" of node n

    // set:     change val of "idx" of node n   

    // insert:  add node at "idx" n

    // remove:  remvoe node at "idx" n

    // reverse: reverse ndoe list order
}

const list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
// console.log(list.head)      //  Node { val: 1, next: Node { val: 2, next: null } }
// console.log(list.head.next) //  Node { val: 2, next: Node { val: 3, next: null } }
// console.log(list.tail)      //  Node { val: 3, next: null }
// console.log(list.pop())
// console.log(list)
// console.log(list.shift())
console.log(list.unshift(4))