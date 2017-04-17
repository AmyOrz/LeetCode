var checkRecord = function(s:string):boolean{
    if(s == void 0)return false;

    var result = {};
    var LIndex = [];
    for(let i = 0;i<s.length;i++){
        var record = s[i];
        if(result[record] == void 0){
            result[record] = 0;
        }
        result[record]++;
        if(record == "L"){
            LIndex.push(i);
        }
    }
    if(result['A'] > 1)return false;
    var len = LIndex.length;
    if(len>2){
        var LCount = 0;
        for(let j = 0;j<len-1;j++){
            if((LIndex[j+1] - LIndex[j]) == 1){
                LCount++;
            }else{
                LCount = 0;
            }
            if(LCount >= 2)return false;
        }
    }

    return true;
};
var a = checkRecord("LLLALL");
var b = checkRecord("PPALLL");
var c = checkRecord("PLLPLLLLPP");
console.log(a,b,c);
