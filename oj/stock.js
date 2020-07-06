function Stock () {
	var items = []
  
  this.push = function (ele) { // 添加一个或者几个新元素到栈顶
  	return items.push(ele)
  }
  
  this.pop = function () { // 移除栈顶元素，同时返回被删除元素
  	return items.pop()
  }
  
  this.peek = function () { // 返回栈顶元素，不对栈做任何修改
		return items[items.length - 1]
  }
  
  this.isEmpty = function () { // 如果栈内没有元素就返回 true ，否则返回 false
		return items.length === 0
  }
  
  this.clear = function () { // 移除栈内所有元素
  	items = []
  }
  
  this.size = function () { // 返回栈里的元素个数
  	return items.length
  }
}

module.exports = Stock