/**
 * InsertSort
 *
 * 选择排序算法是一种源地址比较排序法。选择排序大致的思路是找到数据结构的最小值并将其放置在第一位，接着找到第二小的值将其放在第二位，以此类推。
 *
 * {1} 外循环会从数组的第一位迭代到最后一位，控制了数组经过了多少轮排序
 * {2} 假设本迭代轮次的第一个值为数组最小值
 * {3} 从当前 i 的值开始至数组结束
 * {4} 比较是否位置 j 的值比当前最小值小
 * {5} 如果是，则改变最小值至新最小值 ，当内循环结束，将得出数组第 n 小的值
 * {6} 如果最小值和原最小值不同，则交换其值
 *
 * 时间复杂度 ： 最好 O(n^2) 一般 O(n^2) 最差 O(n^2)
 *
 * @author wiolem
 */

function insert (arr) {
  const length = arr.length
  let minIndex
  for (let i = 0; i < length - 1; i++) { // {1}
    minIndex = i // {2}
    for (let j = i + 1; j < length; j++) { // {3}
      if (arr[minIndex] > arr[j]) { // {4}
        minIndex = j // {5}
      }
    }
    if (i !== minIndex) { // {6}
      let temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp
    }
  }
  return arr
}
const arr = [1,3,4,2,1]
console.log(bubble(arr))