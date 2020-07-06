var Dictionary = require('./dictionary')
var Queue = require('./queue')
var Stock = require('./stock')

function Graph() {
  var vertices = [] // 存储图所有的顶点
  var adjList = new Dictionary() // 存储邻接表 顶点为键，邻接顶点列表为值

  this.addVertices = function (v) {// 添加新的顶点
    vertices.push(v)
    adjList.set(v, [])
  }

  this.addEdge = function (v, w) {// 连线
    adjList.get(v).push(w)
    adjList.get(w).push(v)
  }

  var initializeColor = function () {
    var color = []
    for (var i = 0; i < vertices.length; i++) {
      color[vertices[i]] = 'white' // 白色表示顶点还未访问
    }
    return color
  }

  this.bfs = function (v, callback) {// 广度优先遍历
    var color = initializeColor(),
      queue = new Queue() // 存储待访问和待探索的顶点
    queue.enqueue(v)
    while (!queue.isEmpty()) {
      var u = queue.dequeue(),
        neighbors = adjList.get(u)
      color[u] = 'grey' // 灰色表示顶点被访问过，但并未探索过
      for (var i = 0; i < neighbors.length; i++) {
        var w = neighbors[i]
        if (color[w] === 'white') {
          color[w] = 'grey'
          queue.enqueue(w)
        }
      }
      color[u] = 'block' // 黑色表示顶点被访问且被完全探索过
      if (callback) {
        callback(u)
      }
    }
  }

  this.BFS = function (v) {
    var color = initializeColor(),
      queue = new Queue(),
      d = [], // 距离
      pred = [] // 前溯点
    queue.enqueue(v)
    for (var i = 0; i < vertices.length; i++) {
      d[vertices[i]] = 0
      pred[vertices[i]] = null
    }
    while (!queue.isEmpty()) {
      var u = queue.dequeue(),
        neighbors = adjList.get(u)
      color[u] = 'grey'
      for (var i = 0; i < neighbors.length; i++) {
        var w = neighbors[i]
        if (color[w] === 'white') {
          color[w] === 'grey'
          d[w] = d[u] + 1 // 设置 v 和 w 之前的距离
          pred[w] = u // 发现顶点 u 的领点 w 时，设置 w 的前溯点值为 u
          queue.enqueue(w)
        }
      }
      color[u] = 'black'
    }
    return {
      distances: d,
      predecessors: pred
    }
  }

  var dfsVisit = function (u, color, callback) {
    color[u] = 'grey'
    if (callback) {
      callback(u)
    }
    var neighbors = adjList.get(u)
    for (var i = 0; i < neighbors.length; i++) {
      var w = neighbors[i]
      if (color[w] === 'white') {
        dfsVisit(w, color, callback)
      }
    }
    color[u] = 'black'
  }

  this.dfs = function (callback) {
    var color = initializeColor()
    for (var i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === 'white') {
        dfsVisit(vertices[i], color, callback)
      }
    }
  }

  this.toString = function () {
    var string = ''
    for (var i = 0; i < vertices.length; i++) {
      string += vertices[i] + ' --> '
      var neighbors = adjList.get(vertices[i])
      for (var j = 0; j < neighbors.length; j++) {
        string += neighbors[j] + ' '
      }
      string += '\n'
    }
    return string
  }
}

var graph = new Graph()

var vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (var i = 0; i < vertices.length; i++) {
  graph.addVertices(vertices[i])
}

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

console.log(graph.toString())

var shortTestPathA = graph.BFS(vertices[0])

console.log(shortTestPathA)

var fromVertex = vertices[0] // 源顶点
for (var i = 1; i < vertices.length; i++) {
  var toVertex = vertices[i], // 目标点
      path = new Stock() // 存储路径值
  for (var v = toVertex; v !== fromVertex; v = shortTestPathA.predecessors[v]) {
    path.push(v) // 反向追溯这条路径
  }
  path.push(fromVertex) // 源顶点添加到栈中，得到完整路径
  var s = path.pop()
  while (!path.isEmpty()) {
    s += ' - ' + path.pop()
  }
  console.log(s)
}

var printNode = function (v) {
  console.log('Visited vertex: ' + v)
}

graph.dfs(printNode)