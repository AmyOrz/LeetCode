var intersection = function(nums1:number[], nums2:number[]):number[]{
    let result:any = {};
    let minArr:number[] = nums1.length > nums2.length?nums1:nums2;
    let maxArr:number[] = minArr.length == nums1.length?nums2:nums1;

    for(let i = 0,len = minArr.length;i<len;i++){
        let index:number = maxArr.indexOf(minArr[i]);
        if(index != -1)
            result[minArr[i]] = 1;
    }
    return Object.keys(result).map(item=>item|0);
};

let a = intersection([1,2,4,6,2],[2,2,3]);
console.log(a)
