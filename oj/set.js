function Set() {
  var items = {}

  this.add = function (value) {// 向集合中添加一个新的项
    if (!this.has(value)) {
      items[value] = value // 同时作为键和值保存，有利于查找
      return true
    }
    return false
  }

  this.has = function (value) {// 如果值存在就返回 true, 否则返回 false
    return value in items
  }

  this.remove = function (value) {// 从集合中移除某个值
    if (this.has(value)) {
      delete items[value]
      return true
    }
    return false
  }

  this.clear = function () {// 移除集合中所有项
    items = {}
  }

  this.size = function () {
    var count = 0
    for (var prop in items) {
      if (items.hasOwnProperty(prop)) {
        ++count
      }
    }
    return count
  }

  this.values = function () { // 返回一个包含集合中所有值的数组
    var keys = []
    for (var key in items) {
      if (items.hasOwnProperty(key)) {
        keys.push(key)
      }
    }
    return keys
  }

  this.union = function (otherSet) {// 并集
    var unionSet = new Set()
    var values = this.values()
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }
    values = otherSet.values()
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }
    return unionSet
  }

  this.intersection = function (otherSet) {// 交集
    var intersectionSet = new Set()
    var values = this.values()
    for (var i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i])
      }
    }
    return intersectionSet
  }

  this.difference = function (otherSet) {// 差集 A 和 B 的差集，表示元素存在于 A 不存在 B
    var differenceSet = new Set()
    var values = this.values()
    for (var i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i])
      }
    }
    return differenceSet
  }

  this.subset = function (otherSet) {// 子集 A 是 B 的子集返回 true, 否则返回 false
    if (this.size() > otherSet.size()) {
      return false
    } else {
      var values = this.values()
      for (var i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) {
          return false
        }
      }
      return true
    }
  }
}

var set = new Set()

set.add(1)
set.add(2)
console.log(set.has(1)) // true
console.log(set.values()) // [1, 2]
set.remove(1)
console.log(set.size()) // 1

var setB = new Set()

setB.add(1)
setB.add(2)
setB.add(3)

console.log(set.subset(setB)) // true
console.log(setB.subset(set)) // false

var setC = new Set()

setC.add(2)
setC.add(3)
setC.add(4)

console.log(set.subset(setC)) // true
console.log(set.union(setC).values()) // [1, 2, 3, 4]
console.log(set.intersection(setC).values()) // [2]
console.log(setB.intersection(setC).values()) // [2, 3]
console.log(set.difference(setC).values()) // []