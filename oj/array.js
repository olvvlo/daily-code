// 添加
var numbers = [0, 1, 2, 3]
numbers[4] = 4
console.log(numbers) // [0, 1, 2, 3, 4]
numbers.push(5) // push 把元素添加到数组末尾
numbers.push(6, 7)
console.log(numbers) // [0, 1, 2, 3, 4, 5, 6, 7]
numbers.unshift(-1)// unshift 把元素插入到数组首位
numbers.unshift(-3, -2)
console.log(numbers) // [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
// 删除
numbers.pop() // pop 删除数组最靠后的元素
console.log(numbers) // [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6]
numbers.shift() // shift 删除数组的第一个元素
console.log(numbers) // [-2, -1, 0, 1, 2, 3, 4, 5, 6]
numbers.splice(5, 3) // splice 通过指定位置/索引，删除相应位置和数量元素
console.log(numbers) // [-2, -1, 0, 1, 2, 6]
numbers.splice(5, 0, 3, 4, 5) // 参数一：删除或插入的索引值；参数二：删除的个数；参数三~；添加到数组的值
console.log(numbers) // [-2, -1, 0, 1, 2, 3, 4, 5, 6]
numbers.splice(5, 3, 3, 4, 5)
console.log(numbers) // [-2, -1, 0, 1, 2, 3, 4, 5, 6]

// 合并
var a2 = [-4]
a2.concat(-3, numbers)
console.log(a2) // [-4] // concat 不对原数组操作，只返回合并后结果
console.log([-4].concat(-3, numbers)) // [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6]

// 搜索
numbers.push(0)
console.log(numbers.indexOf(0)) // 2 // indexOf 返回参与匹配的第一个元素索引
console.log(numbers.lastIndexOf(0))// 9 // lastIndexOf 返回参与匹配的最后一个索引

// 打印
numbers.pop()
console.log(numbers.toString()) // -2,-1,0,1,2,3,4,5,6 等同于 join()
console.log(numbers.join('-')) // -2--1-0-1-2-3-4-5-6

// slice 返回索引范围内（0 <= index < 1）的新数组，不对老数组操作
console.log(numbers.slice(0, 1), numbers) // [ -2 ] [ -2, -1, 0, 1, 2, 3,  4, 5, 6 ]