import {TreeNode} from './model';

const isSymmetric = (root: TreeNode): boolean => {
    return root ? isEqual(root.left, root.right) : true;
};

const isEqual = (rootA: TreeNode, rootB: TreeNode): boolean => {
    if (rootA && rootB) {
        return (
            rootA.val === rootB.val &&
            isEqual(rootA.left, rootB.right) &&
            isEqual(rootA.right, rootB.left)
        );
    }

    return rootA || rootB ? false : true;
};
