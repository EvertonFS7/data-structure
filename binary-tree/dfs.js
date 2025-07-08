class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right && targetSum === root.val) return true;

  return hasPathSum(root.left, targetSum - root.val) ||
      hasPathSum(root.right, targetSum - root.val);
};

const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right.right.right = new TreeNode(1);

console.log(hasPathSum(root, 22)); // true
