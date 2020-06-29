/**
 * apply() 方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数。
 */

Function.prototype.customApply = function (context, arr) {
    context = context || window
    context.__fn__ = this
    var result
    if (!arr) {
        result = context.__fn__(arr)
    } else {
        var args = []
        for (let i = 0; i < arr.length; i++) {
            args.push('arr[' + i + ']')
        }
        result = eval('context.__fn__(' + args + ')')
    }
    delete context.__fn__
    return result
}

var foo = {
    value: "Lee"
}

function bar (name, age) {
    console.log(name, age)
    console.log(this.value)
}

bar.apply(foo, ['Di', 18])

bar.customApply(foo, ['Di', 18])