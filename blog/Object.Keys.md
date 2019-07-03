# 记一次移动端对象遍历的问题 Object.keys()

## 背景

排查一次移动端手机上的 bug ,Andorid 端是没问题的，iOS 端是出现问题的，最后定位的问题是 Object.keys() 遍历对象取 key 来匹配的问题。

本来是知道 Object.keys 是不保证顺序的, 解决了此问题，但是结果 Android 端的解析和 iOS 端的解析竟然不一样，奇怪？

## Object.keys()

Object.keys() 是不保证遍历顺序的，遍历规则如下：

Object.keys 在内部会根据属性名key的类型进行不同的排序逻辑

分三种情况：

- 如果属性名的类型是 Number ，那么 Object.keys 返回值是按照 key 从小到大排序
- 如果属性名的类型是 String ，那么 Object.keys 返回值是按照属性被创建的时间升序排序。
- 如果属性名的类型是 Symbol ，那么逻辑同 String 相同

> Object.keys被调用时，背后发生了什么，参考: [5分钟彻底理解Object.keys](https://zhuanlan.zhihu.com/p/40601459)
>
> 参考: [MDN Object.keys()
](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

## Android 端 和 iOS 端解析不一样的问题

两个端的内核浏览器的 JavaScript 解析引擎遵循的 ECMA 规范不同

SO ... 

以后对于对象的遍历方式要慎重，可以优先搞成可控的数组类型在遍历取值

> 参考: [js能够保证object属性的输出顺序吗？](http://jartto.wang/2016/10/25/does-js-guarantee-object-property-order/)
