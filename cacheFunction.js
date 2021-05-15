
function cacheFunction(cb) {
    let caches = new Set();
    const invoke = function (arg) {
        if (!caches.has(arg)) {
            caches.add(arg);
            return cb(arg);
        } else {
            return caches;
        }
    }
    return invoke;

}

module.exports = cacheFunction;