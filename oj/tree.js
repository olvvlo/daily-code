function BinarySearchTree() {
  var Node = function (key) {
    this.key = key
    this.left = null
    this.right = null
  }

  var root = null // 根节点

  var insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }

  this.insert = function (key) {
    var newNode = new Node(key)
    if (root === null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }

  var inOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback)
      callback(node.key)
      inOrderTraverseNode(node.right, callback)
    }
  }

  this.inOrderTraverse = function (callback) {// 中序遍历
    inOrderTraverseNode(root, callback)
  }

  var preOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      callback(node.key)
      preOrderTraverseNode(node.left, callback)
      preOrderTraverseNode(node.right, callback)
    }
  }

  this.preOrderTraverse = function(callback) {// 先序遍历
    preOrderTraverseNode(root, callback)
  }

  var postOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback)
      postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  this.postOrderTraverse = function(callback) {// 后序遍历
    postOrderTraverseNode(root, callback)
  }

  var minNode = function (node) {
    if (node !== null) {
      while (node.left !== null) {
        node = node.left
      }
      return node.key
    }
    return null
  }

  this.min = function () {// 最小值， 最左侧节点
    return minNode(root)
  }

  var maxNode = function (node) {
    if (node !== null) {
      while (node.right !== null) {
        node = node.right
      }
      return node.key
    }
    return null
  }

  this.max = function () {
    return maxNode(root)
  }

  var searchNode = function (node, key) {
    if (node === null) {
      return false
    }
    if (key < node.key) {
      return searchNode(node.left, key)
    } else if (key > node.key) {
      return searchNode(node.right, key)
    } else {
      return true
    }
  }

  this.search = function (key) {// 搜索一个特定的值
    return searchNode(root, key)
  }

  var removeNode = function (node, key) {
    if (node === null) {
      return false
    }

    if (key < node.key) {
      node.left = removeNode(node.left, key)
      return node
    } else if (key > node.key) {
      node.right = removeNode(node.right, key)
      return node
    } else {
      if (node.left === null && node.right === null) {
        node = null
        return node
      }
      if (node.left === null) {
        node = node.right
        return node
      }
      if (node.right === null) {
        node = node.left
        return node
      }

      var findMinNode = function (node) {
        while (node.left !== null) {
          node = node.left
        }
        return node
      }

      var aux = findMinNode(node.right) // 找到右侧最小的节点
      node.key = aux.key // 替换为右侧最小节点
      node.right = removeNode(node.right, aux.key) // 此时出现两个相同节点的值，继续移除右侧最小节点
      return node
    }
  }

  this.remove = function (key) {
    root = removeNode(root, key)
  }
}

var tree = new BinarySearchTree()

tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)

function printNode(value) {
  console.log(value)
}

tree.inOrderTraverse(printNode)
// tree.preOrderTraverse(printNode)
// tree.postOrderTraverse(printNode)
console.log(tree.min())
console.log(tree.max())
console.log(tree.search(25))
tree.remove(15)
tree.inOrderTraverse(printNode)
