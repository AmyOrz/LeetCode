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
            this.preOrder(tree.left);
            this.preOrder(tree.right);
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
            this.lastOrder(tree.left);
            this.lastOrder(tree.right);
            tree.showData();
        }
    }
    public depthData(tree:TreeNode){
        let i:number = 0,
            j:number = 0;
        if(tree != void 0){
            if(tree.left) {
                i = this.depthData(tree.left);
            }else
                i = 0;

            if(tree.right){
                j = this.depthData(tree.right);
            }else
                j = 0;

            return i>j?i+1:j+1;
        }else return 0;
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

    public isSameTree(m:TreeNode,n:TreeNode):boolean{
        if(m == null && n == null)return true;
        if(m == null || n == null)return false;
        if(m.val == n.val){
            return this.isSameTree(m.left,n.left) && this.isSameTree(m.right,n.right);
        }
        return false;
    }

    public getMinimumDifference(tree:TreeNode):number{
        if(tree == void 0)return 0;
        let treeValArr:number[] = [];
        getData(tree);
        treeValArr.sort((a,b) => a-b);
        let res:number = treeValArr[1] - treeValArr[0];
        for(let i = 1,len = treeValArr.length;i<len-1;i++){
            if(treeValArr[i] == void 0)break;
            let min:number = treeValArr[i+1] - treeValArr[i];
            if(min < res){
                res = min;
            }
        }
        return res;

        function getData(tree:TreeNode){
            if(tree == void 0)return;
            treeValArr.push(tree.val);
            getData(tree.left);
            getData(tree.right);
        }
    }

    public sortedArrayToBST(nums:number[]):TreeNode{
        let len = nums.length;

        if(len == 1)return new TreeNode(nums[0],null,null);

        let midUp = ~~(len/2),
            midDown = ~~(len/2);

        while(midDown > 0 && midUp < len){

            if(midDown == midUp) {

                this.insert(nums[midDown]);

            }else {


                this.insert(nums[midDown]);
                this.insert(nums[midUp]);

            }
            nums[midDown] = null;
            nums[midUp] = null;

            midDown = ~~(midDown/2);
            midUp = ~~((len - midUp)/2 + midUp);

        }
        for(let item of nums){
            if(item == void 0)continue;

            this.insert(item);
        }
        return this._root;
    }

    public diameterOfBinaryTree(tree:TreeNode):number{
        if(!tree)return 0;
        if(!tree.left && !tree.right)return 0;
        let lenLeft:number = this.depthData(tree.left);
        let lenRight:number = this.depthData(tree.right);

        return lenLeft+lenRight;
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
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.midOrder(tree.getRoot())
var a = tree.diameterOfBinaryTree(tree.getRoot());
console.log(a)
