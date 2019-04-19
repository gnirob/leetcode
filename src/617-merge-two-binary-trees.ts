import {TreeNode} from './types';

const mergeTrees = (t1: TreeNode, t2: TreeNode): TreeNode => {
    if (!t1) {
        return t2;
    }

    if (!t2) {
        return t1;
    }

    return {
        val: t1.val + t2.val,
        left: mergeTrees(t1.left, t2.left),
        right: mergeTrees(t1.right, t2.right)
    };
};
