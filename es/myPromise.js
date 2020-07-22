// 初始状态
const PENDING = "pending";
// 完成状态
const FULFILLED = "fulfilled";
// 失败状态
const REJECTED = "rejected";

// 异步执行方法封装
function asyncExecFun(fn) {
  setTimeout(() => fn(), 0);
}

// 执行promise resolve功能
function resolvePromise(promise, res, resolve, reject) {
  // 返回同一个promise
  if (promise === res) {
    reject(new TypeError("Chaining cycle detected for promise #<MyPromise>"));
    return;
  }
  // promise结果
  if (res instanceof MyPromise) {
    res.then(resolve, reject);
  } else {
    // 非promise结果
    resolve(res);
  }
}

/**
 * 1. 是个构造函数
 * 2. 传入一个可执行函数 函数的入参第一个为 fullFill函数 第二个为 reject函数；  函数立即执行，  参数函数异步执行
 * 3. 状态一旦更改就不可以变更  只能 pending => fulfilled 或者  pending => rejected
 * 4. then 的时候要处理入参的情况 successCallback 和failCallback 均可能为非函数
 *      默认的 failCallback 一定要将异常抛出， 这样下一个promise便可将其捕获 异常冒泡的目的
 * 5. then 中执行回调的时候要捕获异常 将其传给下一个promise
 *    如果promise状态未变更 则将回调方法添加到对应队列中
 *    如果promise状态已经变更 需要异步处理成功或者失败回调
 *    因为可能出现 回调结果和当前then返回的Promise一致 从而导致死循环问题
 * 6. catch只是then的一种特殊的写法 方便理解和使用
 * 7. finally 特点 1. 不过resolve或者reject都会执行
 *                2. 回调没有参数
 *                3. 返回一个Promise 且值可以穿透到下一个then或者catch
 * 8. Promise.resolve, Promise.reject 根据其参数返回对应的值 或者状态的Promise即可
 * 9. Proise.all 特点  1. 返回一个Promise
 *                    2. 入参是数组 resolve的情况下出参也是数组 且结果顺序和调用顺序一致
 *                    3. 所有的值或者promise都完成才能resolve 所有要计数
 *                    4. 只要有一个为reject 返回的Promise便reject
 * 10. Proise.race 特点 1. 返回一个Promise
 *                    2. 入参是数组 那么出参根据第一个成功或者失败的参数来确定
 *                    3. 只要有一个resolve 或者reject 便更改返回Promise的状态
 *
 *
 */

class MyPromise {
  status = PENDING;
  value = undefined;
  reason = undefined;
  successCallbacks = [];
  failCallbacks = [];
  constructor(exector) {
    // 立即执行传入参数
    // 参数直接写为 this.resolve  会导致函数内 this指向会发生改变
    // 异步执行状态变更
    // 捕获执行器的异常
    try {
        exector(
          (value) => asyncExecFun(() => this.resolve(value)),
          (reason) => asyncExecFun(() => this.reject(reason))
        );
    } catch (e) {
        this.reject(e)
    }
  }

  resolve(value) {
    // 如果状态已经变更则直接返回
    if (this.status !== PENDING) return;
    this.value = value;
    this.status = FULFILLED;
    // 执行所有成功回调
    while (this.successCallbacks.length) this.successCallbacks.shift()();
  }

  reject(reason) {
    // 如果状态已经变更则直接返回
    if (this.status !== PENDING) return;
    this.reason = reason;
    this.status = REJECTED;
    if(!this.failCallbacks.length){
        throw '(in MyPromise)'
    }
    // 执行所有失败回调
    while (this.failCallbacks.length) this.failCallbacks.shift()();
  }
  then(successCallback, failCallback) {
    // 成功函数处理 忽略函数之外的其他值
    successCallback =
      typeof successCallback == "function" ? successCallback : (v) => v;
    // 失败函数处理 忽略函数之外的其他值 抛出异常  实现catch冒泡的关键
    failCallback =
      typeof failCallback == "function"
        ? failCallback
        : (reason) => {
            throw reason;
          };

    let promise = new MyPromise((resolve, reject) => {
      // 统一异常处理逻辑
      const execFun = (fn, val) => {
        try {
          let res = fn(val);
          resolvePromise(promise, res, resolve, reject);
        } catch (e) {
          reject(e);
        }
      };
      // 执行成功回调
      const execSuccessCallback = () => execFun(successCallback, this.value);
      // 执行失败回调
      const execFailCallback = () => execFun(failCallback, this.reason);
      // 同步将对应成功或者失败回调事件加入对应回调队列
      if (this.status === PENDING) {
        // 将成功回调加入队列
        this.successCallbacks.push(execSuccessCallback);
        // 讲失败回调加入队列
        this.failCallbacks.push(execFailCallback);
        return;
      }
      // 延迟执行 可以将函数执行结果和当前then 返回的promise 进行比较
      asyncExecFun(() => {
        // 如果已经 fulfilled 可直接调用成功回调方法
        if (this.status === FULFILLED) {
          execSuccessCallback();
          // 如果已经 rejected 可直接调用失败回调方法
        } else if (this.status === REJECTED) {
          execFailCallback();
        }
      });
    });
    return promise;
  }

  catch(failCallback) {
    return this.then(undefined, failCallback);
  }

  finally(callback) {
    return this.then(
      // 穿透正常值
      (value) => MyPromise.resolve(callback()).then(() => value),
      (reason) =>
        MyPromise.resolve(callback()).then(() => {
          // 穿透异常信息
          throw reason;
        })
    );
  }

  static resolve(value) {
    // 如果是MyPromise 实例 则直接返回
    if (value instanceof MyPromise) return value;
    // 如果是MyPromise 实例 否则返回一个 MyPromise实例
    return new MyPromise((resolve) => resolve(value));
  }
  static reject(reason) {
    // 如果是MyPromise 实例 则直接返回
    if (reason instanceof MyPromise) return reason;
    // 如果是MyPromise 实例 否则返回一个 MyPromise实例
    return new MyPromise((resolve, reject) => reject(reason));
  }

  // all方法
  static all(array) {
    // 存储结果
    let result = [];
    // 存储数组长度
    let len = array.length;
    // 创建返回MyPromise
    let promise = new MyPromise((resolve, reject) => {
      // 定义当前MyPromise的索引
      let index = 0;
      // 添加数据的公用方法
      function addData(key, data) {
        // 赋值
        result[key] = data;
        // 索引递增
        index++;
        // 全部执行完则resolve
        if (index == len) {
          resolve(result);
        }
      }
      // 按顺序变量数组
      for (let i = 0; i < len; i++) {
        let curr = array[i];
        // 如果是MyPromise则 按其规则处理
        if (curr instanceof MyPromise) {
          curr.then((value) => addData(i, value), reject);
        } else {
          // 非MyPromise直接赋值
          addData(i, curr);
        }
      }
    });
    // 返回新的MyPromise实例
    return promise;
  }
  // 只要有一个成功或者失败就返回
  static race(array) {
    let promise = new MyPromise((resolve, reject) => {
      for (let i = 0; i < array.length; i++) {
        let curr = array[i];
        // MyPromise实例 结果处理
        if (curr instanceof MyPromise) {
          curr.then(resolve, reject);
        } else {
          // 非MyPromise实例处理
          resolve(curr);
        }
      }
    });
    return promise;
  }
}

module.exports = MyPromise;