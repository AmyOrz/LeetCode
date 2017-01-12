class QuickSort{
    constructor(private arrays:number[]){}
    sort():void{
        this._sort(0,this.arrays.length-1);
    }
    showData():void{
        let s:string = "";
        for(let i of this.arrays){
            s = s + i +" ";
        }
        console.log(s);
    }
    private _sort(lower:number,hight:number):void{
        if(hight <= lower)return;
        let j:number = this._particular(lower,hight);
        this._sort(lower,j-1);
        this._sort(j+1,hight);
    }
    private _particular(lower:number,hight:number):number{
        let i:number = lower,
            j:number = hight+1,
            temp:number = this.arrays[lower];
        while(true){
            while(this.arrays[++i] < temp);
            while(this.arrays[--j] > temp);
            if(i >= j)break;
            this._exchange(i,j);
        }
        this._exchange(lower,j);
        return j;
    }
    private _exchange(i:number,j:number):void{
        let temp:number = this.arrays[i];
        this.arrays[i] = this.arrays[j];
        this.arrays[j] = temp;
    }
}
let qs:QuickSort = new QuickSort([5,487,8,87,3,545,5,55,45,251,25,52]);
qs.sort();
qs.showData();