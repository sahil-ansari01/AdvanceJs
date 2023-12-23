let multiply = function(x, y) {
    console.log(x*y);
}

let multiply2 = function(x) {
    return function(y) {
        console.log(x*y);
    }
}

// Currying using bind method

// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);


// Currying using closure

let multiplyByTwo = multiply2(2)  ;
multiplyByTwo(3);

 let me = {
    name: "Sahil Ansari",
    age: 21,
    thisInArrow:() => {
        console.log("My Name is " + this.name);
    },
    printAllDetailsOfUsers() {
        
        const printName = () => {
            console.log('My name is ' + this.name);
        }
         
        const printAge = () => {
            console.log('My age is '+ this.age);
        }

        printAge();
        printName();
    }
}

// me.thisInArrow();
me.printAllDetailsOfUsers();