// Function Statements and Function Declaration
function a() {
    console.log('a called');
}

// Function Expression
var b = function(param1) {
    return function xyz() {

    }
}

console.log(b());

// Anonymous Function
// function() {

// }

// Named function expressions

// Difference between Parameters & Arguments 

// First class function : the ability of a functions to be used as value and can be passed as an argument of
// of another function and can be returned from the function this ability of a function is known as first class function
var b = function(param1) {
    return function xyz() {

    }
}

// Currying

function addAConstantValue(constant1) {
    return (value) => {
        return value + constant1;
    }
}

const functionWithConstantAdded = addAConstantValue(15);

console.log(functionWithConstantAdded(3));