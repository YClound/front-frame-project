## 2023-03-29
### 1. navigator.mediaDevices
> 可以用来获取摄像头、麦克风、屏幕等。
* getDisplayMedia-可以用来录制屏幕，截图;
* getUserMedia-可以获取摄像头、麦克风的输入;

## 2018-11-19
* 回文字符串：一个正读和反读都一样的字符串

```` 
// 判断是否是回文字符串
function run(input) {
  if (typeof input !== 'string') return false;
  return input.split('').reverse().join('') === input;
}
````

* 两种以上方式实现已知或者未知宽度的垂直水平居中: 绝对定位、flex布局、table布局
* js计算失精

````
console.log(0.1 + 0.2 == 0.3)  // false
````

* 原型链的操作

````
const a = [1, 2, 3, 4, 5];

// Array 添加原型链函数
Array.prototype.multiply = function() {
  let newArray = this;
  let me = this;
  newArray.forEach(function(element) {
    me.push(element * element);
  })
  return me;
}

a.multiply();

console.log(a)  // [1, 2, 3, 4, 5, 1, 4, 9, 16, 25];
````

1. 原型链继承
* hasOwnProperty 是 JavaScript中处理属性并且不会遍历原型链的方法之一。(另一种方法: Object.keys())
* isPrototypeOf 检查一个对象是否是另一个对象的原型

````
var fun = function() {
  this.a = 1;
  this.b = 2;
}

var test = new fun();

fun.prototype.c = 3;
fun.prototype.b = 4;

// 原型链判断
console.log(fun.prototype.isPrototypeOf(test), test.__proto__, test.b) // true, [object Object] {b: 4,c: 3}, 2

// 是否属于对象本身的属性
console.log('hasOwnProperty：', test.hasOwnProperty('c')) // hasOwnProperty：false
````

* Promise
    1. Promise.all()
    2. promise.rece()
    3. promise.reject()
    4. promise.resolve()

````
// 定义promise函数
var promise3;
var promise1 = new Promise(function(resolve, reject) {
  console.log('1111111111')
  // 成功回调
  resolve('promise10000')
})

var promise2 = new Promise(function(resolve, reject) {
  console.log('333333')
   // 成功回调
  resolve('promise200000')
})

// promise.then
promise1.then(function(value) {
  console.log(value, '3333333333')
  promise3 = new Promise(function(resolve, reject) {
    setTimeout(function() {
       // 成功回调
      resolve('promise3')
    }, 1000)
  })
  return promise3
}).then(function(value){
  console.log(value, '444444444')
  return 'promiseAll'
}).catch(function(error){
  // 捕获错误信息
  console.log(error)
  return 'error'
}).finally(function(value){
  // 回调成功/失败都会执行
  console.log(value, 'finally')
})

console.log('22222222222', Promise.length)

// promise.all
Promise.all([promise1, promise2]).then(function(value){
  console.log(value, '5555555555')
})

// 打印顺序
// "1111111111"
// "333333"
// "22222222222", 1
// "promise10000", "3333333333"
// ["promise10000", "promise200000"]
// "5555555555"
// "promise3", "444444444"
// undefined, "finally"
````

* Generator(生成器对象是由一个 generator function 返回的,并且它符合可迭代协议和迭代器协议。)

* Await/Async （同步/异步）
* Await 
    1. 语法 [return_value] = await expression;（返回 Promise 对象的处理结果。如果等待的不是 Promise 对象，则返回该值本身）

````
// Promise函数
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    // 延迟两秒触发
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function test() {
  console.log('111111111')
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
test();

// 抛出错误
async function test2() {
  try {
    var z = await Promise.reject(30);
  } catch (e) {
    console.log(e); // 30
  }
}
test2();

// 111111111
// 30
// 10
````

# 抽象语法树（AST）
* javascript Parser（esprima、traceur、acorn、shift） - 将js源码转换成AST的解析器

# babel - js编译器
1. **「Parse(解析)」** 将源代码转换成更加抽象的表示方法（例如抽象语法树）
1. **「Transform(转换)」** 对（抽象语法树）做一些特殊处理，让它符合编译器的期望
1. **「Generate(代码生成)」** 将第二步经过转换过的（抽象语法树）生成新的代码
