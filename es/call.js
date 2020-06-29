/**
 * call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。
 */

Function.prototype.customCall = function (context) {
    context = context || window
    context.__fn__ = this
    var args = []
    for (var i = 1; i <= arguments.length; i++) {
        args.push('arguments[' + i + ']')
    }
    console.log('context.__fn__(' + args + ')') // 调用 toString() 方法
    var result =  eval('context.__fn__(' + args + ')')
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

bar.customCall(foo, 'Di', 18)