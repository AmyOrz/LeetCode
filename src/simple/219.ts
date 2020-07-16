let containsNearbyDuplicate = (nums:number[], k:number):boolean=>{
    var hashT={}, pt = 0;
    for(var i=0;i<nums.length;i++){
        if(hashT[nums[i]] === undefined){
            hashT[nums[i]] = i;
        }
        else if(pt == 0){
            pt=i-hashT[nums[i]];
            hashT[nums[i]] = i;
        }
        else if((i-hashT[nums[i]]) <pt)pt = i-hashT[nums[i]];
    }
    if(pt<=k && pt!==0)return true
    else return false
};
