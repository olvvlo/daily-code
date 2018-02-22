// "use strict"

function add(p1,p2,p3){

  arguments[0] = 1000
  console.log(p1) // 1000

  var sum = 0
  for(var i=0; i<arguments.length; i++){
    sum += arguments[i]
  }

  return sum
}

console.log(add(10,20,30)) // 1050