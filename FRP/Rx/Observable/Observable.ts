import {safeData} from "./safeData";
import {DataSource} from "./DataSource";
export class Observable{
    constructor(subscribe){
        this._subscribe = subscribe;
    }

    private _subscribe;

    subscribe(observer){
        const safe = new safeData(observer);
        safe.unsub = this._subscribe(safe);

        return safe.unsubscribe.bind(safe);
    }
}

function map(observable,func){
    return new Observable((observer)=>{

        return observable.subscribe({
            next:(x)=>observer.next(func(x)),
            error:(err)=>observer.error(err),
            complete:()=>observer.complete()
        });

    })
}
var myObservable = new Observable((observer)=>{
    const dataSource = new DataSource();
    dataSource.next = (e)=>observer.next(e);
    dataSource.error = (e)=>observer.error(e);
    dataSource.complete = (e)=>observer.complete();

    return ()=>dataSource.destory();
})

var unsubscribe = map(myObservable,(x)=>x+x).subscribe({
    next(x){
        console.log(x)
    },
    error(err){
        console.log(err)
    },
    complete(){
        console.log("over")
    }
})
