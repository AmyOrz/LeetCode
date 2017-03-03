var firstUniqChar = function(s:string):number{
    if(s.length == 1)return 0;
    for(let i = 0,len = s.length;i < len;i++){
        let repeatIndex:number = 0;
        let min = 0;
        let max = len;
        while(min < max){
            if(s[min++] == s[i])repeatIndex++;
            if(s[--max] == s[i])repeatIndex++;
            if(repeatIndex>1)break;
        }
        if(repeatIndex == 1){
            return i;
        }
    }
    return -1;
};
var a = firstUniqChar("aaddadadad");
console.log(a)
