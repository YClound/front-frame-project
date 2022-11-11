// 执行上下文
let a = 'Hello Word!';
function first() {
  console.log('Inside first function');
  second();
  console.log('Again inside first function');
}

function second() {
  console.log('Inside second function')
}

first();
console.log("inside Global Exection Context");

console.log("-------this 指向-------");
let foo = {
  baz: function () {
    console.log(this);
  }
}
foo.baz();

let bar = foo.baz;
bar();