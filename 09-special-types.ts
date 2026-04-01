// Special Type - null
let a: null;
a = null;
// a = "Hi"

let b: null | string;
b = null;
b = "Allow me to lend you some moonlight.";
// b = 10

// Special Type - undefined
let c: undefined;
c = undefined;
// c = null
// c = "Hi"

let d: undefined | string;
d = undefined;
d = "May the wind guide you.";
// d = null
// d = 10

console.log("a:", a);
console.log("b:", b);
console.log("c:", c);
console.log("d:", d);