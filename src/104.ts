import {TreeNode} from './types';

const maxDepth = (root: TreeNode): number => {
    if (!root) {
        return 0;
    }

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
