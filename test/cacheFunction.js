const cacheFunction = require("./../cacheFunction.js");

function cb(arg) {
    return `New argument added to caches Object : ${arg}`;
}

let res = cacheFunction(cb);
console.log(res("arun"));
console.log(res("arun"));
console.log(res("singh"));