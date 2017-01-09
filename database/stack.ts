interface IStackNode{
    val:number|string;
    next:StackNode;
}
class StackNode implements IStackNode{
    constructor(public val,public next){}
}
class Stack {
    private first:StackNode;
    private len:number;
    public push(val:number|string):void{
        let oldNode:StackNode = this.first;
        this.first = new StackNode(val,null);
        this.first.next = oldNode;
        this.len++;
    }
    public pop():number|string{
        let oldNode:StackNode = this.first;
        this.first = oldNode.next;
        this.len--;
        return oldNode.val;
    }
    public top():number|string{
        if(this.first == void 0)return null;
        else return this.first.val;
    }
    public isEmpty():boolean{
        return this.len == 0;
    }
}