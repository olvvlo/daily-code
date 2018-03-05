var stu = {
  id:256,
  name:"张三",
  age : 30,
  school : {
    name : "清华",
    addr : "北京",
    level : "99",
    studentscount : 30000
  },
  friends : [
    {name: "小明"},
    {name: "小凡"},
    {name: "小峰"}
  ],
  say: function () {
    console.log(111)
  }
}

// var newstu = JSON.parse(JSON.stringify(stu))
// var newstu = {...stu}
// console.log( newstu )

// stu.school.addr = "上海"
// console.log( newstu )
// JSON.parse(JSON.stringify())对象数组深拷贝，但无法拷贝函数
// ...扩展运算符 浅拷贝 可以拷贝函数

// 方式一 单层函数深拷贝
var deepCopyES6 = (obj) => ({...obj, ...JSON.parse(JSON.stringify(obj))})

var newstu = deepCopyES6(stu)
console.log(newstu)

stu.school.addr = "上海"
console.log(newstu)

// 方式二 递归实现
var deepCopy = function (src) {
  if(!(typeof src == "object")) {
    return 0
  }
  var dest = (src instanceof Array) ? [] : {};
  for(var attr in src) {
    if(typeof src[attr] == "object") {
      dest[attr] = deepCopy(src[attr])
    } else {
      dest[attr] = src[attr]
    }
  }
  return dest
}
// var newstu = deepCopy(stu)
// console.log( newstu )

// stu.school.addr = "上海"
// console.log( newstu )