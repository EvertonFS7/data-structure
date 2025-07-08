class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      this.root = new TreeNode(value);
    } else {
      this._insertRecursive(this.root, value);
    }
  }

  _insertRecursive(node, value) {
    if (value < node.value) {
      if (node.left) {
        this._insertRecursive(node.left, value);
      } else {
        node.left = new TreeNode(value);
      }
    } else {
      if (node.right) {
        this._insertRecursive(node.right, value);
      } else {
        node.right = new TreeNode(value);
      }
    }
  }

  search(value) {
    return this._searchRecursive(this.root, value);
  }

  _searchRecursive(node, value) {
    if (!node) {
      return false;
    }
    if (node.value === value) {
      return true;
    }
    if (value < node.value) {
      return this._searchRecursive(node.left, value);
    }
    return this._searchRecursive(node.right, value);
  }

  dfs(value) {
    return this._dfsRecursive(this.root, value);
  }

  _dfsRecursive(node, value) {
    if (!node) {
      return false;
    }
    if (node.value === value) {
      return true;
    }
    if (this._dfsRecursive(node.left, value)) {
      return true;
    }
    if (this._dfsRecursive(node.right, value)) {
      return true;
    }
  }
}

const tree = new BinaryTree();
const valuesToInsert = [5, 3, 1, 10, 15, 7, 20];

valuesToInsert.forEach(value => tree.insert(value));

console.log(tree.search(5)); // true
console.log(tree.search(4)); // false
console.log(tree.search(10)); // true
console.log(tree.search(15)); // true
console.log("dfs: ", tree.dfs(20)); // DFS