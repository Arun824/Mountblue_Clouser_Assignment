
function limitFunctionCallCount(cb, n) {

    const invoke = function () {
        return n > 0 ? cb() : null;
    }
    return invoke;
}

module.exports =  limitFunctionCallCount;