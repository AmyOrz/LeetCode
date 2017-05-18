function add(x,res){
    if(res === void 0)res = 0;
    if(x == 0)return res;
    return add(x-1,res+x);
}
console.log(add(100));