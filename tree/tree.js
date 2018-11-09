class Node {
    constructor(value) {
        this.l_child = null;
        this.r_child = null;
        this.data = value;
    }
}

function tree_insert(root, node) {
    if (root == null) {
        root = node;
    }
    else {
        if (root.data > node.data) {
            if (root.l_child == null){
                root.l_child = node;
            }
            else {
                tree_insert(root.l_child, node);
            }
        }
        else {
            if (root.r_child == null) {
                root.r_child = node;
            }
            else {
                tree_insert(root.r_child, node);
            }
        }
    }
}

function TraversePostorder(root) {
    if (root.l_child != null) {
        TraversePostorder(root.l_child);
    }
    if (root.r_child != null) {
        TraversePostorder(root.r_child);
    }
    document.write(root.data);
    document.write("<br>");
}

function TraverseInorder(root){
    if (root.l_child != null) {
        TraverseInorder(root.l_child);
    }
    document.write(root.data);
    document.write("<br>");
    if (root.r_child != null) {
        TraverseInorder(root.r_child);
    }
}


let root = new Node(6)
tree_insert(root, new Node(4))
tree_insert(root, new Node(2))
tree_insert(root, new Node(5))
tree_insert(root, new Node(7))
tree_insert(root, new Node(9))
document.write("Inorder:<br>");
TraverseInorder(root);
document.write("<br>");
document.write("Postorder:<br>");
TraversePostorder(root);

