var year = 2017
function test(year){
  console.log(year) // 2016
  var year = 2015
  console.log(year) // 2015
}
test(2016);
console.log(year) // 2017