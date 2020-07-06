function LinkedList() {
  var Node = function (element) {
    this.element = element
    this.next = null
  }


  var length = 0
  var head = null

  this.append = function (element) { // 向列表尾部添加一个新的项
    var node = new Node(element),
        current
    if (head === null) { // 如果是第一个节点
      head = node
    } else {
      current = head

      // 循环列表，找到最后一项
      while (current.next) {
        current = current.next
      }

      // 找到最后一项，将其 next 设置为 node，建立链接
      current.next = node
    }

    length ++ // 更新列表的长度
  }

  this.insert = function (position, element) { // 向列表的特定位置插入一个新的项
    if (position >= 0 && position <= length) { // 检查越界
      var node = new Node(element),
          current = head,
          previous,
          index = 0
      if (position === 0) {// 在第一个位置添加
        node.next = current
        head = node
      } else {
        while (index++ < position) {
          previous = current
          current.next = node
        }
        node.next = current
        previous.next = node
      }
      length++
      return true
    } else {
      return false
    }
  }

  this.removeAt = function (position) { // 从列表特定位置移除一项
    if (position > -1 && position < length) {// 检查是否越界
      var current = head,
          previous,
          index = 0
      if (position === 0) {// 移除第一项
        head = current.next
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        // 将 previous 与 current 的下一项链接起来: 跳过 current，从而移除它
        previous.next = current.next
      }
      length--
      return current.element
    } else {
      return null
    }
  }

  this.remove = function (element) { // 从列表中移除一项
    var index = this.indexOf(element)
    return this.removeAt(index)
  }

  this.indexOf = function (element) { // 返回元素在列表中的索引
    var current = head,
        index = 0
    while (current) { // 是否尾部 null
      if (element === current.element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  this.isEmpty = function () { 
    return length === 0
  }

  this.size = function () {
    return length
  }

  this.getHead = function () {
    return head
  }

  this.toString = function () {
    var current = head,
        string = ''
    while (current) {
      string += ',' + current.element
      current = current.next
    }

    return string.slice(1)
  }

  this.print = function () {
    console.log(this.toString())
  }
}

var linked = new LinkedList()

linked.append(11)
linked.append(12)

linked.print()

console.log(linked.size())

function DoublyLinkedList() {
  var Node = function (element) {
    this.element = element
    this.next = null
    this.prev = null
  }


  var length = 0
  var head = null
  var tail = null 

  this.append = function (element) { // 向列表尾部添加一个新的项
    var node = new Node(element),
        current
    if (head === null) { // 如果是第一个节点
      head = node
    } else {
      current = head

      // 循环列表，找到最后一项
      while (current.next) {
        current = current.next
      }

      // 找到最后一项，将其 next 设置为 node，建立链接
      current.next = node
    }

    length ++ // 更新列表的长度
  }

  this.insert = function (position, element) { // 向列表的特定位置插入一个新的项
    if (position >= 0 && position <= length) { // 检查越界
      var node = new Node(element),
          current = head,
          previous,
          index = 0
      if (position === 0) {// 在第一个位置添加
        if (!head) {
          head = node
          tail = node
        } else {
          node.next = current
          current.prev = node // 
          head = node
        }
      } else if (position === length) {// 最后一项
        current = tail
        current.next = node
        node.prev = current
        tail = node
      } else {
        while (index++ < position) {
          previous = current
          current.next = node
        }
        node.next = current
        previous.next = node

        current.prev = node
        node.prev = previous
      }
      length++
      return true
    } else {
      return false
    }
  }

  this.removeAt = function (position) { // 从列表特定位置移除一项
    if (position > -1 && position < length) {// 检查是否越界
      var current = head,
          previous,
          index = 0
      if (position === 0) {// 移除第一项
        head = current.next
        if (length === 1) {
          tail = null
        } else {
          head.prev = null
        }
      } else if (position === length) {
        current = tail
        tail = current.prev
        tail.next = null
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        // 将 previous 与 current 的下一项链接起来: 跳过 current，从而移除它
        previous.next = current.next
        previous.next.prev = previous
      }
      length--
      return current.element
    } else {
      return null
    }
  }

  this.remove = function (element) { // 从列表中移除一项
    var index = this.indexOf(element)
    return this.removeAt(index)
  }

  this.indexOf = function (element) { // 返回元素在列表中的索引
    var current = head,
        index = 0
    while (current) { // 是否尾部 null
      if (element === current.element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  this.isEmpty = function () { 
    return length === 0
  }

  this.size = function () {
    return length
  }

  this.getHead = function () {
    return head
  }

  this.toString = function () {
    var current = head,
        string = ''
    while (current) {
      string += ',' + current.element
      current = current.next
    }

    return string.slice(1)
  }

  this.print = function () {
    console.log(this.toString())
  }
}

var doublyLinked = new DoublyLinkedList()

doublyLinked.append(11)
doublyLinked.append(12)

doublyLinked.print()

console.log(doublyLinked.size())