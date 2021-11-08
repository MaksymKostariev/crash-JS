function square(a) {
    return a * a;
}
console.log("Square is equel ", square(8));

function squareAndOne(a) {
    let s = a * a;
    return s += 1;
}
console.log("Square plus One is equel", squareAndOne(8));

const sqr = (a) => {
    return a * a;
}
console.log("Arrow function is ", sqr(4));

const sqr2 = (a) => a * a;
console.log("Arrow function2 is ", sqr2(4));

const sqrt = function (a){
    return a * a;
}
console.log("Function expression is ", sqrt(3));

function makeDecision(makeFn) {
   makeFn();
}

makeDecision(function() {
  console.log("Let's dance");
});