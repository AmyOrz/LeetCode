var TreeNode = (function () {
    function TreeNode(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
    TreeNode.prototype.showData = function () {
        console.log(this.val);
    };
    return TreeNode;
}());
var Tree = (function () {
    function Tree() {
        this.treeArr = [];
    }
    Tree.prototype.insert = function (target) {
        var node = new TreeNode(target, null, null);
        if (this.root == void 0) {
            this.root = node;
        }
        else {
            var current = this.root;
            var parent_1;
            while (current) {
                parent_1 = current;
                if (target < parent_1.val) {
                    current = current.left;
                    if (current == void 0) {
                        parent_1.left = node;
                        break;
                    }
                }
                else {
                    current = current.right;
                    if (current == void 0) {
                        parent_1.right = node;
                        break;
                    }
                }
            }
        }
    };
    Tree.prototype.getRoot = function () {
        return this.root;
    };
    Tree.prototype.preOrder = function (tree) {
        if (tree != void 0) {
            tree.showData();
            this.midOrder(tree.left);
            this.midOrder(tree.right);
        }
    };
    Tree.prototype.midOrder = function (tree) {
        if (tree != void 0) {
            this.midOrder(tree.left);
            tree.showData();
            this.midOrder(tree.right);
        }
    };
    Tree.prototype.lastOrder = function (tree) {
        if (tree != void 0) {
            this.midOrder(tree.left);
            this.midOrder(tree.right);
            tree.showData();
        }
    };
    Tree.prototype.depthData = function (tree) {
        var i = 0, j = 0;
        if (tree != void 0) {
            if (tree.left) {
                i = this.depthData(tree.left);
            }
            else
                i = 0;
            if (tree.right) {
                j = this.depthData(tree.right);
            }
            else
                j = 0;
            return i > j ? i + 1 : j + 1;
        }
    };
    Tree.prototype.InverTree = function (tree) {
        if (tree != void 0) {
            this.treeArr.push(tree.val);
            this.InverTree(tree.right);
            this.InverTree(tree.left);
        }
        return this.treeArr;
    };
    return Tree;
}());
var tree = new Tree();
tree.insert(4);
tree.insert(2);
tree.insert(7);
tree.insert(1);
tree.insert(3);
tree.insert(6);
tree.insert(9);
console.log(tree.InverTree(tree.getRoot()));
//# sourceMappingURL=tree.js.map