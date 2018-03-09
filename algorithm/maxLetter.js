const maxLetter = (str) => {
  let [maxValue, strList, obj, max] = ['', [...str], {}, 0]
  strList.forEach((v) => {
    obj[v] = obj[v] === undefined ? 1 : obj[v] + 1
    if (obj[v] > max) [maxValue, max] = [v, obj[v]]
  })
  return [maxValue, max]
}
console.log(maxLetter('aaaassssffffrrrr'))