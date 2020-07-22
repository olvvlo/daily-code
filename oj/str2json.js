
function str2json(str) {

  function getJOSN (item) { // item => json
    var items = item.split(',').filter(Boolean)
    var jsonString = items.reduce((acc, curr) => {
      return acc.replace(/\[\]/g, `[{ "${curr}": [] }]`)
    }, `[]`)
    return JSON.parse(jsonString)
  }

  function loop (temp, item, num, count) { // 往最后一个节点添加下一行 JSON
    if (count >= num) return getJOSN(item)[0]
    var end = temp.splice(temp.length - 1, 1)[0] || {}
    var endJSON = Object.keys(end).reduce((acc, key) => {
      var obj = loop([end], item, num, ++count)
      return { ...acc, [key]: [...(end[key]), obj] }
    }, {})
    return endJSON
  }

  var arr = str.split('\n').filter(Boolean)
  var head = arr[0].split(',')[0] // 头
  arr[0] = arr[0].replace(head, '')
  var result = []
  var idx = 0
  var flag = -1 // 标记是否还在当前分支中 总是比 idx 慢 1
  arr.forEach((item) => {
    var empties = item.split(',').reduce((acc, curr) => (!curr ? (++acc) : acc))
    if (!empties) {
      result[idx] = getJOSN(item)[0]
      idx++
      flag++
      return
    }
    
    if (empties === 1) {
      result[flag] = loop([result[flag]], item, 1, 0)
      return
    }
    if (empties >= 2) {
      var temp = result[flag]
      result[flag] = Object.keys(temp).reduce((acc, key) => {
        var obj = loop(temp[key], item, empties - 1, 0)
        return { ...acc, [key]: [...(temp[key]), obj] }
      }, {})
      return
    }
    
  });
  return { [head]: result }
}

console.log(JSON.stringify(str2json(`
奴隶社会,非洲
,亚洲
,,古印度
,欧洲`
), null, 2))

console.log(JSON.stringify(str2json(`
奴隶社会,非洲,古埃及文明,金字塔
,亚洲,两河流域文明,汉谟拉比法典
,,古印度,种姓制度
,,,佛教的创立
,欧洲,希腊,希腊城邦
,,,雅典民主
,,罗马,城邦
,,,帝国的征服与扩展
,,希腊罗马古典文化,建筑艺术
,,,公历`
), null, 2))