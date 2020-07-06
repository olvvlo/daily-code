function HashTable() {
	var table = []

	var loseloseHashCode = function (key) {
		var hash = 0
		for (var i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i)
		}
		return hash % 37 // 获取较小数值
	}

	this.put = function (key, value) {// 向散列表添加一个新的项
		var position = loseloseHashCode(key)
		console.log(position + ' - ' + key)
		table[position] = value
	}

	this.get = function (key) {
		return table[loseloseHashCode(key)]
	}

	this.remove = function (key) {
		table[loseloseHashCode(key)] = undefined
	}
}