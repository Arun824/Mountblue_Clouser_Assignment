const limitFunctionCallCount = require("./../limitFunctionCallCount.js");

function cb() {
    return "callBack Function invoked";
}

let n = 3;
if (n) {
    for (let i = 1; i <= n; i++) {
        let callCount = limitFunctionCallCount(cb, i);
        console.log(callCount());
    }
} else {
    let callCount = limitFunctionCallCount(cb, n);
    console.log(callCount());
}
console.log(`callBack Function invoked ${n} times`)
