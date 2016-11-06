interface Link{
    value:number,
    next:Link;
}
class LinkNode implements Link{
    constructor(public value:number,public next:Link){}
}
class LinkList{
    private head:Link;
    getHead():Link{
        return this.head;
    }
    getArrayData(link?:Link):number[]{
        let current:Link = link == void 0?this.head:link;
        let listArr:number[] = [];
        while(current.next){
            listArr.push(current.value);
            current = current.next;
        }
        listArr.push(current.value);
        return listArr;
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
        this._isExistPosition(target,this.getArrayData(this.head));

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
        this._isExistPosition(target,this.getArrayData(this.head));

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
    removeDuplicate(head:Link):Link{
        let current:Link = head;
        while(current != null && current.next != null){
            if(current.value == current.next.value){
                current.next = current.next.next;
            }else {
                current = current.next;
            }
        }
        return head;
    }
    private _isExistPosition(position:number,arrLen:number[]):number{
        if(position < 0 || position >arrLen.length)
            return -1;
    }
}
let link:LinkList = new LinkList();
link.append(1);
link.append(1);
console.log(link.removeDuplicate(link.getHead()))

