var x = 5

function m(x){
  x++
  console.log(x) // 6
}

m(x)

console.log(x) // 5


var arr = [10,99,45]

function mm(list){
  list[1]++
}

mm(arr)

console.log(arr) // [10, 100, 45]