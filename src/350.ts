let intersect = (nums1:number[], nums2:number[]):number[]=>{
    if(nums1.length == 0 || nums2.length == 0)return [];
    let result:number[] = [];
    for(let i = 0;i<nums1.length;i++){
        let index:number = nums2.indexOf(nums1[i]);
        if(index>=0){
            result.push(nums2.splice(index,1)[0]);
        }
    }
    return result;
};
let a:number[] = intersect([2,1],[1,2]);
