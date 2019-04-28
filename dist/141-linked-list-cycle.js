const hasCycle = (head) => {
    if (!head) {
        return false;
    }
    let slow = head;
    let fast = head.next;
    while (true) {
        if (!slow || !fast) {
            return false;
        }
        if (slow === fast) {
            return true;
        }
        slow = slow.next;
        try {
            fast = fast.next.next;
        } catch (error) {
            return false;
        }
    }
};
