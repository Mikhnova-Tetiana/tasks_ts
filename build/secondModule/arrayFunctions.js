"use strict";
Object.defineProperty(Array.prototype, "customForEach", {
    value: function (callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    },
});
Object.defineProperty(Array.prototype, "customMap", {
    value: function (callback) {
        const resultArray = [];
        for (let i = 0; i < this.length; i++) {
            resultArray.push(callback(this[i], i, this));
        }
        return resultArray;
    },
});
Object.defineProperty(Array.prototype, "customFilter", {
    value: function (callback) {
        const resultArray = [];
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
                resultArray.push(this[i]);
            }
        }
        return resultArray;
    },
});
Object.defineProperty(Array.prototype, "customFind", {
    value: function (callback) {
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
                return this[i];
            }
        }
        return undefined;
    },
});
Object.defineProperty(Array.prototype, "customReduce", {
    value: function (callback, accumulator) {
        let index = 0;
        if (arguments.length < 2) {
            index = 1;
            accumulator = this[0];
        }
        while (index < this.length) {
            accumulator = callback(accumulator, this[index], index, this);
            ++index;
        }
        return accumulator;
    },
});