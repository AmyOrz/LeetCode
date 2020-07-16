//Given an array of integers, every element appears twice except for one. Find that single one.
var singleNumber = function(arr) {
    var obj = {};
    for(var i = 0;i<arr.length;i++){
        if(obj[arr[i]] != void 0){
            obj[arr[i]] ++;
        }else{
            obj[arr[i]] = 0;
        }
    }
    for(var name in obj){
        if(obj[name] == 0){
            return name|0;
        }
    }
};
