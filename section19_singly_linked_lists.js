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

    // push

    // pop

    // shift

    // unshift

    // get

    // set

    // insert

    // remove

    // reverse
}

const list = new SinglyLinkedList()
console.log(list)