// https://juejin.cn/post/6844904083707396109
// "use strict"; 
// 严格模式
var a = 10;
var d = 1;
var e = 3;
var display = 2;
var defaultBindings = function () {
  console.warn('--------默认绑定---------');
  console.warn('--------严格模式下 this题目1---------')
  // 注意：开启了严格模式，只是使得函数内的this指向undefined，它并不会改变全局中this的指向

  function foo() {
    console.log('foo函数内部this: ', this);
    console.log('window.a: ', window.a);
    // console.log('this.a: ', this.a);
  }
  console.log('global this:', this);
  foo();

  // 非严格模式下 如果把 var 改成了 let 或 const，变量是不会被绑定到window上的
  console.warn('--------非严格模式下 this题目2---------')
  let c = 10
  const b = 20
  function foo1() {
    console.log('this.c:', this.c)  // undefined
    console.log('this.b', this.b)  // undefined
  }
  foo1();
  console.log('window.c:', window.c) // undefined


  // foo2()函数内的this指向的是window，因为是window调用的foo，打印出的this.a是window下的a
  console.warn('--------this题目3-------')

  function foo2() {
    var d = 2
    console.log('this:', this)  // window
    console.log('this.d:', this.d) // 1

    function inner() {
      console.log('inner函数 this.d:', this.d) // 1
    }
    inner()
  }
  foo2();
}



var implicitBindings = function () {
  console.warn('--------隐式绑定-------');
  // 对于setTimeout中的函数，这里存在隐式绑定的this丢失，也就是当我们将函数作为参数传递时,会被隐式赋值，回调函数丢失this绑定，因此这时候setTimeout中函数内的this是指向window
  console.warn('--------this题目4-------');
  var obj2 = {
    e: 2,
    foo: function () {
      console.log('this.e:', this.e);
    },
    foo1: function () {
      setTimeout(function () {
        console.warn('------setTimeout函数this---------')
        console.log('this:', this); // window
        console.log('this.e:', this.e); // 3
      }, 0)

      setTimeout(() => {
        console.warn('-------setTimeout箭头函数this-------');
        console.log('setTimeout箭头函数this:', this); // obj2
        console.log('setTimeout箭头函数this.e:', this.e); // 2
      }, 0)
    }
  }
  obj2.foo();
  obj2.foo1();

  //如果你把一个函数当成参数传递到另一个函数的时候，也会发生隐式丢失的问题，且与包裹着它的函数的this指向无关。在非严格模式下，会把该函数的this绑定到window上，严格模式下绑定到undefined。
  function foo3() {
    console.log('foo3 this.e:', this.e);
  }
  function doFoo(fn) {
    console.log('doFoo this.e:', this.e)
    fn();
  }
  var obj3 = { e: 5, foo3 };
  var obj4 = { e: 4, doFoo };
  obj4.doFoo(obj3.foo3);
}



var displayBindings = function () {
  console.warn('---------显示绑定------------');
  function foo(args, args1) {
    console.log('this.display:', this.display, args, args1, arguments)
  }
  var obj = { display: 1 };

  foo();

  foo.call(obj, 'call', 'call2');
  foo.apply(obj, ['applay', 'applay2']);
  foo.bind(obj, 'bind', 'bind2')();

  // call、apply、bind接收到的第一个参数是空或者null、undefined的话，则会忽略这个参数。
  console.warn('------call、apply、bind接收到的第一个参数是空或者null、undefined的话，则会忽略这个参数。-------');
  foo.call(null, 'call', 'call2');
  foo.apply(undefined);
  foo.bind(undefined)();


  var obj1 = {
    display: 1,
    foo: function (b) {
      b = b || this.display
      return function (c) {
        console.log('this.display + b + c:', this.display + b + c)
      }
    }
  }
  var obj2 = { display: 3 }
  obj1.foo(a).call(obj2, 1) // 6
  obj1.foo.call(obj2)(1) // 6
}


var newName = 'window';
var newBindings = function () {

  function Person(name) {
    this.newName = name;
    this.foo1 = function () {
      console.log('Person this.foo1', this.newName)
    }

    this.foo2 = function () {
      console.log('Person this.foo2', this.newName)

      return function () {
        console.log('Person this.foo2 return', this.newName)
      }
    }
  }

  var person2 = {
    newName: 'person2',
    foo: function () {
      console.log('person2 this.foo', this.newName)

      return function () {
        console.log('person2 this.foo return', this.newName)
      }
    }
  }

  var person1 = new Person('gyn');
  var person3 = new Person('person2')
  person1.foo1();
  person1.foo2()();
  console.log('-----------------')
  person2.foo()();
  console.log('-----------------')
  person1.foo2.call(person3)() // person2
  person1.foo2().call(person3)
}

var arrowName = 'window';
var arrowBindings = function () {
  console.warn('------箭头函数绑定--------')
  // 这道题非常经典，它证明了箭头函数内的this是由外层作用域决定的
  console.warn('--------this题目5-------');
  var obj = {
    name1: 'obj',
    foo: () => {
      console.log('箭头函数this:', this);
      console.log('箭头函数this.name:', this.name1);
    },
    foo1: function () {
      console.log('foo1 this.name1:', this.name1);
      return () => {
        console.log('foo1箭头函数 this.name1:', this.name1);
      }
    },
    foo2: function () {
      return function () {
        console.log('foo2返回函数 this.name1:', this.name1);
      }
    }
  }
  var name1 = 'window';
  obj.foo();
  obj.foo1()();
  obj.foo2()();
  console.warn('---------------');

  var obj1 = {
    arrowName: 'obj1',
    foo1: () => {
      console.log(this.arrowName)
    },
    foo2: function () {
      console.log(this.arrowName)
      return () => {
        console.log(this.arrowName)
      }
    }
  }
  
  obj1.foo1()
  obj1.foo2()()
}



// defaultBindings(); // 默认绑定
// implicitBindings(); // 隐式绑定
// displayBindings(); // 显示绑定
// newBindings(); // 箭头函数绑定
arrowBindings(); // 箭头函数绑定
