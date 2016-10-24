/**
 * 二叉树的遍历和度
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
    private root:TreeNode;
    public insert(target:number):void{
        let node = new TreeNode(target,null,null);
        if(this.root == void 0){
            this.root = node;
        }else{
            let current:node = this.root;
            let parent:node;
            while(current){
                parent = current;
                if(target < parent.val){
                    current = current.left;
                    if(current == void 0){
                        parent.left = node;
                        break;
                    }
                }else{
                    current = current.right;
                    if(current == void 0){
                        parent.right = node;
                        break;
                    }
                }
            }
        }
    }
    public getRoot():TreeNode{
        return this.root;
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
            }else
                i = 0;

            if(tree.right){
                j = this.depthData(tree.right);
            }else
                j = 0;

            return i>j?i+1:j+1;
        }
    }
    public treeArr:any = [];
    public InverTree(tree:TreeNode):any{
        if(tree != void 0){
            this.treeArr.push(tree.val);
            this.InverTree(tree.right);
            this.InverTree(tree.left);
        }
        return this.treeArr;
    }
}
var tree = new Tree();
tree.insert(23);
tree.insert(45);
tree.insert(16);
tree.insert(37);
tree.insert(3);
tree.insert(99);
tree.insert(22);
console.log(tree.InverTree(tree.getRoot()))

