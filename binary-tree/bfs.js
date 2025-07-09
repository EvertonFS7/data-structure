class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

const levelOrder = function (root) {
  let q = [root], ans = []

  while (q[0]) {
      let qlen = q.length, row = []

      for (let i = 0; i < qlen; i++) {
          let curr = q.shift()
          row.push(curr.val)
          if (curr.left) q.push(curr.left)
          if (curr.right) q.push(curr.right)
      }
      ans.push(row)
  }
  return ans
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log(levelOrder(root)); 
