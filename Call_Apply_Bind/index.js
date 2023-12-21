var obj  = {num:2};

var addToThis = function(a, b, c) {
    return this.num + a + b + c;
};

// call
console.log(addToThis.call(obj, 3, 1, 2)); // functionName.call(obj, functionArguments)

// apply
var arr = [1,2,3];
console.log(addToThis.apply(obj, arr)); 

// bind
var bound = addToThis.bind(obj);
console.log(bound(1,2,3));