var o = {}
var temp
Object.defineProperty(o, "a", {
  get : function(){
    console.log('a = ' + (temp + 1))
    return ++temp
  },
  set : function(newValue){
    temp = newValue
  },
  enumerable : true,
  configurable : true
})
o.a = 0
if(o.a === 1 && o.a === 2 && o.a === 3 && o.a === 4) console.log('success')
// o 换成 window 可在浏览器环境下实现