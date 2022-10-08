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
        // Edge case: empty list
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
        // Edge case 1: empty list
        if(this.length === 0) return undefined 
        let oldTail = this.tail
        // Edge case 2: only 1 item
        if (this.lengh === 1) {
            this.head = this.tail = null
        } else {
            this.tail = oldTail.prev // tail-1 is new tail
            this.tail.next = null   // remove new tail next
            oldTail.prev = null     // remove old tail prev
        }
        this.length--
        return oldTail
    }
    shift(){
        if(this.length === 0) return undefined
        var oldHead = this.head
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--
        return oldHead
    }
    unshift(val){
        var newNode = new Node(val)
        if(this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
}

const list = new DoublyLinkedList()
list.push(1)                // 1
list.push(2)                // 1<->2
list.pop()                  // 1
list.push(3)                // 1 - 3
list.shift()                  // 3
console.log(list)