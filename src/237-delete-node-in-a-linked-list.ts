import {ListNode} from "./types";

const deleteNode = (node: ListNode): void => {
    const {next} = node;
    node.val = next.val;
    node.next = next.next;
};
