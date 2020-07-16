var findAnagrams = function(s:string, p:string):number[]{
    if(s == void 0 || p == void 0 )return [];

    var maxLen = s.length;
    var minLen = p.length;

    if(maxLen < minLen )return [];
    var result = [];

    for(var i = 0;i <= (maxLen-minLen);i++){

        var temp = p.split("");
        for(var j = i;j<(i+minLen);j++){
            if(temp.indexOf(s[j]) > -1){
                temp.splice(temp.indexOf(s[j]),1);
            }
        }
        if(temp.length == 0){
            result.push(i);
        }
    }
    return result;

};
findAnagrams("cbaebabacd","abc")