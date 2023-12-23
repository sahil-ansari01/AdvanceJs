'use strict'

var getA = function(a) {
    return a;
}

let getA = a => a; // declaration -> arguments => body of function;

console.log(getA(1));

// let square = a => a*a;

let square = (a) => {return a*a};

console.log(square(4));

// Whenever you are not passing arguments make sure you use empty parenthesis '())'

var x = function() {
    var that = this;
    this.val = 1;
    setTimeout(function() {
        that.val++;
        console.log(that.val);
    }, 1)
};

var xx = new x();

// Arrow function does not have its own this keyword
// in scope and uses it's parents this.

var x = function() {
    this.val = 1;
    setTimeout(() => {
        this.val++;
        console.log(this.val);
    }, 1)
};

var xx = new x();

// Arrow function does not have it's arguments variable

var x = (...n) => {
    console.log(n[0]);
}

x(1,2,3);