/**
 * new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象类型之一
 */

function objectFactory() {
    var obj = new Object() // Object.create(null)
    Constructor = [].shift.call(arguments)
    obj.__proto__ = Constructor.prototype
    var ret = Constructor.apply(obj, arguments)
    return typeof ret === 'object' ? ret : obj;
}

function Foo(name, age) {
    this.name = name
    this.age = age

    // return {
    //     name
    // }
}

Foo.prototype.height = 100

var person = objectFactory(Foo, 'Lee', 18)

console.log(person.name, person.age, person.height)