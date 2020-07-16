let hammingDistance = (x:number, y:number):number=>{
    if(x<0 || y<0 || x>Number.MAX_VALUE || y>Number.MAX_VALUE)
        return -1;
    let count:number = 0;
    let exc:number = x ^ y;
    while (exc) {
        ++count;
        exc &= (exc - 1);
    }
    return count;
};
let a:number = hammingDistance(7,6);
console.log(a);