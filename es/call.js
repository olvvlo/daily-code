/**
 * call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。
 * 
 * 1. 将函数设为对象的属性
 * 2. 执行该函数
 * 3. 删除该函数
 */

Function.prototype.customCall = function (context) {
    context = context || window
    console.log(this) // [Function: bar]
    context.__fn__ = this // [1] 获取调用 customCall 的函数
    var args = []
    for (var i = 1; i <= arguments.length; i++) {
        args.push('arguments[' + i + ']')
    }
    console.log('context.__fn__(' + args + ')')
    var result =  eval('context.__fn__(' + args + ')') // [2] 调用 toString() 方法
    delete context.__fn__ // [3]
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