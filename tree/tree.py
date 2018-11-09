class Node:
    def __init__(self, value):
        self.l_child = None
        self.r_child = None
        self.data = value


def tree_insert(root, node):
    if root is None:
        root = node
    else:
        if root.data > node.data:
            if root.l_child is None:
                root.l_child = node
            else:
                tree_insert(root.l_child, node)
        else:
            if root.r_child is None:
                root.r_child = node
            else:
                tree_insert(root.r_child, node)


def traverse_postorder(root):
    if root.l_child is not None:
        traverse_postorder(root.l_child)
    if root.r_child is not None:
        traverse_postorder(root.r_child)
    print(root.data)


def traverse_inorder(root):
    if root.l_child is not None:
        traverse_inorder(root.l_child)
    print(root.data)
    if root.r_child is not None:
        traverse_inorder(root.r_child)


if __name__ == "__main__":
    root = Node(6)
    tree_insert(root, Node(4))
    tree_insert(root, Node(2))
    tree_insert(root, Node(5))
    tree_insert(root, Node(7))
    tree_insert(root, Node(9))
    print("Inorder:")
    traverse_inorder(root)
    print("\n")
    print("Postorder:")
    traverse_postorder(root)
    