function Queue() {
  var items = []

  this.enqueue = function (ele) { // 向队列尾部添加一个或多个新的项
    items.push(ele)
  }

  this.dequeue = function () { // 移除队列中第一项(排在队列最前面的)，并返回被移除元素
    return items.shift()
  }

  this.front = function () { // 返回队列中第一个元素 --- 最先被添加的，队列不做任何改变
    return items[0]
  }

  this.isEmpty = function () {
    return items.length === 0
  }

  this.size = function () {
    return items.length
  }

  this.print = function () {
    console.log(items.toString())
  }

}

module.exports = Queue

// 优先队列
function PriorityQueue() {
  var items = []

  function QueueElement(element, priority) {
    this.element = element
    this.priority = priority // 优先级，越小越靠前
  }

  this.enqueue = function (element, priority) {
    var queueElement = new QueueElement(element, priority)

    if (this.isEmpty()) {
      items.push(queueElement)
    } else {
      var added = false
      for (var i = 0; i < items.length; i++) {
        if (queueElement.priority < items[i].priority) { // 找到 priority 更大的值，前置添加当前元素
          items.splice(i, 0, queueElement)
          added = true
          break
        }
      }
      if (!added) { // 没有找到，添加队尾即可
        items.push(queueElement)
      }
    }
  }

  this.dequeue = function () { // 移除队列中第一项(排在队列最前面的)，并返回被移除元素
    return items.shift()
  }

  this.front = function () { // 返回队列中第一个元素 --- 最先被添加的，队列不做任何改变
    return items[0]
  }

  this.isEmpty = function () {
    return items.length === 0
  }

  this.size = function () {
    return items.length
  }

  this.toString = function () {
    var string = ''
    for (var i = 0; i < items.length; i++) {
      string += ',' + items[i].element
    }
    return string.slice(1)
  }

  this.print = function () {
    console.log(this.toString())
  }
}

let queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

queue.print()

var priorityQueue = new PriorityQueue()

priorityQueue.enqueue(1, 2)
priorityQueue.enqueue(2, 1)
priorityQueue.enqueue(3, 1)

priorityQueue.print()

function hotPotato(nameList, num) {
  var queue = new Queue()
  console.log('参加击鼓传花游戏的人有: ' + nameList)

  for (var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }

  var eliminated = ''
  while (queue.size() > 1) {
    for (var i = 0; i < num; i++) { // 模拟击鼓传花
      queue.enqueue(queue.dequeue()) // 对头移除，添加至队尾
    }
    eliminated = queue.dequeue() // 指定 num  的人淘汰
    console.log(eliminated + '在击鼓传花游戏中被淘汰。')
  }
  console.log('获胜者是' + queue.dequeue())
}

hotPotato(['Tom', 'Lee', 'Jack', 'John', 'Carl'])