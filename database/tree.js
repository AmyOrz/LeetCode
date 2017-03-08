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
            this.preOrder(tree.left);
            this.preOrder(tree.right);
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
            this.lastOrder(tree.left);
            this.lastOrder(tree.right);
            tree.showData();
        }
    };
    Tree.prototype.depthData = function (tree) {
        var i = 0, j = 0;
        if (tree != void 0) {
            if (tree.left) {
                i = this.depthData(tree.left);
                console.log(tree.val + ":,i=" + i + ",j=" + j);
            }
            else
                i = 0;
            if (tree.right) {
                j = this.depthData(tree.right);
                console.log(tree.val + ":,i=" + i + ",j=" + j);
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
    Tree.prototype.isSameTree = function (m, n) {
        if (m == null && n == null)
            return true;
        if (m == null || n == null)
            return false;
        if (m.val == n.val) {
            return this.isSameTree(m.left, n.left) && this.isSameTree(m.right, n.right);
        }
        return false;
    };
    Tree.prototype.getMinimumDifference = function (tree) {
        if (tree == void 0)
            return 0;
        var treeValArr = [];
        getData(tree);
        treeValArr.sort(function (a, b) { return a - b; });
        var res = treeValArr[1] - treeValArr[0];
        for (var i = 1, len = treeValArr.length; i < len - 1; i++) {
            if (treeValArr[i] == void 0)
                break;
            var min = treeValArr[i + 1] - treeValArr[i];
            if (min < res) {
                res = min;
            }
        }
        console.log(res);
        return res;
        function getData(tree) {
            if (tree == void 0)
                return;
            treeValArr.push(tree.val);
            getData(tree.left);
            getData(tree.right);
        }
    };
    Tree.prototype.sumOfLeftLeaves = function (tree) {
        if (!tree)
            return 0;
        return this.getLeftVal(tree.left, true) + this.getLeftVal(tree.right, false);
    };
    Tree.prototype.getLeftVal = function (tree, isLeft) {
        if (tree == null)
            return 0;
        if (tree.left == null && tree.right == null && isLeft) {
            return tree.val;
        }
        return this.getLeftVal(tree.left, true) + this.getLeftVal(tree.right, false);
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
tree.insert(12);
tree.insert(8);
tree.insert(16);
tree.insert(null);
tree.insert(4);
var a = tree.getMinimumDifference(tree.getRoot());
console.log(a);
//# sourceMappingURL=tree.js.map