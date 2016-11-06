var addDigits = function (num) {
    /*    if(num <= 0 && num <10)return num;
        let result:string = num+"";
        while(result.length> 1){
            let temp:number = 0;
            for(let i = 0;i<result.length;i++){
                temp += Number(result[i]);
            }
            result = temp+"";
        }
        return Number(result);*/
    return num == 0 ? 0 : (num % 9 == 0 ? 0 : (num % 9));
};
console.log(addDigits(38));
//# sourceMappingURL=258.js.map