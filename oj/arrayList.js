function ArrayList() {
  var array = []

  this.insert = function (item) {
    array.push(item)
  }

  this.toString = function () {
    return array.join()
  }

  var swap = function (index1, index2) {
    var aux = array[index1]
    array[index1] = array[index2]
    array[index2] = aux
  }

  this.bubbleSort = function () {// 冒泡排序
    var length = array.length
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          swap(j, j + 1)
        }
      }
    }
  }

  this.selectionSort = function () {// 选择排序
    var length = array.length,
      indexMin
    for (var i = 0; i < length - 1; i++) {
      indexMin = i
      for (var j = i; j < length; j++) {
        if (array[indexMin] > array[j]) {
          indexMin = j // 找到此轮最小值
        }
      }
      if (i !== indexMin) {
        swap(i, indexMin)
      }
    }
  }

  this.insertionSort = function () {// 插入排序
    var length = array.length,
      j,
      temp
    for (var i = 1; i < length; i++) {
      j = i
      temp = array[i] // 待插入的值
      while (j > 0 && array[j - 1] > temp) { // 往前查询 
        array[j] = array[j - 1]
        j--
      }
      array[j] = temp
    }
  }

  var merge = function (left, right) {
    var result = [],
      il = 0,
      ir = 0
    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++])
      } else {
        result.push(right[ir++])
      }
    }
    while (il < left.length) {
      result.push(left[il++])
    }
    while (ir < right.length) {
      result.push(right[ir++])
    }

    return result
  }

  var mergeSortRec = function (array) {
    var length = array.length
    if (length === 1) {
      return array
    }
    var mid = Math.floor(length / 2),
      left = array.slice(0, mid),
      right = array.slice(mid, length)
    return merge(mergeSortRec(left), mergeSortRec(right))
  }

  this.mergeSort = function () {// 归并排序
    array = mergeSortRec(array)
  }

  var swapQuickStort = function (array, index1, index2) {
    var aux = array[index1]
    array[index1] = array[index2]
    array[index2] = aux
  }

  var partition = function (array, left, right) {
    var poivt = array[Math.floor((right + left) / 2)],
      i = left,
      j = right
    while (i <= j) {
      while (array[i] < poivt) {
        i++
      }
      while (array[j] > poivt) {
        j--
      }
      if (i <= j) {
        swapQuickStort(array, i, j)
        i++
        j--
      }
    }
    return i
  }

  var quick = function (array, left, right) {
    var index
    if (array.length > 1) {
      index = partition(array, left, right)

      if (left < index - 1) {
        quick(array, left, index - 1)
      }

      if (index < right) {
        quick(array, index, right)
      }
    }
  }

  this.quickSort = function () {// 快速排序
    quick(array, 0, array.length - 1)
  }

  this.sequentialSearch = function (item) {// 顺序查找
    for (var i = 0; i < array.length; i++) {
      if (item === array[i]) {
        return i
      }
    }
    return -1
  }

  this.binarySearch = function (item) {// 二分查找
    this.quickSort()
    var low = 0,
      height = array.length - 1,
      mid,
      element
    while (low <= height) {
      mid = Math.floor((low + height) / 2)
      element = array[mid]
      if (element < item) {
        low = mid + 1
      } else if (element > item) {
        height = mid - 1
      } else {
        return mid
      }
    }
    return -1
  }
}

var array = new ArrayList()
array.insert(3)
array.insert(5)
array.insert(1)
array.insert(6)
array.insert(4)
array.insert(7)
array.insert(2)
console.log(array.toString())
// array.bubbleSort()
// array.selectionSort()
// array.insertionSort()
// array.mergeSort()
// array.quickSort()
// console.log(array.toString())
console.log(array.sequentialSearch(3))
console.log(array.binarySearch(3))