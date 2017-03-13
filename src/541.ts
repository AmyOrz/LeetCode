var reverseStr = function(s:string, k:number):string{
    if(s.length>k){
        var mark=0;
        while(mark<s.length-1){
            var temp="";
            for(var i=mark+k-1;i>=mark;i--){
                if(i<s.length){
                    temp=temp+s.charAt(i)+"";
                }else{
                    i=s.length-1;
                    temp=temp+s.charAt(i)+"";
                }
            }
            if(mark+k<=s.length){
                s=s.substring(0,mark)+temp+s.substring(mark+k,s.length);
            }else{
                s=s.substring(0,mark)+temp;
            }
            mark=mark+2*k;
        }
    }else{
        var temp="";
        for(var i=0;i<s.length;i++){
            temp=temp+s.charAt(s.length-i-1)+"";
        }
        s=temp;
    }
    return s;
};
reverseStr("abcdefg",2);