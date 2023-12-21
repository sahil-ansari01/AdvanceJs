var obj  = {num:2};

var addToThis = function(a) {
    return this.num + a;
};

addToThis.call(obj, 3); // functionName.call(obj, functionArguments)