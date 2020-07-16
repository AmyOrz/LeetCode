var longestPalindrome = function(s:string):number{
    var dic = {};//字典对象统计每个字母出现的次数
    var chars = [];//统计出现过的字母
    var count = 0;//统计最长回文长度
    for(var i=0;i<s.length;i++){
        if(!dic[s.charAt(i)]){
            dic[s.charAt(i)] = 1;//初始化为1次
            chars.push(s.charAt(i));
        }else{
            dic[s.charAt(i)]++;//次数增加
        }
    }

    //统计，出现偶数次的不用考虑直接计算次数，出现奇数次的只需要取其偶数部分，最后再加上最大奇数的奇数部分的1次
    var isAddOne = 0;//最大奇数的偶数部分加1的布尔值，判断是否需要加1次
    for(var j=0;j<chars.length;j++){
        if(dic[chars[j]] % 2 == 0){//偶数
            count += dic[chars[j]];//加上次数
        }else{//奇数
            isAddOne = true;//需要加1次
            count += dic[chars[j]] - 1;//加上偶数部分
        }
    }
    if(isAddOne){
        count += 1;//加上最大奇数多出的1次
    }
    return count;
};
var a = longestPalindrome("abccccdd");