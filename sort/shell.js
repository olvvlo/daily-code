/**
 * ShellSort
 *
 * 希尔排序
 *
 * @author wiolem
 */
function shell (arr) {
  let interval = Math.floor(arr.length / 2)
  while (interval > 0) {
    for (let i = 0; i < arr.length; i++) {
      let n = i
      while (n-interval >= 0 && arr[n] < arr[n-interval]){
        let temp = arr[n]
        arr[n] = arr[n-interval]
        arr[n-interval] = temp
        n -= interval
      }
    }
    interval = Math.floor(interval / 2)
  }
  return arr
}
const arr = [2,4,5,1,7,9];
console.log(shell(arr));