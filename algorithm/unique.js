const unique = (arr) => {
  const result = []
  return arr.filter((v, i) => {
    if (typeof v === 'object') {
      v = JSON.stringify(v)
    }
    if (result.includes(v)) return false
    else {
      result.push(v)
      return true
    }
  })
}
console.log(unique([1,String('1'),String('1'),{a:2},{a:2},1,1,1,2]))