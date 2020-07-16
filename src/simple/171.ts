var titleToNumber = function(s:string):number{
    enum ESymbol{
        A=1,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z
    }

    let res:number = 0;
    let len:number = s.length;

    if(len == 1)return ESymbol[""+s];
    else {
        for(let i = 1;i<=len;i++){
            let temp:number = Math.pow(26,(len-i));
            temp = temp == 0?1:temp;
            res += ESymbol[""+s[i-1]] * temp;
        }
    }
    return res;
};
var a = titleToNumber("AAA");

console.log(a)
