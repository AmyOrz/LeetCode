import curry from "wonder-lodash/curry";
import toString from "wonder-lodash/toString";

export abstract class Either {
    public val: any = null;

    constructor(x: any) {
        this.val = x;
    }

    public abstract map(f: (x: any) => any): Either;
    public abstract chain(f: (x: any) => Either): Either;

    public either<T, R>(leftFn: (x: any) => T, rightFn: (x: any) => R): T | R {
        return null;
    }
}

export class Right extends Either {
    public static of(x: any) {
        var obj = new this(x);

        return obj;
    }

    public isRight() {
        return true;
    }

    public isLeft() {
        return false;
    }

    public map(f: (x: any) => any) {
        return Right.of(f(this.val));
    }

    public ap(that: Either) {
        return that.map(this.val);
    }

    public chain(f: (x: any) => Either) {
        return f(this.val);
    }

    public toString() {
        return `Right(${toString(this.val)})`;
    }
}

Right.prototype.either = curry(function either(leftFn, rightFn) {
    return rightFn(this.val);
});

export class Left extends Either {
    public static of(x: any) {
        var obj = new this(x);

        return obj;
    }

    public isRight() {
        return false;
    }

    public isLeft() {
        return true;
    }

    public map(f: (x: any) => any) {
        return this;
    }

    public ap(that: Either) {
        return this;
    }

    public chain(f: (x: any) => Either) {
        return this;
    }

    public toString() {
        return `Left(${toString(this.val)})`;
    }
}

Left.prototype.either = curry(function either(leftFn, rightFn) {
    return leftFn(this.val);
});
