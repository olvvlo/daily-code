function myInstanceof(target, origin) {
  const proto = target.__proto__
  if (proto) {
    if (origin.prototype === proto) {
      return true;
    } else {
      return myInstanceof(proto, origin)
    }
  } else {
    return false;
  }
}

var a = {}

function B () {
}

var b = new B()

console.log(myInstanceof(a, Object))
console.log(myInstanceof(b, B))
console.log(myInstanceof(a, B))