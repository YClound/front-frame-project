// 执行栈 后进先出（LIFO）的结构

function func() {
  if (true) {
    let t = 3;
  }
  // console.log(t); // 报错 "Uncaught ReferenceError: t is not defined"
}

func();

// var与let的经典案例
// 1） 用var定义i变量，循环后打印i的值
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function() {
    console.log(i);
  };
}
a[0]();  // 10

// 2） 用let定义i变量，循环后打印i的值
for (let i = 0; i < 10; i++) {
  a[i] = function() {
    console.log(i);
  };
}

a[0](); // 0

// let的实现
var l = [];
var _loop = function _loop(i) {
  l[i] = function () {
    console.log('let闭包实现', i);
  }
}

for (var i = 0; i < 10; i++) {
  _loop(i)
}
l[0]();