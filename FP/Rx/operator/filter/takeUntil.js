var rx = require("rxjs");

//当 takeUntil 传入的 notifier 发出值时，源 Observable 对象就会直接进入完成状态。
var source = Rx.Observable.interval(1000);
var click = Rx.Observable.fromEvent(document.body, 'click');
var example = source.takeUntil(click);

example.subscribe({
        next: function(value){ console.log(value) },
        error: function(err){ console.log('Error: ' + err); },
        complete: function(){ console.log('complete'); }
});

