class Stack{
    private _stackArr:number[] = [];
    push(target:number):void{
        this._stackArr.push(target);
    }
    pop():void{
        this._stackArr.pop();
    }
    top():number{
        return this._stackArr.length > 0?this._stackArr[0]:null;
    }
    empty():boolean{
        return this._stackArr.length == 0;
    }
}
let stack:Stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.top());
