import {DataSource} from "./DataSource";
export class safeData{
    constructor(observer){
        this.observer = observer;
    }

    private observer;
    public unsub;
    private _isUnsubscribed:boolean = false;

    public next(value){
        if(!this._isUnsubscribed && this.observer.next){
            this.observer.next(value);
        }
    }

    public error(err){
        if(!this._isUnsubscribed && this.observer.error){
            this.observer.error(err);
        }
        this.unsubscribe();
    }

    public complete(){
        if(!this._isUnsubscribed && this.observer.complete){
            this.observer.complete();
        }
        this.unsubscribe();
    }

    public unsubscribe(){
        this._isUnsubscribed = true;
        if(this.unsub){
            this.unsub();
        }
    }
}
