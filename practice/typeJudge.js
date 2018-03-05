// typeof
console.log('-----------------typeof-----------------')
console.log(typeof 2) //'number'
console.log(typeof '') // 'string'
console.log(typeof true) // 'boolean'
console.log(typeof undefined) // 'undefined'
console.log(typeof Symbol()) // 'symbol'
console.log(typeof (function(){})) // 'function'
console.log(typeof null) // 'object'
console.log(typeof {}) // 'object'
console.log(typeof []) // 'object'

// Object.prototype.toString.call()
console.log('-----------------Object.prototype.toString.call()-----------------')
console.log(Object.prototype.toString.call(2)) //'[object Number]'
console.log(Object.prototype.toString.call('')) // '[object String]'
console.log(Object.prototype.toString.call(true)) // '[object Boolean]'
console.log(Object.prototype.toString.call(undefined)) // '[object Undefined]'
console.log(Object.prototype.toString.call(Symbol())) // '[object Symbol]'
console.log(Object.prototype.toString.call((function(){}))) // '[object Function]'
console.log(Object.prototype.toString.call(null)) // '[object Null]'
console.log(Object.prototype.toString.call({})) // '[object Object]'
console.log(Object.prototype.toString.call([])) // '[object Array]'

console.log('-----------------instanceof-----------------')
console.log([] instanceof Array) // true
console.log({} instanceof Object) // true
console.log('' instanceof String) // false
console.log(true instanceof Boolean) // false
console.log(2 instanceof Number) // false
console.log(Symbol() instanceof Symbol) // false
console.log((function(){}) instanceof Function) // true

// constructor
console.log('-----------------constructor-----------------')
console.log([].constructor === Array) // true
console.log({}.constructor === Object) // true
console.log("string".constructor === String) // true
console.log((123).constructor === Number) // true
console.log(true.constructor === Boolean) // true
console.log(Symbol().constructor === Symbol) // true
console.log((function(){}).constructor === Function) // true
// null,undefined 无constructor

console.log(Object.prototype.toString.call(String(''))) // '[object String]'
console.log(Object.prototype.toString.call(new String(''))) // '[object String]'
console.log(typeof String('')) // 'string'
console.log(typeof new String('')) // 'object'