/**
 * bind() 方法创建一个新的函数，在 bind() 被调用时，
 * 这个新函数的 this 被指定为 bind() 的第一个参数，
 * 而其余参数将作为新函数的参数，供调用时使用。
 */

Function.prototype.customBind = function (context) {
    if (typeof this !== 'function') {
        throw new Error('Function.prototype.bind - what is trying to be bound is not callable')
    }
    var self = this
    var args = Array.prototype.slice.call(arguments, 1)

    var fNOP = function () {}

    var fBind = function () {
        var bindArgs = Array.prototype.slice.call(arguments)
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs))
    }

    fNOP.prototype = self.prototype
    fBind.prototype = new fNOP()
    return fBind
}

// Object.create = function( o ) {
//     function f(){}
//     f.prototype = o;
//     return new f;
// };

var foo = {
    value: "Lee"
}

function bar (name, age) {
    console.log(name, age)
    console.log(this.value)
}

bar.customBind(foo, 'Di')(18)

bar.prototype.friend = 'LEE'

var bindFoo = bar.customBind(foo, 'Di')

var obj = new bindFoo(18)

console.log(obj.friend)
