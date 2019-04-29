import {ListNode} from './model';

const getIntersectionNode = (headA: ListNode, headB: ListNode): ListNode | null => {
    if (!headA || !headB) {
        return null;
    }

    let a = headA;
    let b = headB;

    while (a !== b) {
        a = !a ? headB : a.next;
        b = !b ? headA : b.next;
    }

    return a;
};
