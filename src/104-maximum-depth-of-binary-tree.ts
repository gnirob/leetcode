import {TreeNode} from './model';

const maxDepth = (root: TreeNode): number => {
    if (!root) {
        return 0;
    }

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
