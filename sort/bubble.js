/**
 * BubbleSort
 *
 * 冒泡排序比较任何两个相邻的项，如果第一个比第二个大，则交换它们
 *
 * {1} 外循环会从数组的第一位迭代到最后一位，控制了数组经过了多少轮排序
 * {2} 内循环将从第一位迭代至倒数第 i + 1 位（内循环中减去外循环中已跑过的的轮数，避免内循环中不必
 * 要的比较）
 * {3} 内循环实际上进行当前想和下一项的比较
 * {4} 如果两项顺序不对（当前项比下一项大），则交换它们
 *
 * 时间复杂度： 最好 O(n) 一般 O(n^2) 最差 O(n^2)
 *
 * @author wiolem
 */

function bubble (arr) {
  const length = arr.length
  for (let i = 0; i < length; i++) { // {1}
    for (let j = 0; j < length - i - 1; j++) { // {2}
      if (arr[j] > arr[j + 1]) { // {3}
        let temp = arr[j] // {4}
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}
const arr = [1,3,4,2,1]
console.log(bubble(arr))