const deleteNode = (node) => {
    const {next} = node;
    node.val = next.val;
    node.next = next.next;
};
