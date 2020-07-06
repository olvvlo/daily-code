function Dictionary() {
  var items = {}

  this.has = function (key) {// 判断某个键值存在于这个字典中，则返回 true，反之返回 false
    return key in items
  }

  this.set = function (key, value) {// 向字典中添加新元素
    items[key] = value
  }

  this.remove = function (key) {// 通过键值来从字典中移除键值对应的数据值
    if (this.has(key)) {
      delete items[key]
      return true
    }
    return false
  }

  this.get = function (key) {// 通过键值查找特定数值并返回
    return this.has(key) ? items[key] : undefined
  }

  this.values = function () {
    var values = []
    for (var key in items) {
      if (items.hasOwnProperty(key)) {
        values.push(items[key])
      }
    }
    return values
  }

  this.clear = function () {
    items = {}
  }

  this.size = function () {
    var count = 0
    for (var key in items) {
      if (items.hasOwnProperty(key)) {
        ++count
      }
    }
    return count
  }

  this.keys = function () {
    var keys = []
    for (const key in items) {
      if (items.hasOwnProperty(key)) {
        keys.push(key)
      }
    }
    return keys
  }

  this.getItems = function () {
    return items
  }
}

var dictionary = new Dictionary()

dictionary.set('Lee', '337829740@qq.com')
dictionary.set('Wang', '11111@hotmal.com')

console.log(dictionary.values())
console.log(dictionary.size())
console.log(dictionary.has('Lee'))
console.log(dictionary.keys())
console.log(dictionary.get('Wang'))
dictionary.remove('Wang')
console.log(dictionary.getItems())

module.exports = Dictionary