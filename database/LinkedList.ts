interface Link{
    value:number,
    next:Link;
}
class LinkNode implements Link{
    constructor(public value:number,public next:Link){}
}
class LinkList{
    private head:Link;
    public reverseLink:Link;
    private listArr:number[] = [];
    getHead():Link{
        return this.head;
    }
    getArrayData():number[]{
        let current:Link = this.head;
        while(current.next){
            this.listArr.push(current.value);
            current = current.next;
        }
        this.listArr.push(current.value);
        return this.listArr;
    }
    append(val:number):void{
        let node:LinkNode = new LinkNode(val,null);
        if(this.head == void 0){
            this.head = node;
        }else{
            let current:Link = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
    }
    empty():void{
        this.head = {value:null,next:null};
    }
    insertAfter(target:number,val:number):void{
        this._isExistPosition(target);

        let node:LinkNode = new LinkNode(val,null);
        let index:number = 0;
        let current:Link = this.head;
        if(target == 0){
            node.next = this.head;
            this.head = node;
        }else{
            while(current.next){
                current = current.next;
                if(++index == target){
                    node.next = current.next;
                    current.next = node;
                    break;
                }
            }
        }
    }
    removeAt(target:number):void{
        this._isExistPosition(target);

        let index:number = 0;
        let current:Link = this.head;
        if(target == 0){
            this.head = current.next;
        }else{
            while(current.next){
                if(++index == target){
                    current.next = current.next.next;
                    break;
                }
                current = current.next;
            }
        }
    }
    reverse(head:Link):Link{
        let node:Link = head,
            pre:Link = null,
            temp:Link = null;

        while(node != void 0){
            temp = node.next;
            node.next = pre;
            pre = node;
            node = temp;
        }
        return pre;
    }
    private _isExistPosition(position:number):number{
        if(position < 0 || position >this.listArr.length)
            return -1;
    }
}
let link:LinkList = new LinkList();
link.append(1);
link.append(11);
link.append(12);
link.append(13);
link.append(10);
link.append(7);
console.log(link.reverse(link.getHead()));
