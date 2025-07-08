class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


class BinaryTree:
    def __init__(self):
        self.root = None

    def insert(self, val):
        if not self.root:
            self.root = TreeNode(val)
        else:
            self._insert_recursive(self.root, val)

    def _insert_recursive(self, node, val):
        if val < node.val:
            if node.left:
                self._insert_recursive(node.left, val)
            else:
                node.left = TreeNode(val)
        else:
            if node.right:
                self._insert_recursive(node.right, val)
            else:
                node.right = TreeNode(val)

    def search(self, val):
        return self._search_recursive(self.root, val)

    def _search_recursive(self, node, val):
        if not node:
            return False
        if node.val == val:
            return True
        if val < node.val:
            return self._search_recursive(node.left, val)
        return self._search_recursive(node.right, val)

    def dfs(self, data):
        return self._dfs_recursive(self.root, data)

    def _dfs_recursive(self, node, data):
        if node:
            print(node.val)
        if node is None:
            return False
        if node.val == data:
            return True
        if self._dfs_recursive(node.left, data):
            return True
        if self._dfs_recursive(node.right, data):
            return True


tree = BinaryTree()
values_to_insert = [5, 3, 1, 10, 15, 7, 20]
for val in values_to_insert:
    tree.insert(val)

print(tree.search(5)) 
print(tree.search(4)) 
print(tree.search(10)) 
print(tree.search(15)) 
print(tree.dfs(20))