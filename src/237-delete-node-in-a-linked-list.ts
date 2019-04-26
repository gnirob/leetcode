import {ListNode} from './model';

const deleteNode = (node: ListNode): void => {
    const {next} = node;
    node.val = next.val;
    node.next = next.next;
};
