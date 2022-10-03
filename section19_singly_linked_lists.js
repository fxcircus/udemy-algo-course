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
        if (!this.head) {
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

    // shift:   remove 1st node

    // unshift: add new node to beginning

    // get:     return "idx" of node n

    // set:     change val of "idx" of node n   

    // insert:  add node at "idx" n

    // remove:  remvoe node at "idx" n

    // reverse: reverse ndoe list order
}

const list = new SinglyLinkedList()
console.log(list.push(1))
console.log(list.push(2))
console.log(list.push(3))
console.log(list.push(4))
