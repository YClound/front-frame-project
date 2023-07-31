// 所有的对象都是通过new 函数创建的，且所有的对象都是引用类型
// 所有的函数也都是对象，都是通过new Function创建的（可以称为函数对象）
// var Object = new Function()
// Function函数是JS内置的，不需要创建！
// Object的prototype的__protp__指向null
// Function的__protp__指向自身的prototype


// 构造函数 prototype
function Foo(name) {
  this.name = name;
  // this.sayHello = function () {
  //   console.log(`hello, ${this.name}`);
  // }
}

// 共享属性
Foo.prototype.age = 20;
Foo.prototype.sayHello = function () {
  console.log(`hello, ${this.name}`);
}

// 对象__proto__
let foo = new Foo('demoFoo');
let foo2 = new Foo('demoFoo2');

Foo.prototype.age = 18;

// foo.sayHello = function() {
//   console.log('hello')
// }

console.log(foo.name, foo.age, foo2.age, foo2.name, foo.__proto__);

console.log('foo.__proto__.__proto__ === Object.prototype: ', foo.__proto__.__proto__ === Object.prototype)

console.log('Foo.prototype.__proto__ === Object.prototype: ', Foo.prototype.__proto__ === Object.prototype)

console.log('Object === Object.prototype.constructor: ', Object === Object.prototype.constructor)



// 函数原型 - prototype(共享属性) - 所有的函数都有一个属性叫prototype，称之为函数原型
// 默认情况下，prototype是一个普通的object对象 
console.log('Foo.prototype:', Foo.prototype)
// 默认情况下，prototype中有一个属性叫constructor，它也是一个对象，它指向构造函数本身
console.log('Foo.prototype.constructor === Foo: ', Foo.prototype.constructor === Foo)

// 隐式原型__proto__ - 所有的对象都有一个属性叫__proto__，称之为隐式原型
var obj1 = {};
console.log('obj1.__proto__: ', obj1.__proto__)

// 默认情况下，__proto__指向创建该对象的函数的原型，即prototype
console.log('foo.__proto__ === Foo.prototype: ', foo.__proto__ === Foo.prototype)
console.log('obj1.__proto__ === Object.prototype: ', obj1.__proto__ === Object.prototype)

console.log('foo.sayHello === foo2.sayHello: ', foo.sayHello === foo2.sayHello)