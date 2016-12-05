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
    }
    Tree.prototype.insert = function (resource) {
        if (this._root == void 0) {
            this._root = new TreeNode(resource, null, null);
        }
        else {
            this._recursionMakeTree(resource, this._root);
        }
    };
    Tree.prototype.getRoot = function () {
        return this._root;
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
            var nodeTemp = tree.left;
            tree.left = tree.right;
            tree.right = nodeTemp;
            this.InverTree(tree.left);
            this.InverTree(tree.right);
        }
        return tree;
    };
    Tree.prototype.Symmetric = function (tree) {
        if (!tree)
            return false;
        var isSymmetric = function (left, right) {
            if (!left && !right)
                return true;
            if (!left || !right)
                return false;
            if (left.val != right.val)
                return false;
            return isSymmetric(left.left, right.right) && isSymmetric(left.right, right.left);
        };
        return isSymmetric(tree.left, tree.right);
    };
    Tree.prototype._recursionMakeTree = function (resource, target) {
        if (resource >= target.val) {
            if (target.right == void 0) {
                target.right = new TreeNode(resource, null, null);
            }
            else {
                this._recursionMakeTree(resource, target.right);
            }
        }
        else {
            if (target.left == void 0) {
                target.left = new TreeNode(resource, null, null);
            }
            else {
                this._recursionMakeTree(resource, target.left);
            }
        }
    };
    return Tree;
}());
var tree = new Tree();
tree.insert(4);
tree.insert(3);
tree.insert(2);
tree.insert(1);
tree.insert(5);
console.log(tree.getRoot());
//# sourceMappingURL=tree.js.map