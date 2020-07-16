var numberOfBoomerangs = function(points:number[][]):number{
    let len = points.length;
    let count = 0;
    let dist = 0;
    for(let i = 0;i<len;i++){
        let res:Object = {};
        for(let j = 0;j<len;j++){
            if(i == j)continue;
            else {
                let x = points[i][0] - points[j][0];
                let y = points[i][1] - points[j][1];
                dist = x*x + y*y;
                res[dist] = res[dist] == void 0?1:++res[dist];
            }
        }
        for(let m in res){
            count += (res[m]*(res[m]-1));
        }
    }
    return count;
};
numberOfBoomerangs([[0,0],[1,0],[2,0]]);