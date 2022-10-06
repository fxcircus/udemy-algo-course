/* Singly linked lists:
=======================
Linke singly linked but we add a pointer for previous node 
(last node.next = null)

Example:
========
HEAD--------------LENGTH---------------TAIL
|                   |
|4|<---  --->|6|<---  --->|8|<---  --->|2|-->
   prev next    prev next    prev next    null

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
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        const newNode = new Node(val)
        if(this.length === 0) {
            this.tail = newNode
            this.head = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {

    }
}

const list = new DoublyLinkedList()
list.push(1)
list.push(2)
console.log(list)