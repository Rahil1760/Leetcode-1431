/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fast = head
    let slow = head

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
    }

  
    const reverseSecondHalf = reverseList(slow)

    let l1 = reverseSecondHalf
    let l2 = head

    while (l1 && l2) {
        if (l1.val !== l2.val) return false
        l1 = l1.next
        l2 = l2.next
    }

    return true
};

function reverseList(head) {
    let current = head
    let previous = null
    let forward

    while (current) {
        forward = current.next
        current.next = previous
        previous = current
        current = forward
    }

    return previous
};