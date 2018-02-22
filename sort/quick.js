/**
 * QuickSort
 *
 * 快速排序的思想，整个排序过程只需要三步：
 * {1} 在数据集之中，选择一个元素作为"基准"（pivot）.
 * {2} 所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边.
 * {3} 对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止.
 *
 * 时间复杂度 最好 O(nlog(n)) 一般 O(nlog(n)) 最差 O(n^2)
 *
 * chrome sort() 底层实现使用变形快排
 *
 * @author wiolem
 */

function quick (arr) {
  if (arr.length <= 1) return arr
  let pivot = arr.splice(Math.floor(arr.length / 2), 1)[0], // {1}
      left = [],
      right = []
  for (let i = 0; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]) // {2}
  }
  return quick(left).concat([pivot],quick(right)) // {3}
}
const arr = [1,3,7,4,6];
console.log(quick(arr));