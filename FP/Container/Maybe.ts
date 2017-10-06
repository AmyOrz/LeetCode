import curry from "wonder-lodash/curry";
import toString from "wonder-lodash/toString";

var _nothing: Nothing = null;

export abstract class Maybe {
    public static of(x: any) {
        return x == null ? _nothing : Maybe.Just(x);
    }

    public static maybe(x: any, f: (x: any) => any, m: Maybe) {
    }

    public static Just(x: any) {
        return new Just(x);
    }

    public static Nothing() {
        return _nothing;
    }

    public static isJust(x: Maybe) {
        return x.isJust();
    }

    public static isNothing(x: Maybe) {
        return x.isNothing();
    }

    public val: any = null;

    public abstract map(f: (x: any) => any): Maybe;
    public abstract ap(m: Maybe): Maybe;
    public abstract chain(f: (x: any) => Maybe): any;

    public toString() {
        return `Maybe.Just(${toString(this.val)})`;
    }

    public isNothing() {
        return false;
    }

    public isJust() {
        return false;
    }
}

Maybe.maybe = curry((x, f, m) => {
    return m.isNothing() ? x : f(m.val);
});

export class Just extends Maybe {
    constructor(x: any) {
        super();

        this.val = x;
    }

    public isJust() {
        return true;
    }

    public isNothing() {
        return false;
    }

    public map(f: (x: any) => any) {
        return new Just(f(this.val));
    }

    public chain(f: (x: any) => Maybe) {
        return f(this.val);
    }

    public ap(m: Maybe) {
        return m.map(this.val);
    };

    public getOrElse(){
        return this.val;
    }

    public toString() {
        return `Maybe.Just(${toString(this.val)})`;
    }
}

export class Nothing extends Maybe {
    public isJust() {
        return false;
    }

    public isNothing() {
        return true;
    }

    public map(f: (x: any) => any) {
        return this;
    }

    public chain(f: (x: any) => Maybe) {
        return this;
    }

    public ap(m: Maybe) {
        return this;
    };

    public getOrElse(value){
        return value;
    }

    public toString() {
        return `Maybe.Nothing()`;
    }
}

_nothing = new Nothing();
