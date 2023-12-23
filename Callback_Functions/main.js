// What is callback function in javascript

setTimeout(function() {
    console.log('timer');
}, 5000);


function x(y) {
    console.log('x');
    y();
}

x(function y() {
    console.log('y');
});


function attachEventListener() {
    let count = 0;
    document.getElementById('clickMe')
    .addEventListener('click', function xyz() {
        console.log('Button Clicked', ++count);
    });
}
attachEventListener();

