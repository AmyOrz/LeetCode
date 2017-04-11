var repeatedSubstringPattern = function(s:string):boolean{
    if(s == void 0 || s == " ")return false;
    if(s.length > 10000)return false;
    if(s.length % 2 != 0)return false;

    for(let len = s.length,i = len/2;i >= 1;i--){
        let child = s.slice(0,i);

        if(len % i == 0) {
            let compareCount = len / i;
            let currentCount = 1;
            let currenIndex = i;

            for (let j = 2; j <= compareCount; j++) {
                let currentSymbol = s.slice(currenIndex,currenIndex+i);
                currenIndex = currenIndex+i;
                if (currentSymbol == child) {
                    currentCount++;
                } else {
                    break;
                }
            }
            if(compareCount == currentCount)return true;
        }
    }
    return false;
};
var a = repeatedSubstringPattern("abcabcabcabc");
var b = repeatedSubstringPattern("aba");


console.log(a)
console.log(b)
