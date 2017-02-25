/**
 * 二叉树
 */
interface node{
    val:number;
    left:node;
    right:node;
}
class TreeNode implements node{
    constructor(public val,public left,public right){}
    public showData():void{
        console.log(this.val);
    }
}
class Tree{
    private _root:TreeNode;
    public insert(resource:number):void {
        if (this._root == void 0){
            this._root = new TreeNode(resource, null, null);
        }else{
            this._recursionMakeTree(resource,this._root);
        }

    }
    public getRoot():TreeNode{
        return this._root;
    }
    public preOrder(tree:TreeNode):void{
        if(tree != void 0){
            tree.showData();
            this.midOrder(tree.left);
            this.midOrder(tree.right);
        }
    }
    public midOrder(tree:TreeNode):void{
        if(tree != void 0){
            this.midOrder(tree.left);
            tree.showData();
            this.midOrder(tree.right);
        }
    }
    public lastOrder(tree:TreeNode):void{
        if(tree != void 0){
            this.midOrder(tree.left);
            this.midOrder(tree.right);
            tree.showData();
        }
    }
    public depthData(tree:TreeNode){
        let i:number = 0,
            j:number = 0;
        if(tree != void 0){
            if(tree.left) {
                i = this.depthData(tree.left);
                console.log(tree.val +":,i="+i+",j="+j);
            }else
                i = 0;

            if(tree.right){
                j = this.depthData(tree.right);
                console.log(tree.val +":,i="+i+",j="+j);
            }else
                j = 0;

            return i>j?i+1:j+1;
        }
    }

    public InverTree(tree:TreeNode):TreeNode{
        if(tree != void 0){
            let nodeTemp:TreeNode = tree.left;
            tree.left = tree.right;
            tree.right = nodeTemp;

            this.InverTree(tree.left);
            this.InverTree(tree.right);
        }
        return tree;
    }
    public Symmetric(tree:TreeNode):boolean{
        if(!tree)return false;

        let isSymmetric = (left:TreeNode,right:TreeNode):boolean=>{
            if(!left && !right)return true;
            if(!left || !right)return false;
            if(left.val != right.val)return false;
            return isSymmetric(left.left,right.right) && isSymmetric(left.right,right.left);
        };

        return isSymmetric(tree.left,tree.right);
    }
    public sumOfLeftLeaves(tree:TreeNode):number{
        if(!tree)return 0;
        return this.getLeftVal(tree.left,true) + this.getLeftVal(tree.right,false);
    }
    private getLeftVal(tree:TreeNode,isLeft:boolean):number{
        if(tree == null)return 0;
        if(tree.left == null && tree.right == null && isLeft){
            return tree.val;
        }
        return this.getLeftVal(tree.left,true) + this.getLeftVal(tree.right,false);
    }
    private _recursionMakeTree(resource:number,target:TreeNode):void{
        if(resource >= target.val){
            if(target.right == void 0){
                target.right = new TreeNode(resource,null,null);
            }else{
                this._recursionMakeTree(resource,target.right);
            }
        }else{
            if(target.left == void 0){
                target.left = new TreeNode(resource,null,null);
            }else{
                this._recursionMakeTree(resource,target.left);
            }
        }
    }
}
var tree = new Tree();
tree.insert(1);
tree.insert(null);
tree.insert(2);
console.log(tree.getRoot())
console.log(tree.sumOfLeftLeaves(tree.getRoot()))
