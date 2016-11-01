function linkNode(value,next) {
    this.value = value;
    this.next = next;
}
function linkList(){
    this.head;
}
linkList.prototype.append = function (value) {
    var node = new linkNode(value,null);
    if(this.head == void 0)
        this.head = node;
    else{
        var current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = node;
    }
};
var a = new linkList();
a.append(1);
a.append(2);
a.append(2);
a.append(2);
a.append(2);
console.log(a.head)

