/**
 * bind() 方法创建一个新的函数，在 bind() 被调用时，
 * 这个新函数的 this 被指定为 bind() 的第一个参数，
 * 而其余参数将作为新函数的参数，供调用时使用。
 * 
 * 1. 返回一个函数
 * 2. 可以传入参数
 */

// Function.prototype.customBind = function (context) {

//     var self = this;
//     // 获取函数从第二个参数到最后一个参数
//     var args = Array.prototype.slice.call(arguments, 1);

//     return function () {
//         // 这个时候的 arguments 是指 bind 返回的函数传入的参数
//         var bindArgs = Array.prototype.slice.call(arguments);
//         return self.apply(context, args.concat(bindArgs));
//     }

// }

/** 考虑构造函数效果 */
// 当 bind 返回的函数作为构造函数的时候，bind 时指定的 this 值会失效，但传入的参数依然生效。

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
