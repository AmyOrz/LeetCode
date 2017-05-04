var generate = function(numRows:number):number[][]{
    if(numRows == 1)return [[1]];
    var res:number[][] = [];

    for(let i = 1;i <= numRows;i++){
        var temp = [];
        temp[0] = 1;
        for(let j = 1;j<i;j++){
            temp[j] = 0;
            for(let m = j;m >= 1;m--){
                temp[m] += temp[m-1];
            }
        }
        res.push(temp);
    }
    console.log(res)

};
console.log(generate(5));