class NumArray{
    private newArr:number[] = [];
    private sum:number = 0;
    constructor(private nums:number[]){
        for(let i = 0;i<this.nums.length;i++){
            this.sum += this.nums[i];
            this.newArr.push(this.sum);
        }
    }
    sumRange(i:number,j:number){
        return i==0?this.newArr[j]:(this.newArr[j]-this.newArr[i-1]);
    }
}
let arr:NumArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(arr.sumRange(0,5));
