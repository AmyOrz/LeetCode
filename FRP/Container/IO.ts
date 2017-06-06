import flowRight from "wonder-lodash/flowRight";
import toString from "wonder-lodash/toString";

export class IO {
    public static of(func: Function) {
        var obj = new this(func);

        return obj;
    }

    public func: Function = null;

    constructor(func: Function) {
        this.func = func;
    }

    public chain(f: (...args) => IO) {
        var io = this;

        return IO.of(function() {
            var next = f(io.func.apply(io, arguments));

            return next.func.apply(next, arguments);
        });
    }

    public map(f: Function) {
        return IO.of(flowRight(f, this.func));
    };

    public ap(thatIO: IO) {
        return this.chain(function(f) {
            return thatIO.map(f);
        });
    };

    public run(...args) {
        return this.func.apply(this, arguments);
    };

    public toString() {
        return `IO(${toString(this.func)})`;
    }
}
