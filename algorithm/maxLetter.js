const maxLetter = function (str) {
  let maxValue = '',
      strList = [...str],
      obj = {},
      max = 0
  strList.forEach((v) => {
    obj[v] = obj[v] === undefined ? 1 : obj[v] + 1
    if (obj[v] > max) {
      maxValue = v
      max = obj[v]
    }
  })
  return [maxValue, max]
}
console.log(maxLetter('aaaassssffffrrrr'))