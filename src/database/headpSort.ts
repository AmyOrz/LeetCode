class HeadpSort{
    private array:number[] = [];
    constructor(array:number[]){
        this.array.push(0);
        for(let i of array){
            this.array.push(i);
        }
    }
    sort():void{
        let len = this.array.length-1;
        for(let i = len/2;i>=1;i--)
            this._sink(i,len);

        while(len > 1){
            this._exchange(1,len--);
            this._sink(1,len);
        }
    }
    _sink(i:number,len:number):void{
        if(i<0 || i>=len )return;
        while((i*2+1)< len){
            let k:number = i*2;
            if(this.array[k] < this.array[k+1])k++;
            if(this.array[k] < this.array[i])return;
            this._exchange(i,k);
            i = k;
        }
    }
    _exchange(i:number,j:number):void{
        let temp:number = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = temp;
    }
}
