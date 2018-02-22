/**
 * InsertSort
 *
 * 插入排序每次排一个数组项，以此方式构建最后的排序数组。假定第一项已经排好了，接着它和第二项
 * 比较，第二项是应该待在原位还是插到第一项之前呢？这样，头两项就已正确排序，接着和第三项比较
 * （它是应该插入到第一/第二还是第三呢），以此类推。
 *
 * {1} 迭代数组来给第 i 项找到正确的位置
 * {2} 用 i 的值来初始化一个辅助变量
 * {3} 将 i 值存储于一个临时变量，便于之后将其插入到正确的位置上
 * {4} 只要变量  j 比 0 大 并且数组中前面的值比待比较的值大
 * {5} 将这个值移动到当前位置上并减小
 * {6} 该项插入到正确的位置上
 *
 * 时间复杂度 ： 最好 O(n) 一般 O(n^2) 最差 O(n^2)
 *
 * @author wiolem
 */

function insert (arr) {
  const length = arr.length
  let j, temp
  for (let i = 0; i < length; i++) { // {1}
    j = i // {2}
    temp = arr[i] // {3}
    while(j > 0 && arr[j - 1] > temp) { // {4}
      arr[j] = arr[j - 1] // {5}
      j--
    }
    arr[j] = temp // {6}
  }
  return arr
}
const arr = [1,3,4,2,1]
console.log(insert(arr))